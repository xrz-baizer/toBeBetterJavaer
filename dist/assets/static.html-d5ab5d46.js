import{_ as p,W as c,X as o,Y as n,a0 as s,Z as t,a1 as e,C as i}from"./framework-bb7be5cb.js";const l={},u=e(`<h1 id="_5-15-java-static关键字" tabindex="-1"><a class="header-anchor" href="#_5-15-java-static关键字" aria-hidden="true">#</a> 5.15 Java static关键字</h1><p>“哥，你牙龈肿痛轻点没？周一的《教妹学 Java》（二哥的Java进阶之路前身）你都没有更新，偷懒了呀！”三妹关心地问我。</p><p>“今天周四了，吃了三天的药，疼痛已经减轻不少，咱妈还给我打了电话，让我买点牛黄解毒片下下火。”我面带着微笑对三妹说，“学习可不能落下，今天我们来学 Java 中 <code>static</code> 关键字吧。”</p><p>“static 是 Java 中比较难以理解的一个关键字，也是各大公司的面试官最喜欢问到的一个知识点之一。”我喝了一口咖啡继续说道。</p><p>“既然是面试重点，那我可得好好学习下。”三妹连忙说。</p><p>“static 关键字的作用可以用一句话来描述：‘<strong>方便在没有创建对象的情况下进行调用</strong>，包括变量和方法’。也就是说，只要类被加载了，就可以通过类名进行访问。”我扶了扶沉重眼镜，继续说到，“static 可以用来修饰类的成员变量，以及成员方法。我们一个个来看。”</p><h3 id="_01、静态变量" tabindex="-1"><a class="header-anchor" href="#_01、静态变量" aria-hidden="true">#</a> 01、静态变量</h3><p>“如果在声明变量的时候使用了 static 关键字，那么这个变量就被称为静态变量。静态变量只在类加载的时候获取一次内存空间，这使得静态变量很节省内存空间。”家里的暖气有点足，我跑去开了一点窗户后继续说道。</p><p>“来考虑这样一个 Student 类。”话音刚落，我就在键盘上噼里啪啦一阵敲。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token class-name">String</span> school <span class="token operator">=</span> <span class="token string">&quot;郑州大学&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码敲完后，我对三妹说：“假设郑州大学录取了一万名新生，那么在创建一万个 Student 对象的时候，所有的字段（name、age 和 school）都会获取到一块内存。学生的姓名和年纪不尽相同，但都属于郑州大学，如果每创建一个对象，school 这个字段都要占用一块内存的话，就很浪费，对吧？三妹。”</p><p>“因此，最好将 school 这个字段设置为 static，这样就只会占用一块内存，而不是一万块。”</p><p>安静的房子里又响起了一阵噼里啪啦的键盘声。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> school <span class="token operator">=</span> <span class="token string">&quot;郑州大学&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“瞧，三妹。s1 和 s2 这两个引用变量存放在栈区（stack），沉默王二+18 这个对象和沉默王三+16 这个对象存放在堆区（heap），school 这个静态变量存放在静态区。”</p><p>“等等，哥，栈、堆、静态区？”三妹的脸上塞满了疑惑。</p>`,16),d={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},r=e(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“现在，是不是一下子就明白了？”看着这幅漂亮的手绘图，我心里有点小开心。</p><p>“哇，哥，惊艳了呀！”三妹也不忘拍马屁，给我了一个大大的赞。</p><p>“好了，三妹，我们来看下面这串代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Counter</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Counter</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Counter</span> c3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“我们创建一个成员变量 count，并且在构造函数中让它自增。因为成员变量会在创建对象的时候获取内存，因此每一个对象都会有一个 count 的副本， count 的值并不会随着对象的增多而递增。”</p><p>我在侃侃而谈，而三妹似乎有些不太明白。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“没关系，三妹，你先盲猜一下，这段代码输出的结果是什么？”</p><p>“按照你的逻辑，应该输出三个 1？是这样吗？”三妹眨眨眼，有点不太自信地回答。</p><p>“哎呀，不错哟。”</p><p>我在 IDEA 中点了一下运行按钮，程序跑了起来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
1
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“每创建一个 Counter 对象，count 的值就从 0 自增到 1。三妹，想一下，如果 count 是静态的呢？”</p><p>“我不知道啊。”</p><p>“嗯，来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticCounter</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token class-name">StaticCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StaticCounter</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticCounter</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticCounter</span> c3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“来看一下输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
2
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“简单解释一下哈，由于静态变量只会获取一次内存空间，所以任何对象对它的修改都会得到保留，所以每创建一个对象，count 的值就会加 1，所以最终的结果是 3，明白了吧？三妹。这就是静态变量和成员变量之间的差别。”</p><p>“另外，需要注意的是，由于静态变量属于一个类，所以不要通过对象引用来访问，而应该直接通过类名来访问，否则编译器会发出警告。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_02、静态方法" tabindex="-1"><a class="header-anchor" href="#_02、静态方法" aria-hidden="true">#</a> 02、静态方法</h3><p>“说完静态变量，我们来说静态方法。”说完，我准备点一支华子来抽，三妹阻止了我，她指一指烟盒上的「吸烟有害身体健康」，我笑了。</p><p>“好吧。”我只好喝了一口咖啡继续说，“如果方法上加了 static 关键字，那么它就是一个静态方法。”</p><p>“静态方法有以下这些特征。”</p><ul><li>静态方法属于这个类而不是这个类的对象；</li><li>调用静态方法的时候不需要创建这个类的对象；</li><li>静态方法可以访问静态变量。</li></ul><p>“来，继续上代码”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticMethodStudent</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> school <span class="token operator">=</span> <span class="token string">&quot;郑州大学&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">StaticMethodStudent</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        school <span class="token operator">=</span> <span class="token string">&quot;河南大学&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">void</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> school<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StaticMethodStudent</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">StaticMethodStudent</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticMethodStudent</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticMethodStudent</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticMethodStudent</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        s1<span class="token punctuation">.</span><span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span><span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“仔细听，三妹。<code>change()</code> 方法就是一个静态方法，所以它可以直接访问静态变量 school，把它的值更改为河南大学；并且，可以通过类名直接调用 <code>change()</code> 方法，就像 <code> StaticMethodStudent.change()</code> 这样。”</p><p>“来看一下程序的输出结果吧。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>沉默王二 18 河南大学
沉默王三 16 河南大学
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>“需要注意的是，静态方法不能访问非静态变量和调用非静态方法。你看，三妹，我稍微改动一下代码，编译器就会报错。”</p><p>“先是在静态方法中访问非静态变量，编译器不允许。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“然后在静态方法中访问非静态方法，编译器同样不允许。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“关于静态方法的使用，这下清楚了吧，三妹？”</p><p>看着三妹点点头，我欣慰地笑了。</p><p>“哥，我想到了一个问题，为什么 main 方法是静态的啊？”没想到，三妹串联知识点的功力还是不错的。</p><p>“如果 main 方法不是静态的，就意味着 Java 虚拟机在执行的时候需要先创建一个对象才能调用 main 方法，而 main 方法作为程序的入口，创建一个额外的对象显得非常多余。”我不假思索的回答令三妹感到非常的钦佩。</p><p>“java.lang.Math 类的几乎所有方法都是静态的，可以直接通过类名来调用，不需要创建类的对象。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_03、静态代码块" tabindex="-1"><a class="header-anchor" href="#_03、静态代码块" aria-hidden="true">#</a> 03、静态代码块</h3><p>“三妹，站起来活动一下，我的脖子都有点僵硬了。”</p><p>我们一起走到窗户边，映入眼帘的是从天而降的雪花。三妹和我都高兴坏了，迫不及待地打开窗口，伸出手去触摸雪花的温度，那种稍纵即逝的冰凉，真的舒服极了。</p><p>“北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。。。。。。”三妹竟然情不自禁地朗诵起了《沁园春·雪》。</p><p>确实令人欣喜，这是 2020 年洛阳的第一场雪，的确令人感到开心。</p><p>片刻之后。</p><p>“除了静态变量和静态方法，static 关键字还有一个重要的作用。”我心情愉悦地对三妹说，“用一个 static 关键字，外加一个大括号括起来的代码被称为静态代码块。”</p><p>“就像下面这串代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticBlock</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;静态代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;main 方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“静态代码块通常用来初始化一些静态变量，它会优先于 <code>main()</code> 方法执行。”</p><p>“来看一下程序的输出结果吧。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>静态代码块
main 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>“二哥，既然静态代码块先于 <code>main()</code> 方法执行，那没有 <code>main()</code> 方法的 Java 类能执行成功吗？”三妹的脑回路越来越令我敬佩了。</p><p>“Java 1.6 是可以的，但 Java 7 开始就无法执行了。”我胸有成竹地回答到。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticBlockNoMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;静态代码块，没有 main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“在命令行中执行 <code>java StaticBlockNoMain</code> 的时候，会抛出 NoClassDefFoundError 的错误。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“三妹，来看下面这个例子。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticBlockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> writes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        writes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        writes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王六&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第二块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“writes 是一个静态的 ArrayList，所以不太可能在声明的时候完成初始化，因此需要在静态代码块中完成初始化。”</p><p>“静态代码块在初始集合的时候，真的非常有用。在实际的项目开发中，通常使用静态代码块来加载配置文件到内存当中。”</p><h3 id="_04、静态内部类" tabindex="-1"><a class="header-anchor" href="#_04、静态内部类" aria-hidden="true">#</a> 04、静态内部类</h3><p>“三妹啊，除了以上只写，static 还有一个不太常用的功能——静态内部类。”</p><p>“Java 允许我们在一个类中声明一个内部类，它提供了一种令人信服的方式，允许我们只在一个地方使用一些变量，使代码更具有条理性和可读性。”</p><p>“常见的内部类有四种，成员内部类、局部内部类、匿名内部类和静态内部类，限于篇幅原因，前三种不在我们本次的讨论范围之内，以后有机会再细说。”</p><p>“来看下面这个例子。”三妹有点走神，我敲了敲她的脑袋后继续说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“三妹，打起精神，马上就结束了。”</p><p>“哦哦，这段代码看起来很别致啊，哥。”</p><p>“是的，三妹，这段代码在以后创建单例的时候还会见到。”</p><p>“第一次加载 Singleton 类时并不会初始化 instance，只有第一次调用 <code>getInstance()</code> 方法时 Java 虚拟机才开始加载 SingletonHolder 并初始化 instance，这样不仅能确保线程安全，也能保证 Singleton 类的唯一性。不过，创建单例更优雅的一种方式是使用枚举，以后再讲给你听。”</p><p>“需要注意的是。第一，静态内部类不能访问外部类的所有成员变量；第二，静态内部类可以访问外部类的所有静态变量，包括私有静态变量。第三，外部类不能声明为 static。”</p><p>“三妹，你看，在 Singleton 类上加 static 后，编译器就提示错误了。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/19-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>三妹点了点头，所有所思。</p><hr>`,79),k={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),b=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function g(w,y){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("“哦哦，别担心，三妹，画幅图你就全明白了。”说完我就打开 "),n("a",d,[s("draw.io"),t(a)]),s(" 这个网址，认真地画起了图。")]),r,n("p",null,[s("GitHub 上标星 7600+ 的开源知识库《"),n("a",k,[s("二哥的 Java 进阶之路"),t(a)]),s("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),n("a",v,[s("太赞了，GitHub 上标星 7600+ 的 Java 教程"),t(a)])]),m,b])}const f=p(l,[["render",g],["__file","static.html.vue"]]);export{f as default};
