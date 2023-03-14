const e=JSON.parse('{"key":"v-513d04ba","path":"/nice-article/weixin/wzxxctes.html","title":"2 万字详解，吃透 ES！","lang":"zh-CN","frontmatter":{"title":"2 万字详解，吃透 ES！","shortTitle":"2 万字详解","category":["微信公众号"],"description":"球友们好，看到一篇 Elasticsearch 的分享，写的非常扎实和硬核，希望工作党的球友们能花一点时间去认真读一读，了解 Elasticsearch 是做什么的以及它的使用和基本原理。 一、生活中的数据 搜索引擎是对数据的检索，所以我们先从生活中的数据说起。我们生活中的数据总体分为两种： 结构化数据 非结构化数据 结构化数据： 也称作行数据，是由二维表结构来逻辑表达和实现的数据，严格地遵循数据格式与长度规范，主要通过关系型数据库进行存储和管理。指具有固定格式或有限长度的数据，如数据库，元数据等。","head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/wzxxctes.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"2 万字详解，吃透 ES！"}],["meta",{"property":"og:description","content":"球友们好，看到一篇 Elasticsearch 的分享，写的非常扎实和硬核，希望工作党的球友们能花一点时间去认真读一读，了解 Elasticsearch 是做什么的以及它的使用和基本原理。 一、生活中的数据 搜索引擎是对数据的检索，所以我们先从生活中的数据说起。我们生活中的数据总体分为两种： 结构化数据 非结构化数据 结构化数据： 也称作行数据，是由二维表结构来逻辑表达和实现的数据，严格地遵循数据格式与长度规范，主要通过关系型数据库进行存储和管理。指具有固定格式或有限长度的数据，如数据库，元数据等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2 万字详解，吃透 ES！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、生活中的数据","slug":"一、生活中的数据","link":"#一、生活中的数据","children":[]},{"level":2,"title":"二、先说说 Lucene","slug":"二、先说说-lucene","link":"#二、先说说-lucene","children":[]},{"level":2,"title":"三、ES 核心概念","slug":"三、es-核心概念","link":"#三、es-核心概念","children":[{"level":3,"title":"集群（Cluster）","slug":"集群-cluster","link":"#集群-cluster","children":[]},{"level":3,"title":"分片（Shards）","slug":"分片-shards","link":"#分片-shards","children":[]},{"level":3,"title":"副本（Replicas）","slug":"副本-replicas","link":"#副本-replicas","children":[]},{"level":3,"title":"映射（Mapping）","slug":"映射-mapping","link":"#映射-mapping","children":[]}]},{"level":2,"title":"四、ES 的基本使用","slug":"四、es-的基本使用","link":"#四、es-的基本使用","children":[{"level":3,"title":"安装使用","slug":"安装使用","link":"#安装使用","children":[]},{"level":3,"title":"集群健康状态","slug":"集群健康状态","link":"#集群健康状态","children":[]}]},{"level":2,"title":"五、ES 机制原理","slug":"五、es-机制原理","link":"#五、es-机制原理","children":[{"level":3,"title":"写索引原理","slug":"写索引原理","link":"#写索引原理","children":[]},{"level":3,"title":"存储原理","slug":"存储原理","link":"#存储原理","children":[]}]},{"level":2,"title":"六、ES 的性能优化","slug":"六、es-的性能优化","link":"#六、es-的性能优化","children":[{"level":3,"title":"存储设备","slug":"存储设备","link":"#存储设备","children":[]},{"level":3,"title":"内部索引优化","slug":"内部索引优化","link":"#内部索引优化","children":[]},{"level":3,"title":"调整配置参数","slug":"调整配置参数","link":"#调整配置参数","children":[]},{"level":3,"title":"JVM 调优","slug":"jvm-调优","link":"#jvm-调优","children":[]}]}],"git":{"createdTime":1655379237000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":39.62,"words":11886},"filePathRelative":"nice-article/weixin/wzxxctes.md","localizedDate":"2022年6月16日","excerpt":"<p>球友们好，看到一篇 Elasticsearch 的分享，写的非常扎实和硬核，希望工作党的球友们能花一点时间去认真读一读，了解 Elasticsearch 是做什么的以及它的使用和基本原理。</p>\\n<h2> 一、生活中的数据</h2>\\n<p>搜索引擎是对数据的检索，所以我们先从生活中的数据说起。我们生活中的数据总体分为两种：</p>\\n<ul>\\n<li>结构化数据</li>\\n<li>非结构化数据</li>\\n</ul>\\n<p><strong>结构化数据：</strong> 也称作行数据，是由二维表结构来逻辑表达和实现的数据，严格地遵循数据格式与长度规范，主要通过关系型数据库进行存储和管理。指具有固定格式或有限长度的数据，如数据库，元数据等。</p>","autoDesc":true}');export{e as data};
