import{_ as t,W as p,X as o,Y as n,a0 as s,Z as e,a1 as c,C as l}from"./framework-bb7be5cb.js";const i={},u=c(`<h1 id="java并发aqs详解" tabindex="-1"><a class="header-anchor" href="#java并发aqs详解" aria-hidden="true">#</a> Java并发AQS详解</h1><h2 id="aqs简介" tabindex="-1"><a class="header-anchor" href="#aqs简介" aria-hidden="true">#</a> AQS简介</h2><p><strong>AQS</strong>是<code>AbstractQueuedSynchronizer</code>的简称，即<code>抽象队列同步器</code>，从字面意思上理解:</p><ul><li>抽象：抽象类，只实现一些主要逻辑，有些方法由子类实现；</li><li>队列：使用先进先出（FIFO）队列存储数据；</li><li>同步：实现了同步的功能。</li></ul><p>那AQS有什么用呢？AQS是一个用来构建锁和同步器的框架，使用AQS能简单且高效地构造出应用广泛的同步器，比如我们提到的ReentrantLock，Semaphore，ReentrantReadWriteLock，SynchronousQueue，FutureTask等等皆是基于AQS的。</p><p>当然，我们自己也能利用AQS非常轻松容易地构造出符合我们自己需求的同步器，只要子类实现它的几个<code>protected</code>方法就可以了，在下文会有详细的介绍。</p><h2 id="aqs的数据结构" tabindex="-1"><a class="header-anchor" href="#aqs的数据结构" aria-hidden="true">#</a> AQS的数据结构</h2><p>AQS内部使用了一个volatile的变量state来作为资源的标识。同时定义了几个获取和改变state的protected方法，子类可以覆盖这些方法来实现自己的逻辑：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三种操作均是原子操作，其中compareAndSetState的实现依赖于Unsafe的compareAndSwapInt()方法。</p><p>而AQS类本身实现的是一些排队和阻塞的机制，比如具体线程等待队列的维护（如获取资源失败入队/唤醒出队等）。它内部使用了一个先进先出（FIFO）的双端队列，并使用了两个指针head和tail用于标识队列的头部和尾部。其数据结构如图：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/aqs-c294b5e3-69ef-49bb-ac56-f825894746ab.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但它并不是直接储存线程，而是储存拥有线程的Node节点。</p><h2 id="资源共享模式" tabindex="-1"><a class="header-anchor" href="#资源共享模式" aria-hidden="true">#</a> 资源共享模式</h2><p>资源有两种共享模式，或者说两种同步方式：</p><ul><li>独占模式（Exclusive）：资源是独占的，一次只能一个线程获取。如ReentrantLock。</li><li>共享模式（Share）：同时可以被多个线程获取，具体的资源个数可以通过参数指定。如Semaphore/CountDownLatch。</li></ul><p>一般情况下，子类只需要根据需求实现其中一种模式，当然也有同时实现两种模式的同步类，如<code>ReadWriteLock</code>。</p><p>AQS中关于这两种资源共享模式的定义源码（均在内部类Node中）。我们来看看Node的结构：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token comment">// 标记一个结点（对应的线程）在共享模式下等待</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Node</span> <span class="token constant">SHARED</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 标记一个结点（对应的线程）在独占模式下等待</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Node</span> <span class="token constant">EXCLUSIVE</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> 

    <span class="token comment">// waitStatus的值，表示该结点（对应的线程）已被取消</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">CANCELLED</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> 
    <span class="token comment">// waitStatus的值，表示后继结点（对应的线程）需要被唤醒</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SIGNAL</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// waitStatus的值，表示该结点（对应的线程）在等待某一条件</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">CONDITION</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">/*waitStatus的值，表示有资源可用，新head结点需要继续唤醒后继结点（共享模式下，多线程并发释放资源，而head唤醒其后继结点后，需要把多出来的资源留给后面的结点；设置新的head结点时，会继续唤醒其后继结点）*/</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PROPAGATE</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span>

    <span class="token comment">// 等待状态，取值范围，-3，-2，-1，0，1</span>
    <span class="token keyword">volatile</span> <span class="token keyword">int</span> waitStatus<span class="token punctuation">;</span>
    <span class="token keyword">volatile</span> <span class="token class-name">Node</span> prev<span class="token punctuation">;</span> <span class="token comment">// 前驱结点</span>
    <span class="token keyword">volatile</span> <span class="token class-name">Node</span> next<span class="token punctuation">;</span> <span class="token comment">// 后继结点</span>
    <span class="token keyword">volatile</span> <span class="token class-name">Thread</span> thread<span class="token punctuation">;</span> <span class="token comment">// 结点对应的线程</span>
    <span class="token class-name">Node</span> nextWaiter<span class="token punctuation">;</span> <span class="token comment">// 等待队列里下一个等待条件的结点</span>

    
    <span class="token comment">// 判断共享模式的方法</span>
    <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">isShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> nextWaiter <span class="token operator">==</span> <span class="token constant">SHARED</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">,</span> <span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// Used by addWaiter</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextWaiter <span class="token operator">=</span> mode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>thread <span class="token operator">=</span> thread<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 其它方法忽略，可以参考具体的源码</span>
<span class="token punctuation">}</span>

<span class="token comment">// AQS里面的addWaiter私有方法</span>
<span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用了Node的这个构造函数</span>
    <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 其它代码省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：通过Node我们可以实现两个队列，一是通过prev和next实现CLH队列(线程同步队列,双向队列)，二是nextWaiter实现Condition条件上的等待线程队列(单向队列)，这个Condition主要用在ReentrantLock类中。</p></blockquote><h2 id="aqs的主要方法源码解析" tabindex="-1"><a class="header-anchor" href="#aqs的主要方法源码解析" aria-hidden="true">#</a> AQS的主要方法源码解析</h2><p>AQS的设计是基于<strong>模板方法模式</strong>的，它有一些方法必须要子类去实现的，它们主要有：</p><ul><li><p>isHeldExclusively()：该线程是否正在独占资源。只有用到condition才需要去实现它。</p></li><li><p>tryAcquire(int)：独占方式。尝试获取资源，成功则返回true，失败则返回false。</p></li><li><p>tryRelease(int)：独占方式。尝试释放资源，成功则返回true，失败则返回false。</p></li><li><p>tryAcquireShared(int)：共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源。</p></li><li><p>tryReleaseShared(int)：共享方式。尝试释放资源，如果释放后允许唤醒后续等待结点返回true，否则返回false。</p></li></ul><p>这些方法虽然都是<code>protected</code>方法，但是它们并没有在AQS具体实现，而是直接抛出异常（这里不使用抽象方法的目的是：避免强迫子类中把所有的抽象方法都实现一遍，减少无用功，这样子类只需要实现自己关心的抽象方法即可，比如 Semaphore 只需要实现 tryAcquire 方法而不用实现其余不需要用到的模版方法）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而AQS实现了一系列主要的逻辑。下面我们从源码来分析一下获取和释放资源的主要逻辑：</p><h3 id="获取资源" tabindex="-1"><a class="header-anchor" href="#获取资源" aria-hidden="true">#</a> 获取资源</h3><p>获取资源的入口是acquire(int arg)方法。arg是要获取的资源的个数，在独占模式下始终为1。我们先来看看这个方法的逻辑：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token constant">EXCLUSIVE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先调用tryAcquire(arg)尝试去获取资源。前面提到了这个方法是在子类具体实现的。</p><p>如果获取资源失败，就通过addWaiter(Node.EXCLUSIVE)方法把这个线程插入到等待队列中。其中传入的参数代表要插入的Node是独占式的。这个方法的具体实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生成该线程对应的Node节点</span>
    <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将Node插入队列中</span>
    <span class="token class-name">Node</span> pred <span class="token operator">=</span> tail<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred<span class="token punctuation">;</span>
        <span class="token comment">// 使用CAS尝试，如果成功就返回</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pred<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
            <span class="token keyword">return</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果等待队列为空或者上述CAS失败，再自旋CAS插入</span>
    <span class="token function">enq</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 自旋CAS插入等待队列</span>
<span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">enq</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Must initialize</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetHead</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                tail <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>prev <span class="token operator">=</span> t<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                t<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
                <span class="token keyword">return</span> t<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上面的两个函数比较好理解，就是在队列的尾部插入新的Node节点，但是需要注意的是由于AQS中会存在多个线程同时争夺资源的情况，因此肯定会出现多个线程同时插入节点的操作，在这里是通过CAS自旋的方式保证了操作的线程安全性。</p></blockquote><p>OK，现在回到最开始的aquire(int arg)方法。现在通过addWaiter方法，已经把一个Node放到等待队列尾部了。而处于等待队列的结点是从头结点一个一个去获取资源的。具体的实现我们来看看acquireQueued方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> interrupted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 自旋</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 如果node的前驱结点p是head，表示node是第二个结点，就可以尝试去获取资源了</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head <span class="token operator">&amp;&amp;</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 拿到资源后，将head指向该结点。</span>
                <span class="token comment">// 所以head所指的结点，就是当前获取到资源的那个结点或null。</span>
                <span class="token function">setHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> 
                p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
                failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> interrupted<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 如果自己可以休息了，就进入waiting状态，直到被unpark()</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                interrupted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
            <span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里parkAndCheckInterrupt方法内部使用到了LockSupport.park(this)，顺便简单介绍一下park。</p><p>LockSupport类是Java 6 引入的一个类，提供了基本的线程同步原语。LockSupport实际上是调用了Unsafe类里的函数，归结到Unsafe里，只有两个函数：</p><ul><li>park(boolean isAbsolute, long time)：阻塞当前线程</li><li>unpark(Thread jthread)：使给定的线程停止阻塞</li></ul></blockquote><p>所以<strong>结点进入等待队列后，是调用park使它进入阻塞状态的。只有头结点的线程是处于活跃状态的</strong>。</p><p>当然，获取资源的方法除了acquire外，还有以下三个：</p><ul><li>acquireInterruptibly：申请可中断的资源（独占模式）</li><li>acquireShared：申请共享模式的资源</li><li>acquireSharedInterruptibly：申请可中断的资源（共享模式）</li></ul><blockquote><p>可中断的意思是，在线程中断时可能会抛出<code>InterruptedException</code></p></blockquote><p>总结起来的一个流程图：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/aqs-a0689bb2-9b18-419d-9617-6d292fbd439d.jpg" alt="acquire流程" tabindex="0" loading="lazy"><figcaption>acquire流程</figcaption></figure><h2 id="释放资源" tabindex="-1"><a class="header-anchor" href="#释放资源" aria-hidden="true">#</a> 释放资源</h2><p>释放资源相比于获取资源来说，会简单许多。在AQS中只有一小段实现。源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryRelease</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">.</span>waitStatus <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果状态是负数，尝试把它设置为0</span>
    <span class="token keyword">int</span> ws <span class="token operator">=</span> node<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 得到头结点的后继结点head.next</span>
    <span class="token class-name">Node</span> s <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 如果这个后继结点为空或者状态大于0</span>
    <span class="token comment">// 通过前面的定义我们知道，大于0只有一种可能，就是这个结点已被取消（只有 Node.CANCELLED(=1) 这一种状态大于0）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>waitStatus <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 从尾部开始倒着寻找第一个还未取消的节点（真正的后继者）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span> t <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">!=</span> node<span class="token punctuation">;</span> t <span class="token operator">=</span> t<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                s <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果后继结点不为空，</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,46),r=n("p",null,"编辑：沉默王二，内容大部分来源以下三个开源仓库：",-1),d={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},m=n("hr",null,null,-1),b={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},h={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),y=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function f(g,S){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[r,n("ul",null,[n("li",null,[n("a",d,[s("深入浅出 Java 多线程"),e(a)])]),n("li",null,[n("a",k,[s("并发编程知识总结"),e(a)])]),n("li",null,[n("a",v,[s("Java八股文"),e(a)])])])]),m,n("p",null,[s("GitHub 上标星 7600+ 的开源知识库《"),n("a",b,[s("二哥的 Java 进阶之路"),e(a)]),s("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),n("a",h,[s("太赞了，GitHub 上标星 7600+ 的 Java 教程"),e(a)])]),w,y])}const N=t(i,[["render",f],["__file","aqs.html.vue"]]);export{N as default};
