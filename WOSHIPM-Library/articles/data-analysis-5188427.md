# 秒懂数仓的前世：DBMS和OLTP到底是啥？（上篇）
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [业务数智化](https://www.woshipm.com/u/633959)
**Published:** 2021-10-25  
**Stats:** 👁️ 7408 views | 💬 1 comments | ⭐ 19 collects
**Tags:** 1年,初级,数仓管理
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5188427.html)
{% endhint %}
> 编辑导语：关于数仓的前世今生，大家都了解吗？在进行数据库系统管理的建设之前，我们需要对其相关概念了解透彻。本文这篇主要是把数仓的前世今生讲清楚，包含其前世DBMS、今生数仓以及大家耳熟能详的OLAP，希望对大家有帮助。

---

## 秒懂数仓的前世：DBMS和OLTP到底是啥？（上篇）

[![](https://image.woshipm.com/wp-files/2021/09/gpkviHfeJhAREqytPYRw.png!/both/72x72)](https://www.woshipm.com/u/633959)[业务数智化](https://www.woshipm.com/u/633959) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2021-10-251 评论 7408 浏览 19 收藏 12 分钟[🔗 B端产品经理需要更多地关注客户的商业需求、痛点、预算、决策流程等，而C端产品经理需要更多地关注用户的个人需求](https://ke.qidianla.com/courses/bcpm)

> 编辑导语：关于数仓的前世今生，大家都了解吗？在进行数据库系统管理的建设之前，我们需要对其相关概念了解透彻。本文这篇主要是把数仓的前世今生讲清楚，包含其前世DBMS、今生数仓以及大家耳熟能详的OLAP，希望对大家有帮助。

![](https://image.woshipm.com/wp-files/2021/10/tk2Djw8V0gkQXLkOYXYC.jpg)

**数仓的前世：DBMS 数据库管理系统（OLTP）**

1~3会从是啥、为啥、如何用三个角度去描述DBMS数据库管理系统去描述，这三部分较为理论化，所以读起来稍稍会有点枯燥，大家如果是实战派可以直接阅读4常见应用（oracle、mysql、sql server）。

## 一、DBMS是啥：定义

在数仓出世前，DBMS是广泛被使用的。DBMS即数据库管理系统database mangement system。

DBMS是一种操纵和管理数据库的大型软件，是用于建立、使用和维护数据库。它对数据库进行统一的管理和控制，以保证数据库的安全性和完整性。DBMS主要用于管理Database数据库，我们一般称这种处理为OLTP（on-line transaction processing），即联机事务处理，OLTP是传统的关系型数据库的主要应用，主要是基本的、日常的事务处理，例如银行交易。

## 二、为啥需要DBMS：意义

*   **数据定义**：DBMS 提供数据定义语言（Data Definition Language, DDL），供用户定义、创建和修改数据库的结构。DDL 所描述的数据库结构仅仅给出了数据库的框架，数据库的框架信息被存放在系统目录中。
*   **数据操纵**：DBMS 提供数据操纵语言（Data Manipulation Language, DML），实现用户对数据的操纵功能，包括对数据库数据的插入、删除、更新等操作。
*   **数据库运行管理**：DBMS提供数据库的运行控制和管理功能，包括多用户环境下的事务的管理和自动恢复、并发控制和死锁检测、安全性检查和存取控制、完整性检查和执行、运行日志的组织管理等。这些使得了数据库系统可以正常运行。
*   **数据库维护**：数据库的维护包括数据库的数据载入、转换、转储、恢复，数据库的重组织和重构，以及性能监控分析等功能，这些功能分别由各个应用程序来完成。
*   **数据传送**：DBMS 有接口负责处理数据的传送。这些接口与操作系统的联机处理以及分时系统和远程作业输入相关。网络环境下的数据库系统还应该包括 DBMS 与网络中其他软件系统的通信功能以及数据库之间的互操作功能。

## 三、如何用DBMS：具体操作

### 1\. 数据定义：关于DDL

DDL，数据定义语言，用于定义和管理 SQL 数据库中的所有对象的语言。

*   CREATE – to create objects in the database 创建数据库的语句
*   ALTER – alters the structure of the database 修改数据库的语句
*   DROP – delete objects from the database 删除数据库的语句
*   其他：TRUNCATE彻底删除、COMMENT注释、GRANT授权、REVOKE收回已授权权限等等

### 2\. 数据操纵：关于DML

DDL，数据操纵语言，用于对数据库中数据的管理。

*   SELECT – retrieve data from the a database 查询数据库中数据的语句
*   INSERT – insert data into a table 添加数据库中数据的语句
*   UPDATE – updates existing data within a table 更新数据库中数据的语句
*   DELETE – deletes all records from a table, the space for the records remain 删除数据库中数据的语句
*   其他：LOCK TABLE锁操作语句

### 3\. 数据库运行管理

数据库安全性是指数据库的任何数据都不允许受到恶意的侵害或未经授权的存取或修改。

### 4\. 数据库安全管理

数据库的任何数据都不允许受到恶意的侵害或未经授权的存取或修改。

*   用户标识与鉴别：通过口令或者用户标识去进行
*   存取控制：通过自主存取控制（dac）方法和强制存取控制（mac）方法去解决
*   数据审计和加密
*   角色和权限控制
*   sql server的安全机制

### 5\. 数据库完整性：数据的正确性与相容性

*   实体完整性（entity integrity）指表中行的完整性,主要用于保证操作的记录非空,唯一且不重复
*   参照完整性是指当更新、删除、插入，如一个表中的数据时，通过参照引用相互关联的另一个表的数据来检查对表的数据操作是否正确，一般通过外键实现
*   用户自定义完整性：是使得用户得以定义不属于其他任何完整性分类的特定的业务规则
*   sql server的完整性

### 6\. 数据库并发控制

事务（transaction）是用户定义的一个数据库操作序列，一个事务内所有语句被作为一个整体，这些操作是一个完整的工作单元，这些操作要么全做要么不做，是不可分割的工作单位。

事务在执行的过程中需要不同的资源，例如：有时需要cpu，有时需要存取数据，有时需要i/o，有时需要通信。如果事务串行执行，则许多系统资源处于空闲状态。

因此为了充分的利用系统资源，发挥数据库共享的特点。数据库允许多个事务并发执行。但事务在并发执行时，彼此之间可能产生相互干扰。

### 7\. 数据库维护

数据库的故障可以分为以下几种从数据库恢复角度，可以将数据库故障分为4类：事务内部的故障、系统故障、介质故障、计算机病毒。

数据库的恢复技术有：数据库备份、数据库还原、数据库的分离和附加，

## 四、DBMS常见用法：具体应用

结束了上面比较枯燥的理论，我们进入到这一部分大家肯定就不太陌生了，关于DBMS的常见应用，大概有以下几类：

### 1\. Oracle

Oracle Database，又名Oracle RDBMS，或简称Oracle。是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小微机环境。它是一种高效率的、可靠性好的、适应高吞吐量的数据库方案。

阿里巴巴在2013年以前都在用oracle DBMS，尤其是在2005年-2009年，电商高速发展时期，阿里巴巴集团拥有亚洲最大的Oracle集群，可以说阿里巴巴当时是oracle最重要的用户之一。

但是随着阿里巴巴业务的不断扩张，购买oracle的节点也需要成倍增加，如果持续维持这样的架构下去，阿里巴巴购买服务器、数据库产品的支出足够让阿里巴巴破产。也就是从2009年开始，阿里巴巴宣布去IOE（BM的小型机、Oracle数据库、EMC存储设备）计划。

直到2013年7月10日，淘宝重中之重的广告系统使用的Oracle数据库下线，标志着阿里巴巴中最后一个oracle下线。

其主要特性为：

*   处理速度非常快
*   安全级别高:支持快闪以及完美的恢复，即使硬件坏了 也可以恢复到故障发前一秒
*   可以做到30s以内故障转移。

### 2\. MS SQL Server

Microsoft SQL Server 是一个全面的数据库平台，使用集成的商业智能 （BI）工具提供了企业级的数据管理。Microsoft SQL Server数据库引擎为关系型数据和结构化数据提供了更安全可靠的存储功能，使您可以构建和管理用于业务的高可用和高性能的数据应用程序。

这类DBMS被广泛应用于高校学生的教学工作和中小企业的日常管理工作，主要是因为以下特点：

*   有微软强大的服务体系做配套支持，office办公软件等等
*   图形化用户界面，更加直观简单易用
*   具有很好的伸缩性，可跨界运行。从笔记本电脑到大型处理器可多台使用
*   对web技术的支持，使用户能够容易的将数据库中的数据发布到web上

### 3\. MySQL

MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。

MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。

如果你在互联网公司工作，一定对MySQL不会很陌生，由于其开源的特性，大部分互联网公司会选取DBMS进行开发和创新。

其特点有：

*   开放源码
*   高度非过程化
*   以一种语法结构提供多种使用方式
*   语言简洁，易学易用。

总结一下上面三种DBMS，可以得到以下结果：

![](https://image.woshipm.com/wp-files/2021/11/jE3kSa4CoqaQgISrHJkK.png)

这篇主要是把数仓的前世DBMS讲清楚，对于现世数仓以及大家耳熟能详的OLAP讲解，敬请期待下一篇。

本文由 **@业务数智化** 原创发布于人人都是产品经理，未经许可，禁止转载

题图来自 Unsplash，基于CC0协议

赞赏 收藏已收藏19 点赞已赞5更多精彩内容，请关注人人都是产品经理微信公众号或下载App[1年](https://www.woshipm.com/tag/1%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[数仓管理](https://www.woshipm.com/tag/%e6%95%b0%e4%bb%93%e7%ae%a1%e7%90%86)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=秒懂数仓的前世：DBMS和OLTP到底是啥？（上篇）&url=https://www.woshipm.com/data-analysis/5188427.html&pic=https://image.woshipm.com/wp-files/2021/10/tk2Djw8V0gkQXLkOYXYC.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5188427.html)分享