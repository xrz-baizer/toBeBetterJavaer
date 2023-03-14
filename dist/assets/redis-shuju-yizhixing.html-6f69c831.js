const e=JSON.parse('{"key":"v-1f354ebe","path":"/mysql/redis-shuju-yizhixing.html","title":"如何保障MySQL和Redis的数据一致性？","lang":"zh-CN","frontmatter":{"title":"如何保障MySQL和Redis的数据一致性？","shortTitle":"MySQL和Redis的数据一致性","category":["MySQL"],"tag":["MySQL"],"description":"整理：沉默王二，戳转载链接，作者：楼仔，戳原文链接。 如何保障 MySQL 和 Redis 的数据一致性？这个问题很早之前我就遇到过，但是一直没有仔细去研究，上个月看了极客的课程，有一篇文章专门有过讲解，刚好有粉丝也问我这个问题，所以感觉有必要单独出一篇。","head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/mysql/redis-shuju-yizhixing.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"如何保障MySQL和Redis的数据一致性？"}],["meta",{"property":"og:description","content":"整理：沉默王二，戳转载链接，作者：楼仔，戳原文链接。 如何保障 MySQL 和 Redis 的数据一致性？这个问题很早之前我就遇到过，但是一直没有仔细去研究，上个月看了极客的课程，有一篇文章专门有过讲解，刚好有粉丝也问我这个问题，所以感觉有必要单独出一篇。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T03:04:32.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-02-17T03:04:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何保障MySQL和Redis的数据一致性？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-17T03:04:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"不好的方案","slug":"不好的方案","link":"#不好的方案","children":[{"level":3,"title":"1. 先写 MySQL，再写 Redis","slug":"_1-先写-mysql-再写-redis","link":"#_1-先写-mysql-再写-redis","children":[]},{"level":3,"title":"2. 先写 Redis，再写 MySQL","slug":"_2-先写-redis-再写-mysql","link":"#_2-先写-redis-再写-mysql","children":[]},{"level":3,"title":"3. 先删除 Redis，再写 MySQL","slug":"_3-先删除-redis-再写-mysql","link":"#_3-先删除-redis-再写-mysql","children":[]}]},{"level":2,"title":"好的方案","slug":"好的方案","link":"#好的方案","children":[{"level":3,"title":"4. 先删除 Redis，再写 MySQL，再删除 Redis","slug":"_4-先删除-redis-再写-mysql-再删除-redis","link":"#_4-先删除-redis-再写-mysql-再删除-redis","children":[]},{"level":3,"title":"5. 先写 MySQL，再删除 Redis","slug":"_5-先写-mysql-再删除-redis","link":"#_5-先写-mysql-再删除-redis","children":[]},{"level":3,"title":"6. 先写 MySQL，通过 Binlog，异步更新 Redis","slug":"_6-先写-mysql-通过-binlog-异步更新-redis","link":"#_6-先写-mysql-通过-binlog-异步更新-redis","children":[]}]},{"level":2,"title":"几种方案比较","slug":"几种方案比较","link":"#几种方案比较","children":[]}],"git":{"createdTime":1653092056000,"updatedTime":1676603072000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2029},"filePathRelative":"mysql/redis-shuju-yizhixing.md","localizedDate":"2022年5月21日","excerpt":"<blockquote>\\n<p>整理：沉默王二，戳<a href=\\"https://mp.weixin.qq.com/s/RL4Bt_UkNcnsBGL_9w37Zg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">转载链接</a>，作者：楼仔，戳<a href=\\"https://mp.weixin.qq.com/s/l7v4s1VekIPNi7KZuUgwGQ\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原文链接</a>。</p>\\n</blockquote>\\n<p>如何保障 MySQL 和 Redis 的数据一致性？这个问题很早之前我就遇到过，但是一直没有仔细去研究，上个月看了极客的课程，有一篇文章专门有过讲解，刚好有粉丝也问我这个问题，所以感觉有必要单独出一篇。</p>","autoDesc":true}');export{e as data};
