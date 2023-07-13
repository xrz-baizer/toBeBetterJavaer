import{_ as t,W as p,X as o,Y as n,a0 as s,Z as e,a1 as c,C as l}from"./framework-bb7be5cb.js";const i={},u=c(`<h2 id="原子操作类介绍" tabindex="-1"><a class="header-anchor" href="#原子操作类介绍" aria-hidden="true">#</a> 原子操作类介绍</h2><p>在并发编程中很容易出现并发安全的问题，有一个很简单的例子就是多线程更新变量i=1,比如多个线程执行i++操作，就有可能获取不到正确的值，而这个问题，最常用的方法是通过Synchronized进行控制来达到线程安全的目的。</p><p>但是由于synchronized是采用的是悲观锁策略，并不是特别高效的一种解决方案。实际上，在J.U.C下的atomic包提供了一系列的操作简单，性能高效，并能保证线程安全的类去更新基本类型变量，数组元素，引用类型以及更新对象中的字段类型。atomic包下的这些类都是采用的是乐观锁策略去原子更新数据，在java中则是使用CAS操作具体实现。</p><h2 id="预备知识-cas操作" tabindex="-1"><a class="header-anchor" href="#预备知识-cas操作" aria-hidden="true">#</a> 预备知识--CAS操作</h2><p>能够弄懂atomic包下这些原子操作类的实现原理，就要先明白什么是CAS操作。</p><blockquote><p>什么是CAS?</p></blockquote><p>使用锁时，线程获取锁是一种悲观锁策略，即假设每一次执行临界区代码都会产生冲突，所以当前线程获取到锁的时候同时也会阻塞其他线程获取该锁。而CAS操作（又称为无锁操作）是一种乐观锁策略，它假设所有线程访问共享资源的时候不会出现冲突，既然不会出现冲突自然而然就不会阻塞其他线程的操作。因此，线程就不会出现阻塞停顿的状态。那么，如果出现冲突了怎么办？无锁操作是使用CAS(compare and swap)又叫做比较交换来鉴别线程是否出现冲突，出现冲突就重试当前操作直到没有冲突为止。</p><blockquote><p>CAS的操作过程</p></blockquote><p>CAS比较交换的过程可以通俗的理解为CAS(V,O,N)，包含三个值分别为：V 内存地址存放的实际值；O 预期的值（旧值）；N 更新的新值。当V和O相同时，也就是说旧值和内存中实际的值相同表明该值没有被其他线程更改过，即该旧值O就是目前来说最新的值了，自然而然可以将新值N赋值给V。反之，V和O不相同，表明该值已经被其他线程改过了则该旧值O不是最新版本的值了，所以不能将新值N赋给V，返回V即可。当多个线程使用CAS操作一个变量是，只有一个线程会成功，并成功更新，其余会失败。失败的线程会重新尝试，当然也可以选择挂起线程</p><p>CAS的实现需要硬件指令集的支撑，在JDK1.5后虚拟机才可以使用处理器提供的CMPXCHG指令实现。</p><p><strong>Synchronized VS CAS</strong></p><p>元老级的Synchronized(未优化前)最主要的问题是：在存在线程竞争的情况下会出现线程阻塞和唤醒锁带来的性能问题，因为这是一种互斥同步（阻塞同步）。而CAS并不是武断的间线程挂起，当CAS操作失败后会进行一定的尝试，而非进行耗时的挂起唤醒的操作，因此也叫做非阻塞同步。这是两者主要的区别。</p><blockquote><p>CAS的问题</p></blockquote><ol><li><p>ABA问题 因为CAS会检查旧值有没有变化，这里存在这样一个有意思的问题。比如一个旧值A变为了成B，然后再变成A，刚好在做CAS时检查发现旧值并没有变化依然为A，但是实际上的确发生了变化。解决方案可以沿袭数据库中常用的乐观锁方式，添加一个版本号可以解决。原来的变化路径A-&gt;B-&gt;A就变成了1A-&gt;2B-&gt;3C。</p></li><li><p>自旋时间过长</p></li></ol><p>使用CAS时非阻塞同步，也就是说不会将线程挂起，会自旋（无非就是一个死循环）进行下一次尝试，如果这里自旋时间过长对性能是很大的消耗。如果JVM能支持处理器提供的pause指令，那么在效率上会有一定的提升。</p><h2 id="原子更新基本类型" tabindex="-1"><a class="header-anchor" href="#原子更新基本类型" aria-hidden="true">#</a> 原子更新基本类型</h2><p>atomic包提高原子更新基本类型的工具类，主要有这些：</p><ol><li>AtomicBoolean：以原子更新的方式更新boolean；</li><li>AtomicInteger：以原子更新的方式更新Integer;</li><li>AtomicLong：以原子更新的方式更新Long；</li></ol><p>这几个类的用法基本一致，这里以AtomicInteger为例总结常用的方法</p><ol><li>addAndGet(int delta) ：以原子方式将输入的数值与实例中原本的值相加，并返回最后的结果；</li><li>incrementAndGet() ：以原子的方式将实例中的原值进行加1操作，并返回最终相加后的结果；</li><li>getAndSet(int newValue)：将实例中的值更新为新值，并返回旧值；</li><li>getAndIncrement()：以原子的方式将实例中的原值加1，返回的是自增前的旧值；</li></ol><p>还有一些方法，可以查看API，不再赘述。为了能够弄懂AtomicInteger的实现原理，以getAndIncrement方法为例，来看下源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，该方法实际上是调用了unsafe实例的getAndAddInt方法，unsafe实例的获取时通过UnSafe类的静态方法getUnsafe获取：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unsafe类在sun.misc包下，Unsafer类提供了一些底层操作，atomic包下的原子操作类的也主要是通过Unsafe类提供的compareAndSwapInt，compareAndSwapLong等一系列提供CAS操作的方法来进行实现。下面用一个简单的例子来说明AtomicInteger的用法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

输出结果：
<span class="token number">1</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子很简单，就是新建了一个atomicInteger对象，而atomicInteger的构造方法也就是传入一个基本类型数据即可，对其进行了封装。对基本变量的操作比如自增，自减，相加，更新等操作，atomicInteger也提供了相应的方法进行这些操作。但是，因为atomicInteger借助了UnSafe提供的CAS操作能够保证数据更新的时候是线程安全的，并且由于CAS是采用乐观锁策略，因此，这种数据更新的方法也具有高效性。</p><p>AtomicLong的实现原理和AtomicInteger一致，只不过一个针对的是long变量，一个针对的是int变量。而boolean变量的更新类AtomicBoolean类是怎样实现更新的呢?核心方法是<code>compareAndSet</code>t方法，其源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> expect<span class="token punctuation">,</span> <span class="token keyword">boolean</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> e <span class="token operator">=</span> expect <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> u <span class="token operator">=</span> update <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> e<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，compareAndSet方法的实际上也是先转换成0,1的整型变量，然后是通过针对int型变量的原子更新方法compareAndSwapInt来实现的。可以看出atomic包中只提供了对boolean,int ,long这三种基本类型的原子更新的方法，参考对boolean更新的方式，原子更新char,doule,float也可以采用类似的思路进行实现。</p><h2 id="原子更新数组类型" tabindex="-1"><a class="header-anchor" href="#原子更新数组类型" aria-hidden="true">#</a> 原子更新数组类型</h2><p>atomic包下提供能原子更新数组中元素的类有：</p><ol><li>AtomicIntegerArray：原子更新整型数组中的元素；</li><li>AtomicLongArray：原子更新长整型数组中的元素；</li><li>AtomicReferenceArray：原子更新引用类型数组中的元素</li></ol><p>这几个类的用法一致，就以AtomicIntegerArray来总结下常用的方法：</p><ol><li>addAndGet(int i, int delta)：以原子更新的方式将数组中索引为i的元素与输入值相加；</li><li>getAndIncrement(int i)：以原子更新的方式将数组中索引为i的元素自增加1；</li><li>compareAndSet(int i, int expect, int update)：将数组中索引为i的位置的元素进行更新</li></ol><p>可以看出，AtomicIntegerArray与AtomicInteger的方法基本一致，只不过在AtomicIntegerArray的方法中会多一个指定数组索引位i。下面举一个简单的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>
    <span class="token comment">//    private static AtomicInteger atomicInteger = new AtomicInteger(1);</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicIntegerArray</span> integerArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicIntegerArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//对数组中索引为1的位置的元素加5</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> integerArray<span class="token punctuation">.</span><span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>integerArray<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
输出结果：
<span class="token number">7</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过getAndAdd方法将位置为1的元素加5，从结果可以看出索引为1的元素变成了7，该方法返回的也是相加之前的数为2。</p><h2 id="原子更新引用类型" tabindex="-1"><a class="header-anchor" href="#原子更新引用类型" aria-hidden="true">#</a> 原子更新引用类型</h2><p>如果需要原子更新引用类型变量的话，为了保证线程安全，atomic也提供了相关的类：</p><ol><li>AtomicReference：原子更新引用类型；</li><li>AtomicReferenceFieldUpdater：原子更新引用类型里的字段；</li><li>AtomicMarkableReference：原子更新带有标记位的引用类型；</li></ol><p>这几个类的使用方法也是基本一样的，以AtomicReference为例，来说明这些类的基本用法。下面是一个demo</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> reference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        reference<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> reference<span class="token punctuation">.</span><span class="token function">getAndSet</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>reference<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userName <span class="token operator">=</span> userName<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;userName=&#39;&quot;</span> <span class="token operator">+</span> userName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                    <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

输出结果：
<span class="token class-name">User</span><span class="token punctuation">{</span>userName<span class="token operator">=</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token class-name">User</span><span class="token punctuation">{</span>userName<span class="token operator">=</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先将对象User1用AtomicReference进行封装，然后调用getAndSet方法，从结果可以看出，该方法会原子更新引用的user对象，变为<code>User{userName=&#39;b&#39;, age=2}</code>，返回的是原来的user对象User<code>{userName=&#39;a&#39;, age=1}</code>。</p><h2 id="原子更新字段类型" tabindex="-1"><a class="header-anchor" href="#原子更新字段类型" aria-hidden="true">#</a> 原子更新字段类型</h2><p>如果需要更新对象的某个字段，并在多线程的情况下，能够保证线程安全，atomic同样也提供了相应的原子操作类：</p><ol><li>AtomicIntegeFieldUpdater：原子更新整型字段类；</li><li>AtomicLongFieldUpdater：原子更新长整型字段类；</li><li>AtomicStampedReference：原子更新引用类型，这种更新方式会带有版本号。而为什么在更新的时候会带有版本号，是为了解决CAS的ABA问题；</li></ol><p>要想使用原子更新字段需要两步操作：</p><ol><li>原子更新字段类都是抽象类，只能通过静态方法<code>newUpdater</code>来创建一个更新器，并且需要设置想要更新的类和属性；</li><li>更新类的属性必须使用<code>public volatile</code>进行修饰；</li></ol><p>这几个类提供的方法基本一致，以AtomicIntegerFieldUpdater为例来看看具体的使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicIntegerFieldUpdater</span> updater <span class="token operator">=</span> <span class="token class-name">AtomicIntegerFieldUpdater</span><span class="token punctuation">.</span><span class="token function">newUpdater</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> oldValue <span class="token operator">=</span> updater<span class="token punctuation">.</span><span class="token function">getAndAdd</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>updater<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userName <span class="token operator">=</span> userName<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;userName=&#39;&quot;</span> <span class="token operator">+</span> userName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                    <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

输出结果：
<span class="token number">1</span>
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从示例中可以看出，创建<code>AtomicIntegerFieldUpdater</code>是通过它提供的静态方法进行创建，<code>getAndAdd</code>方法会将指定的字段加上输入的值，并且返回相加之前的值。user对象中age字段原值为1，加5之后，可以看出user对象中的age字段的值已经变成了6。</p><hr>`,53),r=n("p",null,"编辑：沉默王二，内容大部分来源以下三个开源仓库：",-1),k={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},v=n("hr",null,null,-1),b={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},g={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),y=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function w(h,f){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[r,n("ul",null,[n("li",null,[n("a",k,[s("深入浅出 Java 多线程"),e(a)])]),n("li",null,[n("a",d,[s("并发编程知识总结"),e(a)])]),n("li",null,[n("a",m,[s("Java八股文"),e(a)])])])]),v,n("p",null,[s("GitHub 上标星 7600+ 的开源知识库《"),n("a",b,[s("二哥的 Java 进阶之路"),e(a)]),s("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),n("a",g,[s("太赞了，GitHub 上标星 7600+ 的 Java 教程"),e(a)])]),A,y])}const I=t(i,[["render",w],["__file","atomic.html.vue"]]);export{I as default};
