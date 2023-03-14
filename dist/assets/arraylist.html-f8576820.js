const t=JSON.parse('{"key":"v-48818f7a","path":"/collection/arraylist.html","title":"Java ArrayList详解（附源码分析）","lang":"zh-CN","frontmatter":{"title":"Java ArrayList详解（附源码分析）","shortTitle":"ArrayList","category":["Java核心"],"tag":["集合框架（容器）"],"description":"Java程序员进阶之路，小白的零基础Java教程，Java ArrayList详解","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,ArrayList,ArrayList源码,java arraylist"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/collection/arraylist.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java ArrayList详解（附源码分析）"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，Java ArrayList详解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-13T04:44:35.000Z"}],["meta",{"property":"article:tag","content":"集合框架（容器）"}],["meta",{"property":"article:modified_time","content":"2023-03-13T04:44:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java ArrayList详解（附源码分析）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-13T04:44:35.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、创建 ArrayList","slug":"_01、创建-arraylist","link":"#_01、创建-arraylist","children":[]},{"level":3,"title":"02、向 ArrayList 中添加元素","slug":"_02、向-arraylist-中添加元素","link":"#_02、向-arraylist-中添加元素","children":[]},{"level":3,"title":"03、右移操作符","slug":"_03、右移操作符","link":"#_03、右移操作符","children":[]},{"level":3,"title":"04、向 ArrayList 的指定位置添加元素","slug":"_04、向-arraylist-的指定位置添加元素","link":"#_04、向-arraylist-的指定位置添加元素","children":[]},{"level":3,"title":"05、更新 ArrayList 中的元素","slug":"_05、更新-arraylist-中的元素","link":"#_05、更新-arraylist-中的元素","children":[]},{"level":3,"title":"06、删除 ArrayList 中的元素","slug":"_06、删除-arraylist-中的元素","link":"#_06、删除-arraylist-中的元素","children":[]},{"level":3,"title":"07、查找 ArrayList 中的元素","slug":"_07、查找-arraylist-中的元素","link":"#_07、查找-arraylist-中的元素","children":[]},{"level":3,"title":"08、二分查找法","slug":"_08、二分查找法","link":"#_08、二分查找法","children":[]},{"level":3,"title":"09、ArrayList增删改查时的时间复杂度","slug":"_09、arraylist增删改查时的时间复杂度","link":"#_09、arraylist增删改查时的时间复杂度","children":[]},{"level":3,"title":"10、总结","slug":"_10、总结","link":"#_10、总结","children":[]}],"git":{"createdTime":1630475140000,"updatedTime":1678682675000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":18.64,"words":5593},"filePathRelative":"collection/arraylist.md","localizedDate":"2021年9月1日","excerpt":"<h1> 6.3 ArrayList</h1>\\n<p>“二哥，听说今天我们开讲 ArrayList 了？好期待哦！”三妹明知故问，这个托配合得依然天衣无缝。</p>\\n<p>“是的呀，三妹。”我肯定地点了点头，继续说道，“ArrayList 可以称得上是集合框架方面最常用的类了，可以和 HashMap 一较高下。”</p>\\n<p>从名字就可以看得出来，ArrayList 实现了 List 接口，并且是基于数组实现的。</p>\\n<p>数组的大小是固定的，一旦创建的时候指定了大小，就不能再调整了。也就是说，如果数组满了，就不能再添加任何元素了。ArrayList 在数组的基础上实现了自动扩容，并且提供了比数组更丰富的预定义方法（各种增删改查），非常灵活。</p>"}');export{t as data};
