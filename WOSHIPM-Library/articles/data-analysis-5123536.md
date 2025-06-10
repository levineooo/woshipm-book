# 归因情况调研
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [一个数据人的自留地](https://www.woshipm.com/u/49446)
**Published:** 2021-09-06  
**Stats:** 👁️ 7980 views | 💬 0 comments | ⭐ 22 collects
**Tags:** 1年,初级,归因调研
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5123536.html)
{% endhint %}
> 编辑导语：我们在开始进行广告投放前，常常需要做归因情况的调研，了解并区分不同的归因情况，有助于我们更加精准地进行投放。作者详细介绍了几种归因情况以及如何使用归因数据，一起来看下吧。

---

## 归因情况调研

[![](https://image.woshipm.com/wp-files/2021/09/3YqDNh5meg7ejNmhJ5Ci.jpeg!/both/72x72)](https://www.woshipm.com/u/49446)[一个数据人的自留地](https://www.woshipm.com/u/49446) ![](https://static.woshipm.com/tag/1121_1@2x.png)![](https://static.woshipm.com/tag/1301_1@2x.png)![](https://static.woshipm.com/tag/2103_1@2x.png) 关注2021-09-060 评论 7980 浏览 22 收藏 13 分钟[🔗 产品经理的职业发展路径主要有四个方向：专业线、管理线、项目线和自主创业。管理线是指转向管理岗位，带一个团队..](https://ke.qidianla.com/courses/90pm)

> 编辑导语：我们在开始进行广告投放前，常常需要做归因情况的调研，了解并区分不同的归因情况，有助于我们更加精准地进行投放。作者详细介绍了几种归因情况以及如何使用归因数据，一起来看下吧。

![](https://image.woshipm.com/wp-files/2021/09/f9IdeNsSARvCemuXqSQO.png)

## 一、背景和意义

归因是与广告主做结算的必经过程，包括两个内容：

*   这个激活是来自于谁（ ST / FB / Google / … ）的？
*   这个激活的产生应该归功给哪个前置接触点。

主要结算都依赖于 AppsFlyer 的归因支撑，了解清楚归因信息有助于我们：

*   对情况进行监控，以使得我们可以科学的发现问题、分析问题和解决问题；
*   对投放策略有更精准的认知，为精细化投放策略打造基础。

在实际的投放过程中，我们有 2 种投放方式：

*   点击广告后，跳转 GP，用户自主从 GP 下载安装包；
*   点击广告后，直接下载 apk 安装包。

## 二、结论

跳转 GP，使用 Referrer 归因方式，直接 apk 下载，使用预装归因方式，正常情况下，不会存在被抢归因问题；（当广告主有大量外部投放时，在既定 last-click 归因模型下，不能认为是我们的转化）

跳转 GP 的情况下，AppsFlyer 采用 last-click 归因，可以归因到具体广告位的点击；预装的情况下，AppsFlyer 无法归因到具体的前序行为，仅能通过神策上报是否安装完成，与激活有一些口径差距；

如果第二次激活距离第一次激活超过 90 天，则会被记录为新用户；

归因明细数据，可作用于：

*   精准的广告漏斗分析和监控；
*   CVR 预估模块的输入。

## 三、归因逻辑

### 1\. 激活来自谁？

Appsflyer 上：

*   跳转 GP 下载，采用的是 referrer 方式归因；
*   apk 方式，采用的是预装归因；
*   极少量的来自于 Actionbar 和 Speeddial 的量，采用概率归因。

从当前信息来看，无论是 referrer 归因还是预装归因，如果实施合理，链路正常，都不会存在被抢归因的可能。

Referrer 方式归因：

![](https://image.woshipm.com/wp-files/2021/09/IaT3d3QmasTfMICic5ee.png)

当你点击带有 UTM 参数的链接跳转到 Google Play 商店中下载时，Google Play 商店应用会在你的应用安装期间向应用广播一条 INSTALL\_REFERRER Intent。

如果你达到 Google Play 商店页面的链接中有 referrer 参数，此 Intent 就会包含这个参数的值，也就是UTM的信息被应用下载的时候就被传递到 APP 里面去了，APP 一打开就会上传。

![](https://image.woshipm.com/wp-files/2021/09/0HYGf41ZkNtrrmo2lPVK.png)

预装方式归因：

![](https://image.woshipm.com/wp-files/2021/09/qLksvF6uQVZLr6PhvEkH.png)

渠道包的具体实现方式就是开发者为每一个渠道生成一个渠道安装包，不同渠道包用不同的 Channel ID （渠道标识）来标识，这个id一直跟app绑定；当用户下载了 App 之后，ID会随相关的数据发送回来，从而实现渠道的识别。

![](https://image.woshipm.com/wp-files/2021/09/Ugxk9Ugh3K51xj3Bq66t.png)

概率模型归因：

![](https://image.woshipm.com/wp-files/2021/09/NSsR4hcYOeKuwjb8Aixh.png)

在 AppsFlyer 数据中，存在小部分（3 天 23 个）归因为概率归因，其有个共性，即 site\_id 取值仅为 2 个：

‘immersive\_apk\_Actionbar’，‘immersive\_apk\_Speeddial’。

如何被抢归因？

**（1）Click Spamming**

Click Spamming，也叫 Click Stuffing 或 Click Flood，中文名叫点击欺诈、点击泛滥、点击填塞、大点击、预点击、撞库。

做法是伪造海量广告的曝光或点击，等到用户真安装之后，在 Last Click 归因原则下，如点击后N天内安装的都算成带来点击的渠道，将其他渠道或者是自然量归因抢到自己的渠道中来。

这种方式的作弊成本最低，但隐蔽性很差。

**（2）Click Injection**

Click Injection 、中文名点击劫持、点击注入、小点击， 是当前安卓应用系统最猖獗的作弊手法，虽然谷歌最新的 Google Install Referrer API 供点击引荐时间、应用安装开始的时间，可以有效避免点击劫持，但是基于 Google Play，国内无缘。

做法是弊者利用的是安卓操作系统上的广播接收器（broadcast），由于安卓设备上的所有应用都可以配置广播接收器（包括最常见的 Google Referrer 广播）来收听系统广播的信息—包括接收装置上其他新安装的信息。

如你手机中流氓 APP 或恶意插件监听到你正在安装一个 APP，于是乎同时捏造一个假的点击上报。也就相当于宣告当前的安装是由于这个假点击所产生的，而如果这个用户确实安装了该APP，根据 Last Click 规则监测工具就会认定这个应用是由这个渠道带来的。如下示例：

![](https://image.woshipm.com/wp-files/2021/09/HRNoeIHLUsChSq6kMe9q.png)

*   时间：22:55:57——用户在渠道 A 在点击下载 APP，触发监测平台的监测链接，记录到点击前的数据
*   时间：22:55:59——用户被重定向到应用商店
*   时间：22:57:26——监测平台在收到了渠道 B 的点击
*   时间：22:59:00——应用程序的第一次打开发生

在这个过程中，用户第一次打开应用，根据 Last Click 原则，这次转化归功于渠道 B。

这种方式实现难度更大，更精准，隐蔽性更强。

IOS 不存在，因为 IOS 不存在类似安卓的广播机制，但是还是可以收集IDFA去主动发送去撞库，就是上一种情况。

应对方法：基于 Google Play 的 Referral API 可以获得安装完成的时间戳和第一次打开的时间戳，可以用于判断。

![](https://image.woshipm.com/wp-files/2021/09/ZmvMgcYu3DgrGF1xPt1m.png)

**（3）Installation hijacking**

中文叫安装劫持、渠道包劫持。

做法主要是利用在不同应用市场或推广渠道的渠道包在打包时会通过渠道 ID 区分来源的原理，在用户想要安装APP时对用户发出不安全提示，引导用户前往自己的应用市场，在用户在不知情的状态下改变渠道包的来源，从而让自己应用商店或渠道获取新用户。

当用户在浏览器中下载了一个 App，准备安装的时候，突然画面跳出对话框，提示基于病毒或是其他安全因素，建议用户从手机厂商的「官方渠道」下载 App，一旦用户选择同意，用户会跳转至手机厂商的「官方渠道」下载。

这意味着手机厂商已经劫持了此次安装。这里手机厂商利用自己在系统权限上的优势做的小动作。

下面是对对正常转化和安装劫持的两个示例：

**① 正常转化**

用户点击媒体渠道 A 的广告，然后立即下载应用或跳转到媒体渠道指定的国内第三方应用商店 A下载。在监测平台中，会记录到以下归因数据：

*   媒体渠道 ：媒体渠道 A
*   Install app store ：媒体渠道指定的国内第三方应用商店 A

**② 安装劫持**

用户点击媒体渠道A的广告。在启动下载时，设备上会弹出一个警告窗口，提示用户从设备制造商的应用商店下载应用程序。如果用户同意，用户会跳转至制造商的第三方应用商店B下载。在监测平台中，会记录到以下归因数据：

*   媒体渠道 ：媒体渠道 A
*   Install app store ：设备制造商的应用商店 B

### 2\. 激活来自哪个行为？

![](https://image.woshipm.com/wp-files/2021/09/RNUhuXNolHNWZIBzaHxW.png)

上图为示例的用户旅程图：

下方为用户行为，AppsFlyer 以激活（安装后首次启动）为最终结算口径；卸载重装是否算新的，以其重装行为是否在首次激活的归因观察窗口内来判断；上方由 3 个主要的归因窗口组成：（对应的激活，来自哪个行为）。

*   浏览归因窗口——一般不采用此种归因方式；
*   点击归因窗口——默认设置窗口是 7 天，当前 KA 广告主中，TT 是 2 天，Kwai 是 7 天，选用的应该是 last-click 归因（即将激活归因到时间上最近的一次点击）；
*   再归因窗口——默认是 90 天，广告主一般不会修改，也即安装 90 天后，但卸载了的用户，再推安装是可以计入的。

![](https://image.woshipm.com/wp-files/2021/09/i2lsCozvB3b0K07CGdyT.png)

### 3\. 卸载重装是怎么处理的？

用户安装后卸载再安装的情况下，如果第二次安装距离第一次超过 90 天，则会被记录为新用户。

![](https://image.woshipm.com/wp-files/2021/09/7T3wkCoBWSTbdHmWq2kq.png)

![](https://image.woshipm.com/wp-files/2021/09/zpjmc5j7sgO9K4G3zBtc.png)

### 4\. 归因数据的使用

激活的明细数据，可以在 AppsFlyer 上下载得到，可以通过 gaid 来对应每个激活的详细归因信息，但预装无法归因到具体的点击。

通过对数据的解析使用，一是gaid -> 设备ID 映射；二是激活数据与点击行为的关联，可以供 2 项应用：

1.  精准的广告漏斗分析和监控；
2.  CVR 预估模块的输入。

![](https://image.woshipm.com/wp-files/2021/09/thpVfvkaPbw4vZ2Fp6DE.png)

参考资料：

*   AppsFlyer 归因
*   FB 归因
*   Google 归因
*   APP来源追踪方式（归因）——Android篇
*   揭秘点击注入劫持安装：Google Install Referrer API影响评估

作者：Tom，现深圳大宇无限数据产品经理，专注数据治理与商业化；“数据人创作者联盟”成员

本文由@一个数据人的自留地 原创发布于人人都是产品经理。未经许可，禁止转载

题图来自pexels，基于CC0协议

赞赏 收藏已收藏22 点赞已赞7更多精彩内容，请关注人人都是产品经理微信公众号或下载App[1年](https://www.woshipm.com/tag/1%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[归因调研](https://www.woshipm.com/tag/%e5%bd%92%e5%9b%a0%e8%b0%83%e7%a0%94)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=归因情况调研&url=https://www.woshipm.com/data-analysis/5123536.html&pic=https://image.woshipm.com/wp-files/2021/09/f9IdeNsSARvCemuXqSQO.png)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5123536.html)分享