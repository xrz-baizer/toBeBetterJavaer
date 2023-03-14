import{_ as c,W as o,X as e,Y as i,a0 as a,Z as n,a1 as t,C as l}from"./framework-bb7be5cb.js";const d={},m=t('<p>MySQL 一直是二哥强调的 Java 后端开发四大件之一，希望球友们也能重视起来。2023 年也打算把这一块的专栏更新起来，目前也是处在学习的过程中，上次把《MySQL 是怎样运行的》这本小册推荐给一个球友后，她也感慨写得真好。</p><p>今天这篇是一个读者面试美团遇到的关于 <strong>MySQL 自增主键是否是连续的</strong>主题。</p><hr><p>众所周知，自增主键可以让聚集索引尽量地保持递增顺序插入，避免了随机查询，从而提高查询效率，但实际上，MySQL 的自增主键并不能保证一定是连续递增的。</p><p>下面举个例子来看下，创建一张表：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSsBiaN3ibx0tWhhbpjyQo8T8XbxLggR4GtWsaNzACbK0kWqNylfoorLHQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="自增值保存在哪里" tabindex="-1"><a class="header-anchor" href="#自增值保存在哪里" aria-hidden="true">#</a> 自增值保存在哪里？</h3><p>使用 <code>insert into test_pk values(null, 1, 1)</code> 插入一行数据，再执行 <code>show create table</code> 命令来看一下表的结构定义：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlShzcyORDsddElUwICr30F21IAjOAxMOO0bNCL1rtK8hxmnFaicH0XGeA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上述表的结构定义存放在后缀名为 <code>.frm</code> 的本地文件中，在 MySQL 安装目录下的 data 文件夹下可以找到这个 <code>.frm</code> 文件：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlScTWqJCIkj1IW8XVWiaAWRyjVXPIFX9ma5rmvqp5QwYEO2fRH6beMx7w/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上述表结构可以看到，表定义里面出现了一个 <code>AUTO_INCREMENT=2</code>，表示下一次插入数据时，如果需要自动生成自增值，会生成 id = 2。</p><p>但需要注意的是，自增值并不会保存在这个表结构也就是 <code>.frm</code> 文件中，不同的引擎对于自增值的保存策略不同：</p><p>1）MyISAM 引擎的自增值保存在数据文件中</p><p>2）InnoDB 引擎的自增值，其实是保存在了内存里，并没有持久化。第一次打开表的时候，都会去找自增值的最大值 <code>max(id)</code>，然后将 <code>max(id)+1</code> 作为这个表当前的自增值。</p><p>举个例子：我们现在表里当前数据行里最大的 id 是 1，AUTO_INCREMENT=2，对吧。这时候，我们删除 id=1 的行，AUTO_INCREMENT 还是 2。</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlS0HgyyZPQHnFS8bF8eIA1yB2keNPXibBF2TrVkv5DsXiccd19k2ABictPQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但如果马上重启 MySQL 实例，重启后这个表的 AUTO_INCREMENT 就会变成 1。\uFEFF 也就是说，MySQL 重启可能会修改一个表的 AUTO_INCREMENT 的值。</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlScGQLqBeF4EwNW2n1ic8GVrn1MzcDeDpR7OL5bGsic2MCbmiaGFKpwTEow/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSPcnibHJkomqQslkzGBG2wAQTwWdXfbViaDRcm0jUqlSOrcT9UkRqlkVw/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以上，是在我本地 MySQL 5.x 版本的实验，实际上，到了 MySQL 8.0 版本后，自增值的变更记录被放在了 redo log 中，提供了自增值持久化的能力，也就是实现了“如果发生重启，表的自增值可以根据 redo log 恢复为 MySQL 重启前的值”</p><p>也就是说对于上面这个例子来说，重启实例后这个表的 AUTO_INCREMENT 仍然是 2。</p><p>理解了 MySQL 自增值到底保存在哪里以后，我们再来看看自增值的修改机制，并以此引出第一种自增值不连续的场景。</p><h3 id="自增值不连续场景-1" tabindex="-1"><a class="header-anchor" href="#自增值不连续场景-1" aria-hidden="true">#</a> 自增值不连续场景 1</h3><p>在 MySQL 里面，如果字段 id 被定义为 AUTO_INCREMENT，在插入一行数据的时候，自增值的行为如下：</p><ul><li>如果插入数据时 id 字段指定为 0、null 或未指定值，那么就把这个表当前的 AUTO_INCREMENT 值填到自增字段；</li><li>如果插入数据时 id 字段指定了具体的值，就直接使用语句里指定的值。</li></ul><p>根据要插入的值和当前自增值的大小关系，自增值的变更结果也会有所不同。假设某次要插入的值是 <code>insert_num</code>，当前的自增值是 <code>autoIncrement_num</code>：</p><ul><li>如果 <code>insert_num &lt; autoIncrement_num</code>，那么这个表的自增值不变</li><li>如果 <code>insert_num &gt;= autoIncrement_num</code>，就需要把当前自增值修改为新的自增值</li></ul><p>也就是说，如果插入的 id 是 100，当前的自增值是 90，<code>insert_num &gt;= autoIncrement_num</code>，那么自增值就会被修改为新的自增值即 101</p><p>一定是这样吗？</p><p>非也~</p><p>了解过分布式 id 的小伙伴一定知道，为了避免两个库生成的主键发生冲突，我们可以让一个库的自增 id 都是奇数，另一个库的自增 id 都是偶数</p><p>这个奇数偶数其实是通过 <code>auto_increment_offset</code> 和 <code>auto_increment_increment</code> 这两个参数来决定的，这俩分别用来表示自增的初始值和步长，默认值都是 1。</p><p>所以，上面的例子中生成新的自增值的步骤实际是这样的：从 <code>auto_increment_offset</code> 开始，以 <code>auto_increment_increment</code> 为步长，持续叠加，直到找到第一个大于 100 的值，作为新的自增值。</p><p>所以，这种情况下，自增值可能会是 102，103 等等之类的，就会导致不连续的主键 id。</p><p>更遗憾的是，即使在自增初始值和步长这两个参数都设置为 1 的时候，自增主键 id 也不一定能保证主键是连续的</p><h3 id="自增值不连续场景-2" tabindex="-1"><a class="header-anchor" href="#自增值不连续场景-2" aria-hidden="true">#</a> 自增值不连续场景 2</h3><p>举个例子，我们现在往表里插入一条 (null,1,1) 的记录，生成的主键是 1，AUTO_INCREMENT= 2，对吧</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSsgKOh3PPxE0GpdWWu4ce6M4REWM9E2z245FDUBh5CGYnQibUIM06SSQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这时我再执行一条插入 <code>(null,1,1)</code> 的命令，很显然会报错 <code>Duplicate entry</code>，因为我们设置了一个唯一索引字段 <code>a</code>：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSMic0AoqHE1gWOvO3rvsibyZUazjiaen17HQnn0rgnUM3FDc10P9eytwjQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是，你会惊奇的发现，虽然插入失败了，但自增值仍然从 2 增加到了 3！</p><p>这是为啥？</p><p>我们来分析下这个 insert 语句的执行流程：</p><ol><li>执行器调用 InnoDB 引擎接口准备插入一行记录 (null,1,1);</li><li>InnoDB 发现用户没有指定自增 id 的值，则获取表 <code>test_pk</code> 当前的自增值 2；</li><li>将传入的记录改成 (2,1,1);</li><li>将表的自增值改成 3；</li><li>继续执行插入数据操作，由于已经存在 a=1 的记录，所以报 Duplicate key error，语句返回</li></ol><p>可以看到，自增值修改的这个操作，是在真正执行插入数据的操作之前。</p><p>这个语句真正执行的时候，因为碰到唯一键 a 冲突，所以 id = 2 这一行并没有插入成功，但也没有将自增值再改回去。所以，在这之后，再插入新的数据行时，拿到的自增 id 就是 3。也就是说，出现了自增主键不连续的情况。</p><p>至此，我们已经罗列了两种自增主键不连续的情况：</p><ol><li>自增初始值和自增步长设置不为 1</li><li>唯一键冲突</li></ol><p>除此之外，事务回滚也会导致这种情况</p><h3 id="自增值不连续场景-3" tabindex="-1"><a class="header-anchor" href="#自增值不连续场景-3" aria-hidden="true">#</a> 自增值不连续场景 3</h3><p>我们现在表里有一行 <code>(1,1,1)</code> 的记录，AUTO_INCREMENT = 3：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSFjZ40sUdKXibmLhFxfXJoU5ic85QcTUhrHBlVGkqu7jUorksdy5HWAEQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们先插入一行数据 <code>(null, 2, 2)</code>，也就是 (3, 2, 2) 嘛，并且 AUTO_INCREMENT 变为 4：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSZYtkzeS6Ric9s0TSCsUrhCUBZ5zSwtP8LPN8HaDKLgVicU7ZVZkQlNlA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再去执行这样一段 SQL：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSPkib5TowVXBmW7Sn6xLyEU5qMBjebODMf9VyIGhK5ONz32x2MY5ZibDg/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>虽然我们插入了一条 (null, 3, 3) 记录，但是使用 rollback 进行回滚了，所以数据库中是没有这条记录的：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSy5lJTyl2e0aZ4nDXbJ9opGPz53rn2DEVzsxCExMTpwZwmov8Y7fSdA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这种事务回滚的情况下，自增值并没有同样发生回滚！如下图所示，自增值仍然固执地从 4 增加到了 5：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSTT1fZlfeSFiahUAAA6JpW9MDC9KOxPcaYjYDDkrjoGOrtQTbsqCyoFw/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以这时候我们再去插入一条数据（null, 3, 3）的时候，主键 id 就会被自动赋为 <code>5</code> 了：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSSShlKlck7uekokHiblibt0bPATQwNl5v3NFjVYK1FjKLSPWJaXtGx8bQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么，为什么在出现唯一键冲突或者回滚的时候，MySQL 没有把表的自增值改回去呢？回退回去的话不就不会发生自增 id 不连续了吗？</p><p>事实上，这么做的主要原因是为了提高性能。</p><p>我们直接用反证法来验证：假设 MySQL 在事务回滚的时候会把自增值改回去，会发生什么？</p><p>现在有两个并行执行的事务 A 和 B，在申请自增值的时候，为了避免两个事务申请到相同的自增 id，肯定要加锁，然后顺序申请，对吧。</p><ol><li>假设事务 A 申请到了 id = 1， 事务 B 申请到 id=2，那么这时候表 t 的自增值是 3，之后继续执行。</li><li>事务 B 正确提交了，但事务 A 出现了唯一键冲突，也就是 id = 1 的那行记录插入失败了，那如果允许事务 A 把自增 id 回退，也就是把表的当前自增值改回 1，那么就会出现这样的情况：表里面已经有 id = 2 的行，而当前的自增 id 值是 1。</li><li>接下来，继续执行的其他事务就会申请到 id=2。这时，就会出现插入语句报错“主键冲突”。</li></ol><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSOYOApB3cGAYCCP6Rx9AicTbUPecmQhObzhsd16EtkiadrDFYH9p0COoQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而为了解决这个主键冲突，有两种方法：</p><ol><li>每次申请 id 之前，先判断表里面是否已经存在这个 id，如果存在，就跳过这个 id</li><li>把自增 id 的锁范围扩大，必须等到一个事务执行完成并提交，下一个事务才能再申请自增 id</li></ol><p>很显然，上述两个方法的成本都比较高，会导致性能问题。而究其原因呢，是我们假设的这个 “允许自增 id 回退”。</p><p>因此，InnoDB 放弃了这个设计，语句执行失败也不回退自增 id。也正是因为这样，所以才只保证了自增 id 是递增的，但不保证是连续的。</p><p>综上，已经分析了三种自增值不连续的场景，还有第四种场景：批量插入数据。</p><h3 id="自增值不连续场景-4" tabindex="-1"><a class="header-anchor" href="#自增值不连续场景-4" aria-hidden="true">#</a> 自增值不连续场景 4</h3><p>对于批量插入数据的语句，MySQL 有一个批量申请自增 id 的策略：</p><ol><li>语句执行过程中，第一次申请自增 id，会分配 1 个；</li><li>1 个用完以后，这个语句第二次申请自增 id，会分配 2 个；</li><li>2 个用完以后，还是这个语句，第三次申请自增 id，会分配 4 个；</li><li>依此类推，同一个语句去申请自增 id，每次申请到的自增 id 个数都是上一次的两倍。</li></ol><p>注意，这里说的批量插入数据，不是在普通的 insert 语句里面包含多个 value 值！！！，因为这类语句在申请自增 id 的时候，是可以精确计算出需要多少个 id 的，然后一次性申请，申请完成后锁就可以释放了。</p><p>而对于 <code>insert … select</code>、replace … select 和 load data 这种类型的语句来说，MySQL 并不知道到底需要申请多少 id，所以就采用了这种批量申请的策略，毕竟一个一个申请的话实在太慢了。</p><p>举个例子，假设我们现在这个表有下面这些数据：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSbD7VllcMdyDCv7u5uibFE8ap8oeMwAJEIdgBkgDuwJduQNBX0zs1ZTA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们创建一个和当前表 <code>test_pk</code> 有相同结构定义的表 <code>test_pk2</code>：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSeBjnYFW3cvRcK1FYeCqgicPBdkvQGnbPSgvT86wAlgCFDBptIqEfYQA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后使用 <code>insert...select</code> 往 <code>teset_pk2</code> 表中批量插入数据：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSH2trqM0ibx9lc9E5ibicJWY9P4zdIdhRibYVhRfAdGg75k2gIoKasaQpEA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，成功导入了数据。</p><p>再来看下 <code>test_pk2</code> 的自增值是多少：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSoibW63prO8Gice263E406BO5yLPksw8s2PO6KPAiaCdMM4KxaicoIvFGZw/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上分析，是 8 而不是 6</p><p>具体来说，insert…select 实际上往表中插入了 5 行数据 （1 1）（2 2）（3 3）（4 4）（5 5）。但是，这五行数据是分三次申请的自增 id，结合批量申请策略，每次申请到的自增 id 个数都是上一次的两倍，所以：</p><ul><li>第一次申请到了一个 id：id=1</li><li>第二次被分配了两个 id：id=2 和 id=3</li><li>第三次被分配到了 4 个 id：id=4、id = 5、id = 6、id=7</li></ul><p>由于这条语句实际只用上了 5 个 id，所以 id=6 和 id=7 就被浪费掉了。之后，再执行 <code>insert into test_pk2 values(null,6,6)</code>，实际上插入的数据就是（8,6,6)：</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_png/PocakShgoGEDRrKUhdJJj0j170jAhFlSWJhQcdACvDcD18fMz5PhdUuwp3RkTILHJkVpW2OcX6icMn1hcEvnlqA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>总结下自增值不连续的四个场景：</p><ol><li>自增初始值和自增步长设置不为 1</li><li>唯一键冲突</li><li>事务回滚</li><li>批量插入（如 <code>insert...select</code> 语句）</li></ol><hr>',97),r={href:"https://mp.weixin.qq.com/s/HvA4zdF4VOYrs2DQ93rfYg",target:"_blank",rel:"noopener noreferrer"};function g(f,h){const p=l("ExternalLinkIcon");return o(),e("div",null,[m,i("blockquote",null,[i("p",null,[a("参考链接："),i("a",r,[a("https://mp.weixin.qq.com/s/HvA4zdF4VOYrs2DQ93rfYg"),n(p)])])])])}const x=c(d,[["render",g],["__file","meitmsmysqlzzzjydslxdm.html.vue"]]);export{x as default};
