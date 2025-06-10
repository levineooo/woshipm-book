# 秒懂数仓的今生：DW和OLAP到底是啥？（下篇）
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [业务数智化](https://www.woshipm.com/u/633959)
**Published:** 2021-10-27  
**Stats:** 👁️ 8144 views | 💬 2 comments | ⭐ 13 collects
**Tags:** 1年,DW数据仓库,初级
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5191308.html)
{% endhint %}
> 编辑导读：在上一篇中，作者讲述了数仓的前世DBMS、今生数仓以及大家耳熟能详的OLAP。本篇文章讲的是数仓的今生——DW数据仓库（包含OLAP操作），一起来文中看一下吧。

---

## 秒懂数仓的今生：DW和OLAP到底是啥？（下篇）

[![](https://image.woshipm.com/wp-files/2021/09/gpkviHfeJhAREqytPYRw.png!/both/72x72)](https://www.woshipm.com/u/633959)[业务数智化](https://www.woshipm.com/u/633959) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2021-10-272 评论 8144 浏览 13 收藏 11 分钟[🔗 技术知识、行业知识、业务知识等，都是B端产品经理需要了解和掌握的领域相关的知识，有助于进行产品方案设计和评估](https://ke.qidianla.com/courses/bcpm)

> 编辑导读：在上一篇中，作者讲述了数仓的前世DBMS、今生数仓以及大家耳熟能详的OLAP。本篇文章讲的是数仓的今生——DW数据仓库（包含OLAP操作），一起来文中看一下吧。

![](https://image.woshipm.com/wp-files/2021/10/YY1Ohh5nBxXfTqzPSj5E.jpg)

上一篇咱们重点把数仓的前世：DBMS 数据库管理系统（OLTP）讲解的非常清楚，大家可戳 [《秒懂数仓的前世今生：DBMS、DW、OLTP、OLAP到底是啥？（上篇）》](http://www.woshipm.com/data-analysis/5188427.html)

今天我们重点来讲解下篇数仓今生：DW数据仓库（包含OLAP操作）

## 一、DW是啥：定义

由于数据量的不断膨胀，人们对数据需求的精细化（从月到天，从天到小时，从小时到分钟），OLTP仅仅针对关系型数据库做联机事务处理已经无法满足要求。此时，Dataware数据仓库的体系结构应运而生，DW环境中的处理类型可以概括为装载和访问过程。数据一旦被装载，通常是无法更新的，紧接着就会被用于访问查询，用于各类分析。

此时，我们会经常使用一种OLAP的技术优化数据结构，使得企业灵活对数据进行查询访问。

OLAP，即多维数据库管理系统处理，他提供了一种信息系统结构，这种结构可以使得企业对数据进行灵活访问，有多种方式对数据进行切片、分块，可以灵活动态的考察汇总数据和细节数据之间的关系与变化。

## 二、为啥需要DW：意义

DW主要有以下意义和特点

*   降低 存储成本：减少不必要的数据冗余，从而极大地降低存储和计算成本，更好且有效的利用数据。
*   提高 使用效率：当业务发生变化时，可以更加方便的进行扩展，提高数据稳定性和连续性
*   保障 数据质量：良好的数据模型能改善数据统计口径的不一致性，减少数据计算错误的可能性。

## 三、如何用DW：具体建模

一共分为三层六类

*   第一层：ODS操作数据存储层
*   第二层：DW数据仓库层，其中又可以分为公共维度汇总层 DIM、数据仓库层DW（数据细节层DWD、数据中间层DWM、数据服务层DWS）
*   第三层：ADS应用数据服务层

这部分详情可见文章《[最详细！深入浅出理解「3层6类」数据分层](http://www.woshipm.com/data-analysis/5155511.html)》

## 四、关于OLAP

### 4.1 啥是OLAP：定义

大家在和研发对接的过程中，可能会经常听到OLAP这个词，到底OLAP是啥呢？OLAP是否就等价于DW呢？

其实不是这样的，我们先来区分下DW数仓和OLAP：

*   DW数据仓库是一种数据库，其设计使得分析数据更容易（通常使用来自多个来源的数据）。它通常由事实表和维度表组成，并且通常由聚合表组成。
*   OLAP是一组操作可以对数据集进行操作，例如旋转，切片，切割，钻孔。例如，可以使用Excel数据透视表执行OLAP操作。

所以从本质上来说，两者并不等价，从包含关系上来说，DW包含了OLAP这种操作，OLAP也是DW数仓中的重要一环。如果再直白一点表达这两部分差异，DW数据仓库是一个日常管理和存储数据的地方，OLAP是一种分析数据的方法。

### 4.2 OLAP有啥用：特点

此时肯定有人要问了，我用DBMS的关系型数据库也能进行分析，为啥要用OLAP分析呢？

——关系数据库报表工具当然可以查询、报表和分析存储在表中的多维数据，但随着数据量的增加，性能会变慢。并且需要大量的工作来重新组织结果以关注不同的维度。例如，以前只需要业务A整体的数据，现在要看这个业务下人群1和人群2的数据，或者要看业务A和业务B下有交叉的人群1和人群2的数据情况，再交叉时间维度一起。

![](https://image.woshipm.com/wp-files/2021/11/0N1grAUp6Fyg5XVXWvZQ.png)

多维分析，这就是 OLAP 多维数据集的用武之地以及最大特点。OLAP 多维数据集使用附加层扩展了单个表，每个层都添加了附加维度——通常是维度“概念层次结构”中的下一个级别。例如，立方体的顶层可能按地区销售；附加层可以是国家、省、城市甚至特定商店。

理论上，一个立方体可以包含无数层。（代表三个以上维度的 OLAP 多维数据集有时称为超多维数据集。）层中可以存在更小的多维数据集。例如：每个商店层可以包含按销售人员和产品排列销售情况的多维数据集。在实践中，数据分析师将创建仅包含他们需要的层的 OLAP 多维数据集，以实现最佳分析和性能。

### 4.3 如何用OLAP：支持的操作

OLAP 多维数据集支持四种基本类型的多维数据分析：

**下钻操作**

![](https://image.woshipm.com/wp-files/2021/11/Dt35vkTa3dOaifM0KYLr.png)

向下钻取操作通过以下两种方法将粗略的数据转换为更详细的数据 ：在概念层次结构中向下移动或向多维数据集添加新维度。例如，如果你想查看季度的销售表现，可以以月为单位向下钻取查看每个月的销售额，在“时间”维度的概念层次结构中维度下移。

**上卷操作**

![](https://image.woshipm.com/wp-files/2021/11/iz00ZRHiiOnRwo7DOBEb.png)

与下钻相反，上卷通过在概念层次结构中向上移动或减少维数来聚合 OLAP 多维数据集上的数据。例如，可以通过查看每个区域的数据，而不是每个城市的数据，在“位置”维度的概念层次结构中向上移动。

**切片操作**

![](https://image.woshipm.com/wp-files/2021/11/WtHRfEBbjRPmCN31ymRm.png)

切片是通过从主 OLAP 多维数据集中选择一个维度来创建子多维数据集。例如，你可以通过切片来突出表示某业务线第二季度的销售情况

**切快操作**

![](https://image.woshipm.com/wp-files/2021/11/uFQWrlLHCHfJl0stZDqF.png)

切块操作通过在主 OLAP 多维数据集中选择一个小的多维数据集。例如，我只需要分析华南区域男装和妈妈装业务线下半年的销售情况。

**旋转操作**

![](https://image.woshipm.com/wp-files/2021/11/c9n8FLJEP0Cp4LoCyBll.png)

旋转当前的多维数据集视图。其实OLAP 的这个操作与Excel中的数据透视表功能相当， OLAP 数据透视表相对更易于使用（仅需较少的专业知识），并且具有更快的响应时间和查询性能。

### 4.4 OLAP有哪些：分类

按数据存储方式（建模类型）分类，可分为 MOLAP、ROLAP、HOLAP等。

**MOLAP：Multidimensional** **（多维的 ）OLAP**

将数据存储在优化的多维数组中，而不是关系数据库中。

优点：性能绝佳，MOLAP cubes为了快速数据检索而构建，具有最佳的分块和分片操作。可以执行复杂的计算，速度快。

缺点：可以处理的数据量有限，因为所有的计算都是执行在构建的多维数据集上，多维数据集本身不可能包括大量的数据。需要额外的成本，多维数据集技术往往是有专利或现在并不存在在某个组织中。因此，要想采用MOLAP技术，通常是要付出额外的人力和资源成本。

**ROLAP：Relational （关系型） OLAP**

将分析用的多维数据存储在关系数据库中。这种方式依赖SQL语言实现传统OLAP的切片和切块功能，本质上，切片和切块等动作都等同于在SQL语句中添加“WHERE”子句。

优点：可以处理大数据量，ROLAP技术的数据量大小就是底层关系数据库存储的大小，ROLAP本身没有对数据量的限制。

且可以利用关系型数据库所固有的功能，关系型数据库已经具备非常多的功能。

劣势：性能可能会很慢，因为每个ROLAP包裹实际上是一个SQL查询（或多个SQL查询）关系数据库，可能会因为底层数据量很大，使得查询的时间很长。

**HOLAP：Hybrid（混合型） OLAP**

将上述两种方式结合，从而可以获取各自的优点。

![](https://image.woshipm.com/wp-files/2021/11/uaKqRgOAlJKCV3YUHTNa.png)

本文由 **@业务数智化** 原创发布于人人都是产品经理，未经许可，禁止转载

题图来自 Unsplash，基于CC0协议

赞赏 收藏已收藏13 点赞已赞5更多精彩内容，请关注人人都是产品经理微信公众号或下载App[1年](https://www.woshipm.com/tag/1%e5%b9%b4)[DW数据仓库](https://www.woshipm.com/tag/dw%e6%95%b0%e6%8d%ae%e4%bb%93%e5%ba%93)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=秒懂数仓的今生：DW和OLAP到底是啥？（下篇）&url=https://www.woshipm.com/data-analysis/5191308.html&pic=https://image.woshipm.com/wp-files/2021/10/YY1Ohh5nBxXfTqzPSj5E.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5191308.html)分享