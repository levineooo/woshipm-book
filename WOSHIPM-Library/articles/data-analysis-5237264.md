# 产品经理了解数据库，真的这些就够了！
{% hint style="info" %}
**Category:** Data-analysis
**Author:** [汪仔9304](https://www.woshipm.com/u/154507)
**Published:** 2021-12-07  
**Stats:** 👁️ 10097 views | 💬 8 comments | ⭐ 132 collects
**Tags:** 1年,初级,数据库
**Original:** [View on woshipm.com](https://www.woshipm.com/data-analysis/5237264.html)
{% endhint %}
> 编辑导语：时常可以在网上看到大家对于产品经理需要懂数据库这个问题进行热议，那我们首先得明白，数据库是什么？数据库有何用处？数据库对产品经理而言是否有加持作用？本文围绕产品经理和数据库展开了讲述，推荐对此感兴趣的伙伴阅读。

---

## 产品经理了解数据库，真的这些就够了！

[![](https://static.woshipm.com/APP_U_202207_20220703210030_9351.jpeg?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/154507)[汪仔9304](https://www.woshipm.com/u/154507) ![](https://static.woshipm.com/tag/1121_1@2x.png) 关注2021-12-078 评论 10097 浏览 132 收藏 11 分钟[🔗 B端产品需要更多地依赖销售团队和渠道合作来推广产品，而C端产品需要更多地利用网络营销和口碑传播来推广产品..](https://ke.qidianla.com/courses/bcpm)

> 编辑导语：时常可以在网上看到大家对于产品经理需要懂数据库这个问题进行热议，那我们首先得明白，数据库是什么？数据库有何用处？数据库对产品经理而言是否有加持作用？本文围绕产品经理和数据库展开了讲述，推荐对此感兴趣的伙伴阅读。

![](https://image.yunyingpai.com/wp/2021/12/TLtKR5LXZ7FzKtDrOnyU.jpg)

大家好，本次我们分享一个在网上热议的话题，那就是产品经理需要懂数据库吗？懂的话需要懂到什么程度？这个仁者见仁智者见智，我觉得学一些简单的数据库知识，确实对产品经理工作有帮助，以下的场景不知道你是不是很熟悉哦！

## 一、故事导入

小王是公司的产品经理，早上9点他刚坐到工位上，准备开始他的摸鱼半小时，看下互联网新闻，吃个早餐，喝杯咖啡，这时，运营妹子小丽火急火燎的跑过来，小王预感不详；

小丽开口说：王哥，今天早上我看数据，昨天平台的成交量大幅下降啊，我想找你帮忙让开发给我查询下昨天加入购物车，提交订单未付款的数据，我排查下原因；

小王：内心（一点眼力劲都没有，给我个吃饭的时间呐），但是看着可爱的运营妹子不好拒绝，便说：可以，吃完饭我去找开发；

小王找到开发老李：李哥，帮忙查些数据；

老李昨天晚上加班给市场部上线了一个活动，带着黑眼圈在改bug，甩了句：没空，bug还没有解决完呢；

小王：李哥，那什么时候可以解决完bug；

老李生闷气：这我哪知道，你问测试去吧；

小王：我知道了……

以上小故事不是想表达产品汪和程序猿这两个不同的“物种”有多么大的分歧，是想说明我们产品经理有时候去找开发“取数”，开发不一定随时有空，所以学习些SQL语句，可以帮助我们自己解决问题。

## 二、数据库是干嘛的

通俗理解，数据库类似于你的钱包，钱包是用来存钱的，可以存自己的钱，也可以存别人给的钱；数据库是用来存储数据的，可以存平台用户提交的数据，可以存其他系统传输的数据，数据库里有表，表可以理解为excel表格，有行和列，数据就存储在表格里。

![](https://image.woshipm.com/wp-files/2021/12/vEy9jd01GyULnCxTIIUq.png)

## 三、业务举例

某学校数据库里有一张学生表，用来记录所有的学生信息，学生表叫【student】如下图：

![](https://image.woshipm.com/wp-files/2021/12/su2Qx4QCjj5UIKI9lw5x.png)

id: 表的唯一主键，主键是每条记录的唯一标识，可以理解为一个人的身份证号码。

student\_id：学号；

name:姓名；

sex:性别；

age:年龄；

admission\_date:入学日期；

### （1）【场景1：新增学生】

现在，有个叫“周八皮”的学生转学过来了，要把周八皮的信息放到表里，就需要用到新增语句。

语法： insert into 【表名】values (值1，值2……）。

表名和值是可变的，其他的信息都是语法规定的，不可以变。

insert into  student  values (‘6′,’006′,’周八皮’,’男’,’12’,’2021-12-01’）。

刷新表，结果如下：

![](https://image.woshipm.com/wp-files/2021/12/ZpkAfjacuYPadei3WNSg.png)

备注：如果要插入指定的数据的列，语法是：insert into (列1，列2）values((值1，值2）。

### （2）【场景2：删除学生】

赵六的爸爸做生意赚钱了，要把他转到国际学校了，那就需要把赵六的信息删除。

语法：delete from 【表名】 where 列名称=值。

from：表示来自哪张表，后面跟表名。

where：表示条件，后面跟着条件，只有对符合条件的才会进行删除。

delete from student  where  name=’赵六’。

刷新表，结果如下：

![](https://image.woshipm.com/wp-files/2021/12/HlDZTCZ1xGC0kDSc5ggm.png)

赵六这个学生就不存在了，一般情况下实际业务中，是不会物理删除（表里的记录消失），都是逻辑删除（记录还在表格，只是标记一个删除的状态），一旦遇到误删除就可以及时挽回。

### （3）【场景3：修改学生信息】

李四是个女生，但是录入信息的时候写成男生了，需要把李四改成的性别改完女

语法： update 【表名】 set 列名称=新值  where 列名称=某值

update student set sex=’女’ where name=’李四’

刷新表，结果如下：

![](https://image.woshipm.com/wp-files/2021/12/9ZyUte6E9FRjYRwfm7F0.png)

### （4）【场景4：查询学生信息】

查询所有学生；

语法：select \* from 【表名】；

\*：表示查询当前表的所有记录；

查询结果：

![](https://image.woshipm.com/wp-files/2021/12/V7mwo0bokOZBUWmM2WNB.png)

实际工作中，不建议用\*查询全部记录，数据量庞大的时候会严重影响查询效率，一般情况下我们也用不到查询所有记录。

查询指定列的数据；

语法： select \*  from【表名】where 列名称=‘值’；

查询姓名是王五的学生；

select \* from student where name=’王五’；

查询结果：

![](https://image.woshipm.com/wp-files/2021/12/guJUb7KbyIOgK8z81hNP.png)

查询年龄是12岁，并且入学日期是2021-120-01入学的学生；

需要用到一个运算符：AND ， AND表示只有满足所有的条件下，才会返回记录；

select \* from student where age=’12’ and admission\_date=’2021/12/01’；

![](https://image.woshipm.com/wp-files/2021/12/nWgsRcG7UmorLRZs3OC9.png)

查询性别是男或者是年龄是10岁的学生，需要一个运算符: OR，OR表示只要满足任意1个条件，就会返回记录。

查询结果：

![](https://image.woshipm.com/wp-files/2021/12/71zeF0enHYpWjHY33GWP.png)

## 四、 说明

实际工作中，我们肯定不会直接操作数据库，来增删改查，因为数据库里有平台的所有数据，是公司无形的资产，只有指定的人才会有正式数据库的权限，我们一般增删改查在前端页面就能进行。

所以，提醒大家，如果开发给你开通了正式的数据库权限，操作一定要小心，不要轻易删除数据。

## 五、工具推荐

Navicat是一个强大的数据库连接工具，我一直在用，确实很方便，大家可以从官网下载：

下载完成后连接，选择你们使用的数据库。

![](https://image.woshipm.com/wp-files/2021/12/ZjYKqMwLLcpIYtdSO2iZ.png)

![](https://image.woshipm.com/wp-files/2021/12/IyXQgQOUdkVttiDMgukN.png)

连接名：可以自定义，为了方便可以记录项目的名称；

主机名和ip地址、端口，用户名和密码：这些都和开发或者测试同事要就可以；

全部输入完成后，点击确定，就可以开始一段数据库的旅程（不归路了）。

## 六、附言

以上就是分享的产品经理学数据库的知识，我曾经为了增加技能，把多表关联查询也学习了，实际工作中，发现基本用不到，用不到的东西学完了也容易忘记，基本上学会增删改查就可以应付日常的工作了，其他的更复杂的就交给专业的人来弄就好了。

产品经理会数据库只是一个优势，并不代表不会数据库就做不好产品经理，大家可以根据自己的实际情况来选择学习。

本文由 @秋风 原创发布于人人都是产品经理，未经许可，禁止转载

题图来自 Unsplash，基于CC0协议

本文由 @PM东东枪 原创发布于人人都是产品经理，未经许可，禁止转载。

题图来自 Unsplash，基于CC0协议。

该文观点仅代表作者本人，人人都是产品经理平台仅提供信息存储空间服务。

赞赏 收藏已收藏132 点赞已赞22更多精彩内容，请关注人人都是产品经理微信公众号或下载App[1年](https://www.woshipm.com/tag/1%e5%b9%b4)[初级](https://www.woshipm.com/tag/%e5%88%9d%e7%ba%a7)[数据库](https://www.woshipm.com/tag/%e6%95%b0%e6%8d%ae%e5%ba%93)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=产品经理了解数据库，真的这些就够了！&url=https://www.woshipm.com/data-analysis/5237264.html&pic=https://image.yunyingpai.com/wp/2021/12/TLtKR5LXZ7FzKtDrOnyU.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/data-analysis/5237264.html)分享