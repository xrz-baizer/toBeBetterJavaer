const e=JSON.parse('{"key":"v-24ab1bdc","path":"/nice-article/weixin/rumrabbitmqzypjdg.html","title":"新来个技术总监，把RabbitMQ讲的那叫一个透彻，佩服！","lang":"zh-CN","frontmatter":{"title":"新来个技术总监，把RabbitMQ讲的那叫一个透彻，佩服！","shortTitle":"入门RabbitMQ，这一篇绝对够！","description":"从原理到实践，从0到1带你入门RabbitMQ，需要学习RabbitMQ的同学，欢迎来戳~~","author":"楼仔","category":["微信公众号"],"head":[["meta",{"name":"description","content":"从原理到实践，从0到1带你入门RabbitMQ，需要学习RabbitMQ的同学，欢迎来戳~~"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/rumrabbitmqzypjdg.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"新来个技术总监，把RabbitMQ讲的那叫一个透彻，佩服！"}],["meta",{"property":"og:description","content":"从原理到实践，从0到1带你入门RabbitMQ，需要学习RabbitMQ的同学，欢迎来戳~~"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"楼仔"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"新来个技术总监，把RabbitMQ讲的那叫一个透彻，佩服！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"楼仔\\"}]}"]]},"headers":[{"level":2,"title":"消息队列模式","slug":"消息队列模式","link":"#消息队列模式","children":[{"level":3,"title":"点对点模式","slug":"点对点模式","link":"#点对点模式","children":[]},{"level":3,"title":"发布/订阅模式","slug":"发布-订阅模式","link":"#发布-订阅模式","children":[]}]},{"level":2,"title":"衡量标准","slug":"衡量标准","link":"#衡量标准","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"系统架构","slug":"系统架构","link":"#系统架构","children":[]},{"level":2,"title":"常用交换器","slug":"常用交换器","link":"#常用交换器","children":[]},{"level":2,"title":"消费原理","slug":"消费原理","link":"#消费原理","children":[]},{"level":2,"title":"高级特性","slug":"高级特性","link":"#高级特性","children":[{"level":3,"title":"过期时间","slug":"过期时间","link":"#过期时间","children":[]},{"level":3,"title":"消息确认","slug":"消息确认","link":"#消息确认","children":[]},{"level":3,"title":"持久化","slug":"持久化","link":"#持久化","children":[]},{"level":3,"title":"死信队列","slug":"死信队列","link":"#死信队列","children":[]},{"level":3,"title":"延迟队列","slug":"延迟队列","link":"#延迟队列","children":[]}]},{"level":2,"title":"特性分析","slug":"特性分析","link":"#特性分析","children":[]},{"level":2,"title":"添加账号","slug":"添加账号","link":"#添加账号","children":[]},{"level":2,"title":"编码实测","slug":"编码实测","link":"#编码实测","children":[]},{"level":2,"title":"公共代码封装","slug":"公共代码封装","link":"#公共代码封装","children":[]},{"level":2,"title":"Direct 方式","slug":"direct-方式","link":"#direct-方式","children":[{"level":3,"title":"Direct 示例","slug":"direct-示例","link":"#direct-示例","children":[]},{"level":3,"title":"问题探讨","slug":"问题探讨","link":"#问题探讨","children":[]}]},{"level":2,"title":"Fanout 方式（指定队列）","slug":"fanout-方式-指定队列","link":"#fanout-方式-指定队列","children":[]},{"level":2,"title":"Fanout 方式（随机获取队列）","slug":"fanout-方式-随机获取队列","link":"#fanout-方式-随机获取队列","children":[]},{"level":2,"title":"Topic 方式","slug":"topic-方式","link":"#topic-方式","children":[]},{"level":2,"title":"durable 和 autoDeleted","slug":"durable-和-autodeleted","link":"#durable-和-autodeleted","children":[{"level":3,"title":"durable","slug":"durable","link":"#durable","children":[]},{"level":3,"title":"autoDeleted","slug":"autodeleted","link":"#autodeleted","children":[]},{"level":3,"title":"小节","slug":"小节","link":"#小节","children":[]}]},{"level":2,"title":"ACK","slug":"ack","link":"#ack","children":[]}],"git":{"createdTime":1656657266000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":28.6,"words":8581},"filePathRelative":"nice-article/weixin/rumrabbitmqzypjdg.md","localizedDate":"2022年7月1日","excerpt":"<blockquote>\\n<p><a href=\\"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">二哥编程知识星球</a> （戳链接加入）正式上线了，来和 <strong>310 多名</strong> 小伙伴一起打怪升级吧！这是一个 Java 学习指南 + 编程实战的私密圈子，你可以向二哥提问、帮你制定学习计划、跟着二哥一起做实战项目，冲冲冲。<br><br>\\nJava程序员进阶之路网址：<a href=\\"https://tobebetterjavaer.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://tobebetterjavaer.com</a></p>\\n</blockquote>"}');export{e as data};
