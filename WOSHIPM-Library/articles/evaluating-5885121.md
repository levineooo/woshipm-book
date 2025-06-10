# HMI | 结合地图竞品分析，拆解车载地图交互
{% hint style="info" %}
**Category:** Evaluating
**Author:** [小发的设计笔记](https://www.woshipm.com/u/664635)
**Published:** 2023-12-14  
**Stats:** 👁️ 3397 views | 💬 0 comments | ⭐ 26 collects
**Tags:** HMI,交互设计,特斯拉,蔚来,视觉设计,车载地图
**Original:** [View on woshipm.com](https://www.woshipm.com/evaluating/5885121.html)
{% endhint %}
> 车上操作与手机上的操作场景有着巨大差异，这也意味着设计人员在做交互或者视觉设计时，需要秉持着不一样的设计原则。这篇文章里，作者就结合具体品牌的车载地图交互做了对比分析，一起来看看吧。

---

## HMI | 结合地图竞品分析，拆解车载地图交互

[![](https://image.woshipm.com/wp-files/2021/11/l1NofStgVyzcLJATfy3w.jpg!/both/72x72)](https://www.woshipm.com/u/664635)[小发的设计笔记](https://www.woshipm.com/u/664635) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2023-12-140 评论 3397 浏览 26 收藏 18 分钟[🔗 B端产品需要更多地依赖销售团队和渠道合作来推广产品，而C端产品需要更多地利用网络营销和口碑传播来推广产品..](https://ke.qidianla.com/courses/bcpm)

> 车上操作与手机上的操作场景有着巨大差异，这也意味着设计人员在做交互或者视觉设计时，需要秉持着不一样的设计原则。这篇文章里，作者就结合具体品牌的车载地图交互做了对比分析，一起来看看吧。

![](https://image.woshipm.com/2023/04/13/ae0853b2-d9de-11ed-8d63-00163e0b5ff3.jpg)

上半年转行了车载行业，主要做车载地图的交互，进入一个新行业难免需要学习这个行业的一些交互准则。毕竟车上操作与我们日常使用手机场景上的巨大差异，导致设计侧重点不同。

从各大厂商对于车载设计的准则来看都是围绕两大点：**简单易用、让用户专注于驾驶。**围绕这两大核心对于交互与视觉有着不同的设计注意事项。对于交互互动而言，主要体现在：

*   **交互层级：**层级简洁，反馈一致，使用户能够快速了解系统结构和状态；
*   **信息合理：**确保信息一目了然，保证让用户能够在**1-2s 内**就能阅读完内容将注意力移回至道路上。这一方面要求信息简洁，另一方面也需要保证同一功能的信息布局始终保持一致；
*   **语音指令人性化：**语音交互是车机中非常重要的场景，非常适合在驾驶时与车机互动，所以在语音设计中也需要对唤醒，对话等话术设计的更符合人们习惯；
*   **操作效率：**功能的布局需充分考虑人机工程学，常用功能需放置在可触控舒适区，便于用户快速点击；操作上也应避免拖动、捏合、双击、长按这列手势操作，主要还是需以点击、滑动为主；大小及点击热区上也会尽可能加大，避免误触**（在1280\*720160ppi 10英寸屏上建议热区为 15.3mm/ 96px 以上）。**

大致了解了以上大类的交互原则，我们也需要进行实操，而实操的第一步就是看看目前市场上造车新势力的车机具体设计的怎么样？从他们的设计中也可以进行借鉴。

这边主要看了理想、小鹏、问界、特斯拉、蔚来、carplay，按照导航地图的模块进行拆分（地图首页、点击搜索、搜索结果、POI详情、路线规划、导航中、导航中-搜索，车道级导航、设置）进行横向对比，看看他们都是怎么做的。

## 一、首页

**1）**车机默认首页，目前一般都是以地图铺满全屏，在上层放置一些功能入口及信息，在收集的竞品来看，都会将【搜索、家、公司快捷入口、车头朝向、设置】作为在首页默认展示的功能，通过这些功能来满足用户**驾驶前**对于导航地址、地图调整的需求。

![](https://image.woshipm.com/wp-files/2023/08/AHEGuUCBVgvvblEYA81M.png)

**2）**在布局上，出于人机工程考虑均默认将这些操作项放在屏幕的左侧，但位置上还是有所区分，搜索、家、公司地址这类都是出于目的地搜索选择的信息，故统一成一个模块放置于左上角。

而一些默认的操作项则统一放在在左下角且数量不会超过 4 个，并且会刻意的将按钮的间间距拉大从而加大点击热区。

![](https://image.woshipm.com/wp-files/2023/08/CqrIEfMkXV9wdGPvk3Hj.png)

**3）**而对于搜索、家、公司这些常用的快捷地址，目前的做法有以下两种，第一种确实简洁，用iocn的方式呈现，最大程度减少了对底图的遮挡。

[![](https://image.woshipm.com/2023/07/27/1788a218-2c7f-11ee-b91f-00163e0b5ff3.png)做到这三点挑战，产品经理只会不断升值好的产品经理是很稀缺的，懂用户、懂商业、懂数据的产品经理走出互联网，依然是抢手货。相反，如果只做简单传话、低效执行、浅层思考的产品经理，恐怕走不过未来3-5年的洪流。查看详情 >](https://ke.qidianla.com/courses/bcpm)

但是这种多按钮并排的方式难免会造成误点击分情况，对比而言，笔者认为第二种操作更加舒服，并且在首页场景下右侧已经有足够的空间展示地图信息，左侧这边用卡片的方式虽然占用空间大些，但在该场景下对于信息获取的影响较小。

![](https://image.woshipm.com/wp-files/2023/08/7m1ZsJJ6V5QtdtsxfaRR.png)

## 二、首页-点击搜索

**1）**点击搜索进入后会展示关于搜索的更多内容，有历史记录，也有一些提炼出的常用的地址搜索，以及关于地址的一些附加功能（如：点击常用地点、管理收藏的地址等）。

![](https://image.woshipm.com/wp-files/2023/08/54kqO6WuySnHjVt606HP.png)

**2）**虽然都是有关地址的推荐信息，但交互可以做的是将这些信息做好分类，将同类的信息放到一块，避免同类的信息分散在各处，导致信息的散乱和页面结构的散乱。

这边可以看出，特斯拉就将收藏的地址信息和平时的地址记录信息做了整合，而小鹏则是将收藏单独领出来和其他快捷入口放在一块，这边笔者认为特斯拉的做法更合理。

![](https://image.woshipm.com/wp-files/2023/08/DwAJV4E3qNihAcHcm3Sp.png)

**3）**在输入方面，理想做的体验就更好了，输入中必须要用到用到键盘，而如果将键盘只是铺满屏幕务必会导致右边的难点击，理想这边就对键盘做了处理，并且可以拖动，比较好的解决了右侧难点的问题。

![](https://image.woshipm.com/wp-files/2023/08/wsrLao9idWV8yBiowuu0.png)

## 三、搜索结果列表

**1）**搜索结果列表依旧和先前列表位置、宽度均保持一致，依旧给右侧留出大片区域展示地图上的位置扎点。

![](https://image.woshipm.com/wp-files/2023/08/vOzumFqKHi9QhV5E0rJz.png)

**2）**结果有筛选项，则直接在顶部tab展示筛选项，便于用户筛选。

![](https://image.woshipm.com/wp-files/2023/08/B1g9vEQpbYRteBOYRH5H.png)

![](https://image.woshipm.com/wp-files/2023/08/DDAAOYNSaqdDRva7nHYd.png)

## 四、POI详情

**1）**蔚来2.0系统直接将周边搜的快捷方式，直接以icon方式直接展示出来，如：停车、充电这类关键信息，有助于司机判断。

![](https://image.woshipm.com/wp-files/2023/08/WfvIAcDXE8a35QLztacr.png)

**2）**POI详情信息主要分为：地址基础信息、距离及电量情况、辅助信息（生态类、电话、营业时间等）操作，建议相同信息集中在一块，避免信息展示混乱。

![](https://image.woshipm.com/wp-files/2023/08/QsVXtlRGxVpHp6hzsAlb.png)

**3）**蔚来和特斯拉对于POI详情的设计相似，POI详情卡片就直接展示在扎点旁，对应直观，符合直觉；就应该这样的感觉。

![](https://image.woshipm.com/wp-files/2023/08/FDZpTTthK7dvl1ynM4hZ.png)

## 五、路线规划

**1）**大部分竞品在路线规划页面，依旧直接展示途经点的搜索框，点击即可快速搜索，减少交互步长。

![](https://image.woshipm.com/wp-files/2023/08/oTfDis0hxZgIJPooIiFm.png)

**2）**特斯拉 蔚来 问界均将路线的提示（限行、电量不足等）均融合至路线列表容器，更加整体。

![](https://image.woshipm.com/wp-files/2023/08/5s6wU4QWdB4dv5gB31ta.png)

**3）**整体结构从上到下为：搜索框、提示、路线方案、按钮会显得更加清晰整体（信息区块控制在 4 个内估计会更好）。

![](https://image.woshipm.com/wp-files/2023/08/jbsfeQSrDE9KSp1RN5wX.png)

## 六、导航中

**1）**从竞品导航默认态页面信息来看，TBT面板、车道线、时间路程、全览、道路名、路线概览为必备信息外，友商们也会将「**退出」、「语音播报」「更多」「车道朝向」进行露出，方便用户点击。**

![](https://image.woshipm.com/wp-files/2023/08/zcGPKzMA7GQApfdqhK0k.png)

**2）**TBT面板信息的组合方式有以下几种：

*   **TBT + 车道线** \+ 时间路程
*   **TBT + 车道线** \+ 时间路程 + 到达时电量 + 退出导航
*   **TBT + 车道线**
*   **TBT + 车道线** \+ 时间路程 + 路线概览 + 退出导航
*   **TBT + 车道线** \+ 时间路程

可以看出均**将车道线和TBT看板金融融合，均属于导航指示类信息，放一块更加合理，但是视觉上有些许区分或许更好些。**

![](https://image.woshipm.com/wp-files/2023/08/lH5yUYVGtjnJVj4qmnsZ.png)

## 七、设置

1）设置中涉及开关的均放左边

![](https://image.woshipm.com/wp-files/2023/08/l4knUBkV69IMTZIF7fTB.png)

2）在某个任务下，如：导航中，选择设置，不会跳转至整页面，而是直接在当前状态下弹窗展示，减少了页面跳转，且只展示导航相关的设置项。

![](https://image.woshipm.com/wp-files/2023/08/rLWlj0UruxFOVPBUZtdf.png)

## 八、总结

以上是地图中最常见的页面，通过这些对比可以看到各大厂商对于车机地图的交互都遵从着一些基础的原则，而这些原则提炼出的准确或许很官方，很抽象，但是将这些原则带入到实际的页面中去看其实就能更好的发现其中的设计原因，也能帮助自己更好的了解这些原则在实际页面中是怎么应用的。通过以上竞品的对比，我这边有简单的进行提炼，提炼的不一定对，仅供参考。

### 1\. 常用功能不隐藏，要直接露出

![](https://image.woshipm.com/wp-files/2023/08/0TaqvmLWkohfwnXj5v00.png)

### 2\. 点击热区要大，不要小

可点击内容尽可能扩大点击区域，便于第一时间看到，也好点击；热区：最小10.7mm(67.4)，推荐热区 **15.3mm（96px）****以上。**

![](https://image.woshipm.com/wp-files/2023/08/kMSeHhyjdx7EcfFOP6c4.png)

### 3\. 按钮间距不拥挤，要宽松

多按钮并排时，需预留较大的间隔区域，避免因为车身抖动产生误触风险！**热区间隔3mm（18.9px）****以上。**

![](https://image.woshipm.com/wp-files/2023/08/Mi5kb535JaVK72nVuSKh.png)

### 4\. 操作按钮不放右边，要放左边

![](https://image.woshipm.com/wp-files/2023/08/OBOmgj5CWjIv4iAfyPCy.png)

### 5\. 同类信息不要分散，要集中

同类的信息建议放在一起，不用用多个页面分散在各处，很难记忆，反复跳转降低操作效率。

![](https://image.woshipm.com/wp-files/2023/08/9AU2A3VB2OAegMAXDPos.png)

![](https://image.woshipm.com/wp-files/2023/08/gCYgVlse4twSIm5IYmtZ.png)

### 6\. 信息展示不要都跳至新页面，可在当前页面直接展示

建议页面少跳转，可在当前页面直接展示信息，减少因为不听的跳转、返回降低操作效率。

### 7\. 卡片信息不要太多层，要少于 4 层

卡片通常会承载着很多信息，有基础的标题、地址信息又有一些图片、评分等生态信息，还有操作信息。太多的信息全部揉到一小张卡片中时，信息密度超标，非常影响信息的获取，所以尽可能保证最多展示4层信息，若超过4层则在首屏展示4层，滑动查看剩余信息。

![](https://image.woshipm.com/wp-files/2023/08/MKQ9rzZyZWBn10Mb0vxA.png)

### 8\. 不同的反馈不要一样，要有区分度

反馈信息有重要、紧急等不同情况，颜色上要根据不同提示信息程度进行区分：标红文字、带底色文字等。

![](https://image.woshipm.com/wp-files/2023/08/hJ2EKHlBVmqRWlYLUjrQ.png)

### 9\. 功能说明不要只有文字，要图文结合

一些车上的功能设置，以往会通过标题+辅助文本的方式对该功能解释说明，但当前新势力都逐渐使用3D场景化、3D动画的方式直接演示功能，相较于文字更容易理解。

![](https://image.woshipm.com/wp-files/2023/08/numQ4ogbNefsDXvgrJDv.png)

### 10\. 不同状态表现对比不要小，要加大对比

在地图上选择扎点时候，选中的扎点需和其他扎点大小差异拉的更开一些，避免感知太弱分不清楚。

![](https://image.woshipm.com/wp-files/2023/08/EU8sf2UJ0FQ6mw4MSVCr.png)

### 11\. 提示信息不要割裂，要和信息融合

当前很多提示的信息都用toast、或小黄条直接弹在页面顶上，这就导致用户看了之后需要根据提示的内容寻找提示所指的信息，才能明白该条提示是为谁而提。所以可以将提示和提示所指的信息放一块，这样更容易理解。

![](https://image.woshipm.com/wp-files/2023/08/wynmCZIL3Kq0t6AhaeMM.png)

### 12\. 容器样式大小不要不一，要统一

承载信息的容器卡片样式要尽量做到统一，不要出现有很多种样式，避免让整体显得很不统一，同时也避免用户的视觉焦点不断在画面上转移。

![](https://image.woshipm.com/wp-files/2023/08/HRnbTryTdkKj9puhkxBn.png)

最后是动画部分，由于对动画这部分没有深入，故不做展开，基础的原则就是，动画反应要快，顺畅，通过动画也能拉高整体的使用体验以及整体设计的精致程度~

以上就是这次竞品的主要心得，里面的结论目前也仅是依照竞品来归纳的初步结论，后续还需不断深挖以及验证，并且需要结合自己实际的项目情况进行思考与调整~

本文由 @小发的设计笔记 原创发布于人人都是产品经理，未经作者许可，禁止转载。

题图来自 Unsplash，基于CC0协议。

该文观点仅代表作者本人，人人都是产品经理平台仅提供信息存储空间服务。

赞赏 收藏已收藏26 点赞已赞7更多精彩内容，请关注人人都是产品经理微信公众号或下载App[HMI](https://www.woshipm.com/tag/hmi)[交互设计](https://www.woshipm.com/tag/%e4%ba%a4%e4%ba%92%e8%ae%be%e8%ae%a1)[特斯拉](https://www.woshipm.com/tag/%e7%89%b9%e6%96%af%e6%8b%89)[蔚来](https://www.woshipm.com/tag/%e8%94%9a%e6%9d%a5)[视觉设计](https://www.woshipm.com/tag/%e8%a7%86%e8%a7%89%e8%ae%be%e8%ae%a1)[车载地图](https://www.woshipm.com/tag/%e8%bd%a6%e8%bd%bd%e5%9c%b0%e5%9b%be)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=HMI | 结合地图竞品分析，拆解车载地图交互&url=https://www.woshipm.com/evaluating/5885121.html&pic=https://image.woshipm.com/2023/04/13/ae0853b2-d9de-11ed-8d63-00163e0b5ff3.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/evaluating/5885121.html)分享