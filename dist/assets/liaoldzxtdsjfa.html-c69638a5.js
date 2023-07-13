import{_ as t,W as d,X as n,Y as e,a0 as a,Z as r,a1 as p,C as c}from"./framework-bb7be5cb.js";const l={},s=p(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>对账系统作为支付系统中的基石系统,处于整个支付环节中的最后一层，主要用来保证我方支付数据与第三方支付渠道或银行的数据一致性。</p><p>在没有对账系统之前，财务在第二日手工核对前一日的应收与实收。倘若不一致，这就需要一一核对数据，找出不一致的数据。对账系统出现之后，就可减少以这种繁琐手工操作，财务只需要每天关注系统的对账记录，释放了生产力。</p><h2 id="系统整体设计" tabindex="-1"><a class="header-anchor" href="#系统整体设计" aria-hidden="true">#</a> 系统整体设计</h2><p>对账系统设计主要分为以下四个模块：</p><ul><li>渠道数据处理模块</li><li>数据处理模块</li><li>数据核对模块</li><li>差异数据处理模块</li></ul><p>模块调用顺序层次图如下。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-liaoldzxtdsjfa-159c8017-8574-4f7f-be1a-392cd1767df8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="渠道数据处理模块" tabindex="-1"><a class="header-anchor" href="#渠道数据处理模块" aria-hidden="true">#</a> 渠道数据处理模块</h2><p>这个模块主要负责渠道对账文件的下载，解析，以及数据落库。</p><p>目前市面上第三方支付渠道对账文件下载方式主要分为以下几类：</p><ul><li>第三方渠道定时推送到 SFTP/FTP。这种模式比较简单，我们定时从 SFTP/FTP 取对账文件。</li><li>调用第三方渠道对账文件下载接口。这种模式需要对接渠道下载对账文件接口，定时调用下载。支付宝与微信为该模式。</li><li>手动在支付渠道网站下载对账文件。这种模式最不友好，需要我们花费人力下载文件。</li></ul><p>除了下载方式，对账文件的格式也会存在一些区别。比如支付宝对账文件格式为 csv，而微信的对账文件格式为 txt，另外有些渠道为 xml,xls。</p><p>第三方渠道对账文件里面字段数量以及字段名称也存在不同。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-liaoldzxtdsjfa-9ce853f4-3109-40bb-8621-f6329c975733.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一般这一层每接入一个渠道需要专门根据这个渠道特性开发。这一层可以抽象化接口，对外暴露下载与解析接口。每次接入渠道，实现该接口相应方法即可。</p><p>这一层开发难度不大，只要根据对账文件格式相应解析文件即可。一般需要提取对账文件里面信息如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 商户号
 商户订单号
 渠道流水号
 交易日期
 交易金额
 手续费
 退款原订单号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面说一下开发这一层需要注意的一些细节。</p><p>1、同一渠道若申请了多个商户号。这种情况下，每个商户号若前一日都存在交易，第三方渠道会为每个商户号都会产生一份对账文件。所以这里系统设计时候需要考虑到多份对账文件处理的情况。</p><p>2、对账文件需要考虑重复下载的情况。一般情况下，渠道的对账文件一旦生成，就不会改变。但是第三方渠道也可能发生异常，导致我方收到对账文件数据不完整。这种情况下，需要有机制重新下载解析入库。</p><p>3、每个第三方渠道下载文件时间都不一样。</p><h2 id="数据处理模块" tabindex="-1"><a class="header-anchor" href="#数据处理模块" aria-hidden="true">#</a> 数据处理模块</h2><p>讲完对账文件处理模块，我们来看数据处理模块。</p><p>这个模块主要用来提取我方前一日所有支付成功的流水数据以及上一模块入库的前一日对账单的流水数据。为了减少数据库的压力，提取的数据只需要包括必要字段即可，无需将整行数数据信息都提取出来。一般来说只要需要提取交易时间，金额，交易订单号，渠道返回流水号。</p><p>这一层主要就是数据库的查询行为。最好使用备库进行数据查询。因为这里我们需要提取前一日全量的支付成功的数据，数据量大的情况下，可能会拖慢主库，影响在线的支付交易。</p><h2 id="核对模块" tabindex="-1"><a class="header-anchor" href="#核对模块" aria-hidden="true">#</a> 核对模块</h2><p>这一个模块我们使用上一模块提取出来的数据，核对订单号与金额是否完全一致。核对模块伪代码如下。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-liaoldzxtdsjfa-4eab5394-d3bd-45ee-843e-ad3e80048e10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个过程可能产生三类差异数据。</p><p>第一种情况为本端数据存在，对端数据不存在，我们称为本端多账。</p><p>第二种情况为对端数据存在，本端数据不存在，我们称为对端多账。</p><p>第三种情况为金额不一致。</p><p>三者如图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-liaoldzxtdsjfa-9e23f4fd-eea1-48ca-97fe-972cbe49f922.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里产生的差异数据存入一张差异表中，以便下个模块使用。</p><h2 id="差异数据处理模块" tabindex="-1"><a class="header-anchor" href="#差异数据处理模块" aria-hidden="true">#</a> 差异数据处理模块</h2><p>这个模块主要用来处理上个模块产生的差异数据。</p><p>上面三类差异数据中，金额不一致相当少见，这种情况需要人工判断。</p><p>我们先讨论本端多账的情况。</p><p>本端多账是对账系统最常见的一种情况。这种情况可能由于交易的时候发生日切问题，导致双方记账日期不一致,从而发生不平账。</p><p>我们先解释日切的概念。</p><p>日切，通俗的来说就是更换系统记账的时间，系统从当前工作日切换到下一工作日。这个过程中，若我方的交易订单刚好发生在 T 日 23:59:59，那么我方的记账时间为 T 日。第三方渠道接收到订单的时间为 T+1 日 00:00:01，这样第三方渠道该笔的交易的对账日期为 T+1 日。</p><p>第三方渠道 T 日对账文件将缺少这笔，但是我方 T 日数据却存在这笔，这就导致了核对过程中产生一笔本端多账差异数据。</p><p>对于这类差异数据，我们可以选择将这笔数据挂账，等待 T+1 工作日对账。T+1 日对账的时候，对账单会相应多出数据，这样在核对过程就会产生对端多账的差异数据。</p><p>然后在 T+1 日差异处理模块将前几日差异数据都提取出来，逐笔核对本端多账数据与对端多账数据。若核对一致，将两笔差异状态都更新成处理完成。最后若无剩余差异数据，当天账单平账。</p><p>伪代码如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-liaoldzxtdsjfa-e2229924-bab7-4ab3-8987-0af1f21900de.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对端多账的产生情况可能可能有两种情况.</p><p>第一种情况测试环境与生产环境共用一份第三方渠道参数，这就导致测试环境交易订单也会出现在对账单中。若是这种情况，我们确认测试环境存在这批数据之后，我们忽略这批差异数据即可。</p><p>第二种情况，本端交易订单存在，但是状态不是成功状态。这种情况下，需要调用第三方渠道提供的查询接口，查询订单最终状态。若查询成功，更新订单状态，然后将差异数据状态更改为处理成功。</p><p>若第三方渠道无法查询到订单的状态。这种若与渠道确认订单最终支付成功，我们需要将支付订单改为支付成功，并修改差异账的状态。</p><p>最后我们再次重新对账，由于对端多账的数据会有对应的本端数据，将不会产生差异数据，这次对账完成且平账。</p><h2 id="系统优化" tabindex="-1"><a class="header-anchor" href="#系统优化" aria-hidden="true">#</a> 系统优化</h2><p>目前系统的对账系统定时任务采用 Spring 定时功能。后期优化准备接入 elasticjob 这种分布式定时调度程序，可以做到快速修改定时任务的时间，而无需重启程序。以及可以快速触发定时任务。</p><p>总之，对账系统工作不难，就是细节比较繁琐，前期很难将所有细节都考虑完全，这个过程需要我们不断改进。</p>`,56),o={href:"https://mp.weixin.qq.com/s?__biz=MzIzMTgwODgyMw==&mid=2247483901&idx=1&sn=ff92ae8f0c1a2627454ddcefad573e90&chksm=e89fcba5dfe842b3886f1df6b42b7fe1a9e97b14dc9f41b3f6ec2b6bfbd7dc1f81c94037a2e7&scene=178&cur_album_id=1337216649245655040#rd",target:"_blank",rel:"noopener noreferrer"};function f(b,h){const i=c("ExternalLinkIcon");return d(),n("div",null,[s,e("blockquote",null,[e("p",null,[a("参考链接："),e("a",o,[a("https://mp.weixin.qq.com/s?__biz=MzIzMTgwODgyMw==&mid=2247483901&idx=1&sn=ff92ae8f0c1a2627454ddcefad573e90&chksm=e89fcba5dfe842b3886f1df6b42b7fe1a9e97b14dc9f41b3f6ec2b6bfbd7dc1f81c94037a2e7&scene=178&cur_album_id=1337216649245655040#rd"),r(i)]),a("，出处：小黑十一点半，整理：沉默王二")])])])}const u=t(l,[["render",f],["__file","liaoldzxtdsjfa.html.vue"]]);export{u as default};
