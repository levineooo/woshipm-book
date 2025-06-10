# 3分钟，看懂用户偏好分析
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [码工小熊](https://www.woshipm.com/u/1285820)
**Published:** 2021-12-07  
**Stats:** 👁️ 9107 views | 💬 3 comments | ⭐ 35 collects
**Tags:** 2年,初级,用户偏好
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5238934.html)
{% endhint %}
> 编辑导语：一提到用户画像，很多人都会直观地想到：通过用户画像来分析用户偏好。但是有些同学可能不懂得用户偏好该如何分析，作者整理了一份用户偏好分析攻略，与你分享，希望对你有所帮助。

---

## 3分钟，看懂用户偏好分析

[![](https://static.woshipm.com/APP_U_202106_20210620005424_1343.jpeg?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/1285820)[码工小熊](https://www.woshipm.com/u/1285820) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2021-12-073 评论 9107 浏览 35 收藏 6 分钟[🔗 产品经理在不同的职业阶段，需要侧重不同的方面，从基础技能、业务深度、专业领域到战略规划和管理能力。](https://ke.qidianla.com/courses/90pm)

> 编辑导语：一提到用户画像，很多人都会直观地想到：通过用户画像来分析用户偏好。但是有些同学可能不懂得用户偏好该如何分析，作者整理了一份用户偏好分析攻略，与你分享，希望对你有所帮助。

![](https://image.woshipm.com/wp-files/2021/12/CjVlIo17z7BQDMxJGfqO.jpg)

大家好，我是爱学习的小xiong熊妹。

一提到用户画像，很多人直观地会想到：通过用户画像分析出用户偏好。到底用户偏好该如何做分析，今天简单分享下，给大家一个懒人攻略。

## 一、如何量化用户偏好

直观上看，用户偏好，就是：

*   A用户喜欢产品甲
*   B用户喜欢产品乙

问题是：如何通过数据的形式，把这个关系表达出来。

最简单的方法是：

*   把用户分类标注出来（如上边的A用户、B用户）
*   把产品标准出来（比如甲产品、乙产品）
*   设定“喜欢”的标准，比如一周内购买2次以上
*   计算每个用户，符合“喜欢”产品的人数

如下图，A、B用户各抽100人，观察其对甲乙产品“喜欢”的人数，这样就能简单的把“喜欢”表达出来了。

![3分钟，看懂用户偏好分析](https://image.woshipm.com/wp-files/2021/12/N2xWzo4OTg6XAq4ILlwV.png)

## 二、如何评价用户偏好

如果真如上边例子的话，用户的喜好是很明显的。把人数换算成比例，可以清晰看到：抽出的100名A用户，90%都喜欢甲产品，抽出的100名B用户，90%都喜欢乙产品。那肯定两类用户喜好不同。

但实际情况会很纠结，比如下图这种情况。理论上，年轻人喜欢喝汽水，中年喜欢喝茶，老年喜欢喝牛奶。但是在数据上看，其比例差异也就不到20%。很多时候会让人纠结：到底年龄和饮料之间有没有关系呀？

![3分钟，看懂用户偏好分析](https://image.woshipm.com/wp-files/2021/12/gJuZ0usbJj6cpLApeINp.png)

这时候可以用统计学中独立性检验，一定程度减少纠结。

## 三、什么是独立性检验

（大家可以直接略过这一段）独立性检验是一种基础方法。所谓独立性检验，指的是其利用了“两个互独立的事件同时发生的概率，等于两件事单独发生的概率的乘积”的原理进行检验。

![3分钟，看懂用户偏好分析](https://image.woshipm.com/wp-files/2021/12/IygYO5K1dtpPp1F99mhB.png)

独立性检验的原假设是两个变量独立。大家知道，原假设就是要被怼翻的，所以如果假设检验不通过（P值小于0.05），就能拒绝原假设，认为两个变量有关系。

## 四、如何做独立性检验

具体的统计学原理稍显复杂，既然是懒人攻略，那么就直接给操作步骤：

第一步：根据题目，给出观察数据

![3分钟，看懂用户偏好分析](https://image.woshipm.com/wp-files/2021/12/OAYIVmqyMZgXe52aejI7.png)

第二步：计算期望频数数据

![3分钟，看懂用户偏好分析](https://image.woshipm.com/wp-files/2021/12/jK1EKPAUakp4JiFrUzn9.png)

第三步：使用公式计算卡方检验结果

![3分钟，看懂用户偏好分析](https://image.woshipm.com/wp-files/2021/12/Mwl7j2lT8GbJwusB0xWZ.png)

大家直接看P值就好了，小于0.05，推翻原假设，年龄和饮料选择之间不独立，可认为差异是真实存在的。

## 五、背后的问题

上边虽然给了很多方法，但是一定要注意：用户喜好并不是固定不变的，过去的数据参考意义会很有限。

*   比如把“偏好”定义为购买。那么购买很可能受到价格、品牌、口碑等多方面影响。
*   比如把“偏好”定义为浏览页面。那么浏览行为很可能受到标题党、蹭热点等影响。

可能一个促销活动，一个蹭热点的标题，就把前边发现的结论推翻了。

总之，通过简单的数据定义出来的“偏好”，可能不是真正的偏好，其中夹杂了大量的其他原因。需要更多方法来剔除这些原因。

作者：码工小熊，微信公众号：码工小熊

本文由 @码工小熊 原创发布于人人都是产品经理，未经许可，禁止转载。

题图来自 Unsplash，基于CC0协议

赞赏 收藏已收藏35 点赞已赞7更多精彩内容，请关注人人都是产品经理微信公众号或下载App[2年](https://www.woshipm.com/tag/2%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[用户偏好](https://www.woshipm.com/tag/%e7%94%a8%e6%88%b7%e5%81%8f%e5%a5%bd)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=3分钟，看懂用户偏好分析&url=https://www.woshipm.com/data-analysis/5238934.html&pic=https://image.woshipm.com/wp-files/2021/12/CjVlIo17z7BQDMxJGfqO.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5238934.html)分享