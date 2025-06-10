# 应用层数据安全管控实践—权限模型篇
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [明明](https://www.woshipm.com/u/152857)
**Published:** 2022-11-03  
**Stats:** 👁️ 4647 views | 💬 0 comments | ⭐ 23 collects
**Tags:** 2年,初级,权限模型
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5655333.html)
{% endhint %}
> 权限的本质是人与人之间的信任建立和打散，权限管控的是人与权限的关系，本文以应用层数据安全管控实践为例，探讨权限模型的迭代历程和应用实践，希望对你有所启发。

---

## 应用层数据安全管控实践—权限模型篇

[![](https://static.woshipm.com/APP_U_201610_20161018103802_280.jpeg?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/152857)[明明](https://www.woshipm.com/u/152857) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2022-11-030 评论 4647 浏览 23 收藏 8 分钟[🔗 产品经理的职业发展路径主要有四个方向：专业线、管理线、项目线和自主创业。管理线是指转向管理岗位，带一个团队..](https://ke.qidianla.com/courses/90pm)

> 权限的本质是人与人之间的信任建立和打散，权限管控的是人与权限的关系，本文以应用层数据安全管控实践为例，探讨权限模型的迭代历程和应用实践，希望对你有所启发。

![](https://image.woshipm.com/wp-files/2022/11/6ItQmppMBgNyodkg63h3.png)

## 一、权限模型迭代概览

权限的本质其实是人与人之间信任关系的建立和打散，权限管控的核心是声明人和权限的关系。纵观行业发展，权限管控模型先后经历了以ACL模型为代表的1.0时代和以RBAC模型为代表的2.0时代，现在正式迈入以TRFAC模型为代表的3.0代。

![](https://image.woshipm.com/wp-files/2022/11/SDimSBeHRDk4pPwe2I5e.jpeg)

图表1：基础权限模型示意图

【基础权限模型介绍】注释：

\[1\] ACL模型：即Access Control List，访问控制列表，用户与权限直接关联，直接维护列表中用户与资源的关系从而达到权限管控的目的。

\[2\] RBAC模型：即Role-Based Access Control，基于角色的访问控制，RBAC模型则是角色与权限进行关联，用户成为相应的角色而获得对应的权限。

\[3\] TRFAC模型：即target-resource-factor-act Control，基于“对象-资源-条件-行为”的权限控制，TRFAC模型描述了“XX对象（人/应用/组织/角色等）对 XX资源（页面/菜单/按钮/数据等）在 XX条件/因素（城市=北京等）下拥有 XX行为类型（增删改查等）的权限”。

## 二、权限模型在产品设计中的应用

![](https://image.woshipm.com/wp-files/2022/11/H2nqy4DYhvUqnfQnZtHh.png)

图表2：基于权限模型设计的XX权限产品DEMO

## 三、TRFAC模型实践

数据产品天然存在人和资源之间的复杂关系，传统权限模型，无论是ACL模型还是RBAC模型，都不能很好地声明人和权限的关系。以下就以两个典型案例的解决方案，来阐述TRFAC模型的应用实践。

### \[ 案例1 \]

某业务团队需要实现报表权限控制（维度权限）需求。业务逻辑并不复杂，但是人和资源的权限关系比较细，传统ACL模型和RBAC模型均不能满足，因此，我们采用TRFAC模型来实现。

首先，鉴权主体是人，资源为报表；然后，行级别权限控制，可以理解为在正常资源关系中，新增了“维度值”附属条件，比如，当报表资源满足“城市=北京”的条件时，用户XX拥有对该报表的权限。所以我们实现路径如下：

![](https://image.woshipm.com/wp-files/2022/11/leOwehS1tR66pI9siWTB.jpeg)

图表3：行级别权限实现逻辑图

![](https://image.woshipm.com/wp-files/2022/11/yDaUtVkQQDdHxBYOHTzJ.png)

图表4：行级别权限鉴权流程示意图

思考：为什么不把报表中每一行数据都当作是资源注册到权限中心，这样行级别权限其实只是一次更细粒度的资源鉴权，为什么要把维度值当作是条件呢？

### \[ 案例2 \]

某某智能数仓平台（其实就是指标/维度生产维护服务平台），需要权限中心帮助实现功能和数据权限控制。系统简易架构图如下：

![](https://image.woshipm.com/wp-files/2022/11/v6CHuJMzWtgY52X02QBL.jpeg)

图表5：XX智能数仓平台系统架构图

该智能数仓平台兼具功能和数据权限管控需求，其中功能权限包括业务线/业务域/业务过程的管理和维护，修饰词的管理和维护，指标/维度的录入和管理维护；数据权限包括“指标+维度”的数据探查权限，底层库表的数据读取权限，具体组织形式如下图所示：

![](https://image.woshipm.com/wp-files/2022/11/hoNF86226lZokZM8vnjo.jpeg)

图表6：XX智能数仓平台功能权限管理体系设计

![](https://image.woshipm.com/wp-files/2022/11/LZvnO9sX3QzHs0h2H3NQ.png)

图表7：XX智能数仓平台角色管控体系

在业务逻辑上比较复杂，既有功能权限，又有数据权限，同时资源之间还有归属和继承关系，同时还有较为丰富的角色体系，这时候单纯用ACL或者RBAC模型都无法全部满足需求，因此我们采用TRFAC模型来实现：

![](https://image.woshipm.com/wp-files/2022/11/xpUFMRX3Y9yMjQ72NDEh.jpeg)

图表8：角色-权限实现逻辑图

### 案例2小结

*   业务线、业务域、业务过程在TRFAC模型看来都是“资源”：平台超管角色对业务线拥有管理维护权限，业务线管理员对业务域拥有管理维护权限，业务域管理员对业务过程拥有管理维护权限
*   指标/维度的探查权限属于数据权限，既能以角色-权限的方式来管控，也能以人-资源-权限的方式管控
*   资源需要依附对象，也就是触发鉴权动作的对象
*   以系统为依附对象，即进入系统时对所有资源都触发一遍鉴权询问。优点是业务逻辑简单，不用设计复杂的权限关系；缺点是鉴权响应速度和性能较差
*   以菜单/模块/页面为依附对象，即进入相应模块或者页面时触发鉴权询问。优点是无论是权限关系复杂度还是鉴权速度和性能都比较均衡；缺点是复杂或者细粒度业务需求满足不了
*   以具体的触发按钮为依附对象，即点击XX按钮时触发鉴权询问。优点是自由度和灵活性高，复杂业务需求容易满足，且性能优异；缺点是管理维护成本高，不通用，迭代更新成本高

本文由 @明明 原创发布于人人都是产品经理，未经许可，禁止转载

题图来自 unsplash，基于 CC0 协议

该文观点仅代表作者本人，人人都是产品经理平台仅提供信息存储空间服务。

赞赏 收藏已收藏23 点赞已赞3更多精彩内容，请关注人人都是产品经理微信公众号或下载App[2年](https://www.woshipm.com/tag/2%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[权限模型](https://www.woshipm.com/tag/%e6%9d%83%e9%99%90%e6%a8%a1%e5%9e%8b)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=应用层数据安全管控实践—权限模型篇&url=https://www.woshipm.com/data-analysis/5655333.html&pic=https://image.woshipm.com/wp-files/2022/11/6ItQmppMBgNyodkg63h3.png)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5655333.html)分享