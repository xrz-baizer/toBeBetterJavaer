const e=JSON.parse('{"key":"v-9fc9a5a2","path":"/thread/thread-state-and-method.html","title":"Java线程的6种状态及切换(透彻讲解)","lang":"zh-CN","frontmatter":{"title":"Java线程的6种状态及切换(透彻讲解)","shortTitle":"Java线程的6种状态","description":"本文详细解析了Java线程的6种状态 — 新建、运行、阻塞、等待、定时等待和终止，以及这些状态之间的切换过程。这些深入的洞见将帮助您更好地理解并管理Java多线程程序的行为。理解这些基础知识对于优化Java程序和避免并发问题至关重要。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,线程状态"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/thread-state-and-method.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java线程的6种状态及切换(透彻讲解)"}],["meta",{"property":"og:description","content":"本文详细解析了Java线程的6种状态 — 新建、运行、阻塞、等待、定时等待和终止，以及这些状态之间的切换过程。这些深入的洞见将帮助您更好地理解并管理Java多线程程序的行为。理解这些基础知识对于优化Java程序和避免并发问题至关重要。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-07T14:17:12.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-07-07T14:17:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java线程的6种状态及切换(透彻讲解)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-07T14:17:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"NEW","slug":"new","link":"#new","children":[]},{"level":3,"title":"RUNNABLE","slug":"runnable","link":"#runnable","children":[]},{"level":3,"title":"BLOCKED","slug":"blocked","link":"#blocked","children":[]},{"level":3,"title":"WAITING","slug":"waiting","link":"#waiting","children":[]},{"level":3,"title":"TIMED_WAITING","slug":"timed-waiting","link":"#timed-waiting","children":[]},{"level":3,"title":"TERMINATED","slug":"terminated","link":"#terminated","children":[]},{"level":2,"title":"线程状态的转换","slug":"线程状态的转换","link":"#线程状态的转换","children":[{"level":3,"title":"BLOCKED 与 RUNNABLE 状态的转换","slug":"blocked-与-runnable-状态的转换","link":"#blocked-与-runnable-状态的转换","children":[]},{"level":3,"title":"WAITING 状态与 RUNNABLE 状态的转换","slug":"waiting-状态与-runnable-状态的转换","link":"#waiting-状态与-runnable-状态的转换","children":[]},{"level":3,"title":"TIMED_WAITING 与 RUNNABLE 状态转换","slug":"timed-waiting-与-runnable-状态转换","link":"#timed-waiting-与-runnable-状态转换","children":[]},{"level":3,"title":"线程中断","slug":"线程中断","link":"#线程中断","children":[]}]}],"git":{"createdTime":1648037338000,"updatedTime":1688739432000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":11},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":14.35,"words":4306},"filePathRelative":"thread/thread-state-and-method.md","localizedDate":"2022年3月23日","excerpt":"<h1> 14.3 Java 线程的 6 种状态</h1>\\n<p>我们先来看看操作系统中的线程状态转换。在操作系统中，线程被视为轻量级的进程，所以<strong>操作系统的线程状态其实和操作系统的进程状态是一致的</strong>。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-state-and-method-f60caaad-ad47-4edc-8d0a-ab736c2e8500.png\\" alt=\\"系统进程/线程转换图\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>系统进程/线程转换图</figcaption></figure>"}');export{e as data};
