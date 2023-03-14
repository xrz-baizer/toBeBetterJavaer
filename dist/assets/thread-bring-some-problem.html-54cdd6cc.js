const e=JSON.parse('{"key":"v-1e8914e1","path":"/thread/thread-bring-some-problem.html","title":"并发编程带来了哪些问题？","lang":"zh-CN","frontmatter":{"title":"并发编程带来了哪些问题？","shortTitle":"并发编程带来了哪些问题？","description":"并发编程带来了哪些问题？","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/thread-bring-some-problem.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"并发编程带来了哪些问题？"}],["meta",{"property":"og:description","content":"并发编程带来了哪些问题？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发编程带来了哪些问题？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"线程安全问题","slug":"线程安全问题","link":"#线程安全问题","children":[]},{"level":2,"title":"活跃性问题","slug":"活跃性问题","link":"#活跃性问题","children":[]},{"level":2,"title":"性能问题","slug":"性能问题","link":"#性能问题","children":[]},{"level":2,"title":"有态度的总结","slug":"有态度的总结","link":"#有态度的总结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":7},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.92,"words":2975},"filePathRelative":"thread/thread-bring-some-problem.md","localizedDate":"2022年3月23日","excerpt":"<h1> 并发编程带来了哪些问题？</h1>\\n<p>多线程技术有这么多的好处，难道就没有一点缺点么，就在任何场景下就一定适用么？很显然不是。</p>\\n<p>在实际工作中，错误使用多线程非但不能提高效率还可能使程序崩溃。以在路上开车为例：</p>\\n<p>在一个单向行驶的道路上，每辆汽车都遵守交通规则，这时候整体通行是正常的。『单向车道』意味着『一个线程』，『多辆车』意味着『多个job任务』。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-c0a03b79-36d8-4120-888e-0597aa66ca5b.png\\" alt=\\"单线程顺利同行\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>单线程顺利同行</figcaption></figure>"}');export{e as data};
