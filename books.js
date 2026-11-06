const BOOKS = [
  {
    id: "myth-of-sisyphus",
    isDailyFree: true,
    topLabelEn: "DAILY READ",
    topLabelCn: { tc: "每日選讀", sc: "每日选读" },
    categoryFilter: "MEANING & EXISTENTIAL",
    categoryEn: "MEANING & EXISTENTIAL",
    categoryCn: { tc: "生命意義與存在 /", sc: "生命意义与存在 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: ABSURDISM",
    themeCn: { tc: "主題：荒謬主義", sc: "主题：荒谬主义" },
    titleLinesEn: ["THE MYTH OF", "SISYPHUS"],
    titleFlatEn: "The Myth of Sisyphus",
    titleCn: { tc: "西西弗斯的神話", sc: "西西弗斯的神话" },
    authorLine: "Albert Camus (1942)",
    quoteEn: "“One must imagine Sisyphus happy.”",
    quoteCn: { tc: "“我們應當想像西西弗斯是快樂的。”", sc: "“我们应当想象西西弗斯是快乐的。”" },
    leadEn: "The rock always rolls back. Meaning is not waiting at the summit; it is made, lucidly, in the push.",
    leadCn: { tc: "石頭總會再滾下來。意義不在山頂等候，而是在清醒的推動裡被做成。", sc: "石头总会再滚下来。意义不在山顶等候，而是在清醒的推动里被做成。" },
    thesisEn: "Camus names the absurd as the confrontation between a mind that hungers for unity and a world that offers none. The philosophical crisis is not that life is hard, but that it will not explain itself. Rebellion, in his sense, is not escape from the rock. It is the refusal to lie about the rock — and the decision to push it without appeal to eternity, God, or a final reward.",
    thesisCn: { tc: "卡繆把荒謬定義為：渴求統一的心靈，撞上沉默的世界。哲學危機不在生活艱難，而在世界不肯自我解釋。反抗不是逃開石頭，而是拒絕對石頭說謊，並在不向永恆、上帝或最終獎賞申訴的前提下，繼續推它。", sc: "卡缪把荒谬定义为：渴求统一的心灵，撞上沉默的世界。哲学危机不在生活艰难，而在世界不肯自我解释。反抗不是逃开石头，而是拒绝对石头说谎，并在不向永恒、上帝或最终奖赏申诉的前提下，继续推它。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Absurd Is a Collision",
        titleCn: { tc: "荒謬是一場撞擊", sc: "荒谬是一场撞击" },
        conceptEn: "The absurd is not the world, and not the mind. It is the gap that opens when they meet.",
        plainEn: "You ask a crowded street for the purpose of your life and receive only traffic. The disappointment is not the street's fault. It is the mismatch between the question and the weather.",
        plainCn: { tc: "你向一條熱鬧的街追問人生目的，得到的只有車聲。失望不是街道的錯，而是問題與天氣合不上。", sc: "你向一条热闹的街追问人生目的，得到的只有车声。失望不是街道的错，而是问题与天气合不上。" }
      },
      {
        num: "02",
        titleEn: "Revolt Without Appeal",
        titleCn: { tc: "不申訴的反抗", sc: "不申诉的反抗" },
        conceptEn: "To live without appeal is to stop demanding that the cosmos ratify your days.",
        plainEn: "Pay the rent, make the coffee, love someone — and do not wait for the universe to stamp the form. The work is still the work.",
        plainCn: { tc: "付房租、煮咖啡、愛人——不要等宇宙來蓋章。事情仍然是事情。", sc: "付房租、煮咖啡、爱人——不要等宇宙来盖章。事情仍然是事情。" }
      },
      {
        num: "03",
        titleEn: "Imagine Him Happy",
        titleCn: { tc: "想像他快樂", sc: "想象他快乐" },
        conceptEn: "Happiness, for Camus, is a lucid decision at the foot of the mountain, not a prize at the top.",
        plainEn: "The moment Sisyphus turns and walks back down, he owns the interval. That walk — not the summit — is where a life can be claimed.",
        plainCn: { tc: "西西弗斯轉身走下山的那一段，才是他能據為己有的時間。生活可被認領的，不是山頂，是那一程。", sc: "西西弗斯转身走下山的那一段，才是他能据为己有的时间。生活可被认领的，不是山顶，是那一程。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Suicide as a Philosophical Problem",
        titleCn: { tc: "自殺作為哲學問題", sc: "自杀作为哲学问题" },
        conceptEn: "Camus begins with whether life is worth living — not as melodrama, but as the first honest question.",
        plainEn: "Before you optimize a week, you have to decide the week is worth showing up for. The essay starts there, then refuses despair as an answer.",
        plainCn: { tc: "在優化一週之前，你得先決定這一週值得出現。文章從這裡起筆，然後拒絕把絕望當成答案。", sc: "在优化一周之前，你得先决定这一周值得出现。文章从这里起笔，然后拒绝把绝望当成答案。" }
      },
      {
        num: "05",
        titleEn: "Quantity of Experience",
        titleCn: { tc: "經驗的量", sc: "经验的量" },
        conceptEn: "If there is no later world to cash in, the ethic shifts from purity of soul to fullness of presence.",
        plainEn: "Not a bucket list. More like: do not sleepwalk the afternoon you actually have.",
        plainCn: { tc: "不是人生清單，而是：不要夢遊地度過你真正擁有的那個下午。", sc: "不是人生清单，而是：不要梦游地度过你真正拥有的那个下午。" }
      },
      {
        num: "06",
        titleEn: "The Absurd Types",
        titleCn: { tc: "荒謬的典型", sc: "荒谬的典型" },
        conceptEn: "Don Juan, the actor, and the conqueror are sketches of lives that burn without pretending the fire is eternal.",
        plainEn: "They are not role models. They are proofs that intensity does not require a metaphysical warranty.",
        plainCn: { tc: "他們不是榜樣，只是證明：強度不必有形上學保證書。", sc: "他们不是榜样，只是证明：强度不必有形而上学保证书。" }
      },
      {
        num: "07",
        titleEn: "Freedom from Hope",
        titleCn: { tc: "從希望中自由", sc: "从希望中自由" },
        conceptEn: "Hope, when it mortgages the present to a future explanation, becomes another form of evasion.",
        plainEn: "“It will all make sense later” can be a kindness. It can also be a way of never inhabiting Tuesday.",
        plainCn: { tc: "「以後都會說得通」可以是安慰，也可以是讓你永遠不住進星期二。", sc: "“以后都会说得通”可以是安慰，也可以是让你永远不住进星期二。" }
      },
      {
        num: "08",
        titleEn: "The Present as Stage",
        titleCn: { tc: "當下即舞台", sc: "当下即舞台" },
        conceptEn: "With no afterlife as judge, the only tribunal is this hour's attention.",
        plainEn: "Your audience is the room you are in. Play to it.",
        plainCn: { tc: "觀眾就是你所在的房間。對它演出。", sc: "观众就是你所在的房间。对它演出。" }
      },
      {
        num: "09",
        titleEn: "Solidarity of the Condemned",
        titleCn: { tc: "被判者的連帶", sc: "被判者的连带" },
        conceptEn: "The absurd does not isolate; it equalizes. Everyone pushes a rock.",
        plainEn: "The person in the next cubicle is not a rival for meaning. They are a fellow laborer under the same mute sky.",
        plainCn: { tc: "隔壁隔間的人不是意義的競爭者，而是同一片沉默天空下的同工。", sc: "隔壁隔间的人不是意义的竞争者，而是同一片沉默天空下的同工。" }
      },
      {
        num: "10",
        titleEn: "Lucid Indifference",
        titleCn: { tc: "清醒的淡然", sc: "清醒的淡然" },
        conceptEn: "Camus's indifference is not numbness. It is the end of bargaining with heaven.",
        plainEn: "You stop asking the weather to apologize. You still carry an umbrella.",
        plainCn: { tc: "你不再要求天氣道歉，但你仍會帶傘。", sc: "你不再要求天气道歉，但你仍会带伞。" }
      }
    ],
    easternResonance: {
      quote: { tc: "死生、存亡、窮達、貧富、賢與不肖、毀譽、飢渴、寒暑，是事之變、命之行也；日夜相代乎前，而知不能規乎其始者也。故不足以滑和，不可入於靈府。", sc: "死生、存亡、穷达、贫富、贤与不肖、毁誉、饥渴、寒暑，是事之变、命之行也；日夜相代乎前，而知不能规乎其始者也。故不足以滑和，不可入于灵府。" },
      source: { tc: "——《莊子 · 德充符》", sc: "——《庄子 · 德充符》" },
      commentary: { tc: "莊子所謂「安之若命」，不是馴服，而是不再讓命運的起伏攪亂心的平和。卡繆的反抗與莊子的安命，是同一拒絕的兩種溫度：西方以清醒對抗沉默，東方以虛靜容納變化。西西弗斯若讀《德充符》，或會在轉身下山時，少一點怒，多一點安。", sc: "庄子所谓“安之若命”，不是驯服，而是不再让命运的起伏搅乱心的平和。卡缪的反抗与庄子的安命，是同一拒绝的两种温度：西方以清醒对抗沉默，东方以虚静容纳变化。西西弗斯若读《德充符》，或会在转身下山时，少一点怒，多一点安。" }
    },
    actionPromptEn: "Name one repetitive task you resent. Do it once today with full attention and no story about what it should lead to. Write one sentence about what remained when the story dropped.",
    actionPromptCn: { tc: "點出一件你厭惡的重複之事。今天只做一次，全神貫注，不編「它應該通向什麼」的故事。故事落下後，寫下一句還剩下什麼。", sc: "点出一件你厌恶的重复之事。今天只做一次，全神贯注，不编“它应该通向什么”的故事。故事落下后，写下一句还剩下什么。" }
  },
  {
    id: "four-thousand-weeks",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "HABITS, FOCUS & TIME",
    categoryEn: "HABITS, FOCUS & TIME",
    categoryCn: { tc: "習慣、專注與時間 /", sc: "习惯、专注与时间 /" },
    durationEn: "DURATION: 7 MIN",
    durationCn: { tc: "時間：7分鐘", sc: "时间：7分钟" },
    themeEn: "THEME: FINITUDE",
    themeCn: { tc: "主題：有限性", sc: "主题：有限性" },
    titleLinesEn: ["FOUR THOUSAND", "WEEKS"],
    titleFlatEn: "Four Thousand Weeks",
    titleCn: { tc: "四千個禮拜", sc: "四千个礼拜" },
    authorLine: "Oliver Burkeman (2021)",
    quoteEn: "“The average human lifespan is absurdly, terrifyingly, insultingly short.”",
    quoteCn: { tc: "“人類平均壽命短得荒謬、可怕、近乎侮辱。”", sc: "“人类平均寿命短得荒谬、可怕、近乎侮辱。”" },
    leadEn: "You will not get it all done. Time is not a resource you manage. It is the medium you spend by being someone.",
    leadCn: { tc: "你無法做完所有事。時間不是你管理的資源，而是你藉由成為某個人所度過的介質。", sc: "你无法做完所有事。时间不是你管理的资源，而是你借由成为某个人所度过的介质。" },
    thesisEn: "Burkeman takes the roughly four thousand weeks of a human life as a philosophical fact, not a productivity slogan. Productivity culture promises that with the right system you can finally get on top of time. The promise is a trap: the better you get at clearing the decks, the more decks arrive. The alternative is not laziness. It is a shift from trying to master time to choosing, at every hour, which finite life you will actually live.",
    thesisCn: { tc: "伯克曼把人生大約四千個禮拜當作哲學事實，而非效率口號。生產力文化承諾：只要系統對了，你就能凌駕時間。承諾是陷阱——你愈會清場，場子來得愈多。替代方案不是懶惰，而是從試圖主宰時間，轉為每一刻選擇你真正要過的有限人生。", sc: "伯克曼把人生大约四千个礼拜当作哲学事实，而非效率口号。生产力文化承诺：只要系统对了，你就能凌驾时间。承诺是陷阱——你愈会清场，场子来得愈多。替代方案不是懒惰，而是从试图主宰时间，转为每一刻选择你真正要过的有限人生。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Efficiency Trap",
        titleCn: { tc: "效率陷阱", sc: "效率陷阱" },
        conceptEn: "Clearing the inbox trains the world to send you more inbox.",
        plainEn: "Answer every email in an hour and you become the person who answers every email in an hour. The work expands to punish your competence.",
        plainCn: { tc: "一小時回完所有信，你就變成「一小時回完所有信的人」。工作會膨脹，來懲罰你的能幹。", sc: "一小时回完所有信，你就变成“一小时回完所有信的人”。工作会膨胀，来惩罚你的能干。" }
      },
      {
        num: "02",
        titleEn: "Cosmic Insignificance Therapy",
        titleCn: { tc: "宇宙渺小療法", sc: "宇宙渺小疗法" },
        conceptEn: "Your life will not matter in the way the achievement script promised — and that is a relief.",
        plainEn: "The picnic, the conversation, the unremarkable Tuesday: they do not need to scale. They need to be inhabited.",
        plainCn: { tc: "野餐、對話、平凡的星期二：它們不必放大，只需要被住進去。", sc: "野餐、对话、平凡的星期二：它们不必放大，只需要被住进去。" }
      },
      {
        num: "03",
        titleEn: "Patience as a Strategy",
        titleCn: { tc: "耐心作為策略", sc: "耐心作为策略" },
        conceptEn: "Because you cannot do everything, the skill is staying with the few things that will take the time they take.",
        plainEn: "A stew does not become dinner by being stirred faster. Some work has a duration that will not negotiate.",
        plainCn: { tc: "燉菜不會因為攪得更快而變成晚餐。有些工作有不肯談判的時長。", sc: "炖菜不会因为搅得更快而变成晚餐。有些工作有不肯谈判的时长。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "You Are Already in the Traffic",
        titleCn: { tc: "你已在車陣裡", sc: "你已在车阵里" },
        conceptEn: "Waiting for life to begin after the queues clear is how the queues become the life.",
        plainEn: "The commute is not the obstacle to your evening. Tonight includes the commute.",
        plainCn: { tc: "通勤不是晚上的障礙。今晚包含通勤。", sc: "通勤不是晚上的障碍。今晚包含通勤。" }
      },
      {
        num: "05",
        titleEn: "The Attention Economy at Home",
        titleCn: { tc: "家中的注意力經濟", sc: "家中的注意力经济" },
        conceptEn: "Every device is a bid for the weeks you do not get back.",
        plainEn: "Scrolling is not rest. It is a quiet auction in which your future self keeps losing.",
        plainCn: { tc: "滑手機不是休息，是一場安靜的拍賣，未來的你持續出價失敗。", sc: "滑手机不是休息，是一场安静的拍卖，未来的你持续出价失败。" }
      },
      {
        num: "06",
        titleEn: "Limit-Embracing",
        titleCn: { tc: "擁抱限度", sc: "拥抱限度" },
        conceptEn: "A good life is assembled by subtraction: what you will fail at on purpose.",
        plainEn: "Keep a 'won't do' list as seriously as a to-do list. The first list is how the second becomes honest.",
        plainCn: { tc: "「不做清單」要和待辦一樣認真。前者讓後者變得誠實。", sc: "“不做清单”要和待办一样认真。前者让后者变得诚实。" }
      },
      {
        num: "07",
        titleEn: "Digital Restlessness",
        titleCn: { tc: "數位焦躁", sc: "数位焦躁" },
        conceptEn: "Convenience that removes all friction also removes the texture that makes time feel like time.",
        plainEn: "Walking to the shop can be the point. Instant delivery steals the walk and calls it a favor.",
        plainCn: { tc: "走到店裡可以就是目的。即時外送偷走那一段路，還說是幫忙。", sc: "走到店里可以就是目的。即时外送偷走那一段路，还说是帮忙。" }
      },
      {
        num: "08",
        titleEn: "The Problem of Proximate Goals",
        titleCn: { tc: "近端目標的問題", sc: "近端目标的问题" },
        conceptEn: "We chase instrumental aims until the original reason for wanting them has evaporated.",
        plainEn: "You wanted a quieter mind. You built a career that never sits down.",
        plainCn: { tc: "你想要更安靜的心，卻打造了一份從不坐下的事業。", sc: "你想要更安静的心，却打造了一份从不坐下的事业。" }
      },
      {
        num: "09",
        titleEn: "Shared Time",
        titleCn: { tc: "共享的時間", sc: "共享的时间" },
        conceptEn: "The deepest uses of a week are often synchronized with other people's weeks.",
        plainEn: "A calendar that is perfectly optimized for you can be perfectly empty of friendship.",
        plainCn: { tc: "為你完美優化的日曆，可以完美地空無友誼。", sc: "为你完美优化的日历，可以完美地空无友谊。" }
      },
      {
        num: "10",
        titleEn: "The Hour You Are In",
        titleCn: { tc: "你所在的這一小時", sc: "你所在的这一小时" },
        conceptEn: "Finitude is not a mood. It is the condition that makes a choice meaningful.",
        plainEn: "If you could do everything later, nothing would be worth choosing now.",
        plainCn: { tc: "若一切都能以後再做，此刻就沒有什麼值得選擇。", sc: "若一切都能以后再做，此刻就没有什么值得选择。" }
      }
    ],
    easternResonance: {
      quote: { tc: "吾生也有涯，而知也無涯。以有涯隨無涯，殆已。", sc: "吾生也有涯，而知也无涯。以有涯随无涯，殆已。" },
      source: { tc: "——《莊子 · 養生主》", sc: "——《庄子 · 养生主》" },
      commentary: { tc: "莊子一開始就切斷「以有限追逐無限」的幻想。伯克曼的四千週，是同一事實的現代算法。養生主所謂「緣督以為經」，不是把生命當專案管理，而是沿著空隙走——承認刀刃會鈍，承認知不能窮，於是把力氣留給真正能被活過的那些週。", sc: "庄子一开始就切断“以有限追逐无限”的幻想。伯克曼的四千周，是同一事实的现代算法。养生主所谓“缘督以为经”，不是把生命当专案管理，而是沿着空隙走——承认刀刃会钝，承认知不能穷，于是把力气留给真正能被活过的那些周。" }
    },
    actionPromptEn: "Write a three-item 'won't do this month' list. Protect it as if it were a meeting with someone you love. At day's end, note one thing you let take the time it actually needed.",
    actionPromptCn: { tc: "寫下本月三件「不做」。像守護與所愛之人的約會一樣守護它。今晚記下一件你讓它花去它真正需要的時間之事。", sc: "写下本月三件“不做”。像守护与所爱之人的约会一样守护它。今晚记下一件你让它花去它真正需要的时间之事。" }
  },
  {
    id: "atomic-habits",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "HABITS, FOCUS & TIME",
    categoryEn: "HABITS, FOCUS & TIME",
    categoryCn: { tc: "習慣、專注與時間 /", sc: "习惯、专注与时间 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: IDENTITY LOOPS",
    themeCn: { tc: "主題：身分迴路", sc: "主题：身分回路" },
    titleLinesEn: ["ATOMIC", "HABITS"],
    titleFlatEn: "Atomic Habits",
    titleCn: { tc: "原子習慣", sc: "原子习惯" },
    authorLine: "James Clear (2018)",
    quoteEn: "“You do not rise to the level of your goals. You fall to the level of your systems.”",
    quoteCn: { tc: "“你不會上升到目標的高度，而會下落到系統的高度。”", sc: "“你不会上升到目标的高度，而会下落到系统的高度。”" },
    leadEn: "Tiny actions compound. The real work is becoming the kind of person for whom the action is obvious.",
    leadCn: { tc: "微小行動會複利。真正的工作，是成為那種覺得這行動理所當然的人。", sc: "微小行动会复利。真正的工作，是成为那种觉得这行动理所当然的人。" },
    thesisEn: "Clear's argument is architectural: behavior is the surface of identity, environment, and feedback. Goals describe a destination; systems describe what you repeat. The four laws — make it obvious, attractive, easy, and satisfying — are less a hack than a translation of how nervous systems actually change. Lasting change is less about heroic mornings and more about redesigning the room in which mornings happen.",
    thesisCn: { tc: "克利爾的論點是建築性的：行為是身分、環境與回饋的表面。目標描述目的地，系統描述你重複什麼。四法則——讓它顯而易見、有吸引力、容易、令人滿足——不是hack，而是神經系統真正如何改變的翻譯。持久改變較少靠英雄式早晨，較多靠重新設計早晨發生的那個房間。", sc: "克利尔的论点是建筑性的：行为是身分、环境与回馈的表面。目标描述目的地，系统描述你重复什么。四法则——让它显而易见、有吸引力、容易、令人满足——不是hack，而是神经系统真正如何改变的翻译。持久改变较少靠英雄式早晨，较多靠重新设计早晨发生的那个房间。" },
    highlights: [
      {
        num: "01",
        titleEn: "Identity Before Outcome",
        titleCn: { tc: "先身分，後結果", sc: "先身分，后结果" },
        conceptEn: "Every action is a vote for the type of person you are becoming.",
        plainEn: "Don't try to read fifty books. Become a reader by reading one page in the chair you already sit in.",
        plainCn: { tc: "別想著讀五十本書。先在你本來就坐的椅子上讀一頁，成為一個讀者。", sc: "别想着读五十本书。先在你本来就坐的椅子上读一页，成为一个读者。" }
      },
      {
        num: "02",
        titleEn: "Environment Is the Invisible Hand",
        titleCn: { tc: "環境是看不見的手", sc: "环境是看不见的手" },
        conceptEn: "We do not rise on willpower. We drift toward what is nearby and easy.",
        plainEn: "Fruit on the counter, phone in another room. The room is the plan.",
        plainCn: { tc: "水果放櫃上，手機放另一個房間。房間就是計畫。", sc: "水果放柜上，手机放另一个房间。房间就是计划。" }
      },
      {
        num: "03",
        titleEn: "The Two-Minute Door",
        titleCn: { tc: "兩分鐘的門", sc: "两分钟的门" },
        conceptEn: "Scale a habit down until starting is beneath your dignity to refuse.",
        plainEn: "Put on running shoes. Open the document. The first two minutes are the habit; the rest is bonus.",
        plainCn: { tc: "穿上跑鞋。打開文件。前兩分鐘才是習慣，其餘是贈品。", sc: "穿上跑鞋。打开文件。前两分钟才是习惯，其余是赠品。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Habit Stacking",
        titleCn: { tc: "習慣疊加", sc: "习惯叠加" },
        conceptEn: "New behavior hitchhikes on a ritual that already survives contact with real days.",
        plainEn: "After I pour coffee, I write one sentence. The coffee is the hook; the sentence is the hitchhiker.",
        plainCn: { tc: "倒完咖啡之後，我寫一句。咖啡是鉤子，句子是搭便車的人。", sc: "倒完咖啡之后，我写一句。咖啡是钩子，句子是搭便车的人。" }
      },
      {
        num: "05",
        titleEn: "Make It Attractive",
        titleCn: { tc: "讓它有吸引力", sc: "让它有吸引力" },
        conceptEn: "Temptation bundling pairs a needed action with a wanted one until they fuse.",
        plainEn: "Only the podcast you love plays at the gym. Your ears bribe your legs.",
        plainCn: { tc: "只有你愛的podcast在健身房播。耳朵賄賂雙腿。", sc: "只有你爱的podcast在健身房播。耳朵贿赂双腿。" }
      },
      {
        num: "06",
        titleEn: "Make It Unsatisfying to Fail",
        titleCn: { tc: "讓失敗不痛快", sc: "让失败不痛快" },
        conceptEn: "A habit needs a cost that arrives now, not in a vague later.",
        plainEn: "A public streak, a bet with a friend, a visible calendar. Shame and pride are crude, but they work as scaffolding.",
        plainCn: { tc: "公開連續紀錄、與朋友打賭、看得見的日曆。羞恥與驕傲粗糙，但可當鷹架。", sc: "公开连续纪录、与朋友打赌、看得见的日历。羞耻与骄傲粗糙，但可当鹰架。" }
      },
      {
        num: "07",
        titleEn: "Plateaus of Latent Potential",
        titleCn: { tc: "潛力的高原", sc: "潜力的高原" },
        conceptEn: "Compounding is invisible until it isn't. Most people quit in the flat part of the curve.",
        plainEn: "Ice looks idle at minus one and changes state at zero. Your boring week may be minus one.",
        plainCn: { tc: "冰在零下一度看來毫無動靜，在零度改變狀態。你無聊的一週可能是零下一度。", sc: "冰在零下一度看来毫无动静，在零度改变状态。你无聊的一周可能是零下一度。" }
      },
      {
        num: "08",
        titleEn: "The Goldilocks Rule",
        titleCn: { tc: "適中法則", sc: "适中法则" },
        conceptEn: "Motivation lives at the edge of ability: hard enough to be interesting, easy enough to continue.",
        plainEn: "If practice bores you, raise the difficulty slightly. If it humiliates you, lower it. Stay near the edge.",
        plainCn: { tc: "練習若令你無聊，略增難度；若令你羞辱，略降。靠近那條邊。", sc: "练习若令你无聊，略增难度；若令你羞辱，略降。靠近那条边。" }
      },
      {
        num: "09",
        titleEn: "Professionals Reduce Variance",
        titleCn: { tc: "專業者降低變異", sc: "专业者降低变异" },
        conceptEn: "Showing up on dull days is the whole method.",
        plainEn: "Amateurs wait to feel like it. Professionals have a time and a place, and feelings are optional.",
        plainCn: { tc: "業餘者等感覺來。專業者有時間與地點，感覺是可選的。", sc: "业余者等感觉来。专业者有时间与地点，感觉是可选的。" }
      },
      {
        num: "10",
        titleEn: "Never Miss Twice",
        titleCn: { tc: "永不連續錯過兩次", sc: "永不连续错过两次" },
        conceptEn: "The second miss is the identity shift you didn't vote for.",
        plainEn: "Skip a workout. The next one is now a referendum on whether you are still the kind of person who trains.",
        plainCn: { tc: "少練一次。下一次就成了公投：你是否仍是會訓練的那種人。", sc: "少练一次。下一次就成了公投：你是否仍是会训练的那种人。" }
      }
    ],
    easternResonance: {
      quote: { tc: "不積跬步，無以至千里；不積小流，無以成江海。", sc: "不积跬步，无以至千里；不积小流，无以成江海。" },
      source: { tc: "——《荀子 · 勸學篇》", sc: "——《荀子 · 劝学篇》" },
      commentary: { tc: "荀子講積累，不是雞湯，是學習的物質條件：跬步與小流必須被堆積，江海才會出現。克利爾的原子習慣是同一物理學的行為版。東方重「積」與「習」——習者，鳥數飛也——西方重回饋迴路與環境設計。兩者會合處在於：人格不是宣言，是重複。", sc: "荀子讲积累，不是鸡汤，是学习的物质条件：跬步与小流必须被堆积，江海才会出现。克利尔的原子习惯是同一物理学的行为版。东方重“积”与“习”——习者，鸟数飞也——西方重回馈回路与环境设计。两者会合处在于：人格不是宣言，是重复。" }
    },
    actionPromptEn: "Pick one identity you want to vote for today (a writer, a walker, a patient friend). Design a two-minute version and attach it to something you already do. Check the box only after you have done the two minutes.",
    actionPromptCn: { tc: "選一個你今天想投票支持的身分（寫作者、行走者、有耐心的朋友）。設計兩分鐘版本，掛在你已在做的事上。做完兩分鐘再勾選。", sc: "选一个你今天想投票支持的身分（写作者、行走者、有耐心的朋友）。设计两分钟版本，挂在你已在做的事上。做完两分钟再勾选。" }
  },
  {
    id: "courage-to-be-disliked",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "RELATIONSHIPS & INTIMACY",
    categoryEn: "RELATIONSHIPS & INTIMACY",
    categoryCn: { tc: "關係與親密 /", sc: "关系与亲密 /" },
    durationEn: "DURATION: 7 MIN",
    durationCn: { tc: "時間：7分鐘", sc: "时间：7分钟" },
    themeEn: "THEME: SEPARATION OF TASKS",
    themeCn: { tc: "主題：課題分離", sc: "主题：课题分离" },
    titleLinesEn: ["THE COURAGE", "TO BE DISLIKED"],
    titleFlatEn: "The Courage to Be Disliked",
    titleCn: { tc: "被討厭的勇氣", sc: "被讨厌的勇气" },
    authorLine: "Ichiro Kishimi & Fumitake Koga (2013)",
    quoteEn: "“Freedom is being disliked by other people.”",
    quoteCn: { tc: "“自由就是被別人討厭。”", sc: "“自由就是被别人讨厌。”" },
    leadEn: "Other people's tasks are not yours. The courage required is not to be loved more, but to be disliked without collapsing.",
    leadCn: { tc: "別人的課題不是你的。需要的勇氣不是更被愛，而是被討厭時不崩塌。", sc: "别人的课题不是你的。需要的勇气不是更被爱，而是被讨厌时不崩塌。" },
    thesisEn: "Kishimi and Koga recast Adlerian psychology as a Socratic dialogue: we are not determined by the past; we choose the meaning of the past in the service of a present goal. Interpersonal friction is often a confusion of tasks — whose life, whose feeling, whose decision. Community feeling (Gemeinschaftsgefühl) is the horizontal alternative to the vertical struggle for superiority. The title's courage is the price of that horizontality.",
    thesisCn: { tc: "岸見與古賀把阿德勒心理學寫成蘇格拉底對話：我們不被過去決定，而是為了當下目標選擇過去的意義。人際摩擦常常是課題混淆——誰的人生、誰的感受、誰的決定。共同體感覺是優越鬥爭的水平替代。書名中的勇氣，是這水平關係的代價。", sc: "岸见与古贺把阿德勒心理学写成苏格拉底对话：我们不被过去决定，而是为了当下目标选择过去的意义。人际摩擦常常是课题混淆——谁的人生、谁的感受、谁的决定。共同体感觉是优越斗争的水平替代。书名中的勇气，是这水平关系的代价。" },
    highlights: [
      {
        num: "01",
        titleEn: "Teleology, Not Etiology",
        titleCn: { tc: "目的論，而非原因論", sc: "目的论，而非原因论" },
        conceptEn: "The question is not what happened to you, but what you are using the story to achieve now.",
        plainEn: "“I can't speak up because of my childhood” may be true as history and false as destiny. The present goal might be safety.",
        plainCn: { tc: "「我因童年無法發言」可以是真的歷史，卻是假的命運。當下目標也許只是安全。", sc: "“我因童年无法发言”可以是真的历史，却是假的命运。当下目标也许只是安全。" }
      },
      {
        num: "02",
        titleEn: "Separation of Tasks",
        titleCn: { tc: "課題分離", sc: "课题分离" },
        conceptEn: "Whose face is red if this goes badly? That person owns the task.",
        plainEn: "You can offer help. You cannot do their feeling for them. Their judgment of you is their task.",
        plainCn: { tc: "你可以提供幫助，不能代他們感覺。他們對你的評價，是他們的課題。", sc: "你可以提供帮助，不能代他们感觉。他们对你的评价，是他们的课题。" }
      },
      {
        num: "03",
        titleEn: "Horizontal Relationships",
        titleCn: { tc: "水平關係", sc: "水平关系" },
        conceptEn: "Praise and rebuke both look down. Encouragement stands beside.",
        plainEn: "“I'm proud of you” can be love. It can also be a ranking. “I see you did it” is closer to respect.",
        plainCn: { tc: "「我為你驕傲」可以是愛，也可以是排名。「我看見你做了」更接近尊重。", sc: "“我为你骄傲”可以是爱，也可以是排名。“我看见你做了”更接近尊重。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "All Problems Are Interpersonal",
        titleCn: { tc: "一切煩惱皆人際", sc: "一切烦恼皆人际" },
        conceptEn: "Adler collapses private anguish into the field of other people — belonging, status, contribution.",
        plainEn: "Even loneliness is a relationship: a relationship with an absence.",
        plainCn: { tc: "即便孤獨也是一種關係：與缺席的關係。", sc: "即便孤独也是一种关系：与缺席的关系。" }
      },
      {
        num: "05",
        titleEn: "The Life-Lie",
        titleCn: { tc: "人生的謊言", sc: "人生的谎言" },
        conceptEn: "We manufacture reasons that postpone the courage we do not want to spend.",
        plainEn: "Waiting until you feel ready can be a costume for never beginning.",
        plainCn: { tc: "等到自己準備好，可能是永不開始的戲服。", sc: "等到自己准备好，可能是永不开始的戏服。" }
      },
      {
        num: "06",
        titleEn: "Recognition Addiction",
        titleCn: { tc: "認可成癮", sc: "认可成瘾" },
        conceptEn: "If your worth is outsourced to applause, other people hold your nervous system.",
        plainEn: "A like is a small leash. Enough of them and you cannot walk across a room without checking.",
        plainCn: { tc: "一個讚是一條細繩。夠多之後，你走過房間都要看手機。", sc: "一个赞是一条细绳。够多之后，你走过房间都要看手机。" }
      },
      {
        num: "07",
        titleEn: "Contribution over Self-Display",
        titleCn: { tc: "貢獻先於展示", sc: "贡献先于展示" },
        conceptEn: "Community feeling is built by usefulness, not by being impressive.",
        plainEn: "Wash the cups. The room changes. You do not need to be the story of the evening.",
        plainCn: { tc: "洗碗。房間就變了。你不必成為今晚的故事。", sc: "洗碗。房间就变了。你不必成为今晚的故事。" }
      },
      {
        num: "08",
        titleEn: "Here and Now",
        titleCn: { tc: "此時此地", sc: "此时此地" },
        conceptEn: "The past is material; the decision is always present tense.",
        plainEn: "You can honor a scar without letting it chair the meeting.",
        plainCn: { tc: "你可以尊重一道疤，不必讓它主持會議。", sc: "你可以尊重一道疤，不必让它主持会议。" }
      },
      {
        num: "09",
        titleEn: "The Courage to Be Normal",
        titleCn: { tc: "普通的勇氣", sc: "普通的勇气" },
        conceptEn: "Specialness is another ranking. Ordinary contribution is a form of freedom.",
        plainEn: "You do not have to be exceptional to be allowed a life.",
        plainCn: { tc: "你不必卓越才被允許擁有人生。", sc: "你不必卓越才被允许拥有人生。" }
      },
      {
        num: "10",
        titleEn: "Dislike as Evidence of a Self",
        titleCn: { tc: "被討厭作為自我的證據", sc: "被讨厌作为自我的证据" },
        conceptEn: "If no one can dislike you, you have not yet drawn an outline.",
        plainEn: "A boundary will disappoint someone. That disappointment is data, not a verdict on your right to exist.",
        plainCn: { tc: "界限會讓人失望。那失望是資料，不是你是否有權存在的判決。", sc: "界限会让人失望。那失望是资料，不是你是否有权存在的判决。" }
      }
    ],
    easternResonance: {
      quote: { tc: "且夫乘物以遊心，託不得已以養中，至矣。何作為報也！莫若為致命。此其難者。", sc: "且夫乘物以游心，托不得已以养中，至矣。何作为报也！莫若为致命。此其难者。" },
      source: { tc: "——《莊子 · 人間世》／逍遙之義：定乎內外之分", sc: "——《庄子 · 人间世》／逍遥之义：定乎内外之分" },
      commentary: { tc: "《逍遙遊》言「定乎內外之分，辯乎榮辱之境」，與阿德勒的課題分離幾乎同構：內是自己的心與選擇，外是毀譽與他人眼色。莊子要人乘物遊心，不把榮辱當成自己的中軸。被討厭的勇氣，在中文裡很近「不以物喜，不以己悲」之前的那一步：先分清什麼是物，什麼是己。", sc: "《逍遥游》言“定乎内外之分，辩乎荣辱之境”，与阿德勒的课题分离几乎同构：内是自己的心与选择，外是毁誉与他人眼色。庄子要人乘物游心，不把荣辱当成自己的中轴。被讨厌的勇气，在中文里很近“不以物喜，不以己悲”之前的那一步：先分清什么是物，什么是己。" }
    },
    actionPromptEn: "Today, when a worry appears, ask: whose task is this? If it is theirs, write one sentence of care you can offer — then stop managing their feeling. If it is yours, take one concrete step without announcing it.",
    actionPromptCn: { tc: "今天憂慮出現時問：這是誰的課題？若是對方的，寫一句你能給的關心，然後停止管理他們的情緒。若是你的，做一件具體的事，不必宣告。", sc: "今天忧虑出现时问：这是谁的课题？若是对方的，写一句你能给的关心，然后停止管理他们的情绪。若是你的，做一件具体的事，不必宣告。" }
  },
  {
    id: "psychology-of-money",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "WEALTH & AUTONOMY",
    categoryEn: "WEALTH & AUTONOMY",
    categoryCn: { tc: "財富與自主 /", sc: "财富与自主 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: ENOUGH",
    themeCn: { tc: "主題：知足", sc: "主题：知足" },
    titleLinesEn: ["THE PSYCHOLOGY", "OF MONEY"],
    titleFlatEn: "The Psychology of Money",
    titleCn: { tc: "金錢心理學", sc: "金钱心理学" },
    authorLine: "Morgan Housel (2020)",
    quoteEn: "“The highest form of wealth is the ability to wake up every morning and say, ‘I can do whatever I want today.’”",
    quoteCn: { tc: "“財富的最高形式，是每天早晨能說：今天我可以做我想做的事。”", sc: "“财富的最高形式，是每天早晨能说：今天我可以做我想做的事。”" },
    leadEn: "Money is a story you tell about risk, time, and enough. Reasonable beats brilliant when the game is long.",
    leadCn: { tc: "金錢是你關於風險、時間與「夠了」的故事。賽局長時，合理勝過聰明。", sc: "金钱是你关于风险、时间与“够了”的故事。赛局长时，合理胜过聪明。" },
    thesisEn: "Housel treats finance as autobiography. People do not make spreadsheet decisions; they make decisions that feel coherent with the history that formed them. Wealth is what you don't spend; independence is the return that matters. Compounding is less a formula than a temperament: the willingness to look slightly foolish, avoid ruin, and let time do the violent work of multiplication.",
    thesisCn: { tc: "豪瑟爾把財務當自傳。人做的不是試算表決策，而是與自身歷史自洽的決策。財富是你沒花掉的；獨立才是真正的報酬。複利與其說是公式，不如說是氣質：願意看起來有點傻，避開毀滅，讓時間去做乘法這件猛烈的事。", sc: "豪瑟尔把财务当自传。人做的不是试算表决策，而是与自身历史自洽的决策。财富是你没花掉的；独立才是真正的报酬。复利与其说是公式，不如说是气质：愿意看起来有点傻，避开毁灭，让时间去做乘法这件猛烈的事。" },
    highlights: [
      {
        num: "01",
        titleEn: "Luck, Risk, and the Same Coin",
        titleCn: { tc: "運氣與風險同一枚硬幣", sc: "运气与风险同一枚硬币" },
        conceptEn: "Respect outcomes that could have gone the other way — including your own successes.",
        plainEn: "The colleague who 'got lucky' and the one who 'blew it' may have run the same process. Humility is statistical.",
        plainCn: { tc: "「走運」的同事與「搞砸」的同事，可能跑了同一套流程。謙卑是統計學。", sc: "“走运”的同事与“搞砸”的同事，可能跑了同一套流程。谦卑是统计学。" }
      },
      {
        num: "02",
        titleEn: "Enough Is a Position",
        titleCn: { tc: "「夠了」是一種位置", sc: "“够了”是一种位置" },
        conceptEn: "Ruin begins when you move the goalposts after every win.",
        plainEn: "The extra house you don't need can cost the night sleep you do. Enough is the fence that keeps the game playable.",
        plainCn: { tc: "多一棟不需要的房子，可能代價是你需要的睡眠。「夠了」是讓遊戲能繼續玩的圍欄。", sc: "多一栋不需要的房子，可能代价是你需要的睡眠。“够了”是让游戏能继续玩的围栏。" }
      },
      {
        num: "03",
        titleEn: "Wealth Is Unseen",
        titleCn: { tc: "財富是看不見的", sc: "财富是看不见的" },
        conceptEn: "Spent money is a display; unspent money is an option on your future hours.",
        plainEn: "The quiet neighbor with the old car may own their calendar. The loud one may be renting a personality.",
        plainCn: { tc: "開舊車的安靜鄰居，可能擁有自己的日曆。高調的那位可能在租一套人格。", sc: "开旧车的安静邻居，可能拥有自己的日历。高调的那位可能在租一套人格。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Room for Error",
        titleCn: { tc: "容錯空間", sc: "容错空间" },
        conceptEn: "Survival is the prerequisite for compounding. Barbells beat precision.",
        plainEn: "A plan that only works if nothing goes wrong is not a plan. It is a wish with a spreadsheet.",
        plainCn: { tc: "只有一切順利才成立的計畫，不是計畫，是帶試算表的願望。", sc: "只有一切顺利才成立的计划，不是计划，是带试算表的愿望。" }
      },
      {
        num: "05",
        titleEn: "Tails Drive the Distribution",
        titleCn: { tc: "尾部驅動分配", sc: "尾部驱动分配" },
        conceptEn: "A few events do most of the work — in markets, careers, and savings.",
        plainEn: "You don't need to be right often. You need to still be playing when the rare right thing arrives.",
        plainCn: { tc: "你不必常常正確。你需要在那件罕見的正確之事到來時，仍在場上。", sc: "你不必常常正确。你需要在那件罕见的正确之事到来时，仍在场上。" }
      },
      {
        num: "06",
        titleEn: "Freedom as the Return",
        titleCn: { tc: "自由即報酬", sc: "自由即报酬" },
        conceptEn: "Control over your time is the dividend people actually want from money.",
        plainEn: "The raise that steals your evenings is a pay cut in the currency of life.",
        plainCn: { tc: "偷走夜晚的加薪，用生命這貨幣來看是減薪。", sc: "偷走夜晚的加薪，用生命这货币来看是减薪。" }
      },
      {
        num: "07",
        titleEn: "Save Without a Story",
        titleCn: { tc: "沒有故事地存", sc: "没有故事地存" },
        conceptEn: "Saving for a specific purchase is fine. Saving for optionality is better.",
        plainEn: "Unassigned savings buy you the right to change your mind later. That right is expensive to live without.",
        plainCn: { tc: "未指定用途的儲蓄，買的是以後改變主意的權利。沒有這權利，生活很貴。", sc: "未指定用途的储蓄，买的是以后改变主意的权利。没有这权利，生活很贵。" }
      },
      {
        num: "08",
        titleEn: "Reasonable > Rational",
        titleCn: { tc: "合理大於理性", sc: "合理大于理性" },
        conceptEn: "A strategy you can stick with through boredom and panic beats an optimal one you will abandon.",
        plainEn: "The mathematically perfect portfolio you cannot sleep on is, for you, imperfect.",
        plainCn: { tc: "讓你睡不著的數學完美組合，對你而言並不完美。", sc: "让你睡不着的数学完美组合，对你而言并不完美。" }
      },
      {
        num: "09",
        titleEn: "The Historical Sample Is Short",
        titleCn: { tc: "歷史樣本很短", sc: "历史样本很短" },
        conceptEn: "Your personal data set is one life. Do not confuse it with the laws of the universe.",
        plainEn: "You grew up in a boom or a bust. That weather is not climate.",
        plainCn: { tc: "你在繁榮或蕭條中長大。那是天氣，不是氣候。", sc: "你在繁荣或萧条中长大。那是天气，不是气候。" }
      },
      {
        num: "10",
        titleEn: "Leave a Margin for Being Human",
        titleCn: { tc: "為人性留白", sc: "为人性留白" },
        conceptEn: "You will get greedy, scared, and tired. Design for that person, not for a spreadsheet saint.",
        plainEn: "Automatic transfers, simple rules, fewer decisions at 1 a.m. Humility as infrastructure.",
        plainCn: { tc: "自動轉帳、簡單規則、少在凌晨一點做決定。把謙卑做成基礎設施。", sc: "自动转账、简单规则、少在凌晨一点做决定。把谦卑做成基础设施。" }
      }
    ],
    easternResonance: {
      quote: { tc: "名與身孰親？身與貨孰多？得與亡孰病？甚愛必大費，多藏必厚亡。故知足不辱，知止不殆，可以長久。", sc: "名与身孰亲？身与货孰多？得与亡孰病？甚爱必大费，多藏必厚亡。故知足不辱，知止不殆，可以长久。" },
      source: { tc: "——《道德經 · 第四十四章》", sc: "——《道德经 · 第四十四章》" },
      commentary: { tc: "老子把「知足」與「知止」當成長久的技術，不是道德裝飾。豪瑟爾的 enough，是同一技術的財務翻譯：不讓名聲與貨殖壓過身體與日曆。甚愛必大費——對收益的迷戀會以睡眠、關係、判斷力來付帳。東方的止，西方的 margin of safety，都是讓複利有時間活著的圍欄。", sc: "老子把“知足”与“知止”当成长久的技术，不是道德装饰。豪瑟尔的 enough，是同一技术的财务翻译：不让名声与货殖压过身体与日历。甚爱必大费——对收益的迷恋会以睡眠、关系、判断力来付账。东方的止，西方的 margin of safety，都是让复利有时间活着的围栏。" }
    },
    actionPromptEn: "Write a one-sentence definition of 'enough' for the next twelve months (time, money, or both). Make one transfer or one refusal that defends that sentence.",
    actionPromptCn: { tc: "用一句話定義未來十二個月的「夠了」（時間、金錢或兩者）。做一筆轉帳或一次拒絕來捍衛這句話。", sc: "用一句话定义未来十二个月的“够了”（时间、金钱或两者）。做一笔转账或一次拒绝来捍卫这句话。" }
  },
  {
    id: "meditations",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "MINDSET & MENTAL MODELS",
    categoryEn: "MINDSET & MENTAL MODELS",
    categoryCn: { tc: "心智與心智模型 /", sc: "心智与心智模型 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: INNER CITADEL",
    themeCn: { tc: "主題：內在堡壘", sc: "主题：内在堡垒" },
    titleLinesEn: ["MEDITATIONS"],
    titleFlatEn: "Meditations",
    titleCn: { tc: "沉思錄", sc: "沉思录" },
    authorLine: "Marcus Aurelius (c. 170–180)",
    quoteEn: "“You have power over your mind — not outside events. Realize this, and you will find strength.”",
    quoteCn: { tc: "“你能主宰的是心，不是外事。明白這一點，便有了力量。”", sc: "“你能主宰的是心，不是外事。明白这一点，便有了力量。”" },
    leadEn: "A private notebook from the most powerful man on earth, written to himself, about not being owned by what happens.",
    leadCn: { tc: "地球上最有權力的人寫給自己的私密筆記：如何不被發生的事所擁有。", sc: "地球上最有权力的人写给自己的私密笔记：如何不被发生的事所拥有。" },
    thesisEn: "The Meditations are not a treatise. They are drills. Again and again Marcus returns to the same instruments: the dichotomy of control, the brevity of reputation, the kinship of all rational beings, the view from above. Stoicism here is not grimness. It is a technology for keeping the ruling faculty (hegemonikon) unenslaved while governing an empire and burying children. The work's intimacy is the point: philosophy as daily hygiene.",
    thesisCn: { tc: "《沉思錄》不是論文，是操練。馬可一再開回同一組工具：可控與不可控的二分、名聲的短暫、理性者的親族、從高處看。斯多葛在此不是陰鬱，而是讓主宰心智不被奴役的技術——即便在治理帝國與埋葬孩子之時。親密本身就是重點：哲學作為每日清潔。", sc: "《沉思录》不是论文，是操练。马可一再開回同一组工具：可控与不可控的二分、名声的短暂、理性者的親族、从高处看。斯多葛在此不是阴郁，而是让主宰心智不被奴役的技术——即便在治理帝国与埋葬孩子之时。亲密本身就是重点：哲学作为每日清洁。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Dichotomy of Control",
        titleCn: { tc: "可控與不可控", sc: "可控与不可控" },
        conceptEn: "Opinions, impulses, and assent are yours. The rest is weather.",
        plainEn: "You do not control the delay. You control whether the delay becomes a second injury called rage.",
        plainCn: { tc: "你不能控制延誤。你能控制延誤是否變成名為憤怒的二次傷害。", sc: "你不能控制延误。你能控制延误是否变成名为愤怒的二次伤害。" }
      },
      {
        num: "02",
        titleEn: "The View from Above",
        titleCn: { tc: "從高處看", sc: "从高处看" },
        conceptEn: "Scale is an antidote to self-importance and to despair.",
        plainEn: "From a height, the argument in the kitchen is a speck. So is the empire. Both still require care; neither requires panic.",
        plainCn: { tc: "從高處看，廚房裡的爭執是一點。帝國也是。兩者仍需照料，都不需恐慌。", sc: "从高处看，厨房里的争执是一点。帝国也是。两者仍需照料，都不需恐慌。" }
      },
      {
        num: "03",
        titleEn: "Obstacle as Material",
        titleCn: { tc: "障礙即材料", sc: "障碍即材料" },
        conceptEn: "What stands in the way becomes the way when the faculty of judgment uses it.",
        plainEn: "The rude email is raw material for patience practice. You were going to need a gym anyway.",
        plainCn: { tc: "無禮的郵件是耐心練習的原料。你本來就需要一間健身房。", sc: "无礼的邮件是耐心练习的原料。你本来就需要一间健身房。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Memento Mori as Kindness",
        titleCn: { tc: "向死而生是一種慈", sc: "向死而生是一种慈" },
        conceptEn: "Death concentrates attention on what is actually in the room.",
        plainEn: "If this were the last conversation, you would listen differently. Sometimes listen that way anyway.",
        plainCn: { tc: "若這是最後一次談話，你會用不同方式聽。有時就那樣聽。", sc: "若这是最后一次谈话，你会用不同方式听。有时就那样听。" }
      },
      {
        num: "05",
        titleEn: "The Inner Citadel",
        titleCn: { tc: "內在堡壘", sc: "内在堡垒" },
        conceptEn: "No one can force your assent. That is the last unconquered square.",
        plainEn: "They can take the title, the schedule, the news. The sentence you say to yourself remains yours.",
        plainCn: { tc: "他們可以拿走頭銜、行程、新聞。你對自己說的那句話仍是你的。", sc: "他们可以拿走头衔、行程、新闻。你对自己说的那句话仍是你的。" }
      },
      {
        num: "06",
        titleEn: "Cosmopolitan Duty",
        titleCn: { tc: "世界城邦的義務", sc: "世界城邦的义务" },
        conceptEn: "You are a citizen of the whole. Other people are the reason the city exists.",
        plainEn: "The difficult colleague is not an interruption of your work. They are part of the work of being human together.",
        plainCn: { tc: "難相處的同事不是工作的中斷，而是一起做人這項工作的一部分。", sc: "难相处的同事不是工作的中断，而是一起做人这项工作的一部分。" }
      },
      {
        num: "07",
        titleEn: "Strip the Legend",
        titleCn: { tc: "剝去傳奇", sc: "剥去传奇" },
        conceptEn: "Describe events without the adjectives that inflame you.",
        plainEn: "Not 'a humiliating disaster.' 'A meeting ran long and a number was wrong.' See if the body still panics.",
        plainCn: { tc: "不是「屈辱的災難」，是「會議逾時、數字有誤」。看身體是否仍恐慌。", sc: "不是“屈辱的灾难”，是“会议逾时、数字有误”。看身体是否仍恐慌。" }
      },
      {
        num: "08",
        titleEn: "Reputation Is a Draft",
        titleCn: { tc: "名聲是草稿", sc: "名声是草稿" },
        conceptEn: "What people say is a weather system over a landscape they barely know.",
        plainEn: "You cannot live in their mouths. You can live in your next honest action.",
        plainCn: { tc: "你不能住在別人嘴裡。你可以住在下一個誠實的行動裡。", sc: "你不能住在别人嘴里。你可以住在下一个诚实的行动里。" }
      },
      {
        num: "09",
        titleEn: "Dawn Reminder",
        titleCn: { tc: "黎明提醒", sc: "黎明提醒" },
        conceptEn: "Expect people to be what people are. Then you are not robbed by the obvious.",
        plainEn: "Leave the house already knowing there will be traffic and ego. Surprise is optional.",
        plainCn: { tc: "出門前就知道會有車潮與自我。驚訝是可選的。", sc: "出门前就知道会有车潮与自我。惊讶是可选的。" }
      },
      {
        num: "10",
        titleEn: "Philosophy as Hygiene",
        titleCn: { tc: "哲學即清潔", sc: "哲学即清洁" },
        conceptEn: "A few lines, every day, to wash the ruling mind.",
        plainEn: "Not a rebrand. A rinse. Marcus did not write for us. He wrote so he could govern until evening.",
        plainCn: { tc: "不是形象改造，是沖洗。馬可不是寫給我們，是為了能治理到傍晚。", sc: "不是形象改造，是冲洗。马可不是写给我们，是为了能治理到傍晚。" }
      }
    ],
    easternResonance: {
      quote: { tc: "不以物喜，不以己悲。居廟堂之高則憂其民，處江湖之遠則憂其君。", sc: "不以物喜，不以己悲。居庙堂之高则忧其民，处江湖之远则忧其君。" },
      source: { tc: "——范仲淹《岳陽樓記》", sc: "——范仲淹《岳阳楼记》" },
      commentary: { tc: "范仲淹的「不以物喜，不以己悲」與斯多葛的內在堡壘同調：外物與自我評價都不配做心的主人。儒釋道在此會合——儒家的憂是責任，不是被物所役；佛家看無常；道家守虛靜。馬可在軍帳裡寫給自己的句子，放進岳陽樓的風裡，仍然成立：先不動心，再承擔。", sc: "范仲淹的“不以物喜，不以己悲”与斯多葛的内在堡垒同调：外物与自我评价都不配做心的主人。儒释道在此会合——儒家的忧是责任，不是被物所役；佛家看无常；道家守虚静。马可在军帐里写给自己的句子，放进岳阳楼的风里，仍然成立：先不动心，再承担。" }
    },
    actionPromptEn: "Once today, when irritation rises, strip the legend: write the event in ten words with no adjectives. Then name one thing in the scene that remains yours to do.",
    actionPromptCn: { tc: "今天煩躁升起時，剝去傳奇：用十個不含形容詞的字寫下事件。再點出場景裡仍屬你能做的一件事。", sc: "今天烦躁升起时，剥去传奇：用十个不含形容词的字写下事件。再点出场景里仍属你能做的一件事。" }
  },
  {
    id: "essentialism",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "WORK, CRAFT & CREATIVITY",
    categoryEn: "WORK, CRAFT & CREATIVITY",
    categoryCn: { tc: "工作、技藝與創造 /", sc: "工作、技艺与创造 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: LESS BUT BETTER",
    themeCn: { tc: "主題：更少但更好", sc: "主题：更少但更好" },
    titleLinesEn: ["ESSENTIALISM"],
    titleFlatEn: "Essentialism",
    titleCn: { tc: "本質主義", sc: "本质主义" },
    authorLine: "Greg McKeown (2014)",
    quoteEn: "“If you don't prioritize your life, someone else will.”",
    quoteCn: { tc: "“若你不為自己的生活排優先，別人就會代勞。”", sc: "“若你不为自己的生活排优先，别人就会代劳。”" },
    leadEn: "The undisciplined pursuit of more is a slow way to lose the plot. Less, chosen on purpose, is a craft.",
    leadCn: { tc: "無紀律地追求更多，是慢慢失去主線。有意選擇的更少，是一門手藝。", sc: "无纪律地追求更多，是慢慢失去主线。有意选择的更少，是一门手艺。" },
    thesisEn: "McKeown's essentialism is not a productivity hack and not minimalism as aesthetic. It is a discipline of trade-offs: explore widely, then eliminate ruthlessly, then execute the remaining few with buffers and routine. The non-essentialist says yes by default and is then too busy to do anything well. The essentialist treats choice as an act, not a feeling, and designs a life that can absorb the unexpected without abandoning the essential.",
    thesisCn: { tc: "麥吉沃的本質主義不是效率hack，也不是審美極簡。它是權衡的紀律：廣探，然後狠刪，再以緩衝與例行把剩下的少數執行好。非本質主義者預設答應，於是忙到什麼都做不好。本質主義者把選擇當行動而非感覺，並設計一個能吸收意外、仍不放棄本質的生活。", sc: "麦吉沃的本质主义不是效率hack，也不是审美极简。它是权衡的纪律：广探，然后狠删，再以缓冲与例行把剩下的少数执行好。非本质主义者预设答应，于是忙到什么都做不好。本质主义者把选择当行动而非感觉，并设计一个能吸收意外、仍不放弃本质的生活。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Way of the Essentialist",
        titleCn: { tc: "本質主義者之路", sc: "本质主义者之路" },
        conceptEn: "Less but better is a decision about what will get your best energy, not a mood of restriction.",
        plainEn: "A closet with three excellent coats beats a rail of maybes. A week can be built the same way.",
        plainCn: { tc: "三件極好的外套勝過一桿「也許」。一週也能這樣組。", sc: "三件极好的外套胜过一杆“也许”。一周也能这样组。" }
      },
      {
        num: "02",
        titleEn: "If It Isn't a Clear Yes, It Is a No",
        titleCn: { tc: "不是清楚的是，就是否", sc: "不是清楚的是，就是否" },
        conceptEn: "The 90 percent rule: unless it is a strong yes, decline and keep the space.",
        plainEn: "A lukewarm invitation costs a Saturday you will not get back. Protect Saturdays as if they were a person.",
        plainCn: { tc: "溫吞的邀請會花掉一個要不回來的週六。像守護一個人那樣守護週六。", sc: "温吞的邀请会花掉一个要不回来的周六。像守护一个人那样守护周六。" }
      },
      {
        num: "03",
        titleEn: "Edit as a Creative Act",
        titleCn: { tc: "刪除即創作", sc: "删除即创作" },
        conceptEn: "Elimination is not failure to do. It is how the remaining work becomes visible.",
        plainEn: "A sculptor removes stone. A calendar can be sculpted. What you delete is part of the piece.",
        plainCn: { tc: "雕刻家去掉石頭。日曆也能雕。你刪去的，是作品的一部分。", sc: "雕刻家去掉石头。日历也能雕。你删去的，是作品的一部分。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Play and Sleep as Production",
        titleCn: { tc: "玩與睡也是生產", sc: "玩与睡也是生产" },
        conceptEn: "The mind that never idles cannot distinguish signal from noise.",
        plainEn: "A walk without a podcast is not laziness. It is how the next sentence arrives.",
        plainCn: { tc: "不聽podcast的散步不是懶。下一句話是這樣來的。", sc: "不听podcast的散步不是懒。下一句话是这样来的。" }
      },
      {
        num: "05",
        titleEn: "The Power of a Graceful No",
        titleCn: { tc: "優雅說不", sc: "优雅说不" },
        conceptEn: "A clear no is kinder than a slow, resentful yes.",
        plainEn: "“I can't do it justice” is a complete sentence. You do not owe a fake maybe.",
        plainCn: { tc: "「我無法把它做好」是完整的句子。你不欠一個假的也許。", sc: "“我无法把它做好”是完整的句子。你不欠一个假的也许。" }
      },
      {
        num: "06",
        titleEn: "Buffers",
        titleCn: { tc: "緩衝", sc: "缓冲" },
        conceptEn: "Estimates without margin are how the essential gets crowded out by the merely urgent.",
        plainEn: "If a trip takes forty minutes, leave fifty. The extra ten minutes is a gift to the person you will be in traffic.",
        plainCn: { tc: "若車程四十分，就留五十分。多的十分鐘是送給塞車裡那個你的禮物。", sc: "若车程四十分，就留五十分。多的十分钟是送给塞车里那个你的礼物。" }
      },
      {
        num: "07",
        titleEn: "Subtract to Solve",
        titleCn: { tc: "用減法解題", sc: "用减法解题" },
        conceptEn: "Many problems are overgrowth, not shortage.",
        plainEn: "Before adding a tool, remove a meeting. See if the problem was the thicket.",
        plainCn: { tc: "在增加工具之前，先取消一場會。看問題是不是那叢雜草。", sc: "在增加工具之前，先取消一场会。看问题是不是那丛杂草。" }
      },
      {
        num: "08",
        titleEn: "Routine as Freedom",
        titleCn: { tc: "例行即自由", sc: "例行即自由" },
        conceptEn: "A designed default saves willpower for the choices that actually matter.",
        plainEn: "Same breakfast, same deep-work block. Novelty belongs in the work, not in the on-ramp.",
        plainCn: { tc: "同樣的早餐，同樣的深工時段。新奇該在工作裡，不在引道上。", sc: "同样的早餐，同样的深工时段。新奇该在工作里，不在引道上。" }
      },
      {
        num: "09",
        titleEn: "Protect the Asset",
        titleCn: { tc: "保護資產", sc: "保护资产" },
        conceptEn: "You are the platform the essential work runs on.",
        plainEn: "A ruined night's sleep is not a badge. It is downtime on the only machine you cannot replace.",
        plainCn: { tc: "毀掉的睡眠不是勳章，是你無法更換的那台機器的停機。", sc: "毁掉的睡眠不是勋章，是你无法更换的那台机器的停机。" }
      },
      {
        num: "10",
        titleEn: "The Essential Intent",
        titleCn: { tc: "本質意圖", sc: "本质意图" },
        conceptEn: "A purpose concrete enough to say no with.",
        plainEn: "“Make this essay clear by Friday” can refuse a dozen things. “Be more creative” cannot.",
        plainCn: { tc: "「週五前讓這篇文章清楚」能拒絕十二件事。「更有創意」不能。", sc: "“周五前让这篇文章清楚”能拒绝十二件事。“更有创意”不能。" }
      }
    ],
    easternResonance: {
      quote: { tc: "曲則全，枉則直，窪則盈，敝則新，少則得，多則惑。", sc: "曲则全，枉则直，洼则盈，敝则新，少则得，多则惑。" },
      source: { tc: "——《道德經 · 第二十二章》", sc: "——《道德经 · 第二十二章》" },
      commentary: { tc: "「少則得，多則惑」幾乎是本質主義的篆刻版。老子的少，不是慳吝，是為了不被多所惑——注意力一旦碎成許多，連得也保不住。麥吉沃用日曆與拒絕把這句話操作化。東方的「損之又損」，西方的 subtract to solve，都指向同一手藝：留下能被做好的那一點。", sc: "“少则得，多则惑”几乎是本质主义的篆刻版。老子的少，不是悭吝，是为了不被多所惑——注意力一旦碎成许多，连得也保不住。麦吉沃用日历与拒绝把这句话操作化。东方的“损之又损”，西方的 subtract to solve，都指向同一手艺：留下能被做好的那一点。" }
    },
    actionPromptEn: "Identify one commitment that is a polite maybe. Decline it today in one clear sentence. Use the recovered block for the single piece of work that would make the week feel true.",
    actionPromptCn: { tc: "找出一件禮貌的「也許」。今天用一句清楚的話拒絕。把找回的時段，給那件會讓本週顯得真實的工作。", sc: "找出一件礼貌的“也许”。今天用一句清楚的话拒绝。把找回的时段，给那件会让本周显得真实的工作。" }
  },
  {
    id: "mans-search-for-meaning",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "EMOTIONAL RESILIENCE",
    categoryEn: "EMOTIONAL RESILIENCE",
    categoryCn: { tc: "情緒韌性 /", sc: "情绪韧性 /" },
    durationEn: "DURATION: 7 MIN",
    durationCn: { tc: "時間：7分鐘", sc: "时间：7分钟" },
    themeEn: "THEME: MEANING UNDER PRESSURE",
    themeCn: { tc: "主題：壓力下的意義", sc: "主题：压力下的意义" },
    titleLinesEn: ["MAN'S SEARCH", "FOR MEANING"],
    titleFlatEn: "Man's Search for Meaning",
    titleCn: { tc: "活出意義來", sc: "活出意义来" },
    authorLine: "Viktor E. Frankl (1946)",
    quoteEn: "“Those who have a 'why' to live can bear with almost any 'how'.”",
    quoteCn: { tc: "“有「為何」而活的人，幾乎能忍受任何「如何」。”", sc: "“有「为何」而活的人，几乎能忍受任何「如何」。”" },
    leadEn: "Meaning is not a mood that arrives when conditions improve. It is a task that can be found even when conditions are monstrous.",
    leadCn: { tc: "意義不是條件改善後才降臨的心情。即使條件殘暴，意義仍可以是一項任務。", sc: "意义不是条件改善后才降临的心情。即使条件残暴，意义仍可以是一项任务。" },
    thesisEn: "Frankl's memoir and logotherapy rest on a severe claim: the last of the human freedoms is to choose one's attitude in a given set of circumstances. He does not romanticize suffering. He insists that suffering, when it cannot be removed, can still be turned into a deed — toward a person, a work, or a stance. Meaning is discovered in work, in love, and in the stand one takes toward unavoidable pain. The therapy is not consolation. It is orientation.",
    thesisCn: { tc: "弗蘭克的回憶與意義治療建立在嚴峻主張上：人最後的自由，是在既定處境中選擇態度。他不美化苦難。他堅持：當苦難無法除去，仍可轉成一件事——朝向一個人、一件工作、或一種站姿。意義在工作、愛、以及對不可避免之痛的態度中被發現。這治療不是安慰，是定向。", sc: "弗兰克的回忆与意义治疗建立在严峻主张上：人最后的自由，是在既定处境中选择态度。他不美化苦难。他坚持：当苦难无法除去，仍可转成一件事——朝向一个人、一件工作、或一种站姿。意义在工作、爱、以及对不可避免之痛的态度中被发现。这治疗不是安慰，是定向。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Last Freedom",
        titleCn: { tc: "最後的自由", sc: "最后的自由" },
        conceptEn: "Between stimulus and response there is a space. In that space is the power to choose a stance.",
        plainEn: "You cannot choose the diagnosis. You can choose whether the next hour is only panic, or panic plus a phone call to someone who needs you.",
        plainCn: { tc: "你不能選擇診斷。你可以選擇下一小時只是恐慌，或恐慌加上一通打給需要你的人的電話。", sc: "你不能选择诊断。你可以选择下一小时只是恐慌，或恐慌加上一通打给需要你的人的电话。" }
      },
      {
        num: "02",
        titleEn: "Meaning Through Work, Love, Stance",
        titleCn: { tc: "經由工作、愛與站姿", sc: "经由工作、爱与站姿" },
        conceptEn: "Frankl's three avenues are not slogans. They are places to look when the question 'what now' goes blank.",
        plainEn: "Finish the small task for someone else. Sit with the person. If neither is available, refuse to let the pain become cruelty.",
        plainCn: { tc: "為別人完成一件小事。陪著那個人坐。若兩者都不可得，至少不讓痛苦變成殘忍。", sc: "为别人完成一件小事。陪着那个人坐。若两者都不可得，至少不让痛苦变成残忍。" }
      },
      {
        num: "03",
        titleEn: "Tragic Optimism",
        titleCn: { tc: "悲劇的樂觀", sc: "悲剧的乐观" },
        conceptEn: "Optimism here is not a grin. It is the insistence that something remains to be done.",
        plainEn: "The day can be objectively terrible and still contain one unfinished responsibility that makes you needed.",
        plainCn: { tc: "這一天可以客觀上很糟，卻仍有一件未完成的責任讓你被需要。", sc: "这一天可以客观上很糟，却仍有一件未完成的责任让你被需要。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "No Group Meaning",
        titleCn: { tc: "沒有集體意義", sc: "没有集体意义" },
        conceptEn: "Meaning is concrete and personal. It cannot be copied from a manifesto.",
        plainEn: "Your why will not look like anyone else's. That is not a problem. That is the assignment.",
        plainCn: { tc: "你的為何不會像別人的。那不是問題，那是作業。", sc: "你的为何不会像别人的。那不是问题，那是作业。" }
      },
      {
        num: "05",
        titleEn: "Sunday Neurosis",
        titleCn: { tc: "星期日神經症", sc: "星期日神经症" },
        conceptEn: "When the week's noise stops, the vacuum of purpose becomes audible.",
        plainEn: "The restless Sunday is not a scheduling error. It is a question the weekday successfully drowned.",
        plainCn: { tc: "焦躁的週日不是行程錯誤，是平日成功淹沒的那個問題。", sc: "焦躁的周日不是行程错误，是平日成功淹没的那个问题。" }
      },
      {
        num: "06",
        titleEn: "Responsibility as Medicine",
        titleCn: { tc: "責任即藥", sc: "责任即药" },
        conceptEn: "Being needed by a work or a person is often more stabilizing than being soothed.",
        plainEn: "A plant to water, a child to collect, a page to send. Responsibility can be a handrail.",
        plainCn: { tc: "一盆要澆的植物、一個要接的孩子、一頁要送出的稿。責任可以是扶手。", sc: "一盆要浇的植物、一个要接的孩子、一页要送出的稿。责任可以是扶手。" }
      },
      {
        num: "07",
        titleEn: "Dereflection",
        titleCn: { tc: "去反思", sc: "去反思" },
        conceptEn: "Hyper-attention on a symptom can lock it in. Looking toward a meaning can loosen it.",
        plainEn: "Staring at insomnia often feeds it. Getting up to write the letter you owe someone sometimes ends it.",
        plainCn: { tc: "盯著失眠常常餵養失眠。起來寫那封欠人的信，有時反而結束它。", sc: "盯着失眠常常喂养失眠。起来写那封欠人的信，有时反而结束它。" }
      },
      {
        num: "08",
        titleEn: "The Statue Against the Sky",
        titleCn: { tc: "天空下的塑像", sc: "天空下的塑像" },
        conceptEn: "What a person becomes under pressure is a fact as real as what they suffer.",
        plainEn: "Character is not the absence of hardship. It is the shape hardship is not allowed to erase.",
        plainCn: { tc: "品格不是沒有苦難，是苦難不被允許抹去的那道輪廓。", sc: "品格不是没有苦难，是苦难不被允许抹去的那道轮廓。" }
      },
      {
        num: "09",
        titleEn: "Provisional Existence",
        titleCn: { tc: "暫時的生存", sc: "暂时的生存" },
        conceptEn: "Living as if the present were only a waiting room empties the present of meaning.",
        plainEn: "“After this project / after this year” can become a life of corridors. Furnish the corridor.",
        plainCn: { tc: "「等這個專案／等今年過完」可以變成一生的走廊。把走廊布置起來。", sc: "“等这个专案／等今年过完”可以变成一生的走廊。把走廊布置起来。" }
      },
      {
        num: "10",
        titleEn: "The Question Reversed",
        titleCn: { tc: "問題被反轉", sc: "问题被反转" },
        conceptEn: "It is not we who ask life. Life asks us, and we answer with deeds.",
        plainEn: "Instead of 'what do I feel like,' try 'what is being asked of me in this room.'",
        plainCn: { tc: "與其問「我想要什麼感覺」，試問「這個房間正在向我要求什麼」。", sc: "与其问“我想要什么感觉”，试问“这个房间正在向我要求什么”。" }
      }
    ],
    easternResonance: {
      quote: { tc: "故天將降大任於是人也，必先苦其心志，勞其筋骨，餓其體膚，空乏其身，行拂亂其所為，所以動心忍性，曾益其所不能。", sc: "故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。" },
      source: { tc: "——《孟子 · 告子下》", sc: "——《孟子 · 告子下》" },
      commentary: { tc: "孟子的「動心忍性」不是為苦難辯護，是在說：心志被苦過之後，能力的邊界才被看見。弗蘭克拒絕把苦難當禮物，卻堅持態度仍可被選擇——與孟子「增益其所不能」相鄰。東方以天任敘事，西方以意義治療敘事；會合處在於不把人寫成環境的純粹後果。", sc: "孟子的“动心忍性”不是为苦难辩护，是在说：心志被苦过之后，能力的边界才被看见。弗兰克拒绝把苦难当礼物，却坚持态度仍可被选择——与孟子“增益其所不能”相邻。东方以天任叙事，西方以意义治疗叙事；会合处在于不把人写成环境的纯粹后果。" }
    },
    actionPromptEn: "Write one sentence answering: what is life asking of me today? Do the smallest deed that would count as an answer. If the day is heavy, let the deed be small enough to finish.",
    actionPromptCn: { tc: "寫一句：今天生命在問我什麼？做一件最小、仍算得上回答的事。若這天很重，讓這件事小到能做完。", sc: "写一句：今天生命在问我什么？做一件最小、仍算得上回答的事。若这天很重，让这件事小到能做完。" }
  },
  {
    id: "thinking-fast-and-slow",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "MINDSET & MENTAL MODELS",
    categoryEn: "MINDSET & MENTAL MODELS",
    categoryCn: { tc: "心智與心智模型 /", sc: "心智与心智模型 /" },
    durationEn: "DURATION: 8 MIN",
    durationCn: { tc: "時間：8分鐘", sc: "时间：8分钟" },
    themeEn: "THEME: TWO SYSTEMS",
    themeCn: { tc: "主題：雙系統", sc: "主题：双系统" },
    titleLinesEn: ["THINKING,", "FAST AND SLOW"],
    titleFlatEn: "Thinking, Fast and Slow",
    titleCn: { tc: "快思慢想", sc: "快思慢想" },
    authorLine: "Daniel Kahneman (2011)",
    quoteEn: "“Nothing in life is as important as you think it is while you are thinking about it.”",
    quoteCn: { tc: "“生命中沒有什麼，有你正在想它時那麼重要。”", sc: "“生命中没有什么，有你正在想它时那么重要。”" },
    leadEn: "The mind is a storyteller with a flashlight. It mistakes the lit patch for the landscape.",
    leadCn: { tc: "心智是拿手電筒的說書人。它把被照亮的那一塊誤認為整片風景。", sc: "心智是拿手电筒的说书人。它把被照亮的那一块误认为整片风景。" },
    thesisEn: "Kahneman's map of System 1 (fast, associative, confident) and System 2 (slow, effortful, lazy) is a moral book as much as a cognitive one. We are not irrational so much as we are equipped with tools that evolved for a different environment. Heuristics are useful and biased. Overconfidence is the feeling of a coherent story, not the proof of a true one. The practical ethic is humility: build procedures that catch the mind in the act of substituting an easy question for a hard one.",
    thesisCn: { tc: "康納曼對系統一（快、聯想、自信）與系統二（慢、費力、懶）的地圖，既是認知之書，也是倫理之書。我們與其說不理性，不如說配備了為另一個環境演化的工具。捷思有用且偏誤。過度自信是連貫故事的感覺，不是真理的證據。實踐倫理是謙卑：建立程序，捉住心智用容易的問題替換困難問題的現場。", sc: "康纳曼对系统一（快、联想、自信）与系统二（慢、费力、懒）的地图，既是认知之书，也是伦理之书。我们与其说不理性，不如说配备了为另一个环境演化的工具。捷思有用且偏误。过度自信是连贯故事的感觉，不是真理的证据。实践伦理是谦卑：建立程序，捉住心智用容易的问题替换困难问题的现场。" },
    highlights: [
      {
        num: "01",
        titleEn: "What You See Is All There Is",
        titleCn: { tc: "所見即全部", sc: "所见即全部" },
        conceptEn: "WYSIATI: System 1 builds the best story from available fragments and does not mark the missing pieces.",
        plainEn: "A confident anecdote beats a quiet statistic in the mind, even when the statistic is the grown-up.",
        plainCn: { tc: "在心裡，自信的軼事勝過安靜的統計——即使統計才是成年人。", sc: "在心里，自信的轶事胜过安静的统计——即使统计才是成年人。" }
      },
      {
        num: "02",
        titleEn: "Substitution",
        titleCn: { tc: "替換", sc: "替换" },
        conceptEn: "When faced with a hard question, we often answer a related easy one and never notice the swap.",
        plainEn: "“Should we hire her?” becomes “Do I like her?” The second is faster. It is not the job.",
        plainCn: { tc: "「該不該雇用她？」變成「我喜不喜歡她？」後者更快，卻不是那份工作。", sc: "“该不该雇用她？”变成“我喜不喜欢她？”后者更快，却不是那份工作。" }
      },
      {
        num: "03",
        titleEn: "The Experiencing vs Remembering Self",
        titleCn: { tc: "經驗我與記憶我", sc: "经验我与记忆我" },
        conceptEn: "We live in duration but choose by snapshots and endings.",
        plainEn: "A vacation is hundreds of hours. The story you keep is the peak and the last day. Design both, not only the photo.",
        plainCn: { tc: "假期是幾百個小時。你留下的故事是高峰與最後一天。兩者都要設計，不只照片。", sc: "假期是几百个小时。你留下的故事是高峰与最后一天。两者都要设计，不只照片。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Anchoring",
        titleCn: { tc: "錨定", sc: "锚定" },
        conceptEn: "An arbitrary number gets into the estimate and will not leave.",
        plainEn: "The first price you hear is not information. It is a hook in the fish of your judgment.",
        plainCn: { tc: "你聽到的第一個價格不是資訊，是鉤在判斷這條魚上的鉤。", sc: "你听到的第一个价格不是资讯，是钩在判断这条鱼上的钩。" }
      },
      {
        num: "05",
        titleEn: "Loss Aversion",
        titleCn: { tc: "損失厭惡", sc: "损失厌恶" },
        conceptEn: "Losses hurt more than equivalent gains please. We fight harder to keep than to win.",
        plainEn: "You will spend an afternoon to avoid a small fee and shrug at a larger, quieter gain. The asymmetry is the design, not a flaw you can scold away.",
        plainCn: { tc: "你會花一下午避開一筆小費用，卻對更大而安靜的收益聳肩。這不對稱是設計，不是罵得掉的缺陷。", sc: "你会花一下午避开一笔小费用，却对更大而安静的收益耸肩。这不对称是设计，不是骂得掉的缺陷。" }
      },
      {
        num: "06",
        titleEn: "Planning Fallacy",
        titleCn: { tc: "規劃謬誤", sc: "规划谬误" },
        conceptEn: "We forecast from the inside story and ignore the outside view of similar cases.",
        plainEn: "Your novel will not take three months because you are inspired. Other novels took years. You are other people.",
        plainCn: { tc: "你的小說不會因為有靈感只花三個月。別人的小說花了幾年。你也是別人。", sc: "你的小说不会因为有灵感只花三个月。别人的小说花了几年。你也是别人。" }
      },
      {
        num: "07",
        titleEn: "Overconfidence",
        titleCn: { tc: "過度自信", sc: "过度自信" },
        conceptEn: "Coherence of a story is mistaken for validity of a forecast.",
        plainEn: "A fluent narrative about the market is a literary achievement. It is not a crystal ball.",
        plainCn: { tc: "關於市場的流暢敘事是文學成就，不是水晶球。", sc: "关于市场的流畅叙事是文学成就，不是水晶球。" }
      },
      {
        num: "08",
        titleEn: "Regression to the Mean",
        titleCn: { tc: "均值回歸", sc: "均值回归" },
        conceptEn: "Extreme performance is usually followed by something less extreme, with or without your speech.",
        plainEn: "Praise or punish the outlier and the next result will likely move toward average anyway. Do not steal credit from chance.",
        plainCn: { tc: "讚美或懲罰極端表現後，下一次多半仍會靠近平均。別把機率的功勞偷走。", sc: "赞美或惩罚极端表现后，下一次多半仍会靠近平均。别把机率的功劳偷走。" }
      },
      {
        num: "09",
        titleEn: "Focusing Illusion",
        titleCn: { tc: "聚焦錯覺", sc: "聚焦错觉" },
        conceptEn: "Nothing is as important as it seems while you think about it.",
        plainEn: "The kitchen renovation, the slight, the metric — they swell to fill the skull. Step outside. They shrink.",
        plainCn: { tc: "裝修、被冒犯、那個指標——它們會脹滿頭骨。走出去，它們會縮小。", sc: "装修、被冒犯、那个指标——它们会胀满头骨。走出去，它们会缩小。" }
      },
      {
        num: "10",
        titleEn: "Procedures over Vibes",
        titleCn: { tc: "程序先於感覺", sc: "程序先于感觉" },
        conceptEn: "Because System 2 is lazy, wisdom is often a checklist, a delay, a pre-commitment.",
        plainEn: "Sleep on the angry email. Use a base rate. Make the hard question write itself down so the easy one cannot sneak in.",
        plainCn: { tc: "憤怒的郵件先睡一晚。用基線率。讓困難的問題自己寫下來，好讓容易的問題鑽不進來。", sc: "愤怒的邮件先睡一晚。用基线率。让困难的问题自己写下来，好让容易的问题钻不进来。" }
      }
    ],
    easternResonance: {
      quote: { tc: "橫看成嶺側成峰，遠近高低各不同。不識廬山真面目，只緣身在此山中。", sc: "横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。" },
      source: { tc: "——蘇軾《題西林壁》", sc: "——苏轼《题西林壁》" },
      commentary: { tc: "蘇軾的廬山是 WYSIATI 的古典圖像：身在此山中，所見被當成全部。康納曼用實驗寫出同一限制；蘇軾用詩寫出同一謙卑。快思是橫看成嶺，慢想是記得還有側峰。東方的「出山」與西方的 outside view，都是離開當下那束手電筒。", sc: "苏轼的庐山是 WYSIATI 的古典图像：身在此山中，所见被当成全部。康纳曼用实验写出同一限制；苏轼用诗写出同一谦卑。快思是横看成岭，慢想是记得还有侧峰。东方的“出山”与西方的 outside view，都是离开当下那束手电筒。" }
    },
    actionPromptEn: "Before one judgment today (hire, buy, blame, plan), write the hard question and the easy question you might substitute. Sleep one night, or wait one hour, then answer the hard one with a base rate if you can find it.",
    actionPromptCn: { tc: "今天做一個判斷（雇用、購買、責怪、規劃）之前，寫下困難問題，以及你可能替換上去的容易問題。睡一晚，或等一小時，再盡量用基線率回答那個困難問題。", sc: "今天做一个判断（雇用、购买、责怪、规划）之前，写下困难问题，以及你可能替换上去的容易问题。睡一晚，或等一小时，再尽量用基线率回答那个困难问题。" }
  },
  {
    id: "tao-te-ching",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "CLASSICAL & EASTERN WISDOM",
    categoryEn: "CLASSICAL & EASTERN WISDOM",
    categoryCn: { tc: "東方古典智慧 /", sc: "东方古典智慧 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: WU WEI",
    themeCn: { tc: "主題：無為", sc: "主题：无为" },
    titleLinesEn: ["TAO TE", "CHING"],
    titleFlatEn: "Tao Te Ching",
    titleCn: { tc: "道德經", sc: "道德经" },
    authorLine: "Laozi (trad. 4th c. BCE)",
    quoteEn: "“The Tao that can be told is not the eternal Tao.”",
    quoteCn: { tc: "“道可道，非常道。”", sc: "“道可道，非常道。”" },
    leadEn: "The text unteaches grasping. Power that does not contend outlasts power that does.",
    leadCn: { tc: "這部書在教人放下抓取。不爭的力量，比爭的力量活得更久。", sc: "这部书在教人放下抓取。不争的力量，比争的力量活得更久。" },
    thesisEn: "The Tao Te Ching is a short, recursive poem about how order arises when force relaxes. Wu wei is not passivity; it is action that does not strain against the grain of things. Softness, emptiness, the uncarved block, the valley, water — these are images of a governance and a selfhood that remain effective by remaining low. Read as politics, it is a critique of anxious control. Read as inner work, it is a method for stopping the war with what already is.",
    thesisCn: { tc: "《道德經》是短而迴旋的詩：力量一鬆，秩序反而出現。無為不是被動，是不逆著事物紋理去用力。柔、空、樸、谷、水——這些是治理與自我的意象：因處低而仍有效。當政治讀，它批評焦慮的控制；當內功讀，它是停止與現況作戰的方法。", sc: "《道德经》是短而回旋的诗：力量一松，秩序反而出现。无为不是被动，是不逆着事物纹路去用力。柔、空、朴、谷、水——这些是治理与自我的意象：因处低而仍有效。当政治读，它批评焦虑的控制；当内功读，它是停止与现况作战的方法。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Named Is Not the Whole",
        titleCn: { tc: "可名非全", sc: "可名非全" },
        conceptEn: "Language carves, and what it carves it also hides.",
        plainEn: "Your job title is a handle, not the object. When you grip the handle too hard, you stop seeing the work.",
        plainCn: { tc: "職銜是把手，不是物件。把把手握太緊，你就看不見工作。", sc: "职衔是把手，不是物件。把把手握太紧，你就看不见工作。" }
      },
      {
        num: "02",
        titleEn: "Wu Wei",
        titleCn: { tc: "無為", sc: "无为" },
        conceptEn: "Do not force a door that is already swinging. Time the push to the hinge.",
        plainEn: "A conversation that will not happen at 9 a.m. may happen on a walk. The content was never the problem. The grain was.",
        plainCn: { tc: "九點談不成的話，也許走路時能談。內容從來不是問題，紋理才是。", sc: "九点谈不成的话，也许走路时能谈。内容从来不是问题，纹路才是。" }
      },
      {
        num: "03",
        titleEn: "Soft Overcomes Hard",
        titleCn: { tc: "柔勝剛", sc: "柔胜刚" },
        conceptEn: "Water does not argue with rock. It returns until the rock is a canyon.",
        plainEn: "A quiet daily practice will outwork a dramatic overhaul that lasts four days.",
        plainCn: { tc: "安靜的每日練習，會勝過只維持四天的戲劇性改造。", sc: "安静的每日练习，会胜过只维持四天的戏剧性改造。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "The Uncarved Block",
        titleCn: { tc: "樸", sc: "朴" },
        conceptEn: "Usefulness often lives in what has not been over-specified.",
        plainEn: "Leave some hours unscheduled. Uncarved time can still become the right shape.",
        plainCn: { tc: "留一些沒排程的小時。未雕的時間仍能長成對的形狀。", sc: "留一些没排程的小时。未雕的时间仍能长成对的形状。" }
      },
      {
        num: "05",
        titleEn: "Empty Vessel",
        titleCn: { tc: "器之空", sc: "器之空" },
        conceptEn: "The cup works because of the space. A crowded mind has no place to receive.",
        plainEn: "Silence in a meeting is not always a failure. It is sometimes the cup.",
        plainCn: { tc: "會議中的沉默不總是失敗，有時它就是杯子。", sc: "会议中的沉默不总是失败，有时它就是杯子。" }
      },
      {
        num: "06",
        titleEn: "Do Not Contend",
        titleCn: { tc: "不爭", sc: "不争" },
        conceptEn: "Contention wins the room and loses the field.",
        plainEn: "Winning the last word can cost the relationship that was the actual prize.",
        plainCn: { tc: "搶到最後一句話，可能輸掉那才是獎品的關係。", sc: "抢到最后一句话，可能输掉那才是奖品的关系。" }
      },
      {
        num: "07",
        titleEn: "Know When to Stop",
        titleCn: { tc: "知止", sc: "知止" },
        conceptEn: "Filling past full is how vessels crack.",
        plainEn: "One more feature, one more drink, one more point in the argument. The art is the halt.",
        plainCn: { tc: "再一個功能、再一杯、再一個論點。手藝在於停。", sc: "再一个功能、再一杯、再一个论点。手艺在于停。" }
      },
      {
        num: "08",
        titleEn: "Lead by Being Low",
        titleCn: { tc: "處下而領", sc: "处下而领" },
        conceptEn: "The sea is king of the valleys because it lies below the streams.",
        plainEn: "Ask the intern what they see. Authority that cannot go low becomes brittle.",
        plainCn: { tc: "問實習生看見什麼。不能處下的權威會變脆。", sc: "问实习生看见什么。不能处下的权威会变脆。" }
      },
      {
        num: "09",
        titleEn: "Return to the Root",
        titleCn: { tc: "歸根", sc: "归根" },
        conceptEn: "Stillness is how things go back to what they are, before the story.",
        plainEn: "Sit without improving yourself for ten minutes. The root is not a performance.",
        plainCn: { tc: "坐十分鐘，不改善自己。根不是表演。", sc: "坐十分钟，不改善自己。根不是表演。" }
      },
      {
        num: "10",
        titleEn: "The Sage's Shadow",
        titleCn: { tc: "聖人的影子", sc: "圣人的影子" },
        conceptEn: "When the work is done, the people say: we did it ourselves.",
        plainEn: "If your team can only move when you are watching, you have built a dependency, not a craft.",
        plainCn: { tc: "若團隊只有你看著才動，你建的是依賴，不是手藝。", sc: "若团队只有你看着才动，你建的是依赖，不是手艺。" }
      }
    ],
    easternResonance: {
      quote: { tc: "致虛極，守靜篤。萬物並作，吾以觀復。夫物芸芸，各復歸其根。歸根曰靜，靜曰復命。", sc: "致虚极，守静笃。万物并作，吾以观复。夫物芸芸，各复归其根。归根曰静，静曰复命。" },
      source: { tc: "——《道德經 · 第十六章》", sc: "——《道德经 · 第十六章》" },
      commentary: { tc: "第十六章是全書的內功譜：把虛與靜推到極篤，才能看見萬物的復。這不是逃避，是觀察的條件。西方讀者若只把《道德經》當人生語錄，會錯過它作為認識論的嚴格：先空，才能觀。閱心將它收入正典，不是異國情調，而是讓東方文本以自身為主，而非只當西方書的註腳。", sc: "第十六章是全书的内功谱：把虚与静推到极笃，才能看见万物的复。这不是逃避，是观察的条件。西方读者若只把《道德经》当人生语录，会错过它作为认识论的严格：先空，才能观。阅心将它收入正典，不是异国情调，而是让东方文本以自身为主，而非只当西方书的注脚。" }
    },
    actionPromptEn: "Choose one situation you have been forcing. Today, do the smallest action that follows the grain — or wait one beat longer than is comfortable — and write what became possible when you stopped contending.",
    actionPromptCn: { tc: "選一件你一直在用力的事。今天做一個順著紋理的最小動作——或比舒適再多等一拍——寫下當你停止爭之後，什麼變得可能。", sc: "选一件你一直在用力的事。今天做一个顺着纹路的最小动作——或比舒适再多等一拍——写下当你停止争之后，什么变得可能。" }
  },
  {
    id: "deep-work",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "HABITS, FOCUS & TIME",
    categoryEn: "HABITS, FOCUS & TIME",
    categoryCn: { tc: "習慣、專注與時間 /", sc: "习惯、专注与时间 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: ATTENTION AS CRAFT",
    themeCn: { tc: "主題：注意力即手藝", sc: "主题：注意力即手艺" },
    titleLinesEn: ["DEEP", "WORK"],
    titleFlatEn: "Deep Work",
    titleCn: { tc: "深度工作", sc: "深度工作" },
    authorLine: "Cal Newport (2016)",
    quoteEn: "“Clarity about what matters provides clarity about what does not.”",
    quoteCn: { tc: "“對要緊之事清楚，也就對不要緊之事清楚。”", sc: "“对要紧之事清楚，也就对不要紧之事清楚。”" },
    leadEn: "The ability to focus without distraction is becoming rare, and therefore more valuable. Treat it as a skill, not a mood.",
    leadCn: { tc: "不受干擾地專注，正變得稀少，因而更值錢。把它當技能，不當心情。", sc: "不受干扰地专注，正变得稀少，因而更值钱。把它当技能，不当心情。" },
    thesisEn: "Newport's claim is economic and monastic at once. Shallow work — email, meetings, reactive tasks — is easy to see and easy to justify. Deep work produces the knowledge that cannot be automated, and it requires stretches of unbroken concentration that modern offices are designed to prevent. The book is a training manual: rituals, shutdowns, boredom tolerance, and a willingness to be unreachable. Focus is not found. It is scheduled and defended.",
    thesisCn: { tc: "紐波特的主張同時是經濟學與修道院式的。淺薄工作——郵件、會議、反應式任務——容易被看見、容易被辯護。深度工作產出無法被自動化的知識，需要不被打斷的專注時段，而現代辦公室正是為阻止它而設計。這書是訓練手冊：儀式、收工、忍受無聊、願意無法被找到。專注不是找到的，是排程並捍衛的。", sc: "纽波特的主张同时是经济学与修道院式的。浅薄工作——邮件、会议、反应式任务——容易被看见、容易被辩护。深度工作产出无法被自动化的知识，需要不被打断的专注时段，而现代办公室正是为阻止它而设计。这书是训练手册：仪式、收工、忍受无聊、愿意无法被找到。专注不是找到的，是排程并捍卫的。" },
    highlights: [
      {
        num: "01",
        titleEn: "Depth as Competitive Advantage",
        titleCn: { tc: "深度即優勢", sc: "深度即优势" },
        conceptEn: "In a market of pinging generalists, the person who can think for four hours is scarce.",
        plainEn: "Anyone can answer Slack. Few can finish the hard paragraph. The paragraph is the product.",
        plainCn: { tc: "誰都能回Slack。少有人能寫完那困難的一段。那一段才是產品。", sc: "谁都能回Slack。少有人能写完那困难的一段。那一段才是产品。" }
      },
      {
        num: "02",
        titleEn: "Attention Residue",
        titleCn: { tc: "注意力殘渣", sc: "注意力残渣" },
        conceptEn: "Switching tasks leaves a smear of the last task on the next one.",
        plainEn: "A 'quick check' of email is not quick. It rents space in the next forty minutes of thought.",
        plainCn: { tc: "「快速看一下」郵件並不快速。它在接下來四十分鐘的思考裡租了位子。", sc: "“快速看一下”邮件并不快速。它在接下来四十分钟的思考里租了位子。" }
      },
      {
        num: "03",
        titleEn: "Ritualize the Depth",
        titleCn: { tc: "把深度儀式化", sc: "把深度仪式化" },
        conceptEn: "Place, time, rules, and a shutdown: the monastery, scaled to an apartment.",
        plainEn: "Same desk, phone in a drawer, a closing phrase at 6 p.m. The ritual tells the mind it is allowed to go deep — and then to stop.",
        plainCn: { tc: "同一張桌、手機進抽屜、傍晚六點一句收工。儀式告訴心智：可以深下去，然後可以停。", sc: "同一张桌、手机进抽屉、傍晚六点一句收工。仪式告诉心智：可以深下去，然后可以停。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Embrace Boredom",
        titleCn: { tc: "擁抱無聊", sc: "拥抱无聊" },
        conceptEn: "A mind that cannot tolerate idle seconds will not tolerate a hard problem.",
        plainEn: "Stand in the queue without the phone. Boredom is the gym for later concentration.",
        plainCn: { tc: "排隊時不看手機。無聊是以後專注的健身房。", sc: "排队时不看手机。无聊是以后专注的健身房。" }
      },
      {
        num: "05",
        titleEn: "Quit Social Media (Selectively)",
        titleCn: { tc: "有選擇地退出社交媒體", sc: "有选择地退出社交媒体" },
        conceptEn: "Any tool must survive a craftsman's audit: does it serve the work that matters?",
        plainEn: "If a network does not clearly help your craft, it is not free. It is billed in residual attention.",
        plainCn: { tc: "若一個網路不明顯幫助你的手藝，它不是免費的。帳單是殘餘注意力。", sc: "若一个网络不明显帮助你的手艺，它不是免费的。账单是残余注意力。" }
      },
      {
        num: "06",
        titleEn: "Drain the Shallows",
        titleCn: { tc: "抽乾淺灘", sc: "抽干浅滩" },
        conceptEn: "Batch the shallow so it cannot colonize the deep blocks.",
        plainEn: "Two email windows a day. The rest of the time, the inbox is not a place you live.",
        plainCn: { tc: "一天兩個郵件窗口。其餘時間，收件匣不是住處。", sc: "一天两个邮件窗口。其余时间，收件匣不是住处。" }
      },
      {
        num: "07",
        titleEn: "The Shutdown Ritual",
        titleCn: { tc: "收工儀式", sc: "收工仪式" },
        conceptEn: "Open loops sabotage rest, and unrest sabotages tomorrow's depth.",
        plainEn: "Write the next step, close the book, say a phrase. Evening is not a worse office.",
        plainCn: { tc: "寫下下一步，合上書，說一句話。夜晚不是一間比較差的辦公室。", sc: "写下下一步，合上书，说一句话。夜晚不是一间比较差的办公室。" }
      },
      {
        num: "08",
        titleEn: "Work Like Teddy Roosevelt",
        titleCn: { tc: "像羅斯福那樣做", sc: "像罗斯福那样做" },
        conceptEn: "A hard deadline plus a clear block can force intensity that open-ended days never reach.",
        plainEn: "Give yourself ninety minutes and a finish line. Urgency, used sparingly, is a tool.",
        plainCn: { tc: "給自己九十分鐘和一條終線。偶爾使用的緊迫，是工具。", sc: "给自己九十分钟和一条终线。偶尔使用的紧迫，是工具。" }
      },
      {
        num: "09",
        titleEn: "Be Hard to Reach",
        titleCn: { tc: "難以觸及", sc: "难以触及" },
        conceptEn: "Accessibility is not a virtue if it destroys the work you were hired to do.",
        plainEn: "A sender filter, a delay, a public office hour. Friction in the incoming is kindness to the outgoing work.",
        plainCn: { tc: "寄件篩選、延遲、公開辦公時間。入站的摩擦，是對出站作品的善意。", sc: "寄件筛选、延迟、公开办公时间。入站的摩擦，是对出站作品的善意。" }
      },
      {
        num: "10",
        titleEn: "Measure the Deep Hours",
        titleCn: { tc: "度量深小時", sc: "度量深小时" },
        conceptEn: "What is not counted will be eaten by what is.",
        plainEn: "A tally of focused hours is more honest than a feeling of having been busy.",
        plainCn: { tc: "專注小時的劃記，比「我很忙」的感覺誠實。", sc: "专注小时的划记，比“我很忙”的感觉诚实。" }
      }
    ],
    easternResonance: {
      quote: { tc: "用志不分，乃凝於神。", sc: "用志不分，乃凝于神。" },
      source: { tc: "——《莊子 · 達生》", sc: "——《庄子 · 达生》" },
      commentary: { tc: "痀僂丈人承蜩，用志不分，乃凝於神——這是深度工作的古典實驗室。莊子講的不是效率，是專一到神凝聚的技術。紐波特用知識經濟的語言重寫同一條件：不被分志。東方的凝神與西方的 deep work block，都要求先造一個不被呼叫的房間。", sc: "痀偻丈人承蜩，用志不分，乃凝于神——这是深度工作的古典实验室。庄子讲的不是效率，是专一到神凝聚的技术。纽波特用知识经济的语言重写同一条件：不被分志。东方的凝神与西方的 deep work block，都要求先造一个不被呼叫的房间。" }
    },
    actionPromptEn: "Schedule one 90-minute deep block today. Phone in another room, a single task on paper, a shutdown phrase at the end. Tally the minutes you actually protected.",
    actionPromptCn: { tc: "今天排一段九十分鐘的深工。手機放另一個房間，紙上只一件事，結束時說一句收工。記下你真正守住的分鐘。", sc: "今天排一段九十分钟的深工。手机放另一个房间，纸上只一件事，结束时说一句收工。记下你真正守住的分钟。" }
  },
  {
    id: "when-breath-becomes-air",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "MEANING & EXISTENTIAL",
    categoryEn: "MEANING & EXISTENTIAL",
    categoryCn: { tc: "生命意義與存在 /", sc: "生命意义与存在 /" },
    durationEn: "DURATION: 7 MIN",
    durationCn: { tc: "時間：7分鐘", sc: "时间：7分钟" },
    themeEn: "THEME: MORTAL VOCATION",
    themeCn: { tc: "主題：有死的天職", sc: "主题：有死的天职" },
    titleLinesEn: ["WHEN BREATH", "BECOMES AIR"],
    titleFlatEn: "When Breath Becomes Air",
    titleCn: { tc: "當呼吸化為空氣", sc: "当呼吸化为空气" },
    authorLine: "Paul Kalanithi (2016)",
    quoteEn: "“You can't ever reach perfection, but you can believe in an asymptote toward which you are ceaselessly striving.”",
    quoteCn: { tc: "“你永遠到不了完美，但你可以相信一條你不斷趨近的漸近線。”", sc: "“你永远到不了完美，但你可以相信一条你不断趋近的渐近线。”" },
    leadEn: "A neurosurgeon becomes a patient and writes from the seam between saving lives and leaving one.",
    leadCn: { tc: "一位神經外科醫師成為病人，從拯救生命與離開生命的接縫處書寫。", sc: "一位神经外科医师成为病人，从拯救生命与离开生命的接缝处书写。" },
    thesisEn: "Kalanithi's memoir is not a guidebook. It is a document of vocation under truncation. Literature first taught him how to think about death; medicine taught him how death actually arrives in bodies; cancer taught him that the physician's distance was always a luxury. The book asks what makes a life meaningful when the future tense is revoked — and answers, without sentimentality, with presence, work, language, and a child he will not raise. The breath that becomes air is both anatomy and elegy.",
    thesisCn: { tc: "卡拉尼提的回憶不是指南，是天職被截短的文獻。文學先教他如何思考死亡；醫學教他死亡如何進入身體；癌症教他醫師的距離從來是奢侈。書問：當未來式被撤銷，什麼使生命有意義——並不煽情地回答：臨在、工作、語言、以及一個他無法養大的孩子。呼吸化為空氣，既是解剖，也是輓歌。", sc: "卡拉尼提的回忆不是指南，是天职被截短的文献。文学先教他如何思考死亡；医学教他死亡如何进入身体；癌症教他医师的距离从来是奢侈。书问：当未来式被撤销，什么使生命有意义——并不煽情地回答：临在、工作、语言、以及一个他无法养大的孩子。呼吸化为空气，既是解剖，也是挽歌。" },
    highlights: [
      {
        num: "01",
        titleEn: "Words Before Instruments",
        titleCn: { tc: "言語先於器械", sc: "言语先于器械" },
        conceptEn: "Kalanithi came to medicine through literature, because the question of a good death is first a question of meaning.",
        plainEn: "Before you can operate on a life, you need a language for what a life is. Poetry is not the opposite of surgery. It is one of its prerequisites.",
        plainCn: { tc: "在你能對一條生命動刀之前，你需要一套語言來說生命是什麼。詩不是外科的反面，是它的前置條件之一。", sc: "在你能对一条生命动刀之前，你需要一套语言来说生命是什么。诗不是外科的反面，是它的前置条件之一。" }
      },
      {
        num: "02",
        titleEn: "The Doctor Becomes the Body",
        titleCn: { tc: "醫師成為身體", sc: "医师成为身体" },
        conceptEn: "Expertise does not exempt you from the condition you treat.",
        plainEn: "The scan is yours. The waiting room is yours. The role reverses, and the knowledge becomes heavier, not lighter.",
        plainCn: { tc: "那張掃描是你的。等候室是你的。角色對調，知識變得更重，不是更輕。", sc: "那张扫描是你的。等候室是你的。角色对调，知识变得更重，不是更轻。" }
      },
      {
        num: "03",
        titleEn: "Time Without a Future Tense",
        titleCn: { tc: "沒有未來式的時間", sc: "没有未来式的时间" },
        conceptEn: "When longevity is unknown, value migrates into the quality of the hours that remain.",
        plainEn: "You stop asking how many years. You start asking whether this afternoon is honest.",
        plainCn: { tc: "你不再問還有多少年，開始問這個下午是否誠實。", sc: "你不再问还有多少年，开始问这个下午是否诚实。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Identity After the Coat",
        titleCn: { tc: "白袍之後的身分", sc: "白袍之后的身分" },
        conceptEn: "A vocation can be a self. Losing it is a second illness.",
        plainEn: "Who are you when you cannot do the thing that made your days make sense? The book sits in that question without rushing an answer.",
        plainCn: { tc: "當你不能做那件讓日子說得通的事，你是誰？這書坐在這問題裡，不趕著回答。", sc: "当你不能做那件让日子说得通的事，你是谁？这书坐在这问题里，不赶着回答。" }
      },
      {
        num: "05",
        titleEn: "Marriage as a Place to Die and Live",
        titleCn: { tc: "婚姻作為生死之處", sc: "婚姻作为生死之处" },
        conceptEn: "Illness does not only happen to a body. It happens to a we.",
        plainEn: "The decisions are medical and also marital: how to spend a remaining season, whether to have a child, how to tell the truth without making the other person a spectator.",
        plainCn: { tc: "決定是醫學的，也是婚姻的：如何度過剩餘的一季、要不要孩子、如何說實話而不讓對方成為旁觀者。", sc: "决定是医学的，也是婚姻的：如何度过剩余的一季、要不要孩子、如何说实话而不让对方成为旁观者。" }
      },
      {
        num: "06",
        titleEn: "The Child as a Vote for Life",
        titleCn: { tc: "孩子作為對生命的投票", sc: "孩子作为对生命的投票" },
        conceptEn: "To have a daughter while dying is not denial. It is a wager that love remains worth the grief.",
        plainEn: "Cady's existence does not cancel the ending. It gives the ending a face to love.",
        plainCn: { tc: "Cady的存在並不取消結局。它給結局一張可愛的臉。", sc: "Cady的存在并不取消结局。它给结局一张可爱的脸。" }
      },
      {
        num: "07",
        titleEn: "Judgment at the Bedside",
        titleCn: { tc: "床邊的判斷", sc: "床边的判断" },
        conceptEn: "Technical skill without moral sight is incomplete medicine.",
        plainEn: "The question is not only 'can we operate' but 'what kind of life would that operation purchase.'",
        plainCn: { tc: "問題不只是「能不能開刀」，而是「這刀買到的是怎樣的生活」。", sc: "问题不只是“能不能开刀”，而是“这刀买到的是怎样的生活”。" }
      },
      {
        num: "08",
        titleEn: "Asymptote of Perfection",
        titleCn: { tc: "完美的漸近線", sc: "完美的渐近线" },
        conceptEn: "Striving does not require arrival. The line you never reach still orients the hand.",
        plainEn: "You will not finish becoming the doctor, writer, parent you meant to be. You can still aim.",
        plainCn: { tc: "你不會完成你想成為的醫師、作者、父母。你仍可以瞄準。", sc: "你不会完成你想成为的医师、作者、父母。你仍可以瞄准。" }
      },
      {
        num: "09",
        titleEn: "Death as a Process, Not an Event",
        titleCn: { tc: "死亡是過程而非事件", sc: "死亡是过程而非事件" },
        conceptEn: "Dying takes time, and that time is still life.",
        plainEn: "The months of treatment are not a hallway to the real story. They are the story.",
        plainCn: { tc: "治療的那幾個月不是通往真正故事的走廊。它們就是故事。", sc: "治疗的那几个月不是通往真正故事的走廊。它们就是故事。" }
      },
      {
        num: "10",
        titleEn: "Finish the Sentence You Can Finish",
        titleCn: { tc: "寫完你能寫完的句子", sc: "写完你能写完的句子" },
        conceptEn: "The manuscript, like the life, is interrupted. What remains is still a gift.",
        plainEn: "You do not need a complete opus to have spoken truly. A partial book can still keep someone company.",
        plainCn: { tc: "你不需要完整巨著才算真話。一本未完成的書仍能陪伴人。", sc: "你不需要完整巨著才算真话。一本未完成的书仍能陪伴人。" }
      }
    ],
    easternResonance: {
      quote: { tc: "季路問事鬼神。子曰：「未能事人，焉能事鬼？」敢問死。曰：「未知生，焉知死？」", sc: "季路问事鬼神。子曰：“未能事人，焉能事鬼？”敢问死。曰：“未知生，焉知死？”" },
      source: { tc: "——《論語 · 先進》／莊子生死觀", sc: "——《论语 · 先进》／庄子生死观" },
      commentary: { tc: "孔子把死問還給生：未知生，焉知死。卡拉尼提的書幾乎是這句話的臨床版——在死亡逼近時，更嚴地問如何生。莊子則以「死生為一條」拆掉恐懼的特殊地位。兩種東方路徑都拒絕把死當成可以旁觀的奇觀。西方醫師的回憶錄在此與儒、莊相遇：先把呼吸過好，空氣才不是抽象。", sc: "孔子把死问还给生：未知生，焉知死。卡拉尼提的书几乎是这句话的临床版——在死亡逼近时，更严地问如何生。庄子则以“死生为一条”拆掉恐惧的特殊地位。两种东方路径都拒绝把死当成可以旁观的奇观。西方医师的回忆录在此与儒、庄相遇：先把呼吸过好，空气才不是抽象。" }
    },
    actionPromptEn: "Write a short note to someone you love as if the future tense were thinner than usual — not dramatic, just true. Send it, or keep it. Then spend one hour on the work or presence that would still make sense if the year were short.",
    actionPromptCn: { tc: "給所愛的人寫一則短訊，像未來式比平時更薄——不戲劇，只求真。寄出或留下。然後把一小時給那件即使這年很短仍說得通的工作或陪伴。", sc: "给所爱的人写一则短讯，像未来式比平时更薄——不戏剧，只求真。寄出或留下。然后把一小时给那件即使这年很短仍说得通的工作或陪伴。" }
  },
  {
    id: "never-split-the-difference",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "COMMUNICATION & INFLUENCE",
    categoryEn: "COMMUNICATION & INFLUENCE",
    categoryCn: { tc: "溝通與影響力 /", sc: "沟通与影响力 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: TACTICAL EMPATHY",
    themeCn: { tc: "主題：戰術同理", sc: "主题：战术同理" },
    titleLinesEn: ["NEVER SPLIT THE", "DIFFERENCE"],
    titleFlatEn: "Never Split the Difference",
    titleCn: { tc: "從不妥協", sc: "从不妥协" },
    authorLine: "Chris Voss (2016)",
    quoteEn: "“He who has learned to disagree without being disagreeable has discovered the most valuable secret of negotiation.”",
    quoteCn: { tc: "“學會不同意而不討人厭的人，發現了談判最貴重的秘密。”", sc: "“学会不同意而不讨人厌的人，发现了谈判最贵重的秘密。”" },
    leadEn: "Negotiation is not a compromise machine. It is the art of making the other person feel understood enough to move.",
    leadCn: { tc: "談判不是妥協機器。它是讓對方感到被理解、因而願意移動的技藝。", sc: "谈判不是妥协机器。它是让对方感到被理解、因而愿意移动的技艺。" },
    thesisEn: "Voss, a former FBI hostage negotiator, argues that classical win-win bargaining underestimates emotion. People decide with amygdala first and spreadsheet second. Tactical empathy — labeling feelings, mirroring, calibrated questions, the late-night FM DJ voice — is a way of disarming threat so information can appear. 'No' is the start of a conversation, not the end. Splitting the difference often splits off the only thing that mattered. The goal is not to crush. It is to change the map both people are using.",
    thesisCn: { tc: "前FBI人質談判專家佛斯主張：古典雙贏低估了情緒。人先用杏仁核決定，再用試算表。戰術同理——標籤情緒、鏡像、校準提問、深夜電台主持的聲線——是解除威脅、好讓資訊出現的方法。「不」是對話的開始而非結束。把差距對半切，常常切掉唯一要緊的東西。目標不是壓垮，是改變兩人共用的地圖。", sc: "前FBI人质谈判专家佛斯主张：古典双赢低估了情绪。人先用杏仁核决定，再用试算表。战术同理——标签情绪、镜像、校准提问、深夜电台主持的声线——是解除威胁、好让资讯出现的方法。“不”是对话的开始而非结束。把差距对半切，常常切掉唯一要紧的东西。目标不是压垮，是改变两人共用的地图。" },
    highlights: [
      {
        num: "01",
        titleEn: "Tactical Empathy",
        titleCn: { tc: "戰術同理", sc: "战术同理" },
        conceptEn: "Name the other person's world well enough that they can correct you — and then they start teaching you.",
        plainEn: "“It seems like you felt ignored in that meeting.” If you are wrong, they will refine. If you are right, their shoulders drop. Either way, you now have a map.",
        plainCn: { tc: "「聽起來你在那會議裡覺得被忽略。」若你錯了，他們會修正；若你對了，肩膀會放下。無論哪種，你現在有地圖。", sc: "“听起来你在那会议里觉得被忽略。”若你错了，他们会修正；若你对了，肩膀会放下。无论哪种，你现在有地图。" }
      },
      {
        num: "02",
        titleEn: "No Is a Beginning",
        titleCn: { tc: "「不」是開始", sc: "“不”是开始" },
        conceptEn: "People need the safety of no before they can consider yes.",
        plainEn: "Ask a question they can decline. Safety appears. Then the real terms can be spoken.",
        plainCn: { tc: "問一個他們可以拒絕的問題。安全出現了，真正的條件才能被說出。", sc: "问一个他们可以拒绝的问题。安全出现了，真正的条件才能被说出。" }
      },
      {
        num: "03",
        titleEn: "Calibrated Questions",
        titleCn: { tc: "校準提問", sc: "校准提问" },
        conceptEn: "How and what questions make the other side solve your problem without feeling coerced.",
        plainEn: "“How am I supposed to do that?” is gentler than no, and often more effective. It recruits their intelligence.",
        plainCn: { tc: "「我要怎麼做到？」比直接說不更柔，也常常更有效。它徵召對方的智力。", sc: "“我要怎么做到？”比直接说不更柔，也常常更有效。它征召对方的智力。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Mirroring",
        titleCn: { tc: "鏡像", sc: "镜像" },
        conceptEn: "Repeat the last few words. People elaborate. Information walks in.",
        plainEn: "They say “the timeline is impossible.” You say “impossible?” Then wait. The wait is the tool.",
        plainCn: { tc: "他們說「時程不可能」。你說「不可能？」然後等。等就是工具。", sc: "他们说“时程不可能”。你说“不可能？”然后等。等就是工具。" }
      },
      {
        num: "05",
        titleEn: "The Late-Night FM DJ Voice",
        titleCn: { tc: "深夜電台聲線", sc: "深夜电台声线" },
        conceptEn: "Tone regulates threat. Slow, low, and warm keeps the other amygdala from hijacking the deal.",
        plainEn: "You can say the same sentence as a weapon or as a blanket. The blanket gets further.",
        plainCn: { tc: "同一句話可以當武器，也可以當毯子。毯子走得更遠。", sc: "同一句话可以当武器，也可以当毯子。毯子走得更远。" }
      },
      {
        num: "06",
        titleEn: "Accusation Audit",
        titleCn: { tc: "指控預審", sc: "指控预审" },
        conceptEn: "Say the worst things they could think of you before they do. It steals the fuel.",
        plainEn: "“You’re going to think I’m greedy and careless with your time.” Often they protest — and soften.",
        plainCn: { tc: "「你會覺得我貪婪、不珍惜你的時間。」對方常常會反駁——然後變軟。", sc: "“你会觉得我贪婪、不珍惜你的时间。”对方常常会反驳——然后变软。" }
      },
      {
        num: "07",
        titleEn: "That's Right, Not You're Right",
        titleCn: { tc: "「沒錯」而非「你是對的」", sc: "“没错”而非“你是对的”" },
        conceptEn: "You're right is often a dismissal. That's right is recognition of a shared map.",
        plainEn: "Summarize their world until they say that's right. Then you are finally negotiating with reality.",
        plainCn: { tc: "總結他們的世界，直到他們說「沒錯」。那時你才終於在與現實談判。", sc: "总结他们的世界，直到他们说“没错”。那时你才终于在与现实谈判。" }
      },
      {
        num: "08",
        titleEn: "Bargaining with Loss",
        titleCn: { tc: "用損失來談", sc: "用损失来谈" },
        conceptEn: "People will move farther to avoid a loss than to capture an equivalent gain.",
        plainEn: "Frame the deadline as what they stand to lose, not only what they might win. Use this honestly or not at all.",
        plainCn: { tc: "把期限說成他們會失去什麼，而不只是可能得到什麼。要麼誠實使用，要麼不用。", sc: "把期限说成他们会失去什么，而不只是可能得到什么。要么诚实使用，要么不用。" }
      },
      {
        num: "09",
        titleEn: "Black Swans",
        titleCn: { tc: "黑天鵝", sc: "黑天鹅" },
        conceptEn: "The piece of information that changes the whole deal is usually unspoken until trust appears.",
        plainEn: "They cannot pay because of a silent constraint, not because they are stubborn. Find the constraint.",
        plainCn: { tc: "他們付不出，是因為沉默的限制，不是因為固執。去找那限制。", sc: "他们付不出，是因为沉默的限制，不是因为固执。去找那限制。" }
      },
      {
        num: "10",
        titleEn: "Never Split the Difference",
        titleCn: { tc: "從不對半切", sc: "从不对半切" },
        conceptEn: "Compromise can be laziness dressed as fairness.",
        plainEn: "Meeting in the middle on a hostage, a salary, or a boundary may discard the only acceptable world. Invent a third option instead.",
        plainCn: { tc: "在人質、薪水或界限上各讓一半，可能丟掉唯一可接受的世界。改發明第三個選項。", sc: "在人质、薪水或界限上各让一半，可能丢掉唯一可接受的世界。改发明第三个选项。" }
      }
    ],
    easternResonance: {
      quote: { tc: "故觀蜎飛蠕動，無不有利害，可以生事美。生事者，幾之勢也。無不間，貴和也。", sc: "故观蜎飞蠕动，无不有利害，可以生事美。生事者，几之势也。无不间，贵和也。" },
      source: { tc: "——《鬼谷子 · 揣篇》／捭闔、反應之術", sc: "——《鬼谷子 · 揣篇》／捭阖、反应之术" },
      commentary: { tc: "鬼谷子言揣情：先測對方的利害與幾勢，再動。攻心為上，不是口號，是方法論——與戰術同理同構。捭闔、反應、飛箝，皆是讓對方自己把地圖打開。佛斯用人質現場驗證；鬼谷用縱橫之術驗證。閱心並置二者，不是教人操縱，是指出：影響力始於把對方的世界揣準，而不是把你的世界喊大。", sc: "鬼谷子言揣情：先测对方的利害与几势，再动。攻心为上，不是口号，是方法论——与战术同理同构。捭阖、反应、飞箝，皆是让对方自己把地图打开。佛斯用人质现场验证；鬼谷用纵横之术验证。阅心并置二者，不是教人操纵，是指出：影响力始于把对方的世界揣准，而不是把你的世界喊大。" }
    },
    actionPromptEn: "In one real conversation today, mirror the last three words, wait, then label a feeling. Do not split a difference. Ask one calibrated 'how' question instead.",
    actionPromptCn: { tc: "今天一場真實對話裡，重複對方最後三個字，等待，然後標籤一個感受。不要把差距對半切。改問一個校準過的「如何」。", sc: "今天一场真实对话里，重复对方最后三个字，等待，然后标签一个感受。不要把差距对半切。改问一个校准过的“如何”。" }
  },
  {
    id: "why-we-sleep",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "HEALTH, BODY & LONGEVITY",
    categoryEn: "HEALTH, BODY & LONGEVITY",
    categoryCn: { tc: "健康、身體與長壽 /", sc: "健康、身体与长寿 /" },
    durationEn: "DURATION: 6 MIN",
    durationCn: { tc: "時間：6分鐘", sc: "时间：6分钟" },
    themeEn: "THEME: SLEEP AS INFRASTRUCTURE",
    themeCn: { tc: "主題：睡眠即基礎設施", sc: "主题：睡眠即基础设施" },
    titleLinesEn: ["WHY WE", "SLEEP"],
    titleFlatEn: "Why We Sleep",
    titleCn: { tc: "我們為什麼要睡覺", sc: "我们为什么要睡觉" },
    authorLine: "Matthew Walker (2017)",
    quoteEn: "“Sleep is the single most effective thing we can do to reset our brain and body health each day.”",
    quoteCn: { tc: "“睡眠是我們每天能為腦與身體做的最有效重置。”", sc: "“睡眠是我们每天能为脑与身体做的最有效重置。”" },
    leadEn: "Sleep is not downtime. It is the night shift of memory, immunity, metabolism, and mood.",
    leadCn: { tc: "睡眠不是停機。它是記憶、免疫、代謝與情緒的夜班。", sc: "睡眠不是停机。它是记忆、免疫、代谢与情绪的夜班。" },
    thesisEn: "Walker gathers a century of sleep science into a civic argument: we have been treating the third of life spent asleep as optional, and paying in cardiovascular risk, Alzheimer's vulnerability, emotional volatility, and impaired learning. NREM cleans and consolidates; REM integrates and simulates. Caffeine and alcohol are not harmless tools; they are interventions in architecture. The practical thesis is unfashionable: a regular eight hours is not self-indulgence. It is infrastructure for every other ambition in this library.",
    thesisCn: { tc: "沃克把一世紀的睡眠科學收成公共論述：我們把人生三分之一的睡眠當成可選，並用心血管風險、阿茲海默易感性、情緒波動與學習受損來付帳。非快速動眼清理並鞏固；快速動眼整合並模擬。咖啡因與酒精不是無害工具，是對建築的干預。實踐論點不時髦：規律的八小時不是自我放縱，是這座圖書館裡所有其他野心的基礎設施。", sc: "沃克把一世纪的睡眠科学收成公共论述：我们把人生三分之一的睡眠当成可选，并用心血管风险、阿兹海默易感性、情绪波动与学习受损来付账。非快速动眼清理并巩固；快速动眼整合并模拟。咖啡因与酒精不是无害工具，是对建筑的干预。实践论点不时髦：规律的八小时不是自我放纵，是这座图书馆里所有其他野心的基础设施。" },
    highlights: [
      {
        num: "01",
        titleEn: "Sleep Is a Nightly Renovation",
        titleCn: { tc: "睡眠是夜間翻修", sc: "睡眠是夜间翻修" },
        conceptEn: "You do not pause the city at night. You repair the roads so the city can run.",
        plainEn: "Staying up to 'get more done' is borrowing tomorrow's roads to drive on tonight. The invoice arrives as fog.",
        plainCn: { tc: "熬夜「多做一點」是借明天的路來今晚開。帳單以霧的形式到來。", sc: "熬夜“多做一点”是借明天的路来今晚开。账单以雾的形式到来。" }
      },
      {
        num: "02",
        titleEn: "NREM and REM as Two Shifts",
        titleCn: { tc: "兩班制", sc: "两班制" },
        conceptEn: "Deep sleep files and cleans. Dream sleep weaves and tests.",
        plainEn: "Facts need NREM. Emotional sense-making needs REM. Cut either shift and the factory ships broken goods.",
        plainCn: { tc: "事實需要非快速動眼。情緒的理解需要快速動眼。砍任一班，工廠就出貨瑕疵。", sc: "事实需要非快速动眼。情绪的理解需要快速动眼。砍任一班，工厂就出货瑕疵。" }
      },
      {
        num: "03",
        titleEn: "Regularity Beats Heroics",
        titleCn: { tc: "規律勝過英勇", sc: "规律胜过英勇" },
        conceptEn: "The circadian system wants a stable clock more than an occasional long lie-in.",
        plainEn: "Same bedtime, same wake, light in the morning, dark at night. The weekend binge-sleep does not refund the week.",
        plainCn: { tc: "同樣的睡、同樣的醒、早晨有光、夜晚夠暗。週末補眠退不回那一週。", sc: "同样的睡、同样的醒、早晨有光、夜晚够暗。周末补眠退不回那一周。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Caffeine Has a Half-Life",
        titleCn: { tc: "咖啡因有半衰期", sc: "咖啡因有半衰期" },
        conceptEn: "Your 3 p.m. coffee is still in the building at 9 p.m.",
        plainEn: "If sleep is the renovation, caffeine is a worker who keeps turning the lights back on. Know when the shift ended.",
        plainCn: { tc: "若睡眠是翻修，咖啡因是不斷把燈重新打開的工人。要知道夜班何時該結束。", sc: "若睡眠是翻修，咖啡因是不断把灯重新打开的工人。要知道夜班何时该结束。" }
      },
      {
        num: "05",
        titleEn: "Alcohol Is a Sedative, Not Sleep",
        titleCn: { tc: "酒精是鎮靜不是睡眠", sc: "酒精是镇静不是睡眠" },
        conceptEn: "Passing out is not the architecture of sleep. REM is especially tax-collectible by alcohol.",
        plainEn: "The night after wine can feel unconscious and still leave you unprocessed. Sedation is a costume.",
        plainCn: { tc: "酒後那晚可以毫無意識，卻仍讓你未經處理。鎮靜是戲服。", sc: "酒后那晚可以毫无意识，却仍让你未经处理。镇静是戏服。" }
      },
      {
        num: "06",
        titleEn: "Emotion Without Sleep",
        titleCn: { tc: "無眠的情緒", sc: "无眠的情绪" },
        conceptEn: "The amygdala grows loud when the prefrontal brakes are tired.",
        plainEn: "The fight you picked at 11 p.m. might be a sleep debt wearing your voice.",
        plainCn: { tc: "你在十一點挑起的爭執，可能是睡眠債在用你的聲音。", sc: "你在十一点挑起的争执，可能是睡眠债在用你的声音。" }
      },
      {
        num: "07",
        titleEn: "Memory's Two-Step",
        titleCn: { tc: "記憶的兩步", sc: "记忆的两步" },
        conceptEn: "Encoding happens by day; consolidation happens by night. Skip the night and the day was a draft.",
        plainEn: "Studying until 2 a.m. is often deleting the file you just wrote.",
        plainCn: { tc: "讀到凌晨兩點，常常是刪掉你剛寫下的檔案。", sc: "读到凌晨两点，常常是删掉你刚写下的档案。" }
      },
      {
        num: "08",
        titleEn: "Sleep and the Immune Ledger",
        titleCn: { tc: "睡眠與免疫帳本", sc: "睡眠与免疫账本" },
        conceptEn: "Short nights correlate with weaker defenses. The cold after a deadline is not a coincidence narrative only.",
        plainEn: "The body keeps a night watch. Fire the watch and the city takes more hits.",
        plainCn: { tc: "身體有夜巡。解雇夜巡，城市會挨更多打。", sc: "身体有夜巡。解雇夜巡，城市会挨更多打。" }
      },
      {
        num: "09",
        titleEn: "Light as a Drug",
        titleCn: { tc: "光即藥物", sc: "光即药物" },
        conceptEn: "Screens at midnight are a chemical signal that it is still noon somewhere.",
        plainEn: "Dim the house. Let melatonin do its unfashionable job.",
        plainCn: { tc: "把屋子調暗。讓褪黑激素做它不時髦的工作。", sc: "把屋子调暗。让褪黑激素做它不时髦的工作。" }
      },
      {
        num: "10",
        titleEn: "Sleep as Civic Ethics",
        titleCn: { tc: "睡眠作為公共倫理", sc: "睡眠作为公共伦理" },
        conceptEn: "Tired people are more dangerous colleagues, drivers, and parents. Your bedtime is not only yours.",
        plainEn: "Protecting sleep is a way of not exporting your fog onto other lives.",
        plainCn: { tc: "守護睡眠，是不把你的霧輸出到別人的生命裡。", sc: "守护睡眠，是不把你的雾输出到别人的生命里。" }
      }
    ],
    easternResonance: {
      quote: { tc: "春三月，此謂發陳……夜臥早起……冬三月，此謂閉藏……早臥晚起，必待日光。", sc: "春三月，此谓发陈……夜卧早起……冬三月，此谓闭藏……早卧晚起，必待日光。" },
      source: { tc: "——《黃帝內經 · 四氣調神大論》", sc: "——《黄帝内经 · 四气调神大论》" },
      commentary: { tc: "《內經》把睡起寫進四時：春夏晚臥早起，秋冬早臥晚起，必待日光。這是節律醫學的古典版，與沃克的晝夜鐘、光作為藥物幾乎同調。東方不是把睡眠當懶，而是當與天時對齊的調神。西方睡眠科學為這份古老作息提供了實驗室註腳：夜班的身體，仍需要一個可預期的夜。", sc: "《内经》把睡起写进四时：春夏晚卧早起，秋冬早卧晚起，必待日光。这是节律医学的古典版，与沃克的昼夜钟、光作为药物几乎同调。东方不是把睡眠当懒，而是当与天时对齐的调神。西方睡眠科学为这份古老作息提供了实验室注脚：夜班的身体，仍需要一个可预期的夜。" }
    },
    actionPromptEn: "Pick a lights-out time for tonight and a wake time for tomorrow, eight hours apart. No caffeine after 2 p.m. Write one sentence in the morning about the quality of the night shift.",
    actionPromptCn: { tc: "選定今晚熄燈與明早醒來，相距八小時。下午兩點後無咖啡因。明早用一句話寫下夜班的品質。", sc: "选定今晚熄灯与明早醒来，相距八小时。下午两点后无咖啡因。明早用一句话写下夜班的品质。" }
  },
  {
    id: "body-keeps-the-score",
    isDailyFree: false,
    topLabelEn: "CANON",
    topLabelCn: { tc: "正典", sc: "正典" },
    categoryFilter: "EMOTIONAL RESILIENCE",
    categoryEn: "EMOTIONAL RESILIENCE",
    categoryCn: { tc: "情緒韌性 /", sc: "情绪韧性 /" },
    durationEn: "DURATION: 8 MIN",
    durationCn: { tc: "時間：8分鐘", sc: "时间：8分钟" },
    themeEn: "THEME: THE BODY REMEMBERS",
    themeCn: { tc: "主題：身體記得", sc: "主题：身体记得" },
    titleLinesEn: ["THE BODY KEEPS", "THE SCORE"],
    titleFlatEn: "The Body Keeps the Score",
    titleCn: { tc: "身體記住一切", sc: "身体记住一切" },
    authorLine: "Bessel van der Kolk (2014)",
    quoteEn: "“The body keeps the score: if the memory of trauma is encoded in the viscera, in heartbreaking and gut-wrenching emotions, in autoimmune disorders and skeletal/muscular problems, why not start there?”",
    quoteCn: { tc: "“身體記住分數：若創傷記憶編碼在內臟、在心碎與絞腸的情緒、在自體免疫與骨骼肌肉裡，為何不從那裡開始？”", sc: "“身体记住分数：若创伤记忆编码在内脏、在心碎与绞肠的情绪、在自体免疫与骨骼肌肉里，为何不从那里开始？”" },
    leadEn: "Trauma is not only a story the mind tells. It is a pattern the nervous system keeps running.",
    leadCn: { tc: "創傷不只是心智講述的故事。它是神經系統持續運轉的模式。", sc: "创伤不只是心智讲述的故事。它是神经系统持续运转的模式。" },
    thesisEn: "Van der Kolk's synthesis of trauma research insists that talk, while necessary, is often insufficient. Overwhelming experience can disconnect people from a felt sense of safety in their own bodies — freeze, rage, numbness, hypervigilance. Healing, in this map, is the restoration of agency and interoception: yoga, EMDR, theater, neurofeedback, safe relationships, and carefully paced therapy are not alternatives to science. They are ways of teaching the organism that the past is no longer happening. The score is kept below language. The work must sometimes go there too.",
    thesisCn: { tc: "范德寇對創傷研究的綜合主張：言說必要，卻常常不夠。壓倒性經驗能讓人與自己身體裡的安全感斷線——僵住、暴怒、麻木、過度警覺。在這張地圖上，療癒是能動性與內感覺的恢復：瑜伽、EMDR、劇場、神經回饋、安全關係、節奏謹慎的治療，不是科學的替代，而是教這個有機體：過去已不再發生。分數記在語言之下。工作有時也必須到那裡。", sc: "范德寇对创伤研究的综合主张：言说必要，却常常不够。压倒性经验能让人与自己身体里的安全感断线——僵住、暴怒、麻木、过度警觉。在这张地图上，疗愈是能动性与内感觉的恢复：瑜伽、EMDR、剧场、神经回馈、安全关系、节奏谨慎的治疗，不是科学的替代，而是教这个有机体：过去已不再发生。分数记在语言之下。工作有时也必须到那里。" },
    highlights: [
      {
        num: "01",
        titleEn: "The Score Is Somatic",
        titleCn: { tc: "分數在身體", sc: "分数在身体" },
        conceptEn: "What the mind cannot narrate, the viscera, breath, and posture may still enact.",
        plainEn: "A slammed door is not 'just a door' to a nervous system that once needed to run. The present has to be proven, not asserted.",
        plainCn: { tc: "對曾經需要逃跑的神經系統，甩上的門不只是門。現在必須被證明，而非被宣稱。", sc: "对曾经需要逃跑的神经系统，甩上的门不只是门。现在必须被证明，而非被宣称。" }
      },
      {
        num: "02",
        titleEn: "Agency and Safety",
        titleCn: { tc: "能動與安全", sc: "能动与安全" },
        conceptEn: "Trauma steals the sense that your actions matter. Recovery returns a vote to the body.",
        plainEn: "Choice in small things — when to pause, how to breathe, whom to sit beside — is not trivial. It is how authorship comes back.",
        plainCn: { tc: "小事上的選擇——何時停、如何呼吸、坐在誰旁邊——並不瑣碎。作者身分是這樣回來的。", sc: "小事上的选择——何时停、如何呼吸、坐在谁旁边——并不琐碎。作者身分是这样回来的。" }
      },
      {
        num: "03",
        titleEn: "Relationships as Regulation",
        titleCn: { tc: "關係即調節", sc: "关系即调节" },
        conceptEn: "Nervous systems co-regulate. Isolation is not neutrality; it is a missing external brake.",
        plainEn: "A calm person in the room is a piece of medicine. The body borrows their pace.",
        plainCn: { tc: "房間裡一個平穩的人是一劑藥。身體會借他們的節奏。", sc: "房间里一个平稳的人是一剂药。身体会借他们的节奏。" }
      }
    ],
    extraHighlights: [
      {
        num: "04",
        titleEn: "Numbness Is a Strategy",
        titleCn: { tc: "麻木是策略", sc: "麻木是策略" },
        conceptEn: "Disconnecting from feeling was once adaptive. It becomes a prison when the danger has passed.",
        plainEn: "If you cannot feel your feet, joy will also have trouble finding the door. Sensation is the hallway back.",
        plainCn: { tc: "若你感覺不到腳，喜悅也會找不到門。感覺是回來的走廊。", sc: "若你感觉不到脚，喜悦也会找不到门。感觉是回来的走廊。" }
      },
      {
        num: "05",
        titleEn: "The Mind That Cannot Integrate",
        titleCn: { tc: "無法整合的心智", sc: "无法整合的心智" },
        conceptEn: "Flashbacks are the past refusing to become memory. They remain present tense.",
        plainEn: "The work is not 'get over it.' It is helping the brain file the event in the past tense, with a body that agrees.",
        plainCn: { tc: "工作不是「走出來」，是幫大腦把事件歸檔為過去式，且身體同意。", sc: "工作不是“走出来”，是帮大脑把事件归档为过去式，且身体同意。" }
      },
      {
        num: "06",
        titleEn: "Bottom-Up Paths",
        titleCn: { tc: "由下而上的路", sc: "由下而上的路" },
        conceptEn: "Breath, movement, rhythm, and touch can reach places explanation cannot.",
        plainEn: "A walk, a stretch, a drum, a safe yoga class. These are not luxuries. They are languages the brainstem speaks.",
        plainCn: { tc: "走路、伸展、鼓、一堂安全的瑜伽。它們不是奢侈，是腦幹會的語言。", sc: "走路、伸展、鼓、一堂安全的瑜伽。它们不是奢侈，是脑干会的语言。" }
      },
      {
        num: "07",
        titleEn: "EMDR and the Unfinished Action",
        titleCn: { tc: "EMDR與未完成的動作", sc: "EMDR与未完成的动作" },
        conceptEn: "Bilateral stimulation can help the brain finish processing what freeze interrupted.",
        plainEn: "You do not have to understand the mechanism to respect that the body sometimes needs a method besides insight.",
        plainCn: { tc: "你不必理解機制，也該尊重：身體有時需要洞見以外的方法。", sc: "你不必理解机制，也该尊重：身体有时需要洞见以外的方法。" }
      },
      {
        num: "08",
        titleEn: "Community and Theater",
        titleCn: { tc: "共同體與劇場", sc: "共同体与剧场" },
        conceptEn: "Playing a role in a safe ensemble can restore a sense of existing with others.",
        plainEn: "Trauma isolates. Chorus, team, ritual, and play rehearse belonging until the nervous system believes it.",
        plainCn: { tc: "創傷使人孤立。合唱、團隊、儀式與遊戲，排練歸屬，直到神經系統相信。", sc: "创伤使人孤立。合唱、团队、仪式与游戏，排练归属，直到神经系统相信。" }
      },
      {
        num: "09",
        titleEn: "Pacing Beats Flooding",
        titleCn: { tc: "節奏勝過淹沒", sc: "节奏胜过淹没" },
        conceptEn: "Too much too soon retraumatizes. Titration is a form of respect.",
        plainEn: "You do not dive the wreck on day one. You practice coming up for air.",
        plainCn: { tc: "你不會第一天就潛入沉船。你練習上來換氣。", sc: "你不会第一天就潜入沉船。你练习上来换气。" }
      },
      {
        num: "10",
        titleEn: "The Body as Ally",
        titleCn: { tc: "身體作為盟友", sc: "身体作为盟友" },
        conceptEn: "The aim is not to override the body. It is to inhabit it without being hijacked.",
        plainEn: "A hand on the sternum, feet on the floor, a longer exhale. These are votes for 'I am here, and here is now.'",
        plainCn: { tc: "一隻手放在胸骨、腳踩地板、更長的吐氣。這些是投票：「我在這裡，而這裡是現在。」", sc: "一只手放在胸骨、脚踩地板、更长的吐气。这些是投票：“我在这里，而这里是现在。”" }
      }
    ],
    easternResonance: {
      quote: { tc: "真人之息以踵，眾人之息以喉。", sc: "真人之息以踵，众人之息以喉。" },
      source: { tc: "——《莊子 · 大宗師》／《黃帝內經》形神觀", sc: "——《庄子 · 大宗师》／《黄帝内经》形神观" },
      commentary: { tc: "莊子說真人呼吸到腳跟，眾人只在喉嚨——這是內感覺的古典分級。形神合一的《內經》傳統，從不把心當成可以離開身體的軟體。范德寇從創傷神經科學走回同一事實：分數記在內臟與氣息裡。東方的踵息、導引、調神，與西方的由下而上療法，不是比喻上相似，是同一張人體地圖的兩種畫法。", sc: "庄子说真人呼吸到脚跟，众人只在喉咙——这是内感觉的古典分级。形神合一的《内经》传统，从不把心当成可以离开身体的软体。范德寇从创伤神经科学走回同一事实：分数记在内脏与气息里。东方的踵息、导引、调神，与西方的由下而上疗法，不是比喻上相似，是同一张人体地图的两种画法。" }
    },
    actionPromptEn: "Twice today, pause for a 60-second body census: feet, belly, chest, jaw. Name one sensation without explaining it. If it is intense, lengthen the exhale and look at a stable object in the room. This is practice, not a substitute for care.",
    actionPromptCn: { tc: "今天兩次，暫停六十秒做身體普查：腳、腹、胸、顎。只命名一個感覺，不解釋。若強烈，拉長吐氣，看房間裡一個穩定的物件。這是練習，不是照護的替代。", sc: "今天两次，暂停六十秒做身体普查：脚、腹、胸、颚。只命名一个感觉，不解释。若强烈，拉长吐气，看房间里一个稳定的物件。这是练习，不是照护的替代。" }
  }
];


