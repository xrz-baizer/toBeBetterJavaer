const e=JSON.parse('{"key":"v-1d1b7cbe","path":"/nice-article/weixin/zhifbemsytrycatchbhychyxxnmdbfrdkdc.html","title":"支付宝二面：使用 try-catch 捕获异常会影响性能吗？大部分人都会答错！","lang":"zh-CN","frontmatter":{"title":"支付宝二面：使用 try-catch 捕获异常会影响性能吗？大部分人都会答错！","shortTitle":"支付宝二面：使用 try-catch 捕获异常会影响性能吗？大部分人都会答错！","description":"扯什么 try-catch 性能问题？","author":"是yes呀","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/zhifbemsytrycatchbhychyxxnmdbfrdkdc.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"支付宝二面：使用 try-catch 捕获异常会影响性能吗？大部分人都会答错！"}],["meta",{"property":"og:description","content":"扯什么 try-catch 性能问题？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-14T06:42:12.000Z"}],["meta",{"property":"article:author","content":"是yes呀"}],["meta",{"property":"article:modified_time","content":"2023-03-14T06:42:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支付宝二面：使用 try-catch 捕获异常会影响性能吗？大部分人都会答错！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-14T06:42:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"是yes呀\\"}]}"]]},"headers":[{"level":2,"title":"推荐阅读","slug":"推荐阅读","link":"#推荐阅读","children":[]}],"git":{"createdTime":1678776132000,"updatedTime":1678776132000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":6.28,"words":1883},"filePathRelative":"nice-article/weixin/zhifbemsytrycatchbhychyxxnmdbfrdkdc.md","localizedDate":"2023年3月14日","excerpt":"<p>“二哥，你看着这鬼代码，竟然在 for 循环里面搞了个 <code>try-catch</code>，不知道<code>try-catch</code>有性能损耗吗？” 老王煞有其事地指着屏幕里的代码：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code> for (int i = 0; i &lt; 5000; i++) {\\n     try {\\n         dosth\\n     } catch (Exception e) {\\n         e.printStackTrace();\\n     }\\n }\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
