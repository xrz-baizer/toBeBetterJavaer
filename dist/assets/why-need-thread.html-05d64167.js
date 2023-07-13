import{_ as n,W as a,X as l,Y as e,a0 as t,Z as o,a1 as s,C as p}from"./framework-bb7be5cb.js";const i={},h=s('<h1 id="进程与线程的区别是什么" tabindex="-1"><a class="header-anchor" href="#进程与线程的区别是什么" aria-hidden="true">#</a> 进程与线程的区别是什么？</h1><h2 id="进程的产生" tabindex="-1"><a class="header-anchor" href="#进程的产生" aria-hidden="true">#</a> 进程的产生</h2><p>最初的计算机只能接受一些特定的指令，用户每输入一个指令，计算机就做出一个操作。当用户在思考或者输入时，计算机就在等待。这样效率非常低下，在很多时候，计算机都处在等待状态。</p><p><strong>批处理操作系统</strong></p><p>后来有了<strong>批处理操作系统</strong>,把一系列需要操作的指令写下来，形成一个清单，一次性交给计算机。用户将多个需要执行的程序写在磁带上，然后交由计算机去读取并逐个执行这些程序，并将输出结果写在另一个磁带上。</p><p>批处理操作系统在一定程度上提高了计算机的效率，但是由于<strong>批处理操作系统的指令运行方式仍然是串行的，内存中始终只有一个程序在运行</strong>，后面的程序需要等待前面的程序执行完成后才能开始执行，而前面的程序有时会由于I/O操作、网络等原因阻塞，所以<strong>批处理操作效率也不高</strong>。</p><p><strong>进程的提出</strong></p><p>人们对于计算机的性能要求越来越高，现有的批处理操作系统并不能满足人们的需求，而批处理操作系统的瓶颈在于内存中只存在一个程序，那么内存中能不能存在多个程序呢？这是人们亟待解决的问题。</p><p>于是，科学家们提出了进程的概念。</p><p>进程就是<strong>应用程序在内存中分配的空间，也就是正在运行的程序</strong>，各个进程之间互不干扰。同时进程保存着程序每一个时刻运行的状态。</p><blockquote><p>程序：用某种编程语言(java、python等)编写，能够完成一定任务或者功能的代码集合,是指令和数据的有序集合，是<strong>一段静态代码</strong>。</p></blockquote><p>此时，CPU采用时间片轮转的方式运行进程：CPU为每个进程分配一个时间段，称作它的时间片。如果在时间片结束时进程还在运行，则暂停这个进程的运行，并且CPU分配给另一个进程（这个过程叫做上下文切换）。如果进程在时间片结束前阻塞或结束，则CPU立即进行切换，不用等待时间片用完。</p><blockquote><p>当进程暂停时，它会保存当前进程的状态（进程标识，进程使用的资源等），在下一次切换回来时根据之前保存的状态进行恢复，接着继续执行。</p></blockquote><p>使用进程+CPU时间片轮转方式的操作系统，在宏观上看起来同一时间段执行多个任务，换句话说，<strong>进程让操作系统的并发成为了可能</strong>。虽然并发从宏观上看有多个任务在执行，但在事实上，对于<strong>单核CPU</strong>来说，任意具体时刻都只有一个任务在占用CPU资源。</p><p><strong>对操作系统的要求进一步提高</strong></p><p>虽然进程的出现，使得操作系统的性能大大提升，但是随着时间的推移，人们并不满足一个进程在一段时间只能做一件事情，如果一个进程有多个子任务时，只能逐个得执行这些子任务，很影响效率。</p><blockquote><p>比如杀毒软件在检测用户电脑时，如果在某一项检测中卡住了，那么后面的检测项也会受到影响。或者说当你使用杀毒软件中的扫描病毒功能时，在扫描病毒结束之前，无法使用杀毒软件中清理垃圾的功能，这显然无法满足人们的要求。</p></blockquote><h2 id="线程的提出" tabindex="-1"><a class="header-anchor" href="#线程的提出" aria-hidden="true">#</a> 线程的提出</h2><p>那么能不能让这些子任务同时执行呢？于是人们又提出了线程的概念，<strong>让一个线程执行一个子任务，这样一个进程就包含了多个线程，每个线程负责一个单独的子任务。</strong></p><blockquote><p>使用线程之后，事情就变得简单多了。当用户使用扫描病毒功能时，就让扫描病毒这个线程去执行。同时，如果用户又使用清理垃圾功能，那么可以先暂停扫描病毒线程，先响应用户的清理垃圾的操作，让清理垃圾这个线程去执行。响应完后再切换回来，接着执行扫描病毒线程。</p><p>注意：操作系统是如何分配时间片给每一个线程的，涉及到线程的调度策略，有兴趣的同学可以看一下《操作系统》，本文不做深入详解。</p></blockquote><p>总之，进程和线程的提出极大的提高了操作系统的性能。<strong>进程让操作系统的并发性成为了可能，而线程让进程的内部并发成为了可能。</strong></p><p><strong>多进程的方式也可以实现并发，为什么我们要使用多线程？</strong></p><p>多进程方式确实可以实现并发，但使用多线程，有以下几个好处：</p><ul><li>进程间的通信比较复杂，而线程间的通信比较简单，通常情况下，我们需要使用共享资源，这些资源在线程间的通信比较容易。</li><li>进程是重量级的，而线程是轻量级的，故多线程方式的系统开销更小。</li></ul><p><strong>进程和线程的区别</strong></p><p>进程是一个独立的运行环境，而线程是在进程中执行的一个任务。他们两个本质的区别是<strong>是否单独占有内存地址空间及其它系统资源（比如I/O）</strong>：</p><ul><li><p>进程单独占有一定的内存地址空间，所以进程间存在内存隔离，数据是分开的，数据共享复杂但是同步简单，各个进程之间互不干扰；而线程共享所属进程占有的内存地址空间和资源，数据共享简单，但是同步复杂。</p></li><li><p>进程单独占有一定的内存地址空间，一个进程出现问题不会影响其他进程，不影响主程序的稳定性，可靠性高；一个线程崩溃可能影响整个程序的稳定性，可靠性较低。</p></li><li><p>进程单独占有一定的内存地址空间，进程的创建和销毁不仅需要保存寄存器和栈信息，还需要资源的分配回收以及页调度，开销较大；线程只需要保存寄存器和栈信息，开销较小。</p></li></ul><p>另外一个重要区别是，<strong>进程是操作系统进行资源分配的基本单位，而线程是操作系统进行调度的基本单位</strong>，即CPU分配时间的单位 。</p><h2 id="线程带来的好处" tabindex="-1"><a class="header-anchor" href="#线程带来的好处" aria-hidden="true">#</a> 线程带来的好处</h2><p>一直以来，硬件的发展极其迅速，也有一个很著名的&quot;摩尔定律&quot;，可能会奇怪明明讨论的是并发编程为什么会扯到了硬件的发展，这其中的关系应该是多核CPU的发展为并发编程提供的硬件基础。</p><p>摩尔定律并不是一种自然法则或者是物理定律，它只是基于认为观测数据后，对未来的一种预测。按照所预测的速度，我们的计算能力会按照指数级别的速度增长，不久以后会拥有超强的计算能力，正是在畅想未来的时候，2004年，Intel宣布4GHz芯片的计划推迟到2005年，然后在2004年秋季，Intel宣布彻底取消4GHz的计划，也就是说摩尔定律的有效性超过了半个世纪戛然而止。但是，聪明的硬件工程师并没有停止研发的脚步，他们为了进一步提升计算速度，而不是再追求单独的计算单元，而是将多个计算单元整合到了一起，也就是形成了多核CPU。</p><p>短短十几年的时间，家用型CPU,比如Intel i7就可以达到4核心甚至8核心。而专业服务器则通常可以达到几个独立的CPU，每一个CPU甚至拥有多达8个以上的内核。因此，摩尔定律似乎在CPU核心扩展上继续得到体验。因此，多核的CPU的背景下，催生了并发编程的趋势，通过<strong>并发编程的形式可以将多核CPU的计算能力发挥到极致，性能得到提升</strong>。</p><p>顶级计算机科学家Donald Ervin Knuth如此评价这种情况：在我看来，这种现象（并发）或多或少是由于硬件设计者无计可施了导致的，他们将摩尔定律的责任推给了软件开发者。</p><p>另外，在特殊的业务场景下先天的就适合于并发编程。比如在图像处理领域，一张1024X768像素的图片，包含达到78万6千多个像素。即时将所有的像素遍历一边都需要很长的时间，面对如此复杂的计算量就需要充分利用多核的计算的能力。又比如当我们在网上购物时，为了提升响应速度，需要拆分，减库存，生成订单等等这些操作，就可以进行拆分利用多线程的技术完成。<strong>面对复杂业务模型，并行程序会比串行程序更适应业务需求，而并发编程更能吻合这种业务拆分</strong> 。正是因为这些优点，使得多线程技术能够得到重视，也是一名CS学习者应该掌握的：</p><ul><li>充分利用多核CPU的计算能力；</li><li>方便进行业务拆分，提升应用性能</li></ul><hr>',36),c=e("p",null,"编辑：沉默王二，内容大部分来源以下三个开源仓库：",-1),g={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),b={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},f={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,[t("微信搜 "),e("strong",null,"沉默王二"),t(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),t(" 即可免费领取。")],-1),v=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function P(k,U){const r=p("ExternalLinkIcon");return a(),l("div",null,[h,e("blockquote",null,[c,e("ul",null,[e("li",null,[e("a",g,[t("深入浅出 Java 多线程"),o(r)])]),e("li",null,[e("a",u,[t("并发编程知识总结"),o(r)])]),e("li",null,[e("a",d,[t("Java八股文"),o(r)])])])]),_,e("p",null,[t("GitHub 上标星 7600+ 的开源知识库《"),e("a",b,[t("二哥的 Java 进阶之路"),o(r)]),t("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),e("a",f,[t("太赞了，GitHub 上标星 7600+ 的 Java 教程"),o(r)])]),C,v])}const x=n(i,[["render",P],["__file","why-need-thread.html.vue"]]);export{x as default};
