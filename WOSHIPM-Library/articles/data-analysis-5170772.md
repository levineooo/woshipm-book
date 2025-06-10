# 让数据更有趣！全面总结图表设计的思路和方法
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [Clippp](https://www.woshipm.com/u/768861)
**Published:** 2021-10-12  
**Stats:** 👁️ 8491 views | 💬 13 comments | ⭐ 52 collects
**Tags:** 2年,初级,数据图表
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5170772.html)
{% endhint %}
> 编辑导语：数据成为了日常工作的一大重要角色，越来越多的公司以数据驱动产品进行迭代。但令人困惑的是可视化图表无处不矮，但却给大家带来了误导。作者分享了一些简单的思路与方法，以此来改善这些问题，希望对你有所帮助。

---

## 让数据更有趣！全面总结图表设计的思路和方法

[![](https://image.woshipm.com/wp-files/2022/01/g2nwMRFYqbjBdKWtl3r1.png!/both/72x72)](https://www.woshipm.com/u/768861)[Clippp](https://www.woshipm.com/u/768861) ![](https://static.woshipm.com/tag/1121_1@2x.png)![](https://static.woshipm.com/tag/2103_1@2x.png) 关注2021-10-1213 评论 8491 浏览 52 收藏 12 分钟[🔗 B端产品经理需要更多地关注客户的商业需求、痛点、预算、决策流程等，而C端产品经理需要更多地关注用户的个人需求](https://ke.qidianla.com/courses/bcpm)

> 编辑导语：数据成为了日常工作的一大重要角色，越来越多的公司以数据驱动产品进行迭代。但令人困惑的是可视化图表无处不矮，但却给大家带来了误导。作者分享了一些简单的思路与方法，以此来改善这些问题，希望对你有所帮助。

![](https://image.woshipm.com/wp-files/2021/10/D0fOzB5QoqYLbUeECe1Z.jpg)

越来越多的公司以数据驱动产品进行迭代，从中我们能看出数据的重要性。

日常工作中，无论是汇报还是设计，都离不开图表的使用。但令人困惑的可视化图表无处不在，往往给人带来误导性，通过遵循下面这些简单的思路和方法可以有效改善这些问题。

## 一、选择正确的图表类型

选择错误的图表类型，或默认使用最常见的类型，可能会混淆用户对数据产生误解。

一组数据可以有多种表示方式，具体类型取决于用户希望看到的内容。

![](https://image.woshipm.com/wp-files/2021/10/FpGUVMvyPZyjSV4XSsxT.jpeg)

## 二、根据正负值确定方向

当数据中出现正负值时，要先确定基线的位置，再确定数据位置，将正值分布在基线上侧（X轴）或右侧（Y轴），负值分布在下侧（X轴）或左侧（Y轴）。

避免在基线的同一侧同时添加正值和负值，造成用户对图表信息理解错误。

![](https://image.woshipm.com/wp-files/2021/10/YroKeqcvQtcRrnktojXl.jpeg)

## 三、始终从零开始绘制条形图

单看左侧的条形图，能发现B的值比D的值要多3倍以上，但在右侧从零开始的条形图中，实际差异要小得多。从零开始可确保用户获得更准确的数据展示。

![](https://image.woshipm.com/wp-files/2021/10/s9M6FNlm98Ooc8zz7H2a.jpeg)

## 四、折线图使用自适应Y轴

对折线图来说，如果始终将Y轴的比例限制为从零开始，一旦数据波动幅度很小，那整个折线图会看起来很平坦，效果不明显。

![](https://image.woshipm.com/wp-files/2021/10/Mzlt9veqid5jmxFJrTlv.jpeg)

折线图主要用来表现趋势，根据给定时间的数据调整比例，并保持折线区域能占到Y轴范围的三分之二。

## 五、使用折线图时考虑时间间隔

折线图是由一条条小线段连接组成，这些线段展示了在短时间内数据是如何变化的。当时间间隔很大或数据更新不频繁时，就要慎重考虑是否使用折线图。

例如想表示年收入，左侧的两个折线图样式都不太合适，每个月的收入是固定的数字，而折线图展现的数据更像是收入的变化，相反右侧的条形图更适合来展示每月具体的收入。

![](https://image.woshipm.com/wp-files/2021/10/YCXSSPoFpQyR7tWLaNqm.jpeg)

## 六、不要使用平滑的折线

平滑的折线图可能看着很舒服，但它们歪曲了背后的实际数据，而且过粗的线条掩盖了真正的节点。

![](https://image.woshipm.com/wp-files/2021/10/gCS73R0mE4PxeCo3bm0a.jpeg)

## 七、谨慎使用双轴折线图

当两组数据出现X轴代表的信息相同但Y轴不同时，为节省空间我们可能会考虑用双轴图。

但大部分双轴图难以阅读，只是感觉图表上有很多数据，但远远没有单个图表展示的清晰。

![](https://image.woshipm.com/wp-files/2021/10/4JoRJN1dV3fDVgveFg9t.jpeg)

## 八、限制饼图的切片数量

饼图是最受欢迎但经常被误用的图表之一。在使用饼图时，首先要注意切片的数量最好保持在5-7片。

如果还有很多占比很小的切片，可以将这些全部归到“其他”切片中。

![](https://image.woshipm.com/wp-files/2021/10/eJAae5tnupYAbUNrs1MU.jpeg)

## 九、直接在图表上标注

如果没有正确的标注，无论图表设计的多好看都没有意义。

直接在图表上标注数据或信息对使用者来说更直观，更节省时间和精力。

![](https://image.woshipm.com/wp-files/2021/10/gQZoRH1LKJMFnnBibZ1c.jpeg)

## 十、不要在切片上标注

将数值放在切片上虽然很直观，但可能会导致很多问题，例如左侧饼图数值的可读性问题、切片太薄无法添加数值等，对比来看，右侧饼图添加标注的方式更合适。

![](https://image.woshipm.com/wp-files/2021/10/Dl2BsqsLmbXj5V3xjLCy.jpeg)

## 十一、饼图切片的排序

饼图切片的排序是一个很容易忽略的问题，将饼图切片只是一个开始，通过合理的排序保证用户清晰观看图表才是关键。

常见的排序方法是将面积最大的切片放在12点钟位置，然后按顺时针降序放置第二大的切片，以此类推。

![](https://image.woshipm.com/wp-files/2021/10/KpyoepTmpgYARtj3xBPz.jpeg)

## 十二、避免随机性

同样的建议适用于其他类型的图表。尽量不要默认按字母顺序排序，将最大值放在顶部(水平条形图)或左侧(对于垂直条形图)，以确保最重要的值占据最突出的空间，减少视线运动和阅读图表所需的时间。

![](https://image.woshipm.com/wp-files/2021/10/W2N8yHtxyK8XhdWulkYg.jpeg)

## 十三、避免极端的环形图

环形图，又称为甜甜圈图,是饼图的一种变体,本质是饼图将中间区域挖空，用在多样品间的多种数据的比较中。

虽然环形图腾出中间区域来显示额外的信息，但牺牲清晰度走极端会让图表变得毫无用处。

![](https://image.woshipm.com/wp-files/2021/10/Qx738yniGzuP96EWnE3o.jpeg)

## 十四、让数据自己说话

不必要的设计样式不仅会分散注意力，还可能导致用户对数据误解并产生错误印象，图表在设计上应避免：

*   3D元素、阴影、渐变；
*   斑马纹、过多的网格线；
*   装饰性过强的斜体、粗体或衬线字体。

![](https://image.woshipm.com/wp-files/2021/10/MPfgUYectcRoNxyV1KhD.jpeg)

## 十五、选择与数据性质匹配的调色板

颜色是保持数据可视化有效的组成部分，在设计时考虑3种调色板类型：

*   分类色板（左）适合显示分类数据，当你想区别不连续且内在没有顺序关系的数据时可以使用这种类型；
*   连续色板（中）适用于需要按特定顺序放置的变量中，使用色调/亮度或两者组合创建色板。
*   离散色板（右）是两个连续色板的组合，中间有一个中心值(通常为零)。不同的调色板会传达正值和负值。

![](https://image.woshipm.com/wp-files/2021/10/RatriEgbZYCbtfac8bZj.jpeg)

## 十六、无障碍设计

根据眼科研究中心的数据，大约每12个人中就有1个色盲，图表只有在广泛受众可以访问的情况下才是成功的：

*   在调色板中使用不同的饱和度、亮度；
*   黑白打印可视化图表，检查对比度和可读性。

![](https://image.woshipm.com/wp-files/2021/10/O4MR2KZ792xCRP4uwuHZ.jpeg)

## 十七、注重易读性

确保图表排版在传达信息并帮助用户专注于数据，而不是分散注意力：

*   选择字迹清晰的字体，避免使用衬线和装饰性很强的字体；
*   避免使用斜体、粗体和全部大写；
*   确保文本与背景形成高对比度；
*   不要旋转文本。

![](https://image.woshipm.com/wp-files/2021/10/ehWNgnFnnzViVQIEwmSg.jpeg)

## 十八、使用水平条形图代替旋转标注

这个简单的技巧可以确保用户能够更有效地浏览图表，而不会使他们感到紧张。

![](https://image.woshipm.com/wp-files/2021/10/yF15JURMikEHWRZp31b5.jpeg)

## 十九、建立图表库

如果你的任务是将交互式图表添加到Web和移动项目中，那么首要考虑问题是将使用什么样的图表？

基于定义的库(Highcharts)进行设计将确保易于实现，并为我们提供大量的交互想法。

![](https://image.woshipm.com/wp-files/2021/10/SKbB0PmMUtOSMNzD2Ehw.jpeg)

## 二十、超越静态报告

通过更改参数、可视化类型、时间线帮助用户进行探索，得出最大价值化的结论。例如IOS Health结合使用了各种数据表示来发挥优势。

![](https://image.woshipm.com/wp-files/2021/10/ljS3p0iQGeKgBzNClHlF.jpeg)

### #专栏作家#

作者：Clippp，微信公众号：Clip设计夹。每周精选设计文章，专注分享关于产品、交互、UI视觉上的设计思考。

本文原创发布于人人都是产品经理，未经作者许可，禁止转载。

题图来自Unsplash，基于CC0协议。

赞赏 收藏已收藏52 点赞已赞13更多精彩内容，请关注人人都是产品经理微信公众号或下载App[2年](https://www.woshipm.com/tag/2%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[数据图表](https://www.woshipm.com/tag/%e6%95%b0%e6%8d%ae%e5%9b%be%e8%a1%a8)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=让数据更有趣！全面总结图表设计的思路和方法&url=https://www.woshipm.com/data-analysis/5170772.html&pic=https://image.woshipm.com/wp-files/2021/10/D0fOzB5QoqYLbUeECe1Z.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5170772.html)分享