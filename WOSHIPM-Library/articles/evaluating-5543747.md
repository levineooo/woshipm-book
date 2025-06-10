# 巧用App评论成为用户增长抓手
{% hint style="info" %}
**Category:** Evaluating
**Author:** [AppLens](https://www.woshipm.com/u/1438337)
**Published:** 2022-07-28  
**Stats:** 👁️ 6014 views | 💬 2 comments | ⭐ 16 collects
**Tags:** 2年,APP评论,初级
**Original:** [View on woshipm.com](https://www.woshipm.com/evaluating/5543747.html)
{% endhint %}
> 编辑导语：「评分及评论」功能是App开发者了解用户产品使用感受的有效方式，利用这一点，App Store通过评分体系（星级、评论数量、用户ID、评语）帮助用户甄选出值得信赖的优质产品。具体是怎么样的？一起来看一下吧。

---

## 巧用App评论成为用户增长抓手

[![](https://static.woshipm.com/view/woshipm_api_def_20250529150218_5882.png?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/1438337)[AppLens](https://www.woshipm.com/u/1438337) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2022-07-282 评论 6014 浏览 16 收藏 6 分钟[B端产品经理要负责对目标行业和市场进行深入的分析和调研，了解客户的需求、痛点、期望和行为，找到产品的价值主张 🔗](https://ke.qidianla.com/courses/bcpm)

> 编辑导语：「评分及评论」功能是App开发者了解用户产品使用感受的有效方式，利用这一点，App Store通过评分体系（星级、评论数量、用户ID、评语）帮助用户甄选出值得信赖的优质产品。具体是怎么样的？一起来看一下吧。

![](https://image.woshipm.com/wp-files/2022/07/oEvTW4qVytskOBJgQSxW.jpg)

「评分及评论」功能是App开发者了解用户产品使用感受的有效方式。App Store也正是利用这一点，通过评分体系（星级、评论数量、用户ID、评语）帮助用户甄选出值得信赖的优质产品。

随着iOS11的发布，Apple引入了全新的App Store评分机制，实现了用户可以在App内对应用进行评论和评级，提高活动完成率。同时 Apple 让应用的评论和星级展示形式更加突出，**评论和星级顺势成为了一款APP是否值得被下载的「背书」，也成为了曝光到下载的关键转化环节及增加产品整体权重的方式。**

## 一、展示位置

**分值：1-5颗星**

用户的评分会在App的产品页和搜索结果中展示。每位用户都可以为App评分并算入App的总评分里。App Store的每个地区都会显示一个总评分。

![](https://image.woshipm.com/wp-files/2022/07/XM3wXFcLARycpuhuAiGY.png)

来源Apple官网

## 二、评分差距

![](https://image.woshipm.com/wp-files/2022/07/KAQ4KNP8eZOe66hku9Kj.jpg)

细心的开发者应该已经发现在App Store众多的产品中，**有很多产品评分动辄就在百万或千万级别。这样令人羡慕的数量级是如何达到的呢？**

### **1\.** **评分弹窗样式**

巧妙构思评分弹窗话术与形式，能够为你的App增添好评。

1）常见的评分弹窗样式，需要用户为你的App亲自打分。

![](https://image.woshipm.com/wp-files/2022/07/p9zW5AJcrB9cWwnUTAUM.png)

2）稍稍设计一下，把推荐给用户的评分弹窗默认5星好评，这个巧妙的办法能够为你增添更多的5星评价。

![](https://image.woshipm.com/wp-files/2022/07/zuYS2WHs6i5Uvq9kOI03.png)

3）用户进行评星后继续邀请文字评论，分享更多用户对这款App的体验详情，帮助未下载App的人了解该App。

![](https://image.woshipm.com/wp-files/2022/07/0UEU3gfhAU9eT9xLzFfI.png)

### **2\. 寻找时机**

适当的时机向用户征求评分和评论尤为重要，当用户完成一项操作或结束一个任务的时候向用户发起请求，是很好的时机。

切莫频繁向用户发起评论引起用户反感。在365天内，最多向用户发起3次征求评分和评论，并且使用简便地在App内即可完成的方式。

### **3\. 与用户沟通**

通过App Store Connect回复所有关于App的评论。当你回复了评论，撰写该评论的用户将会收到通知并可选择更新其评论。可以随时编辑你的回复内容，只有最新版本的回复会公开显示。

## 三、实现&使用

![](https://image.woshipm.com/wp-files/2022/07/ScnniaIdVamVndjHKSFH.png)

StoreKit

Support in-app purchases and interactions with the App Store.

苹果在StoreKit 这个新的套件下提供了SK Store Review Controller API，为App内购买和与App Store互动提供支持。开发者可使用request Review Review(in:)方法来指示在应用程序的逻辑，让用户根据需求、指定场景对App进行评分或查看。

简单直接的评论方式能促进用户与开发者之间的沟通。用户反馈使用过程中遇到的Bug、分享使用体验、提出建议能够帮助开发者改进应用以帮助用户得到更好的使用体验，开发者也有机会向用户解释他们对产品的误解。

不是所有的用户都讨厌评分弹窗，当你足够出众就会成为焦点。

本文中的部分图片、视频来源于网络，如有侵权，请联系作者删除。

本文由 @秦点数据 原创发布于人人都是产品经理，未经许可，禁止转载

题图来自 Unsplash，基于 CC0 协议

赞赏 收藏已收藏16 点赞已赞4更多精彩内容，请关注人人都是产品经理微信公众号或下载App[2年](https://www.woshipm.com/tag/2%e5%b9%b4)[APP评论](https://www.woshipm.com/tag/app%e8%af%84%e8%ae%ba)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=巧用App评论成为用户增长抓手&url=https://www.woshipm.com/evaluating/5543747.html&pic=https://image.woshipm.com/wp-files/2022/07/oEvTW4qVytskOBJgQSxW.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/evaluating/5543747.html)分享