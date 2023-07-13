import{_ as r,W as i,X as l,Y as e,a0 as t,Z as o,a1 as a,C as s}from"./framework-bb7be5cb.js";const c={},p=a('<p>知识星球上有球友问 .net 那二哥就借这个机会来谈谈 .net 的行情、学习路线、学习资料（包括视频、书籍）之类，希望给小伙伴们提供一些参考。</p><h2 id="关于-net" tabindex="-1"><a class="header-anchor" href="#关于-net" aria-hidden="true">#</a> 关于 .net</h2><p>.net 主要指的是 .NET Framework，由微软开发，一个致力于敏捷软件开发、快速应用开发的软件框架，主要服务于桌面开发。</p><p>我在《Java 面试指南》专栏的《学习路线篇》里写过一篇《Java 桌面开发能找到工作吗？》也谈过桌面开发目前的现状。</p><p>像早期的 QQ，还有一些前后台分离的应用就主要是用 .net 框架来做的，包括 winform、WPF。</p><p>我在 2014 年的时候，开发的《大宗期货交易平台》中的客户端，就是用 .net 开发的。</p><p>Java 平台和 .net 平台是主要的竞争对手。一个属于甲骨文，一个属于微软，微软在印度裔 CEO N纳德拉的带领下，感觉又恢复了往昔的帝国景象，所以我觉得 .net 平台虽然受到了 Java、Electron、QT 等等挑战，但在桌面应用领域，微软肯定是能应对这个挑战的。</p><p>尤其是在 .net 开源、.net core 问世之后。</p><p>图 1 是 .NET 平台截止 2020 年 12 月开发者数量大致的变化情况：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/donet-23438f52-d682-47c8-ae9a-566f4ec4b8fa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>.NET 是目前全球市场上唯一一个涵盖 Web、桌面客户端、手机应用、微服务、云原生、机器学习、游戏、物联网等跨平台的全能开发解决方案。</p><p>所以就目前来看，.net 还是值得投入感情的，像王者荣耀就是际遇 C# 的 unity 开发的。总之一句话，有微软这么牛逼的爹，.net 肯定是有用武之地的。</p><p>如果对自己能力有自信，或者说你愿意为其倾力学习的话，选择 .net 准没错，前踢 Java，左打 Python，右捶 cpp，绝对牛逼的不行🚫。</p>',13),d={id:"如何学习-net",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#如何学习-net","aria-hidden":"true"},"#",-1),_={href:"http://xn--vjq1wg8vm1b.net",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"学习路线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#学习路线","aria-hidden":"true"},"#"),t(" 学习路线")],-1),u=e("p",null,"第一步，当然是学语法，把异步、泛型、Lambda 学扎实，对你没看错，Java 中也有这些东西。",-1),f=e("p",null,"第二步，学习 Docker，会拉去镜像，会部署数据库就够了，不用学太多，比如说你会用 Docker 拉取 SQLserver 数据库。",-1),g={href:"http://ADO.net",target:"_blank",rel:"noopener noreferrer"},m=a('<p>第四步，学习 EFCore（Entity Framework Core，微软提供的跨平台ORM框架），要学精。</p><p>第五步，学 MVC，之后就可以开发一些小项目了。</p><p>其中的一些重点：viewmodel、JSON 序列化、仓储模式、依赖注入、过滤器 等等。</p><p>可以顺带用一下 jQuery、bootstrap，这些属于前端的 JS 组件库和 CSS 库。</p><p>第六步，学 WebAPI，学会 automapper 的配置和使用。</p><p>第七步，学 JWT、单点登录，学了这些，就可以实现前后端分离了。到此为止，你就可以胜任市面上的绝大多数开发岗位了。</p><p>第八步，学习 Docker 的分布式部署。</p><p>第九步，学习 IdentityServer4，可实现接口统一验证。</p><p>第十步，学习 Consul，服务发现治理（类似于 Java 中的 nocas），Ocelot网关、Polly(熔断降级)，以及微服务架构思想。</p><h3 id="学习资料" tabindex="-1"><a class="header-anchor" href="#学习资料" aria-hidden="true">#</a> 学习资料</h3><p>先推荐视频。</p><p>首先要有 C# 的语言基础，那么 B 站上有两套视频教程，点赞数还不少。</p><p>第一套是刘铁猛老师（拥有逾十年微软平台软件开发、测试经验）的《C#语言入门详解》全集。从评价上来看，刘老师这门课深受欢迎，旁征博引、谈笑风生、举例逻辑清晰，上课过程中有一种醍醐灌顶的感觉。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/donet-a36d4fec-a4dd-4744-9380-12b5e316695f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),v={href:"https://www.bilibili.com/video/BV13b411b7Ht",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"之后是 .NET，我关注的一个 up 杨中科 分享过一个 .net 的教程。一共 195 集，杨科长还出过一本书《.net core 技术内幕与项目实战》，所以我觉得还是挺牛逼的，很接地气的一位大佬。",-1),k=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/donet-00c25b59-56d5-40b7-8b20-892f581ed783.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w={href:"https://www.bilibili.com/video/BV1pK41137He",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"再推荐书籍。",-1),J={href:"https://book.douban.com/subject/24748698/",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/donet-32590c26-7f5e-4737-aae4-aa40e4b86ab1.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),C={href:"https://book.douban.com/subject/1919816/",target:"_blank",rel:"noopener noreferrer"},N=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/donet-27e7c98a-e159-4aff-beea-63735cdae45f.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),S=e("p",null,"最后是教程，那自然直接看微软官方的就行了。",-1),z=e("p",null,"先看 C# 的。",-1),E={href:"https://learn.microsoft.com/zh-cn/dotnet/csharp/",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"包含入门、基础知识、概念、操作、接口、委托、数组、字符串、泛型、文件系统等等。",-1),B=e("p",null,"在看 .net 的。",-1),D={href:"https://learn.microsoft.com/zh-cn/dotnet/standard/get-started",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"包含 入门、概述、工具和诊断、执行模型、部署模型、devops、编码组件、运行时库、数据访问、并行处理、测试、安全等等。",-1),H=e("p",null,"最后，如果要面试的话，可以看一下这份 DotNetGuide 资料，1.6k star。",-1),G={href:"https://github.com/YSGStudyHards/DotNetGuide",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"最后，希望能帮助到你。",-1),q=e("hr",null,null,-1),I={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},P={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,[t("微信搜 "),e("strong",null,"沉默王二"),t(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),t(" 即可免费领取。")],-1),F=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function L(W,A){const n=s("ExternalLinkIcon");return i(),l("div",null,[p,e("h2",d,[h,t(),e("a",_,[t("如何学习.net"),o(n)])]),b,u,f,e("p",null,[t("第三步，简单学一下 "),e("a",g,[t("ADO.net"),o(n)]),t(" （（ActiveX Data Objects）），能写 SQL helper 就够了，工作后可能用不到，但面试可能会考。")]),m,e("blockquote",null,[e("p",null,[t("视频地址："),e("a",v,[t("https://www.bilibili.com/video/BV13b411b7Ht"),o(n)])])]),x,k,e("blockquote",null,[e("p",null,[t("视频地址："),e("a",w,[t("https://www.bilibili.com/video/BV1pK41137He"),o(n)])])]),j,e("p",null,[t("如果想快速入门，推荐《"),e("a",J,[t("C#图解教程"),o(n)]),t("》。")]),y,e("p",null,[t("之后可以看一下《"),e("a",C,[t("C#高级编程"),o(n)]),t("》。")]),N,S,z,e("blockquote",null,[e("p",null,[e("a",E,[t("https://learn.microsoft.com/zh-cn/dotnet/csharp/"),o(n)])])]),O,B,e("blockquote",null,[e("p",null,[e("a",D,[t("https://learn.microsoft.com/zh-cn/dotnet/standard/get-started"),o(n)])])]),V,H,e("blockquote",null,[e("p",null,[e("a",G,[t("https://github.com/YSGStudyHards/DotNetGuide"),o(n)])])]),T,q,e("p",null,[t("GitHub 上标星 7600+ 的开源知识库《"),e("a",I,[t("二哥的 Java 进阶之路"),o(n)]),t("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),e("a",P,[t("太赞了，GitHub 上标星 7600+ 的 Java 教程"),o(n)])]),Q,F])}const Y=r(c,[["render",L],["__file","donet.html.vue"]]);export{Y as default};
