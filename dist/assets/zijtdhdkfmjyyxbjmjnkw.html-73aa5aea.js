import{_ as r,W as n,X as t,Y as p,a0 as e,Z as i,a1 as o,C as s}from"./framework-bb7be5cb.js";const d={},h=o('<p><strong>先讲一下时间线吧，7.7号投递 -&gt; 7.17一面 -&gt; 7.21二面 -&gt; 7.28三面 -&gt; 8.2HR面 -&gt; 8.13OC -&gt; 8.15意向</strong></p><p><strong>因为楼主没有录屏，所以可能有些遗漏。</strong></p><h3 id="一面-7-17-60min" tabindex="-1"><a class="header-anchor" href="#一面-7-17-60min" aria-hidden="true">#</a> <strong>一面 7.17（60min）</strong></h3><p>一面的面试官给我留下了非常好的印象，面试开始时告诉我他有两个显示器，所以有时目光不会直视我，并且他会做一些必要的记录，如果我回答完他没有立即回应的话，希望我能理解。</p><p>1.自我介绍（介绍实习项目）</p><p>2.根据我的实习项目对我进行提问，问的较为仔细，需要对自己的项目有较深的理解</p><p>3.OSI7层网络了解吗？说说具体有哪些层，并且每一层起到什么作用？互相之间如何协作？</p><p>4.应用层，传输层，网络层，数据链路层都有哪些协议？它们都起到了什么作用？</p><p>5.MAC地址在传输过程中会改变吗？</p><p>6.CSMA/CD协议作用于哪一层？如何工作的？如何降低碰撞几率的？</p><p>7.TCP三次握手，四次挥手聊一聊？</p><p>8.进程，线程，协程了解吗？说说他们的特性和区别。</p><p>9.select，poll，epoll的区别？</p><p>10.进程间的通信方式有哪些？共享存储的优点和缺点分别是什么？消息队列与管道相比有什么优势？</p><p>11.JDK8默认使用的垃圾收集器有哪些？新生代为什么普遍采用复制算法？老年代为什么普遍采用标记清除算法？</p><p>12.虽迟但到的算法题环节：</p><p>（1）接雨水</p><p>（2）<a href="/jump/super-jump/word?word=%E9%93%BE%E8%A1%A8">链表</a>每k个进行反转</p><h3 id="二面-7-21-70min" tabindex="-1"><a class="header-anchor" href="#二面-7-21-70min" aria-hidden="true">#</a> 二面 7.21（70min）</h3><p>1.自我介绍（介绍实习项目）</p><p>2.也是针对项目进行提问，相较于一面更为深入，例如会问为什么选择使用这项技术？有没有和其他技术进行过对比？可扩展性如何？</p><p>3.TCP和UDP区别是什么？TCP依据什么来保证可靠性？TCP是面向什么进行传输？</p><p>4.HTTPS和HTTP的区别？HTTPS协议链接建立流程是什么？HTTPS中的S代表什么？介于拿两层之间起作用？对于应用层透明吗？</p><p>5.数据链路层为网络层提供了哪些服务？ARP协议是哪一层的协议？</p><p>6.ICMP报文能起到哪些作用？分别是如何起作用的？</p><p>7.虚拟内存了解吗？有什么作用？</p><p>8.讲讲请求分段，请求分页，请求段页的实现方式及使用场景</p><p>9.请求分页的具体工作流程能不能讲讲呢？页面置换算法有哪些？（其中我说了LRU，结果后面算法题出的就是LRU😂）</p><p>11.你平时喜欢使用什么关系型数据库呢？（回答的是mysql）</p><p>12.mysql一般使用哪些引擎呢？</p><p>13.Innodb和myisam的区别是什么呢？哪种情况下该使用innodb，哪种情况下使用myisam呢？为什么？</p><p>14.当查询数据库时使用limit 10000，10有什么弊端？有什么好的解决方案吗？</p><p>15.什么时候索引会失效？能够使用&gt;和&gt;=的时候你会使用哪一个？为什么？</p><p>16.当查询条件有xx == null 时索引一定会失效吗？</p><p>17.执行计划了解吗？</p><p>18.智力题</p><p>有36匹马，6赛道，每条赛道之间的名次不可知，只能获知单条赛道马的名次，问最少比多少次能知道前三名？</p><p>19.算法题</p><p>（1）LRU（后面又让改成带过期时间的LRU，我使用的惰性删除）</p><p>（2）查找<a href="/jump/super-jump/word?word=%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84">旋转数组</a>（时间复杂度要求O(logn)）</p><h3 id="三面-7-28-70min" tabindex="-1"><a class="header-anchor" href="#三面-7-28-70min" aria-hidden="true">#</a> 三面 7.28（70min）</h3><p>前两面面试官询问Java方面的知识点比较少，三面面试官问的比较多</p><p>1.自我介绍（ 介绍实习项目）</p><p>2.针对实习项目和简历中的项目展开地毯式考察（花费大概25min）</p><p>3.HashMap如何是如何实现的呢？JDK8HashMap的散列算法能不能从源码层面来介绍一下？为什么扩容是两倍呢？自己手写实现过HashMap吗？</p><p>4.我看之前答垃圾收集器答的蛮好的，你能介绍一下CMS垃圾收集器的优缺点吗？为什么CMS会将serial old作为后备垃圾回收器？</p><p>5.对象只会被分配到堆吗？（答：不是，还有可能会栈上分配）</p><p>6.什么时候会进行栈上分配？</p><p>7.ThreadLocal的作用？如何实现？会不会出现内存泄漏？如何避免内存泄漏？</p><p>8.Spring AOP 的作用？如何实现的？</p><p>9.Spring 自动注入如何实现？（这个涉及的方面就比较多，讲了好久）</p><p>10.了解SSD的原理吗？（答：不知道，只知道磁盘，所以就讲了下磁盘存储原理和寻道算法）</p><p>11.操作系统是如何判定内存访问越界的？</p><p>12.访问越界后操作系用会如何进行处理？</p><p>13.用户态转换到核心态的过程？</p><p>14.进程切换过程？线程切换过程？</p><p>15.当我们ping的时候发送的是什么包？</p><p>16.TCP协议头部长度是使用哪个字段？如何计算的？</p><p>17.TCP如何实现流量控制和拥塞控制？</p><p>18.TCP的滑动窗口移动流程你能具体讲讲吗？</p><p>19.当我们输入一个SQL查询语句时，mysql数据库引擎是如何执行并得到最终结果的？（答：先查询缓存-&gt;解析器-&gt;优化器）</p><p>20.智力题</p><p>（1） 一个桶能存储5升水，一个桶能存储3升水，如何操作能量出4升水？</p><p>（2）两根质地不均匀的木头，从一端烧到另一端需要60分钟，如何操作能准确量出15分钟？</p><p>21.算法题</p><p>你之前说了解析器，那我现场出一道算法题吧，我会输入一个SQL语句，你需要将where后面的查询条件解析为一棵规则树</p><p>例如：where (a == b and c == d) or (e == f or (g == h))</p><p>我需要生成一棵树，结构为</p><p>or</p><p>- and</p><ul><li><p>a == b</p></li><li><p>c == d</p></li></ul><p>- or</p><ul><li><p>e == f</p></li><li><p>g == h</p></li></ul><p>楼主运气比较好，肌肉记忆写出来了，面试官几个测试用例也通过了，算是有惊无险。</p><h3 id="hr面-8-2-30min" tabindex="-1"><a class="header-anchor" href="#hr面-8-2-30min" aria-hidden="true">#</a> HR面 8.2 （30min）</h3><p>询问实习期间的挑战和解决问题的思路，就拉拉家常，如实回答就好～。</p><p>HR面完后，HR加了我微信，长达11天的审批流程后终于OC。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>总的来说，字节跳动后端开发考察具体语言知识是比较少的，计算机网络，操作系统原理考察的比较多。智力题也会进行考察可以事先准备下。算法题我的体验是每面都有一道Hard，不过是比较常见的（除了最后一面）。</p><p>面试体验也十分的好，可能是我运气好，没有遇到故意刁难的面试官，特别是最后一面的面试官，一直在呵呵的笑（很友善），搞得我也一直在笑，哈哈。</p><p>今年秋招十分的不容易，希望这篇面经能帮助到大家～</p><p>对了，楼主base成都</p>',82),l={href:"https://www.nowcoder.com/discuss/1017201",target:"_blank",rel:"noopener noreferrer"};function c(m,u){const a=s("ExternalLinkIcon");return n(),t("div",null,[h,p("blockquote",null,[p("p",null,[e("转载链接："),p("a",l,[e("https://www.nowcoder.com/discuss/1017201"),i(a)]),e("，整理：沉默王二")])])])}const f=r(d,[["render",c],["__file","zijtdhdkfmjyyxbjmjnkw.html.vue"]]);export{f as default};
