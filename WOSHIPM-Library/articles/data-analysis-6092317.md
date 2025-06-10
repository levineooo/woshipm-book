# 用户分层-如何使用SQL计算RFM模型
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [李昂](https://www.woshipm.com/u/217107)
**Published:** 2024-12-05  
**Stats:** 👁️ 3566 views | 💬 1 comments | ⭐ 38 collects
**Tags:** RFM模型,用户分层,经验分享
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/6092317.html)
{% endhint %}
> 在产品运营中，我们经常需要将用户进行分层，以便更好针对性做运营策略。本文分享了如何用SQL结合RFM模型，对用户进行分层的方法，供大家参考学习。

---

## 用户分层-如何使用SQL计算RFM模型

[![](https://image.woshipm.com/wp-files/2018/09/84cwu5DU1YBztxeibDoD.jpg!/both/72x72)](https://www.woshipm.com/u/217107)[李昂](https://www.woshipm.com/u/217107) ![](https://static.woshipm.com/tag/1101_1@2x.png)![](https://static.woshipm.com/tag/1301_1@2x.png) 关注2024-12-051 评论 3566 浏览 38 收藏 13 分钟[🔗 产品经理在不同的职业阶段，需要侧重不同的方面，从基础技能、业务深度、专业领域到战略规划和管理能力。](https://ke.qidianla.com/courses/90pm)

> 在产品运营中，我们经常需要将用户进行分层，以便更好针对性做运营策略。本文分享了如何用SQL结合RFM模型，对用户进行分层的方法，供大家参考学习。

![](https://image.woshipm.com/2023/04/13/a66ce374-d9ee-11ed-bd74-00163e0b5ff3.jpg)

RFM模型通常用于分析用户数据库，以识别最有价值的用户。

**Recency (R)**– 用户最后一次购买的时间。距离现在时间越短，用户再次购买的可能性越大。**Frequency (F)**\-用户在一定时间内购买的次数。频率越高，表明用户对品牌的忠诚度越高。**Monetary (M)**\-用户在一定时间内为公司带来的总收益。金额越高，表明用户的价值越大。

![](https://image.woshipm.com/2024/12/04/164ee6bc-b1ff-11ef-9cc7-00163e0b5ff3.png)

通过RFM模型，企业可以对用户进行细分，比如将用户分为高价值用户、需要挽留的用户、有潜力的用户等，然后根据这些细分采取不同的营销策略。

![](https://image.woshipm.com/2024/08/01/fe808f10-4ff5-11ef-b783-00163e0b5ff3.png)

作为产品经理如何使用SQL计算RFM模型，对用户进行分层呢？

## 一、数据源准备

![](https://image.woshipm.com/2024/08/01/104b76aa-4ff7-11ef-84b5-00163e0b5ff3.png)

用户会员表数据

![](https://image.woshipm.com/2024/08/01/7f6ae8a4-4ff7-11ef-ab7e-00163e0b5ff3.png)

订单表数据(部分字段)

因 MySQL 性能问题，我们将数据通过Binlog订阅同步到 Hive 进行计算；

![](https://image.woshipm.com/2024/08/01/cc6151b6-4ff7-11ef-a653-00163e0b5ff3.png)

## 而、数据计算

### 2.1、RFM模型的计算步骤如下：

**确定时间范围**：首先确定分析的时间范围，比如过去一年或过去六个月。

[![](https://image.woshipm.com/2023/08/02/bf59b8ba-30e4-11ee-88e7-00163e0b5ff3.png)做了8年产品经理后，我是这么看产品经理的我个人是从非常初级的产品经理做起，再到负责一个大产品的项目管理，现在有幸跳出了日常基础的工作更多的去看产品的PMF，product strategy...查看详情 >](https://ke.qidianla.com/courses/bcpm)

这里我们使用

> AND TO\_DATE(o.SOCreateTime) >= ‘2024-04-01′  
> AND TO\_DATE(o.SOCreateTime) <=’2024-06-30’

**收集数据**：收集客户在所选时间范围内的所有交易记录。

> SELECT m.mimemberid AS memberid,  
> MAX(o.socreatetime) AS last\_order\_time,  
> DATEDIFF(‘2024-07-01’, MAX(o.socreatetime)) AS R,  
> COUNT(o.soordersn) AS F,  
> SUM(o.sototalamount) AS M  
> FROM ods\_travel.v\_teschoolinnermarket\_memberinfo m  
> LEFT JOIN paimon.fts\_base\_tetravelrvsorder.schoolorder o  
> ON m.mimemberid = o.somemberid  
> WHERE o.SOPayStatus = 2  
> AND m.MIStatus = 0  
> AND TO\_DATE(o.SOCreateTime) >= ‘2024-04-01’  
> AND TO\_DATE(o.SOCreateTime) <= ‘2024-06-30’  
> GROUP BY m.mimemberid  
> ORDER BY R ASC;

**计算Recency (R)**：

*   对于每个客户，找出最后一次购买的日期。
*   计算从最后一次购买到当前日期的天数或月数。

**计算Frequency (F)**：

*   对于每个客户，计算在所选时间范围内的购买次数。

**计算Monetary (M)**：

*   对于每个客户，计算在所选时间范围内的总购买金额。

> DROP TABLE IF EXISTS adsxyt\_travel.userrfm;  
> CREATE TABLE adsxyt\_travel.userrfm  
> STORED AS ORC AS  
> WITH mada\_order\_num AS (  
> SELECT a.SOMemberId AS memberid, COUNT(\*) AS ordernum  
> FROM paimon.fts\_base\_tetravelrvsorder.SchoolOrder a  
> INNER JOIN paimon.fts\_base\_tetravelrvsorder.SchoolOrderExpand b ON a.SOOrderSn = b.SOEOrderSn  
> WHERE a.SOPayStatus = 2  
> AND TO\_DATE(a.SOCreateTime) >= ‘2024-04-01’  
> AND TO\_DATE(a.SOCreateTime) <= ‘2024-06-30’  
> GROUP BY a.SOMemberId  
> ),  
> base\_data AS (  
> — 查询最原始的RFM值  
> SELECT m.mimemberid AS memberid, MAX(o.socreatetime) AS last\_order\_time  
> , DATEDIFF(‘2024-07-01’, MAX(o.socreatetime)) AS R  
> , COUNT(o.soordersn) AS F, SUM(o.sototalamount) AS M  
> FROM ods\_travel.v\_teschoolinnermarket\_memberinfo m  
> LEFT JOIN paimon.fts\_base\_tetravelrvsorder.schoolorder o ON m.mimemberid = o.somemberid  
> WHERE o.SOPayStatus = 2  
> AND m.MIStatus = 0  
> AND TO\_DATE(o.SOCreateTime) >= ‘2024-04-01’  
> AND TO\_DATE(o.SOCreateTime) <= ‘2024-06-30’  
> GROUP BY m.mimemberid  
> ),  
> quartiles AS (  
> — 按照数据的4分位数计算RFM得分  
> SELECT \*, NTILE(4) OVER (ORDER BY R) AS R\_score  
> , NTILE(4) OVER (ORDER BY F DESC) AS F\_score  
> , NTILE(4) OVER (ORDER BY M DESC) AS M\_score  
> FROM base\_data  
> ),  
> quartiles\_fixed AS (  
> — 四分位数修正  
> SELECT \*  
> , CASE  
> WHEN R\_score = 1 THEN 4  
> WHEN R\_score = 2 THEN 3  
> WHEN R\_score = 3 THEN 2  
> ELSE 1  
> END AS R\_score\_fixed  
> , CASE  
> WHEN F\_score = 1 THEN 1  
> WHEN F\_score = 2 THEN 2  
> WHEN F\_score = 3 THEN 3  
> ELSE 4  
> END AS F\_score\_fixed  
> , CASE  
> WHEN M\_score = 1 THEN 1  
> WHEN M\_score = 2 THEN 2  
> WHEN M\_score = 3 THEN 3  
> ELSE 4  
> END AS M\_score\_fixed  
> FROM quartiles  
> ),  
> means AS (  
> SELECT AVG(R\_score\_fixed) AS r\_mean, AVG(F\_score\_fixed) AS f\_mean  
> , AVG(M\_score\_fixed) AS m\_mean  
> FROM quartiles\_fixed  
> )  
> SELECT qf.memberid, mc.ordernum, qf.last\_order\_time, qf.R, qf.F  
> , qf.M, qf.R\_score\_fixed AS R\_score, qf.F\_score\_fixed AS F\_score, qf.M\_score\_fixed AS M\_score, m.r\_mean  
> , m.f\_mean, m.m\_mean  
> , CASE  
> WHEN R\_score\_fixed > m.r\_mean THEN ‘高’  
> ELSE ‘低’  
> END AS R\_label  
> , CASE  
> WHEN F\_score\_fixed > m.f\_mean THEN ‘高’  
> ELSE ‘低’  
> END AS F\_label  
> , CASE  
> WHEN M\_score\_fixed > m.m\_mean THEN ‘高’  
> ELSE ‘低’  
> END AS M\_label  
> FROM quartiles\_fixed qf  
> CROSS JOIN means m  
> LEFT JOIN order\_num mc ON qf.memberid = mc.memberid  
> ORDER BY qf.R ASC;

通过一系列公共表表达式（CTEs）构建了一个RFM（最近购买行为、购买频率、购买金额）分析模型，用于对会员进行分类。首先，它计算了每个会员在指定时间段内的订单数量、最后下单时间、以及基于这些数据的RFM原始值。接着，通过四分位数方法为每个RFM值分配得分，并进行修正以确保得分与会员价值正相关。然后，计算这些得分的平均值，用于确定每个会员的RFM标签（高或低）。最后，结合这些标签和订单数量，对会员进行分类，并按最近购买行为进行排序。

**为RFM打分**：

*   将R、F、M的值分别进行标准化或归一化，以便于比较。例如，可以使用排名或百分比来为每个维度打分。
*   Recency可以按照时间从近到远进行排序，然后分配分数，时间越近分数越高。
*   Frequency可以按照购买次数从多到少进行排序，然后分配分数，购买次数越多分数越高。
*   Monetary可以按照总金额从高到低进行排序，然后分配分数，金额越高分数越高。

**综合RFM得分**：

*   将R、F、M的分数相加，得到每个客户的RFM总分。
*   根据总分将客户分为不同的群体，如高价值客户、需要挽留的客户、低价值客户等。

**分析和应用**：

*   分析不同RFM群体的特征，制定相应的营销策略。
*   例如，对于高RFM得分的客户，可以提供忠诚度奖励或个性化服务；对于低RFM得分的客户，可以设计促销活动以提高其购买频率和金额。

**四等位数法**

其中使用了四分位数，是统计学分位数中的一种，把所有数值从低到高（或者从高到底）排列并分成四等份，处于三个分割点位置的数值就是四分位数。  
一般表示为：  
Q1：样本排列中处于25%位置的数字；  
Q2：又称为中位数，指的是样本排列中处于50%位置，即中间位置的数据；  
Q3：样本排列中处于75%位置的数字。

假设样本数据项数一共是N：  
则Q1的位置数值=（N+1）/4；  
Q2的位置数值=（N+1)/2；  
Q3的位置数值=3（N+1)/4。  
如果（N+1）恰好是4的倍数，则确定四分位数比较简单，如果不是4的倍数，相关位置的四分位数就应该是相邻两个数值的标志值的平均数。权数的大小取决于两个数值距离的远近，距离越近权数越大，距离越远，权数越小，权数之和等于1。

> DROP TABLE IF EXISTS adsxyt\_travel.userrfmcategory;  
> CREATE TABLE adsxyt\_travel.userrfmcategory  
> STORED AS ORC AS  
> SELECT memberid, mada\_ordernum, last\_order\_time, R, F, M  
> , R\_score, F\_score, M\_score, r\_mean, f\_mean  
> , m\_mean, R\_label, F\_label, M\_label  
> , CASE  
> WHEN R\_label = ‘高’  
> AND F\_label = ‘高’  
> AND M\_label = ‘高’  
> THEN ‘重要价值用户’  
> WHEN R\_label = ‘高’  
> AND F\_label = ‘低’  
> AND M\_label = ‘高’  
> THEN ‘重要发展用户’  
> WHEN R\_label = ‘低’  
> AND F\_label = ‘高’  
> AND M\_label = ‘高’  
> THEN ‘重要保持用户’  
> WHEN R\_label = ‘低’  
> AND F\_label = ‘低’  
> AND M\_label = ‘高’  
> THEN ‘重要挽留用户’  
> WHEN R\_label = ‘高’  
> AND F\_label = ‘高’  
> AND M\_label = ‘低’  
> THEN ‘一般价值用户’  
> WHEN R\_label = ‘高’  
> AND F\_label = ‘低’  
> AND M\_label = ‘低’  
> THEN ‘一般发展用户’  
> WHEN R\_label = ‘低’  
> AND F\_label = ‘高’  
> AND M\_label = ‘低’  
> THEN ‘一般保持用户’  
> WHEN R\_label = ‘低’  
> AND F\_label = ‘低’  
> AND M\_label = ‘低’  
> THEN ‘一般挽留用户’  
> ELSE ‘未分类’  
> END AS user\_category  
> FROM adsxyt\_travel.userrfm;

*   使用CASE语句根据R、F、M的标签值（’高’或’低’）来确定用户类别。这些标签可能代表了用户在最近性（Recency）、频率（Frequency）、货币价值（Monetary）三个方面的表现。
*   user\_category是根据R、F、M的标签值组合来定义的用户类别，如“重要价值用户”、“重要发展用户”等。（参照上述表格）

## 三、数据结果

敏感数据不做暂时，本文提供 SQL 计算解决思路，具体可参照实验。

本文由 @李昂 原创发布于人人都是产品经理。未经作者许可，禁止转载

题图来自Unsplash，基于CC0协议

该文观点仅代表作者本人，人人都是产品经理平台仅提供信息存储空间服务

赞赏 收藏已收藏38 点赞已赞9更多精彩内容，请关注人人都是产品经理微信公众号或下载App[RFM模型](https://www.woshipm.com/tag/rfm%e6%a8%a1%e5%9e%8b)[用户分层](https://www.woshipm.com/tag/%e7%94%a8%e6%88%b7%e5%88%86%e5%b1%82)[经验分享](https://www.woshipm.com/tag/%e7%bb%8f%e9%aa%8c%e5%88%86%e4%ba%ab)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=用户分层-如何使用SQL计算RFM模型&url=https://www.woshipm.com/data-analysis/6092317.html&pic=https://image.woshipm.com/2023/04/13/a66ce374-d9ee-11ed-bd74-00163e0b5ff3.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/6092317.html)分享