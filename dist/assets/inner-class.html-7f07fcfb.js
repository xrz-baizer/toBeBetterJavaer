import{_ as t,W as o,X as c,Y as n,a0 as s,Z as e,a1 as p,C as l}from"./framework-bb7be5cb.js";const i={},u=p(`<h1 id="_5-12-java内部类" tabindex="-1"><a class="header-anchor" href="#_5-12-java内部类" aria-hidden="true">#</a> 5.12 Java内部类</h1><p>“在 Java 中，可以将一个类定义在另外一个类里面或者一个方法里面，这样的类叫做内部类。”我放下手中的枸杞杯，对三妹说，“一般来说，内部类分为成员内部类、局部内部类、匿名内部类和静态内部类。”</p><h3 id="_1-成员内部类" tabindex="-1"><a class="header-anchor" href="#_1-成员内部类" aria-hidden="true">#</a> <strong>1）成员内部类</strong></h3><p>成员内部类是最常见的内部类，看下面的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Wanger</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    
    <span class="token keyword">class</span> <span class="token class-name">Wangxiaoer</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">81</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来内部类 Wangxiaoer 就好像 Wanger 的一个成员，成员内部类可以无限制访问外部类的所有成员属性。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wanger</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">double</span> money <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">Wangxiaoer</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">81</span><span class="token punctuation">;</span>
        
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内部类可以随心所欲地访问外部类的成员，但外部类想要访问内部类的成员，就不那么容易了，必须先创建一个成员内部类的对象，再通过这个对象来访问：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wanger</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">double</span> money <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Wanger</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Wangxiaoer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Wangxiaoer</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">81</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也就意味着，如果想要在静态方法中访问成员内部类的时候，就必须先得创建一个外部类的对象，因为内部类是依附于外部类的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wanger</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">double</span> money <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Wanger</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Wangxiaoer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Wanger</span> wanger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wanger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Wangxiaoer</span> xiaoer <span class="token operator">=</span> wanger<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Wangxiaoer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xiaoer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Wangxiaoer</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">81</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种创建内部类的方式在实际开发中并不常用，因为内部类和外部类紧紧地绑定在一起，使用起来非常不便。</p><h3 id="_2-局部内部类" tabindex="-1"><a class="header-anchor" href="#_2-局部内部类" aria-hidden="true">#</a> <strong>2）局部内部类</strong></h3><p>局部内部类是定义在一个方法或者一个作用域里面的类，所以局部内部类的生命周期仅限于作用域内。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wangsan</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Wangsan</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">class</span> <span class="token class-name">Wangxiaosan</span> <span class="token keyword">extends</span> <span class="token class-name">Wangsan</span><span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Wangxiaosan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部内部类就好像一个局部变量一样，它是不能被权限修饰符修饰的，比如说 public、protected、private 和 static 等。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/inner-class-26fc0242-134a-4588-a52d-7da962fc3fb9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-匿名内部类" tabindex="-1"><a class="header-anchor" href="#_3-匿名内部类" aria-hidden="true">#</a> <strong>3）匿名内部类</strong></h3><p>匿名内部类是我们平常用得最多的，尤其是启动多线程的时候，会经常用到，并且 IDE 也会帮我们自动生成。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名内部类就好像一个方法的参数一样，用完就没了，以至于我们都不需要为它专门写一个构造方法，它的名字也是由系统自动命名的。仔细观察编译后的字节码文件也可以发现，匿名内部类连名字都不配拥有，哈哈，直接借用的外部类，然后 <code>$1</code> 就搞定了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/inner-class-c0b9bdf5-cb12-45fc-b362-cb14d5d44fdc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>匿名内部类是唯一一种没有构造方法的类。就上面的写法来说，匿名内部类也不允许我们为其编写构造方法，因为它就像是直接通过 new 关键字创建出来的一个对象。</p><p>匿名内部类的作用主要是用来继承其他类或者实现接口，并不需要增加额外的方法，方便对继承的方法进行实现或者重写。</p><h3 id="_4-静态内部类" tabindex="-1"><a class="header-anchor" href="#_4-静态内部类" aria-hidden="true">#</a> <strong>4）静态内部类</strong></h3>`,25),r={href:"https://tobebetterjavaer.com/oo/static.html",target:"_blank",rel:"noopener noreferrer"},k=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wangsi</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> money<span class="token punctuation">;</span>
    
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Wangxxiaosi</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">Wangxxiaosi</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 static 关键字的存在，静态内部类是不允许访问外部类中非 static 的变量和方法的，这一点也非常好理解：你一个静态的内部类访问我非静态的成员变量干嘛？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/inner-class-69523196-37fe-43c6-a52e-5a8c94fdd2d8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“为什么要使用内部类呢？”三妹问。</p><p>三妹这个问题问的非常妙，是时候引经据典了。</p><p>在《Think in java》中有这样一句话：</p><blockquote><p>使用内部类最吸引人的原因是：每个内部类都能独立地继承一个（接口的）实现，所以无论外围类是否已经继承了某个（接口的）实现，对于内部类都没有影响。</p></blockquote><p>在我们程序设计中有时候会存在一些使用接口很难解决的问题，这个时候我们可以利用内部类提供的、可以继承多个具体的或者抽象的类的能力来解决这些程序设计问题。可以这样说，接口只是解决了部分问题，而内部类使得多重继承的解决方案变得更加完整。</p><p>使用内部类还能够为我们带来如下特性：</p><ul><li>1、内部类可以使用多个实例，每个实例都有自己的状态信息，并且与其他外围对象的信息相互独立。</li><li>2、在单个外部类中，可以让多个内部类以不同的方式实现同一个接口，或者继承同一个类。</li><li>3、创建内部类对象的时刻并不依赖于外部类对象的创建。</li><li>4、内部类并没有令人迷惑的“is-a”关系，他就是一个独立的实体。</li><li>5、内部类提供了更好的封装，除了该外围类，其他类都不能访问。</li></ul>`,10),d={href:"https://www.cnblogs.com/dolphin0520/p/3811445.html",target:"_blank",rel:"noopener noreferrer"},v=n("hr",null,null,-1),m={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},b={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),y=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function w(h,f){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("静态内部类和成员内部类类似，只是多了一个 "),n("a",r,[s("static 关键字"),e(a)]),s("。")]),k,n("blockquote",null,[n("p",null,[s("参考链接："),n("a",d,[s("https://www.cnblogs.com/dolphin0520/p/3811445.html"),e(a)]),s("，作者：Matrix海 子，编辑：沉默王二")])]),v,n("p",null,[s("GitHub 上标星 7600+ 的开源知识库《"),n("a",m,[s("二哥的 Java 进阶之路"),e(a)]),s("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),n("a",b,[s("太赞了，GitHub 上标星 7600+ 的 Java 教程"),e(a)])]),g,y])}const x=t(i,[["render",w],["__file","inner-class.html.vue"]]);export{x as default};
