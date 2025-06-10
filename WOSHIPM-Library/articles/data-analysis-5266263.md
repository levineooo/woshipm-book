# 不会写模型代码？可以这么来做销量预估
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [溜溜笔记说](https://www.woshipm.com/u/1294107)
**Published:** 2021-12-28  
**Stats:** 👁️ 6026 views | 💬 0 comments | ⭐ 28 collects
**Tags:** 2年,初级,销量预估
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5266263.html)
{% endhint %}
> 编辑导语：产品经理往往需要对之后的业务发展进行预测，这时就可以利用预测模型。但假若你不会写代码、跑模型，怎么办？本篇文章里，作者结合三个案例，对不会写模型代码的产品经理如何做销量预估一事进行了总结，一起来看一下吧。

---

## 不会写模型代码？可以这么来做销量预估

[![](https://static.woshipm.com/APP_U_202112_20211216233502_9365.jpeg?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/1294107)[溜溜笔记说](https://www.woshipm.com/u/1294107) ![](https://static.woshipm.com/tag/1101_1@2x.png) 关注2021-12-280 评论 6026 浏览 28 收藏 10 分钟[🔗 产品经理在不同的职业阶段，需要侧重不同的方面，从基础技能、业务深度、专业领域到战略规划和管理能力。](https://ke.qidianla.com/courses/90pm)

> 编辑导语：产品经理往往需要对之后的业务发展进行预测，这时就可以利用预测模型。但假若你不会写代码、跑模型，怎么办？本篇文章里，作者结合三个案例，对不会写模型代码的产品经理如何做销量预估一事进行了总结，一起来看一下吧。

![](https://image.woshipm.com/wp-files/2021/12/68kEaFQ3CUBTAMynUuzU.jpg)

工作中为了对业务未来的发展有个大致的评估与掌握，经常需要对下月、下个季度、明年等做预测，往往需要预测模型的参与，为公司抓住未来的机遇做铺垫策。那么对于不会写代码跑模型的产品经理，怎么来做预估呢？

本文以三个案例着手，来给大家讲一下。

## 一、案例一：Excel操作方式来预测

根据历史月度销量预测2021-09、10、11、12月的销量数据。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/m7rQZLa5xS3CTBGfWMgU.jpeg)

先看下散点图，大致浏览下是否存在极值（若有，则排除掉）以及两个变量之间是否存在关联趋势：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/ceAwB4quImhjrcZCS06l.jpeg)

拟合注意事项：

1.  用Excel拟合的时候尽量将各个趋势线均尝试下，选择R²较为接近1的方式。R²越接近1，代表拟合效果越好。
2.  尝试下来，发现多项式拟合效果较好，且“顺序”越往上增加，R²越接近1。但本数据源不多，且多项式拟合多采取二项式或三项式即可满足需求，所以为避免过拟合，取3即可。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/m12ixCsz9myNmPxq0nXX.jpeg)

拟合出的结果如下，多项式公式如图中所示：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/UdBX86IEGzmtT3RFyWOo.jpeg)

给数据源增加一列辅助列；

将21、22、23、24分别带入y = -0.5908x^3 + 19.576x^2 – 73.697x + 2128.3

则得到2021-09、10、11、12月的预测销量。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/Mtc3ApqB8BnZPriBCLRv.jpeg)

## 二、案例二：Tableau操作方式来预测

数据源如下：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/Sad4iRf7fgxaLA8V8MAq.jpeg)

### 操作步骤

步骤1：先将月份拉列，销量拉行，制作出折线图。数据源中“月份”是文本格式，需改成日期格式。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/LTVdJsIAKLXnTf132gX7.png)

步骤2：点击列上的“月份”，改成离散。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/jw53ZoCkBn2lYTzmU5bE.png)

步骤3：点击折线图选择“显示趋势线”。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/mg96PajWbL3TJ302G9rc.png)

点击折线图表，选择“编辑所有趋势线”，可以看到该预测模型为“线性”预测。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/wo41Z1NFU6VCvGIalyvl.png)

点击折线图表，选择“描述趋势模型”，可以看到该“线性”预测的R平方值。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/pPEnOhgmi0Qs4zzJ425v.png)

步骤4：按照步骤3的方法，选择“编辑所有趋势线”依次选择“线性”、“指数”、“多项式”2度、“多项式”3度，并查看对应的R平方值，选择其中R平方值最靠近1 的模型来作为最终的预测模型。

可以看到：“线性”预测R方为：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/ta5iopaYkQItu0OZYRWq.png)

“指数”预测R方为：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/DHdc42m0hOB16JUSojdX.png)

2度“多项式”预测R方为：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/gC57FskwBRgZyNrBJjep.png)

3度“多项式”预测R方为：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/A2aGkWSYgL5sj6sKN6hC.png)

综合对比得出：3度“多项式”预测模型R方更接近1，因此最终采取该预测模型。

步骤5：鼠标移动到趋势线上，可以看到拟合公式如下，如案例一中给数据源添加一列辅助列，并将需要预测的月份的辅助列的数字代入公式中，即可得到预测销量。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/t5RZ4VPz23c3of5EaKle.png)

另外说明：Tableau自带预测功能，但是在本案例中不采用，原因如下：

将月份上的“精确日期”去掉，格式选择月份，点击折线图选择“显示预测”。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/6Zgmzq9sccLcxwExVI8f.png)

结果如下图：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/tdGcXhE4Zp08B9YcPvxV.png)

再点击图表选择“预测描述”，可以发现该自动预测模型用的是“指数平滑法”，然而在上述步骤的拟合中发现指数相关预测方法的R方并不是最优。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/1Nd5gws4XgKoK44pwOCa.png)

## 三、案例三：季节性销量预测

数据源如下：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/9WJnKYg67r8rZTwSUnmO.png)

先画出普通折线图，看下是否呈现明显季节性。

下图展示出该销量数据确实呈现季节性，其中第2季度为旺季。则要针对该数据进行去季节化处理。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/Rc38rESs79dyKJYpU4cN.png)

将数据源通过数据透视表处理成下图所示：

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/7O0aHLmTyvmJy2GU14Ex.png)

*   计算每个季度的年度均值，如下图“年平均值”；
*   计算15个样本的总体平均值，如下图“总平均值”；
*   用“年平均值”/“总平均值”计算出“季节性指数”。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/x9jTpcYR3MUqMikqiIiF.png)

来看一张总结之后的表格。

① 将计算出的“季节指数”重复添加进下图中的“季节指数”列。

② 去季节化=销量/季节指数。

③ 根据“辅助列”和“去季节化”后的销量拟合出线性预测公式。

y=-2.4907x+2532

之所以拟合线性公式是因为在第②步中已经将季节性因素排除掉了。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/VmXXFlRjs12NByOc8EBw.png)

④ 将辅助列代入公式，计算出“线性预测”列。

⑤ 将“线性预测”列乘以“季节指数”计算出“季节性调整”列，此列即为最终的预测销量。

⑥ 将“线性预测”列减去“销量”列计算误差，再除以“销量”列计算误差率。

⑦ 用STDEV（）函数选中销量一列，计算出总体标准偏差。

显著性水平参数写为0.05，即置信度是95%；样本量写15。

用CONFIDENCE（）函数计算出置信区间的可浮动值，结果如下截图。

即，有95%的可能性预测值比处于真实值的上下195.92范围内。

可以看到误差都在正常的置信区间内。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/tln3Ss4NPtzm2XtdeMcb.png)

⑧ 将16（辅助列）代入公式，可预测2021Q4的销量。

![销量预测模型案例实战](https://image.woshipm.com/wp-files/2021/12/Y3GvfahcUVFdjlcMTSgz.png)

作者：Janie Liu；公众号：溜溜笔记说

本文由 @溜溜笔记说 原创发布于人人都是产品经理。未经许可，禁止转载

题图来自Unsplash，基于CC0协议

赞赏 收藏已收藏28 点赞已赞2更多精彩内容，请关注人人都是产品经理微信公众号或下载App[2年](https://www.woshipm.com/tag/2%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[销量预估](https://www.woshipm.com/tag/%e9%94%80%e9%87%8f%e9%a2%84%e4%bc%b0)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=不会写模型代码？可以这么来做销量预估&url=https://www.woshipm.com/data-analysis/5266263.html&pic=https://image.woshipm.com/wp-files/2021/12/68kEaFQ3CUBTAMynUuzU.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5266263.html)分享