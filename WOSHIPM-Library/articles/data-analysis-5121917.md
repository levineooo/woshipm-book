# 数据埋点：如何标识你的用户
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [Jarvan](https://www.woshipm.com/u/678750)
**Published:** 2021-09-03  
**Stats:** 👁️ 10136 views | 💬 3 comments | ⭐ 51 collects
**Tags:** 1年,初级,数据埋点,用户标识
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5121917.html)
{% endhint %}
> 编辑导语：用户标识可以助力于用户行为的分析，而用户账号ID标识是用户标识的有效方式。那么，针对没有账号体系的产品，用户标识又可以如何操作？本篇文章里，作者就如何借用设备信息作为用户标识进行了阐述和总结，一起来看一下。

---

## 数据埋点：如何标识你的用户

[![](https://static.woshipm.com/APP_U_201904_20190428221614_6166.jpeg?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/678750)[Jarvan](https://www.woshipm.com/u/678750) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2021-09-033 评论 10136 浏览 51 收藏 7 分钟[🔗 B端产品经理需要更多地进行深入的用户访谈、调研、分析，而C端产品经理需要更多地快速的用户测试、反馈、迭代](https://ke.qidianla.com/courses/bcpm)

> 编辑导语：用户标识可以助力于用户行为的分析，而用户账号ID标识是用户标识的有效方式。那么，针对没有账号体系的产品，用户标识又可以如何操作？本篇文章里，作者就如何借用设备信息作为用户标识进行了阐述和总结，一起来看一下。

![](https://image.woshipm.com/wp-files/2021/09/UhlHN3UZLBkM4ZFrkHjZ.jpg)

选取合适的用户标识对于提高用户行为分析的准确性有非常大的影响，也是我们进行数据埋点时需要最优先考虑的问题。因此，我们在进行任何数据接入之前，都应当先确定如何来标识用户。

很多同学看到这可能会有点纳闷，如何标识用户？难道不是通过用户的账号ID吗？

你说得没错，不过用户账号是针对于有账号体系的产品，而对于那些没有账号体系，例如官网、活动落地页，或者需要分析游客行为这样的场景下，我们怎么才能对不同的用户进行标识呢？

我们很容易发现，任何用户在获取线上服务时，都需要通过设备。

所以，我们很自然地就会想到使用设备的一些信息来近似作为用户标识。

那么，设备的哪些信息可以作为用户标识呢？

## 一、如何获取移动端设备唯一标识

移动端主要的设备就是手机，我们这里主要讲如何获得Android和iOS的设备ID。

### 1\. 如何获取Android设备的唯一标识

首先我们来看下Android的设备信息。

![数据埋点：如何标识你的用户](https://image.woshipm.com/wp-files/2021/09/FnzOWpWqp6izbixP7FKw.png)

![数据埋点：如何标识你的用户](https://image.woshipm.com/wp-files/2021/09/Nw1OyHo4X9ZEnMEnGzn1.png)

![数据埋点：如何标识你的用户](https://image.woshipm.com/wp-files/2021/09/XszHWktkzvXHX4oMDFQy.png)

可以看到，上述Android的设备信息中，UDID是最靠谱的，但是Android ID是最容易获取到的。

所以，一般市场上的策略，会使用 UUID。

但是App 卸载重装 UUID 会变，为了保证设备 ID 不变，可以把UUID写入.so的文件，这样即使重装APP也不会改变。

还有一种策略是使用 Android Id 作为设备 ID，虽然刷机、重装系统或恢复出厂设置会改变，但是一般用户不会这么操作。

### 2\. 如何获取iOS设备的唯一标识

iOS设备也有IMEI、MEID、MAC地址、UDID、UUID等设备信息，前几个现在都禁止获取了，而UUID是会变化的。

iOS也有一些独有的设备信息。

![数据埋点：如何标识你的用户](https://image.woshipm.com/wp-files/2021/09/kDu9iU3os8J7CFSiMq6y.png)

所以总结起来，iOS好像没有什么靠谱的标记用户的方法，别急，牛逼的程序员们总是能想出各种骚操作。

现在iOS一般标记用户的方式是获取每台设备的UUID，将其写入keychain中进行固化，这样即使用户重装APP，保存在keychain中的UUID也不会改变了。

## 二、如何获取web端和微信小程序的设备唯一标识

说完移动设备的，我们再来看一下如何获取web端和微信小程序的设备唯一标识。

web端其实也分为两种访问方式，PC端浏览器和移动端浏览器，但其实都是一样的。

web端默认情况下使用 cookie\_id，当用户首次访问网站时，我们会自动生成一串cookie数据，然后存贮在浏览器的 cookie 中。

cookie的生成规则可以是五段不同含义的字段拼接而成来保证唯一性，其中包括两段时间戳，一段屏幕宽高，一段随机数，一段 UA 值。

而微信小程序端，默认情况下使用 UUID，但是删除小程序，UUID 会变。

为了保证设备 ID 不变，建议获取并使用 openid。

如果选择使用 openid 的话，要注意将获取到openid之前用户的操作暂存。

因为获取 openid 是一个异步的操作，而冷启动事件等会先发生，这时候这个冷启动事件还没有获取到openid。

所以我们需要把先发生的操作暂存起来，等获取到 openid 后拼接好再发送数据。

## 三、最后

让我们最后来总结一下Android、iOS、web和小程序是如何获取设备唯一标识的：

1.  Android有两种方式，第一种是获取UUID写入.so文件固化成UDID，第二种是获取Android ID。
2.  iOS是获取UUID，然后写入keychain中进行保存，然后每次从keychain中取用户标识。
3.  web一般是生成cookie并存在设备的浏览器中。
4.  微信小程序，可以使用UUID，但是用户删除小程序后会变化，建议使用openID。使用openID要注意冷启动的时候，要暂存操作事件，获取到openID后再上传。

作者：Jarvan；公众号：产品叨比叨

本文由 @Jarvan 原创发布于人人都是产品经理。未经许可，禁止转载

题图来自Unsplash，基于CC0协议

赞赏 收藏已收藏51 点赞已赞12更多精彩内容，请关注人人都是产品经理微信公众号或下载App[1年](https://www.woshipm.com/tag/1%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[数据埋点](https://www.woshipm.com/tag/%e6%95%b0%e6%8d%ae%e5%9f%8b%e7%82%b9)[用户标识](https://www.woshipm.com/tag/%e7%94%a8%e6%88%b7%e6%a0%87%e8%af%86)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=数据埋点：如何标识你的用户&url=https://www.woshipm.com/data-analysis/5121917.html&pic=https://image.woshipm.com/wp-files/2021/09/UhlHN3UZLBkM4ZFrkHjZ.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5121917.html)分享