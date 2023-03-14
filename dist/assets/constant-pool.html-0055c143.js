const a=JSON.parse('{"key":"v-8d804d8e","path":"/string/constant-pool.html","title":"深入理解Java的字符串常量池","lang":"zh-CN","frontmatter":{"title":"深入理解Java的字符串常量池","shortTitle":"Java字符串常量池","category":["Java核心"],"tag":["数组&字符串"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，深入理解Java字符串常量池","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,java字符串,java String,java常量池,java字符串常量池,string常量池"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/string/constant-pool.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"深入理解Java的字符串常量池"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，深入理解Java字符串常量池"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-25T08:06:30.000Z"}],["meta",{"property":"article:tag","content":"数组&字符串"}],["meta",{"property":"article:modified_time","content":"2023-02-25T08:06:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解Java的字符串常量池\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-25T08:06:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"new String(\\"二哥\\")创建了几个对象","slug":"new-string-二哥-创建了几个对象","link":"#new-string-二哥-创建了几个对象","children":[]},{"level":3,"title":"字符串常量池的作用","slug":"字符串常量池的作用","link":"#字符串常量池的作用","children":[]},{"level":3,"title":"字符串常量池在内存中的什么位置呢？","slug":"字符串常量池在内存中的什么位置呢","link":"#字符串常量池在内存中的什么位置呢","children":[]},{"level":3,"title":"永久代、方法区、元空间","slug":"永久代、方法区、元空间","link":"#永久代、方法区、元空间","children":[]}],"git":{"createdTime":1622862648000,"updatedTime":1677312390000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":14},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":8.28,"words":2483},"filePathRelative":"string/constant-pool.md","localizedDate":"2021年6月5日","excerpt":"<h1> 4.5 深入理解Java的字符串常量池</h1>\\n<p>“三妹，今天我们来学习一下字符串常量池，这是字符串中非常关键的一个知识点。”我话音未落，青岛路小学那边传来了嘹亮的歌声就钻进了我的耳朵，“唱 ~ 山 ~ 歌 ~”，我都有点情不自禁地哼唱起来了。</p>\\n<p>三妹赶紧拦住我说，“好了，开始吧，哥。”</p>\\n<h3> new String(\\"二哥\\")创建了几个对象</h3>\\n<p>“先从这道面试题开始吧！”</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"二哥\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{a as data};
