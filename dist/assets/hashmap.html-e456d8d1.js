const a=JSON.parse('{"key":"v-60be3e7a","path":"/collection/hashmap.html","title":"Java HashMap详解（附源码分析）","lang":"zh-CN","frontmatter":{"title":"Java HashMap详解（附源码分析）","shortTitle":"HashMap","category":["Java核心"],"tag":["集合框架（容器）"],"description":"Java程序员进阶之路，小白的零基础Java教程，Java HashMap详解","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,HashMap,java hashmap"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/collection/hashmap.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java HashMap详解（附源码分析）"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，Java HashMap详解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-14T03:18:54.000Z"}],["meta",{"property":"article:tag","content":"集合框架（容器）"}],["meta",{"property":"article:modified_time","content":"2023-03-14T03:18:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java HashMap详解（附源码分析）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-14T03:18:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、hash方法的原理","slug":"_01、hash方法的原理","link":"#_01、hash方法的原理","children":[]},{"level":3,"title":"02、HashMap的扩容机制","slug":"_02、hashmap的扩容机制","link":"#_02、hashmap的扩容机制","children":[]},{"level":3,"title":"03、加载因子为什么是0.75","slug":"_03、加载因子为什么是0-75","link":"#_03、加载因子为什么是0-75","children":[]},{"level":3,"title":"04、线程不安全","slug":"_04、线程不安全","link":"#_04、线程不安全","children":[]},{"level":3,"title":"05、总结","slug":"_05、总结","link":"#_05、总结","children":[]}],"git":{"createdTime":1647355350000,"updatedTime":1678763934000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":10},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":44.69,"words":13408},"filePathRelative":"collection/hashmap.md","localizedDate":"2022年3月15日","excerpt":"<h1> 6.9 HashMap</h1>\\n<p>这篇文章将通过源码的方式，详细透彻地讲清楚 Java 的 HashMap，包括 hash 方法的原理、HashMap 的扩容机制、HashMap的加载因子为什么是 0.75 而不是 0.6、0.8，以及 HashMap 为什么是线程不安全的，基本上 HashMap 的<a href=\\"https://tobebetterjavaer.com/interview/java-hashmap-13.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">常见面试题</a>，都会在这一篇文章里讲明白。</p>\\n<p>HashMap 是 Java 中常用的数据结构之一，用于存储键值对。在 HashMap 中，每个键都映射到一个唯一的值，可以通过键来快速访问对应的值。</p>"}');export{a as data};
