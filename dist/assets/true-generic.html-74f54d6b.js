const a=JSON.parse('{"key":"v-3b06244a","path":"/basic-extra-meal/true-generic.html","title":"Java 泛型背后的秘密：为什么无法实现真正的泛型？","lang":"zh-CN","frontmatter":{"title":"Java 泛型背后的秘密：为什么无法实现真正的泛型？","shortTitle":"Java为什么无法实现真正的泛型","category":["Java核心"],"tag":["Java重要知识点"],"description":"Java 无法实现真正泛型的原因在于类型擦除，这种设计是为了兼容早期 Java 版本。本文详细探讨 Java 泛型的实现机制、类型擦除背后的原理，以及 Java 泛型在编程中的局限性。","author":"沉默王二","head":[["meta",{"name":"keywords","content":"Java, 泛型, 类型擦除"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/basic-extra-meal/true-generic.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java 泛型背后的秘密：为什么无法实现真正的泛型？"}],["meta",{"property":"og:description","content":"Java 无法实现真正泛型的原因在于类型擦除，这种设计是为了兼容早期 Java 版本。本文详细探讨 Java 泛型的实现机制、类型擦除背后的原理，以及 Java 泛型在编程中的局限性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java重要知识点"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 泛型背后的秘密：为什么无法实现真正的泛型？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[],"git":{"createdTime":1634887330000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":15},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":7.82,"words":2346},"filePathRelative":"basic-extra-meal/true-generic.md","localizedDate":"2021年10月22日","excerpt":"<h1> 12.7 Java为什么无法实现真正的泛型</h1>\\n<p>“二哥，为啥 Java 不能实现真正的泛型啊？”三妹开门见山地问。</p>\\n<p>简单来回顾一下<a href=\\"https://tobebetterjavaer.com/basic-extra-meal/generic.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">类型擦除</a>，看下面这段代码。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Cmower</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">method</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">&gt;</span></span> list<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Arraylist&lt;String&gt; list\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">method</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Date</span><span class=\\"token punctuation\\">&gt;</span></span> list<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Arraylist&lt;Date&gt; list\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{a as data};
