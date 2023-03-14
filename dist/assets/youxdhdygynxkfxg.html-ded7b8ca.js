const e=JSON.parse('{"key":"v-0124e617","path":"/nice-article/juejin/youxdhdygynxkfxg.html","title":"优秀的后端应该有哪些好的开发习惯？","lang":"zh-CN","frontmatter":{"title":"优秀的后端应该有哪些好的开发习惯？","shortTitle":"优秀的后端应该有哪些开发习惯？","description":"前言 毕业快三年了，前后也待过几家公司，碰到各种各样的同事。见识过各种各样的代码，优秀的、垃圾的、不堪入目的、看了想跑路的等等，所以这篇文章记录一下一个优秀的后端 Java 开发应该有哪些好的开发习惯","tag":["优质文章"],"author":"暮色妖娆丶","category":["掘金社区"],"head":[["meta",{"name":"keywords","content":"后端,Java,架构"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/juejin/youxdhdygynxkfxg.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"优秀的后端应该有哪些好的开发习惯？"}],["meta",{"property":"og:description","content":"前言 毕业快三年了，前后也待过几家公司，碰到各种各样的同事。见识过各种各样的代码，优秀的、垃圾的、不堪入目的、看了想跑路的等等，所以这篇文章记录一下一个优秀的后端 Java 开发应该有哪些好的开发习惯"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"暮色妖娆丶"}],["meta",{"property":"article:tag","content":"优质文章"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优秀的后端应该有哪些好的开发习惯？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"暮色妖娆丶\\"}]}"]]},"headers":[{"level":2,"title":"拆分目录结构","slug":"拆分目录结构","link":"#拆分目录结构","children":[]},{"level":2,"title":"封装方法形参","slug":"封装方法形参","link":"#封装方法形参","children":[]},{"level":2,"title":"封装业务逻辑","slug":"封装业务逻辑","link":"#封装业务逻辑","children":[]},{"level":2,"title":"判断集合类型不为空的正确方式","slug":"判断集合类型不为空的正确方式","link":"#判断集合类型不为空的正确方式","children":[]},{"level":2,"title":"集合类型返回值不要 return null","slug":"集合类型返回值不要-return-null","link":"#集合类型返回值不要-return-null","children":[]},{"level":2,"title":"映射数据库的属性尽量不要用基本类型","slug":"映射数据库的属性尽量不要用基本类型","link":"#映射数据库的属性尽量不要用基本类型","children":[]},{"level":2,"title":"封装判断条件","slug":"封装判断条件","link":"#封装判断条件","children":[]},{"level":2,"title":"控制方法复杂度","slug":"控制方法复杂度","link":"#控制方法复杂度","children":[]},{"level":2,"title":"使用 @ConfigurationProperties 代替 @Value","slug":"使用-configurationproperties-代替-value","link":"#使用-configurationproperties-代替-value","children":[]},{"level":2,"title":"推荐使用 lombok","slug":"推荐使用-lombok","link":"#推荐使用-lombok","children":[]},{"level":2,"title":"不要在 AService 调用 BMapper","slug":"不要在-aservice-调用-bmapper","link":"#不要在-aservice-调用-bmapper","children":[]},{"level":2,"title":"尽量少写工具类","slug":"尽量少写工具类","link":"#尽量少写工具类","children":[]},{"level":2,"title":"不要包裹 OpenFeign 接口返回值","slug":"不要包裹-openfeign-接口返回值","link":"#不要包裹-openfeign-接口返回值","children":[]},{"level":2,"title":"OpenFeign 接口不建议打成 jar","slug":"openfeign-接口不建议打成-jar","link":"#openfeign-接口不建议打成-jar","children":[]},{"level":2,"title":"写有意义的方法注释","slug":"写有意义的方法注释","link":"#写有意义的方法注释","children":[]},{"level":2,"title":"和前端交互的 DTO 对象命名","slug":"和前端交互的-dto-对象命名","link":"#和前端交互的-dto-对象命名","children":[]},{"level":2,"title":"不要跨服务循环访问数据库","slug":"不要跨服务循环访问数据库","link":"#不要跨服务循环访问数据库","children":[]},{"level":2,"title":"尽量别让 IDEA 报警","slug":"尽量别让-idea-报警","link":"#尽量别让-idea-报警","children":[]},{"level":2,"title":"尽可能使用新技术组件","slug":"尽可能使用新技术组件","link":"#尽可能使用新技术组件","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1666756358000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":13.13,"words":3940},"filePathRelative":"nice-article/juejin/youxdhdygynxkfxg.md","localizedDate":"2022年10月26日","excerpt":"<p>工作快12年了，前后待过几家公司，碰到各种各样的同事，见识过各种各样的代码，优秀的、垃圾的、不堪入目的、看了想跑路的等等，所以这篇文章记录一下一个优秀的后端 Java 开发应该有哪些好的开发习惯。</p>\\n<blockquote>\\n<p>希望能给各位工作党的球友一点点帮助，在校的学生党也可以提前感受一下。</p>\\n</blockquote>\\n<h2> 拆分目录结构</h2>\\n<p>受传统 MVC 模式的影响，以前的做法大多是几个固定的文件夹 <code>controller、service、mapper、entity</code>，然后无限制添加，到最后你就会发现一个 <code>service</code> 文件夹下面有几十上百个 Service 类，根本没法分清业务模块。</p>"}');export{e as data};
