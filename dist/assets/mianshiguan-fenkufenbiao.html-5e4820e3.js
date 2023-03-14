import{_ as p,W as c,X as d,Y as e,a0 as a,Z as t,a1 as r,C as o}from"./framework-bb7be5cb.js";const n={},l=r('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在高并发系统当中，分库分表是必不可少的技术手段之一，同时也是BAT等大厂面试时，经常考的热门考题。</p><p>你知道我们为什么要做分库分表吗？</p><p>这个问题要从两条线说起：<code>垂直方向</code> 和 <code>水平方向</code>。</p><h2 id="_1-垂直方向" tabindex="-1"><a class="header-anchor" href="#_1-垂直方向" aria-hidden="true">#</a> 1 垂直方向</h2><p><code>垂直方向</code>主要针对的是<code>业务</code>，下面聊聊业务的发展跟分库分表有什么关系。</p><h3 id="_1-1-单库" tabindex="-1"><a class="header-anchor" href="#_1-1-单库" aria-hidden="true">#</a> 1.1 单库</h3><p>在系统初期，业务功能相对来说比较简单，系统模块较少。</p><p>为了快速满足迭代需求，减少一些不必要的依赖。更重要的是减少系统的复杂度，保证开发速度，我们通常会使用<code>单库</code>来保存数据。</p><p>系统初期的数据库架构如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-965dbc52-1fad-4cf7-a6fc-f04ff445101f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时，使用的数据库方案是：<code>一个数据库</code>包含<code>多张业务表</code>。用户读数据请求和写数据请求，都是操作的同一个数据库。</p><h3 id="_1-2-分表" tabindex="-1"><a class="header-anchor" href="#_1-2-分表" aria-hidden="true">#</a> 1.2 分表</h3><p>系统上线之后，随着业务的发展，不断的添加新功能。导致单表中的字段越来越多，开始变得有点不太好维护了。</p><p>一个用户表就包含了几十甚至上百个字段，管理起来有点混乱。</p><p>这时候该怎么办呢？</p><p>答：<code>分表</code>。</p><p>将<code>用户表</code>拆分为：<code>用户基本信息表</code> 和 <code>用户扩展表</code>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-32cbe5e1-b88b-4125-b990-8f901467fbb2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>用户基本信息表中存的是用户最主要的信息，比如：用户名、密码、别名、手机号、邮箱、年龄、性别等核心数据。</p><p>这些信息跟用户息息相关，查询的频次非常高。</p><p>而用户扩展表中存的是用户的扩展信息，比如：所属单位、户口所在地、所在城市等等，非核心数据。</p><p>这些信息只有在特定的业务场景才需要查询，而绝大数业务场景是不需要的。</p><p>所以通过分表把核心数据和非核心数据分开，让表的结构更清晰，职责更单一，更便于维护。</p><p>除了按实际业务分表之外，我们还有一个常用的分表原则是：把调用频次高的放在一张表，调用频次低的放在另一张表。</p><p>有个非常经典的例子就是：订单表和订单详情表。</p><h3 id="_1-3-分库" tabindex="-1"><a class="header-anchor" href="#_1-3-分库" aria-hidden="true">#</a> 1.3 分库</h3><p>不知不觉，系统已经上线了一年多的时间了。经历了N个迭代的需求开发，功能已经非常完善。</p><p>系统功能完善，意味着系统各种关联关系，错综复杂。</p><p>此时，如果不赶快梳理业务逻辑，后面会带来很多隐藏问题，会把自己坑死。</p><p>这就需要按业务功能，划分不同领域了。把相同领域的表放到同一个数据库，不同领域的表，放在另外的数据库。</p><p>具体拆分过程如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-9cab165b-f2e0-4c80-9bd1-cc272a78429c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将用户、产品、物流、订单相关的表，从原来一个数据库中，拆分成单独的用户库、产品库、物流库和订单库，一共四个数据库。</p><blockquote><p>在这里为了看起来更直观，每个库我只画了一张表，实际场景可能有多张表。</p></blockquote><p>这样按领域拆分之后，每个领域只用关注自己相关的表，职责更单一了，一下子变得更好维护了。</p><h3 id="_1-4-分库分表" tabindex="-1"><a class="header-anchor" href="#_1-4-分库分表" aria-hidden="true">#</a> 1.4 分库分表</h3><p>有时候按业务，只分库，或者只分表是不够的。比如：有些财务系统，需要按月份和年份汇总，所有用户的资金。</p><p>这就需要做：<code>分库分表</code>了。</p><p>每年都有个单独的数据库，每个数据库中，都有12张表，每张表存储一个月的用户资金数据。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-38434e50-9dce-467f-a036-e75038d9f3f6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样分库分表之后，就能非常高效的查询出某个用户每个月，或者每年的资金了。</p><p>此外，还有些比较特殊的需求，比如需要按照地域分库，比如：华中、华北、华南等区，每个区都有一个单独的数据库。</p><p>甚至有些游戏平台，按接入的游戏厂商来做分库分表。</p><h2 id="_2-水平方向" tabindex="-1"><a class="header-anchor" href="#_2-水平方向" aria-hidden="true">#</a> 2 水平方向</h2><p><code>水分方向</code>主要针对的是<code>数据</code>，下面聊聊数据跟分库分表又有什么关系。</p><h3 id="_2-1-单库" tabindex="-1"><a class="header-anchor" href="#_2-1-单库" aria-hidden="true">#</a> 2.1 单库</h3><p>在系统初期，由于用户非常少，所以系统并发量很小。并且存在表中的数据量也非常少。</p><p>这时的数据库架构如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-965dbc52-1fad-4cf7-a6fc-f04ff445101f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时，使用的数据库方案同样是：<code>一个master数据库</code>包含<code>多张业务表</code>。</p><p>用户读数据请求和写数据请求，都是操作的同一个数据库，该方案比较适合于并发量很低的业务场景。</p><h3 id="_2-2-主从读写分离" tabindex="-1"><a class="header-anchor" href="#_2-2-主从读写分离" aria-hidden="true">#</a> 2.2 主从读写分离</h3><p>系统上线一段时间后，用户数量增加了。</p><p>此时，你会发现用户的请求当中，读数据的请求占据了大部分，真正写数据的请求占比很少。</p><p>众所周知，<code>数据库连接是有限的</code>，它是非常宝贵的资源。而每次数据库的读或写请求，都需要占用至少一个数据库连接。</p><p>如果写数据请求需要的数据库连接，被读数据请求占用完了，不就写不了数据了？</p><p>这样问题就严重了。</p><p>为了解决该问题，我们需要把<code>读库</code>和<code>写库</code>分开。</p><p>于是，就出现了主从读写分离架构：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-e56c2d22-9aa2-4502-8d2a-f4416ce20db9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>考虑刚开始用户量还没那么大，选择的是<code>一主一从</code>的架构，也就是常说的一个master一个slave。</p><p>所有的写数据请求，都指向主库。一旦主库写完数据之后，立马异步同步给从库。这样所有的读数据请求，就能及时从从库中获取到数据了（除非网络有延迟）。</p><p>读写分离方案可以解决上面提到的单节点问题，相对于单库的方案，能够更好的保证系统的稳定性。</p><p>因为如果主库挂了，可以升级从库为主库，将所有读写请求都指向新主库，系统又能正常运行了。</p><blockquote><p>读写分离方案其实也是分库的一种，它相对于为数据做了备份，它已经成为了系统初期的首先方案。</p></blockquote><p>但这里有个问题就是：如果用户量确实有些大，如果master挂了，升级slave为master，将所有读写请求都指向新master。</p><p>但此时，如果这个新master根本扛不住所有的读写请求，该怎么办？</p><p>这就需要<code>一主多从</code>的架构了：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-1fc49e99-76ac-4aea-8c3d-e438de2cdd1c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中我列的是<code>一主两从</code>，如果master挂了，可以选择从库1或从库2中的一个，升级为新master。假如我们在这里升级从库1为新master，则原来的从库2就变成了新master的的slave了。</p><p>调整之后的架构图如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-bbf8495d-2338-4bcf-b8e3-cebaea4fac29.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样就能解决上面的问题了。</p><p>除此之外，如果查询请求量再增大，我们还可以将架构升级为一主三从、一主四从...一主N从等。</p><h3 id="_2-3-分库" tabindex="-1"><a class="header-anchor" href="#_2-3-分库" aria-hidden="true">#</a> 2.3 分库</h3><p>上面的读写分离方案确实可以解决读请求大于写请求时，导致master节点扛不住的问题。但如果某个领域，比如：用户库。如果注册用户的请求量非常大，即写请求本身的请求量就很大，一个master库根本无法承受住这么大的压力。</p><p>这时该怎么办呢？</p><p>答：建立多个用户库。</p><p>用户库的拆分过程如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-f2354590-0161-45e7-afb7-4ad07a3763fb.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这里我将用户库拆分成了三个库（真实场景不一定是这样的），每个库的表结构是一模一样的，只有存储的数据不一样。</p><h3 id="_2-4-分表" tabindex="-1"><a class="header-anchor" href="#_2-4-分表" aria-hidden="true">#</a> 2.4 分表</h3><p>用户请求量上来了，带来的势必是数据量的成本上升。即使做了分库，但有可能单个库，比如：用户库，出现了5000万的数据。</p><p>根据经验值，单表的数据量应该尽量控制在1000万以内，性能是最佳的。如果有几千万级的数据量，用单表来存，性能会变得很差。</p><p>如果数据量太大了，需要建立的索引也会很大，从小到大检索一次数据，会非常耗时，而且非常消耗cpu资源。</p><p>这时该怎么办呢？</p><p>答：<code>分表</code>，这样可以控制每张表的数据量，和索引大小。</p><p>表拆分过程如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-8830dc2f-b088-4190-bc9a-a19bf55de99b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我在这里将用户库中的用户表，拆分成了四张表（真实场景不一定是这样的），每张表的表结构是一模一样的，只是存储的数据不一样。</p><p>如果以后用户数据量越来越大，只需再多分几张用户表即可。</p><h3 id="_2-5-分库分表" tabindex="-1"><a class="header-anchor" href="#_2-5-分库分表" aria-hidden="true">#</a> 2.5 分库分表</h3><p>当系统发展到一定的阶段，用户并发量大，而且需要存储的数据量也很多。这时该怎么办呢？</p><p>答：需要做<code>分库分表</code>。</p><p>如下图所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-1cfacfbf-283a-4415-91da-c0c2616c2f0a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>图中将用户库拆分成了三个库，每个库都包含了四张用户表。</p><p>如果有用户请求过来的时候，先根据用户id路由到其中一个用户库，然后再定位到某张表。</p><p>路由的算法挺多的：</p><ul><li><code>根据id取模</code>，比如：id=7，有4张表，则7%4=3，模为3，路由到用户表3。</li><li><code>给id指定一个区间范围</code>，比如：id的值是0-10万，则数据存在用户表0，id的值是10-20万，则数据存在用户表1。</li><li><code>一致性hash算法</code></li></ul><p>这篇文章就不过多介绍了，后面会有文章专门介绍这些路由算法的。</p><h2 id="_3-真实案例" tabindex="-1"><a class="header-anchor" href="#_3-真实案例" aria-hidden="true">#</a> 3 真实案例</h2><p>接下来，废话不多说，给大家分享三个我参与过的分库分表项目经历，给有需要的朋友一个参考。</p><h3 id="_3-1-分库" tabindex="-1"><a class="header-anchor" href="#_3-1-分库" aria-hidden="true">#</a> 3.1 分库</h3><p>我之前待过一家公司，我们团队是做游戏运营的，我们公司提供平台，游戏厂商接入我们平台，推广他们的游戏。</p><p>游戏玩家通过我们平台登录，成功之后跳转到游戏厂商的指定游戏页面，该玩家就能正常玩游戏了，还可以充值游戏币。</p><p>这就需要建立我们的账号体系和游戏厂商的账号的映射关系，游戏玩家通过登录我们平台的游戏账号，成功之后转换成游戏厂商自己平台的账号。</p><p>这里有两个问题：</p><ol><li>每个游戏厂商的接入方式可能都不一样，账号体系映射关系也有差异。</li><li>用户都从我们平台登录，成功之后跳转到游戏厂商的游戏页面。当时有N个游戏厂商接入了，活跃的游戏玩家比较多，登录接口的并发量不容小觑。</li></ol><p>为了解决这两个问题，我们当时采用的方案是：<code>分库</code>。即针对每一个游戏都单独建一个数据库，数据库中的表结构允许存在差异。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-f9f55b53-0465-48d1-9715-241129fe7833.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们当时没有进一步分表，是因为当时考虑每种游戏的用户量，还没到大到离谱的地步。不像王者荣耀这种现象级的游戏，有上亿的玩家。</p><p>其中有个比较关键的地方是：登录接口中需要传入游戏id字段，通过该字段，系统就知道要操作哪个库，因为库名中就包含了游戏id的信息。</p><h3 id="_3-2-分表" tabindex="-1"><a class="header-anchor" href="#_3-2-分表" aria-hidden="true">#</a> 3.2 分表</h3><p>还是在那家游戏平台公司，我们还有另外一个业务就是：<code>金钻会员</code>。</p><p>说白了就是打造了一套跟游戏相关的会员体系，为了保持用户的活跃度，开通会员有很多福利，比如：送游戏币、充值有折扣、积分兑换、抽奖、专属客服等等。</p><p>在这套会员体系当中，有个非常重要的功能就是：<code>积分</code>。</p><p>用户有很多种途径可以获取积分，比如：签到、充值、玩游戏、抽奖、推广、参加活动等等。</p><p>积分用什么用途呢？</p><ol><li>退换实物礼物</li><li>兑换游戏币</li><li>抽奖</li></ol><p>说了这么多，其实就是想说，一个用户一天当中，获取积分或消费积分都可能有很多次，那么，一个用户一天就可能会产生几十条记录。</p><p>如果用户多了的话，积分相关的数据量其实挺惊人的。</p><p>我们当时考虑了，水平方向的数据量可能会很大，但是用户并发量并不大，不像登录接口那样。</p><p>所以采用的方案是：<code>分表</code>。</p><p>当时使用一个积分数据库就够了，但是分了128张表。然后根据用户id，进行hash除以128取模。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-884b58a4-3009-4056-904d-cd235db41aa6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需要特别注意的是，分表的数量最好是2的幂次方，方便以后扩容。</p></blockquote><h3 id="_3-3-分库分表" tabindex="-1"><a class="header-anchor" href="#_3-3-分库分表" aria-hidden="true">#</a> 3.3 分库分表</h3><p>后来我去了一家从事餐饮软件开发的公司。这个公司有个特点是在每天的中午和晚上的就餐高峰期，用户的并发量很大。</p><p>用户吃饭前需要通过我们系统点餐，然后下单，然后结账。当时点餐和下单的并发量挺大的。</p><p>餐厅可能会有很多人，每个人都可能下多个订单。这样就会导致用户的并发量高，并且数据量也很大。</p><p>所以，综合考虑了一下，当时我们采用的技术方案是：<code>分库分表</code>。</p><p>经过调研之后，觉得使用了当当网开源的基于jdbc的中间件框架：<code>sharding-jdbc</code>。</p><p>当时分了4个库，每个库有32张表。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-alemwsyyfkfb-ed3d9006-7dd5-4f90-a566-8874020df4ea.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4 总结</h2><p>上面主要从：垂直和水平，两个方向介绍了我们的系统为什么要分库分表。</p><p>说实话垂直方向（即业务方向）更简单。</p><p>在水平方向（即数据方向）上，<code>分库</code>和<code>分表</code>的作用，其实是有区别的，不能混为一谈。</p><ul><li><code>分库</code>：是为了解决数据库连接资源不足问题，和磁盘IO的性能瓶颈问题。</li><li><code>分表</code>：是为了解决单表数据量太大，sql语句查询数据时，即使走了索引也非常耗时问题。此外还可以解决消耗cpu资源问题。</li><li><code>分库分表</code>：可以解决 数据库连接资源不足、磁盘IO的性能瓶颈、检索数据耗时 和 消耗cpu资源等问题。</li></ul><p>如果在有些业务场景中，用户并发量很大，但是需要保存的数据量很少，这时可以只分库，不分表。</p><p>如果在有些业务场景中，用户并发量不大，但是需要保存的数量很多，这时可以只分表，不分库。</p><p>如果在有些业务场景中，用户并发量大，并且需要保存的数量也很多时，可以分库分表。</p>',144),f={href:"https://mp.weixin.qq.com/s/klkD8xea0gQ96Mh1Q1MHLw",target:"_blank",rel:"noopener noreferrer"},s=e("hr",null,null,-1),b=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),h={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"111"),a(" 即可免费领取。")],-1),m=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function u(_,x){const i=o("ExternalLinkIcon");return c(),d("div",null,[l,e("blockquote",null,[e("p",null,[a("转载链接："),e("a",f,[a("https://mp.weixin.qq.com/s/klkD8xea0gQ96Mh1Q1MHLw"),t(i)]),a("，出处：macrozheng，整理：沉默王二")])]),s,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),b,a(" 等等等等……详情戳："),e("a",h,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(i)])]),g,m])}const y=p(n,[["render",u],["__file","mianshiguan-fenkufenbiao.html.vue"]]);export{y as default};
