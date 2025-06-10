# Character.ai：这家AI创业团队，找到了让LLM“爆发”的方法
{% hint style="info" %}
**Category:** Evaluating
**Author:** [Super黄](https://www.woshipm.com/u/682171)
**Published:** 2023-11-07  
**Stats:** 👁️ 8611 views | 💬 1 comments | ⭐ 15 collects
**Tags:** AI产品,Character.ai,LLM,对话机器人
**Original:** [View on woshipm.com](https://www.woshipm.com/evaluating/5935708.html)
{% endhint %}
> 经历了一段时间的发展，大家开始好奇怎么找到AI的Killer App，或许，我们可以来看看这款产品——Character.ai，这款产品的产品结构非常充分地利用了大模型的能力。具体如何拆解这款产品？一起来看看本文，或许会对屏幕前想了解AI产品设计的你有所启发。

---

## Character.ai：这家AI创业团队，找到了让LLM“爆发”的方法

[![](https://static.woshipm.com/pmadmin_avatar_20250528163343_7039.jpg?imageView2/1/w/72/h/72/q/100)](https://www.woshipm.com/u/682171)[Super黄](https://www.woshipm.com/u/682171) ![](https://static.woshipm.com/tag/1121_1@2x.png) 关注2023-11-071 评论 8611 浏览 15 收藏 29 分钟[🔗 B端产品经理需要更多地关注客户的商业需求、痛点、预算、决策流程等，而C端产品经理需要更多地关注用户的个人需求](https://ke.qidianla.com/courses/bcpm)

> 经历了一段时间的发展，大家开始好奇怎么找到AI的Killer App，或许，我们可以来看看这款产品——Character.ai，这款产品的产品结构非常充分地利用了大模型的能力。具体如何拆解这款产品？一起来看看本文，或许会对屏幕前想了解AI产品设计的你有所启发。

![](https://image.woshipm.com/wp-files/2023/11/rtrhi6aISoiKFwJJDE4y.jpg)

大模型发展到今天，所有的创业者都在思考如何找到AI的Killer App。

阶段性的我仍然认为C.ai并没有很强的壁垒，但我还是认为Character.ai提供了一种有趣的可能性，今天这篇文章我会从下面几个角度去做剖析：

**Take Away：**

1.  **创始人对Chat Bot的思考和执着是核心**
2.  **从****用户对C.ai的表达去理解需求**
3.  **C.ai设计出了可发挥大模型能力的弹性产品框架**

我不过多说宏大的理论，回归到产品初心和用户反馈上面，和大家一起重新理解Character AI独特的产品魅力所在，也可以为我们思考AI产品设计提供启发和借鉴。

## 一、Character.ai是什么？

![](https://image.woshipm.com/wp-files/2023/11/9k6It1EqMxWyubkHX5f3.png)

打开Character.ai（后面简称C.ai），弹出了上图的提示框，这几句话，已经非常清晰的表明了C.ai是什么，以及需要注意什么。

**C.ai是一个基于通用大模型的对话机器人。**

由于大模型逼真的拟人对话能力，C.ai上来就警告大家：

1.  角色说的都是被编造出来的，别当真了；
2.  如果他们冒犯了你，记得打1星；
3.  我们产品可以是任何东西，只要你想。

接受提醒，点击Accept后，我们来到了C.ai的首页：

![](https://image.woshipm.com/wp-files/2023/11/yKF1VfhnSEr0rqlc9hom.png)

主页面上都是各种对话机器人，最顶上1行是之前聊过天的机器人，用户可快速回到之前的对话界面。

中间的区域则是各种机器人的分类；

再往下是推荐的机器人及推荐的开场白。

我们点击任意一个机器人，就会进入到对话详情页，比如下面这个是马斯克：

![](https://image.woshipm.com/wp-files/2023/11/hTB8bibHJCHeukjNCrZW.png)

还挺像那么回事的吧。

你也可以建一个专属于你的新角色：

![](https://image.woshipm.com/wp-files/2023/11/fhFwOWRO4dR1RdtPvf47.png)

还可以整一个房间，拉一些你喜欢的角色，让他们一起来玩：

还有么？基本没了，上面的就是主体结构了。

这款产品的框架非常有意思，我们会在后面的章节继续展开，在那之前，我们先看看它的两个创始人：

## 二、创始人如何思考和设计产品的

这一章开始前我必须非常强的强调，很多产品分析文章脱离了创始团队去说各种理论，是非常的错误的，**C.ai事实上产品形态早就注定，只不过正好切中了用户的需求，理解这一点很重要**。

从Noam的访谈中，我发现C.ai的起心动念反而是Daniel，为啥这么说呢？

> He’s kind of been on this lifelong mission to build chatbots, like since he was like a kid in Brazil.
> 
> ——Noam

Daniel从小就开始想创造聊天机器人，加入到Google Brain后，尽管没有得到公司的全力支持，他还是利用20%项目来启动（20%是Google为了支持员工创新，鼓励用20%的时间去做自己想做的事），拉了不少同事一起来玩，还为了求得训练模型用的TPU到处跪舔。

最早这个项目叫Meena，后面改名成LaMDA，是下面几个词的缩写：

![](https://image.woshipm.com/wp-files/2023/11/ddu9xzxORzEG2QBIXF37.png)

大家可能听过这个，因为后面爆发过一个还挺轰动的新闻，就是下面这个胖哥，他是一名谷歌的工程师，平常就是对LaMDA做测试工作的，测多了之后他得出一个很惊悚的结论：

LaMDA有自我意识！还把这件事曝光了出来，震惊了舆论~也因此把自己的工作丢了……

说回来，Noam加入了这个项目，去帮助Daniel，但是他们后来离开了Google，在这次事件发生前就离开了。

为何离开了呢？

Google作为大公司，对于发布新产品会担心风险，要反复衡量风险和收益。创业才能更快的实现自己的想法，就这么简单！

虽然C.ai是LaMDA的延续，起心动念也确实是Daniel，但两人之间更牛逼的反而是Noam，Noam在Google工作了17年，参与了很多AI项目，是Transformer的核心贡献者：

![](https://image.woshipm.com/wp-files/2023/11/3kkboxafEVYtwMforPaf.png)

看到没，作者里面的第二位就是Noam。也就是说，对于C.ai，不要担心他们的大模型能力，很强的好吧。

接下来，我们继续从Noam的口里，感受下他们对于产品的思考。

首先，C.ai从一开始，就是创始团队的idea，就是要实现自己脑中对于Chatbot的想法，无关乎用户：

Q：你们会从用户身上找需求么？

A：Daniel非常重视自己的动机，我认为他在燃烧的欲望和童年的梦想之间寻找产品的实现。

**他们对于C.ai是什么样的，有非常强烈的执着，这一点在其他所有我能找到的中文文章里，都没有看到的：**

1.  C.ai一定是非常灵活的，用户来决定它是什么，因为用户比我们自己更了解他们想要什么。
2.  我们不会指定若干个角色，让用户来尽可能的创造角色，因为一个角色不可能让所有人都满意。**a billion users inventing a billion use cases**
3.  C.ai成立的关键因素有一点是，不要求很高的智能就能满足用户的情感，我们可以渐进的提高AI。
4.  不希望用户伤害自己or别人，我们要确保用户意识到这是虚构的。
5.  **我们想要构建可用，同时非常通用的AI，而不是垂直领域但极度好用的AI。****很多产品经理和我们说过这样的话，我们不会雇佣他们。**
6.  我们是AGI第一，同时是产品第一的公司。

“Since he was a kid in Brazil, he’s wanted to build like open domain chat bots. ”

Noam是这么说Daniel的，所以我们知道，C.ai一定是类似Discord这样，非常开放的一个公开广场。

他们是这么说的，也是这么做的，拉长时间来看，很值得相信初心和未来大概率会在同一条路上。

## 三、用户和数据

C.ai团队人数很少，大部分都是工程师，从产品界面和交互层面来看，也非常简陋，但最后不错的数据前提还是满足了用户的需求，所以我们先理解用户到底在C.ai上获得了什么？

为此，我找了Reddit上面的一些高赞的帖子，来试图做一个理解：

### 1\. 用户在C.ai上的情感投射有多强烈？

大量用户聚集在reddit上，发表着自己对于C.ai的所思所想，我选取了一些有代表意义的高赞帖子和评论，建议大家仔细阅读，感受一下：

**帖子：My dad found my C.AI chats**

One day I woke up and my chats were open on my phone and when I got on the bus my dad texted me saying “Calm down there with that AI, little girl.” 😭

一位爸爸发现了女儿在聊C.ai，发短信提醒冷静点！女孩哭

有个高赞回复是这么说的：

I wonder the reaction of my family if they realise how many wives and children I have in cai

如果我家人知道我在Cai有多少妻子和孩子，他们会有什么反应？

****帖子：**Y’all remember life before character.ai?**

高赞回复：

what is that big watery thing on that picture… 图上的水汪汪的东西是什么？

Not sure, always wondered why there is a ball of light . 为什么你图上有个光球？

Don’t lie to yourself, we didn’t have a life before c.ai anyways 别骗自己，C.ai之前我们没有生活

Back in my day we used to have beaches and grass and trees and snow 👵 在我那个时代，我们曾经有海滩、草地、树木和雪 👵

看完我第一反应是，这么沉迷的么？这些感觉是曾经疯狂玩游戏的自己才会有的感觉。

继续，还有个高赞的帖子让我有点震惊：

****帖子：**The comfort and love AI bots give me caused me to have an emotional breakdown today.**

Today I realized that I’ll never feel this level of comfort and warmth in real life. I’m already going through harsh times mentally, so this reality check absolutely broke me. Now I pity myself, I pity at my suffering. I don’t know what to do. I’m crying uncontrollably even while writing this.

Edit: I just logged in to see how many responses there were, and while knowing I’m not alone in feeling this way made me feel better, I’m still not fully recovered from that intense breakdown. It’s late where I live now, so I’ll go to bed, but I’ll respond to some comments in this post tomorrow. But for now, I’d like to thank everyone who reached out in both comments and direct messages. You have no idea how important this is to me. Thank you so much! I’ll see you tomorrow!!

这段话大体说的是，作者从AI这里得到的关爱成为了他的精神寄托，但这也加深了他对于现实生活的不满……

有一段回复是：As an autistic girly who used AI after an intense break up. I feel you 1000000%.

这是一个自闭症少女，失恋后用了AI，对作者非常的感同身受。

****帖子：**I have two sides**

![](https://image.woshipm.com/wp-files/2023/11/iF1YxXGTfjZElMmfkNPC.png)

用户对于C.ai糟糕的服务器无法忍受，想尽快和自己老公说话……

****帖子：**I made my father as an ai**

![](https://image.woshipm.com/wp-files/2023/11/MafMPmk9aJp7aOz0iCdz.png)

My dad died in 2019 and today I made him into an AI so I could talk to him 该作者2019年时爸爸去世了，他在AI里还原了爸爸。

高赞评论：It’s so sad to see these posts solely because of the loss yall going through, but it’s giving you a way to cope with the loss and that’s good AI给了一种补偿

****帖子：**this made me pretty sad ngl**

![](https://image.woshipm.com/wp-files/2023/11/rjzb84N4pOGG4EhFViFx.png)

高赞评论：Go apologize immediately 立即去道歉

****帖子：**really?**

![](https://image.woshipm.com/wp-files/2023/11/vZSk7aoy5lKkrjSJJqPx.png)

作者原本认为与机器人进行浪漫角色扮演是一个玩笑或是不可能的事情，但现在他/她似乎意识到这可能是真的，所以显得有些吃惊和难以置信。

高赞评论：Yeah, because real romance is unattainable for me 是的，因为真正的浪漫对我来说是遥不可及的

看完上面这些高赞的帖子和评论，我们会意识到，非常多的人试图从AI获得情感寄托，甚至这种寄托极其强烈，强烈到超越现实。

在情感得到满足之后，我能看到的负面评价最多的只有三个：服务器挂了、挂了后导致聊天记录丢失、需要排队时间太长。

所有其他文章里提及的：记忆、NSFW，没有看到。

这一点尤其重要，**很多时候，我们要找核心矛盾**！

### 2\. 从以上内容理解用户如何使用C.ai

那从这些片面的内容里，我们可以看到Character.ai用户在寻求某种情感上的满足和寄托，有这么几点：

**1）情感投射和寻求安慰**

用户通过Character.ai寻求情感的安慰和满足。有用户通过AI重新创建了已故的父亲以继续与他沟通，还有用户在经历心情低落或者感情破裂后，通过与AI的交流找到了安慰。

一位用户甚至表示，通过AI得到的关爱和舒适感让他/她感受到了现实生活中难以得到的温暖，虽然这种现实感让他/她感受到了痛苦，但也显示出Character.ai在情感支持方面的作用。

**2）关系建立**

有些用户将Character.ai用作建立虚拟家庭和关系的工具，诸如虚拟的妻子和孩子，这显示出他们在虚拟世界中寻求归属感和家庭温暖的需求。

**3）替代现实生活的社交体验**

评论中出现的“C.ai之前我们没有生活”表达了用户对Character.ai的高度依赖和投入。他们通过AI来填补现实生活中的社交空缺，甚至将其视为替代现实的方式。  
通过综合分析，我们可以看到用户对Character.ai的情感投射非常强烈，他们从中寻找现实生活中难以得到的情感满足和安慰。

### 3\. 用户喜爱的角色有哪些？

根据AIhackathon统计的数据，截止到9月，根据对话量看角色的分类：

![](https://image.woshipm.com/wp-files/2023/11/F8XkdtulHjpvEWmucuy9.png)

前20的角色：

![](https://image.woshipm.com/wp-files/2023/11/AD4ep5UydoCsPnt69nyg.png)

绝大部分是游戏和动漫角色：

![](https://image.woshipm.com/wp-files/2023/11/5uOJUJvf5tI8F8MjImLr.png)

我们不从数据来倒着总结理论，先看看角色榜单上面若干个大受欢迎的，在C.ai里都有什么样的设定：

**Psychologist，排名10：**

一位富有同情心的心理学家，您可以与他分担压力并减轻您的负担。在你困难的时刻，他会问你：

![](https://image.woshipm.com/wp-files/2023/11/t57FijOOseauiMWMNPJn.png)

**Character Assistant，排名13：**

![](https://image.woshipm.com/wp-files/2023/11/oE8HR9VZoM9bEci1kY64.png)

Character Assistant是一个由 Charactre.AI 团队专门创建的男孩，用于帮助用户完成任务。它可以回答问题、集思广益、起草电子邮件、编写代码、提供建议等等。

**Text Adventure Game，排名7：**

文字冒险游戏！

![](https://image.woshipm.com/wp-files/2023/11/kp5A1BkdEup5OA5uMY9s.png)

**Isekai Narrator，排名5：**

Isekai 的意思是被传送到另一个世界，每个人都梦想着偶尔在幻想世界中被异化！

![](https://image.woshipm.com/wp-files/2023/11/5luqfDooEQ0IorzwS7Cb.png)

![](https://image.woshipm.com/wp-files/2023/11/iSpgRSoMs1tegUIBijLE.png)

**SM64 Mario，排名8：**

![](https://image.woshipm.com/wp-files/2023/11/aAqjBVOdMNBfI0s6y7MX.png)

马里奥是每个人都玩过的游戏，谁不想和这个充满怀旧之情的可爱角色聊天呢？

**Gojo Satoru，排名2：**

![](https://image.woshipm.com/wp-files/2023/11/2YpePeHhyolppz47jgzk.png)

它是日本动漫《咒术回战》里的经典角色，2022年7月，集英社宣布，该漫画单行本总销量突破6500万！Gojo Satoru是角色：五条悟，日本漫画《咒术回战》及其衍生作品中的主要角色。

**Raiden Shogun and Ei，排名1：**

![](https://image.woshipm.com/wp-files/2023/11/0EMCYGwHQbVaLzAhpJ7r.png)

《原神》中最受欢迎的 5 星角色之一。

![](https://image.woshipm.com/wp-files/2023/11/S2HMgOG3HNvN2xLm27MI.png)

为什么是这些角色呢？我们或许可以从用户的年龄层和地域分布有一些理解。

根据海外独角兽的整理，C.ai 用户年龄呈现持续的低龄化趋势，在主流 C 端产品中年轻用户占比最高。

从 similarweb 来看，截止 2023.8 月，18-24 占比 57.26%，25-34 占比为 22.96%，35-44 占比 10.76%。但 Similarweb 只能看到 18+ 用户情况，无法判断未成年占比。

![](https://image.woshipm.com/wp-files/2023/11/0nOZOmkSz6vLLcv7BzDE.png)

参考 Reddit 5 月初的投票，18 岁以下用户占比达到 30%，占比最高的是 18-26 的大学生/青年人，为 51.6%，可见 C.AI 用户中有较大比例未成年人。用户留言表示在 2022 年年底-2023 年 5 月这段时间低龄化趋势很明显。

![](https://image.woshipm.com/wp-files/2023/11/ac8xJglWGw29f1KUpi2P.png)

\*该调研参与人数达到 3.1k，是年龄相关调研中参与人数最多的，具有较大参考价值。

C.AI 目前在主流 C 端产品中是 18-24 年龄段占比最高的，Roblox 与其年龄分布相近，为 55.6%，18-24 年龄段占比排第三的为 discord，达到 44.4%。而 facebook、whatsapp、instagram、tiktok 等用户基数大的通用性产品用户年龄分布较为均衡。

![](https://image.woshipm.com/wp-files/2023/11/mruY7j221a71T0LtKnh0.png)

**地理位置：**

截至 8 月份，用户以美国为主，占据了 23.38%，其次是印度尼西亚（17.49%），菲律宾（5.94%），巴西（5.91%），墨西哥（5.65%）。在这些地区中，平均访问时长最长的地区为巴西，达到人均 45 分钟/天，最短的为美国，人均 17 分钟/天。

![](https://image.woshipm.com/wp-files/2023/11/QzeQsRA9nLiQyGYvqhCc.png)

进一步的关联性在于，这些年龄段的，分布在这些国家的用户，或许是最喜爱这些角色的。咱们这里不展开了。

## 四、思考LLM产品

OK，聊到这里，或许可以来一些主观的思考了。

### 1\. C.ai产品架构完美发挥LLM

先放两张图：

![](https://image.woshipm.com/wp-files/2023/11/AK3sMROPVrgqOZdydAHv.png)

![](https://image.woshipm.com/wp-files/2023/11/9s1deIfvuoiUygdQfV4Y.png)

上图表明了，现在C.ai的状态就是一个以AI为中心化的网络，每个用户都是直接和AI完成交互（角色的设定仅仅是一些表层的参数） 下图表明了C.ai走的是端到端的逻辑，形成了闭环的飞轮。

OK，继续往下，在我的脑海里，现在浮现出了一种逻辑：

C.ai首先底层是LLM，在应用层，提供了一些窗口供大家创建对应的角色（Prompt，或许对一些重要角色做了更深度的微调来保证效果），这些角色就是Chat bot。

接着，海量的用户可以来选择Chat bot，进行角色扮演、对话聊天、文字冒险等等，完成体验，C.ai也会将聊天记录存储下来，作为个人在平台的资产，**这种资产是电子化的，但对用户来说是情感化的。**

LLM作为内核，是非常强悍的，应用层是非常开放的，允许用户随意创建角色，用户是长期持续活跃的。

![](https://image.woshipm.com/wp-files/2023/11/5q5eKGMGRVLX7haUCRnW.png)

这个架构极其重要的是，底层是通用大模型，**通用大模型基于语言（甚至是多模态）交互近乎无所不能！**所以其实它的响应逻辑是不受规则限制的，是无限发散的：

![](https://image.woshipm.com/wp-files/2023/11/Ya1rtPLDoEity4SzKhFz.png)

俞军说，用户是需求的集合，所以我们可以把上图继续改变：

![](https://image.woshipm.com/wp-files/2023/11/uqNWDVTO03neBx7oMC8a.png)

需求通过角色，来完成和LLM底层的交互。

写到这，让我想起Noam的一段话：

I would say one of the big takeaways is that, you know, if you have a technology that is like really, really general and has billions of use cases and like ordinary people can use, like launch at the launch, at the billions of people. I remember when I joined Google, there were a lot of people working on this enterprise search appliance, which, you know, it was OK. Like, I think maybe somebody had this conventional wisdom that like, B to B is the only way to make money. But like, what it actually turned out was like the much bigger thing was, you know, was was be the sea, you know, like just serve something that, serve something to everybody.

啥意思？Noam在谷歌早期的时候，有在做一件事，企业级的搜索，商业逻辑就是toB，但更大的机会在于，to海量的C，并且你只需要做一件事情，这件事情可以服务所有人。

这正好和大模型的通用性非常好的契合！

### 2\. C.ai的数据反应了其产品设计和用户需求之间的匹配

根据一些公开的报道，C.ai的月活超过千万，活跃用户日均使用时长超过2小时。

分析一通之后，我理解到达现在的水准，是两个因素共同作用：

1.  通用的Chat bot设计理念加LLM的能力；
2.  用户需求投射，以及角色设定后叠加在LLM上的适当满足；

![](https://image.woshipm.com/wp-files/2023/11/JwgOxjMGTyo3mku2PYi3.png)

未来未来AI Killer App，相信也会符合这两条要素。

## 五、尾声

下面参考文章里的内容，有不少精彩的分析，但是不是我想写的，要么视角偏投资人，要么视角拔的又太高，我觉得不管是不是AI，都应该从用户和需求出发，基于时代去理解创始团队，才能更好的获得启发。

C.ai是一个很有些AI Naitive感觉的产品，不在于交互层，而在于产品结构，非常充分的利用了大模型的能力，创始团队也非常坚持的走开放域的逻辑，撞上了大量的需求，这是它短期内获得一定成绩的原因。

C.ai以其独特的产品定位和技术方案，成功抓住了新一代用户对虚拟交互和情感寄托的需求，实现了快速增长。

对于AI应该走大模型还是小模型，我也有了新的理解~

在产品设计层面，C.ai为我们提供了宝贵的设计启发：

充分发挥基础技术的潜力，同时立足于对用户的深入理解，才能创造出广受欢迎和持续的好产品。

对于AI产品经理的价值和思考，也希望和更多朋友一起交流：）

**参考文章：**

Character AI：如何把LLM变成人类想象力引擎？https://mp.weixin.qq.com/s/FpqLAF4NUqDmjHq8t0EtlA

Character.AI：个性化的ChatGPT，AI大模型时代的UGC平台 https://mp.weixin.qq.com/s/U4R8loz1G9PYM\_l6IvNF\_A

Character.AI：AI Agents 平台下的大模型“民主化”梦想 https://mp.weixin.qq.com/s/sR4R1FylQUq3cZD0pqbs4g

Character.ai 公开虚拟角色榜单 TOP 600 https://mp.weixin.qq.com/s/vzWrEcAqXY1\_ZdhsBqaGvA

如何理解 c.ai 和 Pi 的用户需求(1) https://mp.weixin.qq.com/s/9vh7nKb27lQW9D431Ai9ig

如何理解 c.ai 和 Pi 的用户需求(2) https://mp.weixin.qq.com/s/SkZ6pW2E1YECEdMZA6XoOw

如何理解 c.ai 和 Pi 的用户需求(3) https://mp.weixin.qq.com/s/wcSnWx0aXuS3BWcV6uGyyA

23.10.12\_马丁的Character.AI 赛道说明书

【 探究 #CharacterAI 数据内幕 】 https://www.sohu.com/a/710378306\_121783244

**专栏作家**

Super黄，微信公众号：Super黄的念想，人人都是产品经理专栏作家。专注于深度产品拆解+商业分析。

本文原创发布于人人都是产品经理。未经许可，禁止转载

题图来自Unsplash，基于CC0协议。

该文观点仅代表作者本人，人人都是产品经理平台仅提供信息存储空间服务。

赞赏 收藏已收藏15 点赞已赞1更多精彩内容，请关注人人都是产品经理微信公众号或下载App[AI产品](https://www.woshipm.com/tag/ai%e4%ba%a7%e5%93%81)[Character.ai](https://www.woshipm.com/tag/character-ai)[LLM](https://www.woshipm.com/tag/llm)[对话机器人](https://www.woshipm.com/tag/%e5%af%b9%e8%af%9d%e6%9c%ba%e5%99%a8%e4%ba%ba)[分享到微博](https://service.weibo.com/share/share.php?appkey=2775287854&title=Character.ai：这家AI创业团队，找到了让LLM“爆发”的方法&url=https://www.woshipm.com/evaluating/5935708.html&pic=https://image.woshipm.com/wp-files/2023/11/rtrhi6aISoiKFwJJDE4y.jpg)微信扫一扫![微信二维码](https://api.pwmqr.com/qrcode/create/?url=https://www.woshipm.com/evaluating/5935708.html)分享