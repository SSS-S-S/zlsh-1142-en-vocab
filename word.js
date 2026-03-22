const vocabData = [
  {
    "word": "cinema",
    "pos": "n.",
    "ch": "電影院",
    "example_en": "We are going to the cinema to watch the latest blockbuster.",
    "example_ch": "我們要去電影院看最新的大片。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "teenage",
    "pos": "adj.",
    "ch": "青少年的",
    "example_en": "He is going through a typical teenage rebellious phase.",
    "example_ch": "他正處於典型的青少年叛逆期。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "situation",
    "pos": "n.",
    "ch": "情況；處境",
    "example_en": "The rescue team is assessing the situation after the storm.",
    "example_ch": "救援隊正在評估風暴後的狀況。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "sensitive",
    "pos": "adj.",
    "ch": "敏感的",
    "example_en": "She is very sensitive to other people's feelings.",
    "example_ch": "她對他人的感受非常敏感。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "innocent",
    "pos": "adj.",
    "ch": "清白的；天真的",
    "example_en": "The jury found him innocent of all charges.",
    "example_ch": "陪審團裁定他所有指控均無罪。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "daring",
    "pos": "adj.",
    "ch": "大膽的；勇敢的",
    "example_en": "The hikers made a daring attempt to climb the steep cliff.",
    "example_ch": "登山者們大膽嘗試攀爬陡峭的懸崖。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "morally",
    "pos": "adv.",
    "ch": "道德上",
    "example_en": "The judge argued that the decision was morally right.",
    "example_ch": "法官辯稱該決定在道德上是正確的。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "conclusion",
    "pos": "n.",
    "ch": "結論",
    "example_en": "We came to the conclusion that the plan was not feasible.",
    "example_ch": "我們得出結論，該計劃是不可行的。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "tend",
    "pos": "v.",
    "ch": "傾向於",
    "example_en": "Prices tend to rise during the holiday season.",
    "example_ch": "價格在節日期間往往會上漲。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "operate",
    "pos": "v.",
    "ch": "操作；運作",
    "example_en": "Do you know how to operate this coffee machine?",
    "example_ch": "你知道如何操作這台咖啡機嗎？",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "united",
    "pos": "adj.",
    "ch": "聯合的；團結的",
    "example_en": "The two countries presented a united front during the negotiations.",
    "example_ch": "兩國在談判中表現出統一的戰線。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "ch": "口味；風味",
    "example_en": "I love the unique flavor of traditional Italian gelato.",
    "example_ch": "我喜歡傳統義大利冰淇淋的獨特風味。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "spice",
    "pos": "n.",
    "ch": "香料",
    "example_en": "Cinnamon is a common spice used in baking.",
    "example_ch": "肉桂是烘焙中常用的香料。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "spicy",
    "pos": "adj.",
    "ch": "辣的",
    "example_en": "I can't handle very spicy food; it burns my tongue.",
    "example_ch": "我沒辦法吃太辣的食物，那會燙傷我的舌頭。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "ch": "傳統的",
    "example_en": "They wore traditional costumes for the lunar new year festival.",
    "example_ch": "他們穿著傳統服飾參加農曆新年慶典。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "classic",
    "pos": "adj.",
    "ch": "經典的",
    "example_en": "The white shirt and jeans combination is a classic look.",
    "example_ch": "白襯衫搭配牛仔褲是經典的造型。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "tender",
    "pos": "adj.",
    "ch": "軟嫩的；溫柔的",
    "example_en": "The steak was cooked to perfection and was very tender.",
    "example_ch": "這塊牛排煮得恰到好處，非常軟嫩。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "comforting",
    "pos": "adj.",
    "ch": "令人寬慰的",
    "example_en": "It’s comforting to know that someone is always there for you.",
    "example_ch": "知道總有人在你身邊支持你是件令人寬慰的事。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "somehow",
    "pos": "adv.",
    "ch": "不知怎麼地",
    "example_en": "We will find a way to finish this project somehow.",
    "example_ch": "我們總會想辦法完成這個專案的。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "sauce",
    "pos": "n.",
    "ch": "醬汁",
    "example_en": "The pasta was served with a rich tomato sauce.",
    "example_ch": "義大利麵配上了濃郁的番茄醬。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "raw",
    "pos": "adj.",
    "ch": "生的；未加工的",
    "example_en": "Sashimi is a Japanese dish consisting of thinly sliced raw fish.",
    "example_ch": "生魚片是一種由薄切生魚組成的日本料理。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "garlic",
    "pos": "n.",
    "ch": "大蒜",
    "example_en": "Garlic adds a lot of flavor to most savory dishes.",
    "example_ch": "大蒜為大多數鹹食增添了許多風味。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "skip",
    "pos": "v.",
    "ch": "略過",
    "example_en": "I'm not hungry, so I think I'll skip lunch today.",
    "example_ch": "我不餓，所以我想我今天會跳過午餐。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "ch": "機會",
    "example_en": "This job offer is a great opportunity for my career.",
    "example_ch": "這份工作邀約對我的職業生涯來說是一個很好的機會。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "scare",
    "pos": "v.",
    "ch": "嚇唬",
    "example_en": "The loud thunder managed to scare the little kitten.",
    "example_ch": "巨大的雷聲嚇到了那隻小貓。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "wrap",
    "pos": "v.",
    "ch": "包裝；包裹",
    "example_en": "I need to wrap this present before the party starts.",
    "example_ch": "我需要在派對開始前包好這份禮物。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "throughout",
    "pos": "prep.",
    "ch": "貫穿；遍及",
    "example_en": "It rained heavily throughout the entire night.",
    "example_ch": "整晚都在下大雨。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "dislike",
    "pos": "v.",
    "ch": "不喜歡",
    "example_en": "I dislike waking up early on cold winter mornings.",
    "example_ch": "我不喜歡在寒冷的冬日早晨早起。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "custom",
    "pos": "n.",
    "ch": "習俗",
    "example_en": "It is a local custom to remove your shoes before entering.",
    "example_ch": "進入前脫鞋是當地的習俗。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "ch": "財富；運氣",
    "example_en": "He made a fortune in the real estate market.",
    "example_ch": "他在房地產市場賺了一大筆錢。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "shiny",
    "pos": "adj.",
    "ch": "閃亮的",
    "example_en": "She polished her shoes until they were clean and shiny.",
    "example_ch": "她把鞋子擦得又乾淨又閃亮。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "shine",
    "pos": "v.",
    "ch": "發光",
    "example_en": "The stars shine brightly in the dark night sky.",
    "example_ch": "星星在黑暗的夜空中閃閃發光。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "electronic",
    "pos": "adj.",
    "ch": "電子的",
    "example_en": "Most people use electronic devices to stay connected today.",
    "example_ch": "如今大多數人使用電子設備來保持聯繫。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "connected",
    "pos": "adj.",
    "ch": "連結的",
    "example_en": "The printer is not connected to the computer.",
    "example_ch": "印表機沒有與電腦連接。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "regard",
    "pos": "v.",
    "ch": "視為",
    "example_en": "He is widely regarded as one of the best players in history.",
    "example_ch": "他被廣泛認為是歷史上最好的球員之一。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "advance",
    "pos": "v./n.",
    "ch": "前進；進步",
    "example_en": "Medical technology continues to advance at a rapid pace.",
    "example_ch": "醫療技術繼續以驚人的速度進步。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "tap",
    "pos": "v.",
    "ch": "輕敲；點擊",
    "example_en": "Just tap the screen to open the application.",
    "example_ch": "只需輕點螢幕即可打開應用程式。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "horrible",
    "pos": "adj.",
    "ch": "可怕的；糟糕的",
    "example_en": "The weather was horrible during our entire vacation.",
    "example_ch": "我們整個假期期間的天氣都很糟糕。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "monster",
    "pos": "n.",
    "ch": "怪物",
    "example_en": "Children often believe there is a monster under their bed.",
    "example_ch": "孩子們常相信床底下有怪物。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "flight",
    "pos": "n.",
    "ch": "飛行；航班",
    "example_en": "Our flight to New York was delayed by two hours.",
    "example_ch": "我們飛往紐約的航班延誤了兩個小時。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "fighter",
    "pos": "n.",
    "ch": "戰士",
    "example_en": "The young athlete is a true fighter who never gives up.",
    "example_ch": "這位年輕運動員是一位永不言敗的真正戰士。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "beast",
    "pos": "n.",
    "ch": "野獸",
    "example_en": "The lion is known as the king of beasts.",
    "example_ch": "獅子被稱為百獸之王。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "ch": "呼吸",
    "example_en": "It’s important to take a moment and breathe deeply when stressed.",
    "example_ch": "壓力大時，花點時間深呼吸很重要。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "general",
    "pos": "adj.",
    "ch": "一般的；普遍的",
    "example_en": "The general opinion is that the government should do more.",
    "example_ch": "普遍的觀點是政府應該做得更多。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "unmatched",
    "pos": "adj.",
    "ch": "無與倫比的",
    "example_en": "The quality of their service remains unmatched in the industry.",
    "example_ch": "他們的服務品質在業界依然是無與倫比的。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "honesty",
    "pos": "n.",
    "ch": "誠實",
    "example_en": "I appreciate your honesty regarding the mistake you made.",
    "example_ch": "我很欣賞你對自己所犯錯誤表現出的誠實。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "admire",
    "pos": "v.",
    "ch": "欽佩；欣賞",
    "example_en": "I really admire her dedication to her work.",
    "example_ch": "我很欽佩她對工作的投入。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "starve",
    "pos": "v.",
    "ch": "飢餓",
    "example_en": "If we don't bring enough food, we might starve on the hike.",
    "example_ch": "如果我們不帶足夠的食物，我們可能會在徒步旅行中挨餓。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "honor",
    "pos": "n./v.",
    "ch": "榮耀；致敬",
    "example_en": "It is a great honor to receive this prestigious award.",
    "example_ch": "獲得這個享有盛譽的獎項是莫大的榮幸。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "chief",
    "pos": "n./adj.",
    "ch": "首領；主要的",
    "example_en": "The chief reason for the failure was lack of communication.",
    "example_ch": "失敗的主要原因是缺乏溝通。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "birth",
    "pos": "n.",
    "ch": "出生",
    "example_en": "The couple celebrated the birth of their first daughter.",
    "example_ch": "這對夫婦慶祝了他們第一個女兒的出生。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "magical",
    "pos": "adj.",
    "ch": "神奇的；魔幻的",
    "example_en": "Disney World is often described as a magical place for kids.",
    "example_ch": "迪士尼世界常被形容為孩子們的神奇之地。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "creature",
    "pos": "n.",
    "ch": "生物",
    "example_en": "The ocean is home to many strange and beautiful creatures.",
    "example_ch": "海洋是許多奇特而美麗生物的家園。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "tale",
    "pos": "n.",
    "ch": "故事",
    "example_en": "The grandfather told us a fascinating tale about his youth.",
    "example_ch": "祖父給我們講了一個關於他年輕時引人入勝的故事。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "bravery",
    "pos": "n.",
    "ch": "勇敢",
    "example_en": "The firefighter was awarded a medal for his bravery.",
    "example_ch": "這名消防員因其英勇表現獲頒獎章。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "ch": "勇敢的",
    "example_en": "It was brave of her to speak up against the injustice.",
    "example_ch": "她能勇敢地站出來反對不公，真的很了不起。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "ch": "靈感；啟發",
    "example_en": "Nature is a constant source of inspiration for many artists.",
    "example_ch": "大自然是許多藝術家源源不斷的靈感泉源。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "appeal",
    "pos": "n./v.",
    "ch": "吸引力；呼籲",
    "example_en": "The bright colors of the toy appeal to small children.",
    "example_ch": "這款玩具鮮豔的顏色對幼兒很有吸引力。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "bullet",
    "pos": "n.",
    "ch": "子彈",
    "example_en": "The detective found a stray bullet at the crime scene.",
    "example_ch": "偵探在犯罪現場發現了一顆流彈。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "imitate",
    "pos": "v.",
    "ch": "模仿",
    "example_en": "Parrots are famous for their ability to imitate human speech.",
    "example_ch": "鸚鵡以模仿人類說話的能力而聞名。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "experiment",
    "pos": "n./v.",
    "ch": "實驗",
    "example_en": "The scientists are conducting an experiment to test the new drug.",
    "example_ch": "科學家們正在進行一項實驗來測試這種新藥。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "ch": "工業的",
    "example_en": "The city has a large industrial zone on its outskirts.",
    "example_ch": "這座城市的郊區有一個大型工業區。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "industry",
    "pos": "n.",
    "ch": "產業；工業",
    "example_en": "The tourism industry has been growing steadily this year.",
    "example_ch": "旅遊業今年一直在穩定增長。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "scale",
    "pos": "n.",
    "ch": "規模",
    "example_en": "It is difficult to understand the full scale of the disaster.",
    "example_ch": "很難理解這場災難的全部規模。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "ch": "預防；防止",
    "example_en": "Regular exercise can help prevent many health problems.",
    "example_ch": "規律運動有助於預防許多健康問題。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "bacteria",
    "pos": "n.",
    "ch": "細菌",
    "example_en": "Washing your hands is the best way to kill bacteria.",
    "example_ch": "洗手是殺死細菌的最佳方法。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "plastic",
    "pos": "n./adj.",
    "ch": "塑料",
    "example_en": "We should reduce our use of single-use plastic bottles.",
    "example_ch": "我們應該減少一次性塑料瓶的使用。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "transportation",
    "pos": "n.",
    "ch": "交通運輸",
    "example_en": "Public transportation in this city is very efficient.",
    "example_ch": "這個城市的公共交通非常高效。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "ch": "車輛",
    "example_en": "Electric vehicles are becoming more popular every year.",
    "example_ch": "電動車每年都變得越來越流行。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "ch": "有價值的",
    "example_en": "Time is one of the most valuable resources we have.",
    "example_ch": "時間是我們擁有的最寶貴的資源之一。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "continent",
    "pos": "n.",
    "ch": "大陸；洲",
    "example_en": "Asia is the largest continent in the world.",
    "example_ch": "亞洲是世界上最大的洲。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "ivory",
    "pos": "n.",
    "ch": "象牙",
    "example_en": "The trade of ivory is banned in many countries to protect elephants.",
    "example_ch": "為了保護大象，許多國家禁止象牙貿易。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "luck",
    "pos": "n.",
    "ch": "運氣",
    "example_en": "I wish you the best of luck with your job interview.",
    "example_ch": "祝你工作面試好運。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "treasure",
    "pos": "n./v.",
    "ch": "珍寶；珍視",
    "example_en": "The pirates spent years searching for the buried treasure.",
    "example_ch": "海盜們花了多年時間尋找埋藏的寶藏。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "taste bud",
    "pos": "n.",
    "ch": "味蕾",
    "example_en": "Spicy food can sometimes overwhelm your taste buds.",
    "example_ch": "辛辣的食物有時會刺激你的味蕾。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "gambling",
    "pos": "n.",
    "ch": "賭博 (行為)",
    "example_en": "He lost a lot of money due to his gambling addiction.",
    "example_ch": "他因為沉迷賭博而損失了很多錢。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "gamble",
    "pos": "v./n.",
    "ch": "賭博；冒險",
    "example_en": "Starting a new business is always a bit of a gamble.",
    "example_ch": "創業總歸是一場冒險。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "gambler",
    "pos": "n.",
    "ch": "賭徒",
    "example_en": "The professional gambler knew when to stop playing.",
    "example_ch": "這位職業賭徒知道什麼時候該停止玩下去。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "bet",
    "pos": "v./n.",
    "ch": "打賭；下注",
    "example_en": "I bet that it will rain later this afternoon.",
    "example_ch": "我敢打賭今天下午晚些時候會下雨。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "betting",
    "pos": "n.",
    "ch": "投注",
    "example_en": "Online betting has become very common in sports.",
    "example_ch": "在體育運動中，線上投注已變得非常普遍。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "fuel",
    "pos": "n./v.",
    "ch": "燃料",
    "example_en": "Wood was once the primary fuel used for heating homes.",
    "example_ch": "木材曾經是家庭取暖的主要燃料。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "drain",
    "pos": "v./n.",
    "ch": "排乾；耗盡",
    "example_en": "The long workday really started to drain my energy.",
    "example_ch": "漫長的工作日真的開始消耗我的精力和體力。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "flash",
    "pos": "v./n.",
    "ch": "閃爍",
    "example_en": "There was a bright flash of lightning across the sky.",
    "example_ch": "天空閃過一道亮光。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "attractive",
    "pos": "adj.",
    "ch": "有吸引力的",
    "example_en": "The company offers a very attractive salary package.",
    "example_ch": "這家公司提供非常有吸引力的薪酬待遇。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "attract",
    "pos": "v.",
    "ch": "吸引",
    "example_en": "The flower's bright colors attract bees and butterflies.",
    "example_ch": "花朵鮮豔的顏色吸引了蜜蜂和蝴蝶。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "dull",
    "pos": "adj.",
    "ch": "乏味的；遲鈍的",
    "example_en": "The movie was so dull that I fell asleep halfway through.",
    "example_ch": "這部電影太乏味了，我看到一半就睡著了。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "escape",
    "pos": "v./n.",
    "ch": "逃跑；逃脫",
    "example_en": "The prisoner managed to escape through a small window.",
    "example_ch": "囚犯設法穿過一扇小窗戶逃脫了。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "ch": "暫時的",
    "example_en": "This is only a temporary solution to a long-term problem.",
    "example_ch": "這只是長期問題的暫時解決方案。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "risk",
    "pos": "n./v.",
    "ch": "風險；冒險",
    "example_en": "Investing in the stock market always involves some risk.",
    "example_ch": "投資股市總是涉及一定的風險。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "platform",
    "pos": "n.",
    "ch": "平台；月台",
    "example_en": "The train for London will depart from platform 4.",
    "example_ch": "開往倫敦的火車將從 4 號月台出發。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "resist",
    "pos": "v.",
    "ch": "抵抗；抵制",
    "example_en": "It's hard to resist eating chocolate when it's right in front of you.",
    "example_ch": "當巧克力就在你面前時，很難抵擋住不吃它。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "keyboard",
    "pos": "n.",
    "ch": "鍵盤",
    "example_en": "I need to clean my keyboard because the keys are getting sticky.",
    "example_ch": "我需要清理鍵盤，因為按鍵變得很黏。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "observe",
    "pos": "v.",
    "ch": "觀察；遵守",
    "example_en": "The students were asked to observe the behavior of birds.",
    "example_ch": "學生們被要求觀察鳥類的行為。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "issue",
    "pos": "n./v.",
    "ch": "議題；問題",
    "example_en": "Environmental protection is a global issue that affects us all.",
    "example_ch": "環境保護是一個影響我們所有人的全球性議題。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "ch": "頻繁地",
    "example_en": "This bus route is frequently used by commuters.",
    "example_ch": "這條巴士路線常被通勤者使用。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "harmful",
    "pos": "adj.",
    "ch": "有害的",
    "example_en": "Too much sun exposure can be harmful to your skin.",
    "example_ch": "過度曬太陽可能對你的皮膚有害。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "superior",
    "pos": "adj.",
    "ch": "優越的；較好的",
    "example_en": "This new model is superior in quality to the previous one.",
    "example_ch": "這款新機型的品質比之前的要好。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "grasp",
    "pos": "v./n.",
    "ch": "抓緊；理解",
    "example_en": "It took me a while to grasp the meaning of the poem.",
    "example_ch": "我花了一段時間才領會這首詩的意思。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "origin",
    "pos": "n.",
    "ch": "起源",
    "example_en": "The custom has its origins in ancient religious ceremonies.",
    "example_ch": "這個習俗起源於古代的宗教儀式。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "inventor",
    "pos": "n.",
    "ch": "發明家",
    "example_en": "Thomas Edison was a famous inventor who created the light bulb.",
    "example_ch": "湯瑪斯·愛迪生是一位發明了電燈泡的著名發明家。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "opposite",
    "pos": "adj./n.",
    "ch": "相反的",
    "example_en": "My house is on the opposite side of the street.",
    "example_ch": "我家在街道的另一側（對面）。",
    "level": "4U雜誌1-2月W4~12"
  },
  {
    "word": "bead",
    "pos": "n.",
    "ch": "珠子；水珠",
    "example_en": "She wore a necklace made of colorful glass beads.",
    "example_ch": "她戴著一條由彩色玻璃珠製成的項鍊。",
    "level": "必備單U19"
  },
  {
    "word": "bride",
    "pos": "n.",
    "ch": "新娘",
    "example_en": "The bride looked stunning in her white lace dress.",
    "example_ch": "新娘穿著白色蕾絲禮服看起來美極了。",
    "level": "必備單U19"
  },
  {
    "word": "bridegroom",
    "pos": "n.",
    "ch": "新郎",
    "example_en": "The bridegroom was nervous as he waited at the altar.",
    "example_ch": "新郎在祭壇前等候時感到很緊張。",
    "level": "必備單U19"
  },
  {
    "word": "groom",
    "pos": "n./v.",
    "ch": "新郎；梳理(動物毛髮)",
    "example_en": "The groom thanked all the guests for coming to the wedding.",
    "example_ch": "新郎感謝所有賓客前來參加婚禮。",
    "level": "必備單U19"
  },
  {
    "word": "bridesmaid",
    "pos": "n.",
    "ch": "伴娘",
    "example_en": "Her sister served as the head bridesmaid.",
    "example_ch": "她的姐姐擔任首席伴娘。",
    "level": "必備單U19"
  },
  {
    "word": "best man",
    "pos": "n.",
    "ch": "伴郎",
    "example_en": "The best man gave a funny speech during the reception.",
    "example_ch": "伴郎在婚宴上發表了一段有趣的演說。",
    "level": "必備單U19"
  },
  {
    "word": "casual",
    "pos": "adj.",
    "ch": "非正式的；隨便的",
    "example_en": "The dress code for the office party is smart casual.",
    "example_ch": "辦公室派對的服裝規定是休閒正式風。",
    "level": "必備單U19"
  },
  {
    "word": "column",
    "pos": "n.",
    "ch": "專欄；圓柱",
    "example_en": "She writes a weekly advice column for a local newspaper.",
    "example_ch": "她為當地一家報紙寫每週建議專欄。",
    "level": "必備單U19"
  },
  {
    "word": "columnist",
    "pos": "n.",
    "ch": "專欄作家",
    "example_en": "The political columnist is known for her sharp wit.",
    "example_ch": "這位政治專欄作家以其敏銳的機智聞名。",
    "level": "必備單U19"
  },
  {
    "word": "beam",
    "pos": "n./v.",
    "ch": "光束；橫樑；開心地笑",
    "example_en": "A beam of sunlight shone through the window.",
    "example_ch": "一束陽光從窗戶射進來。",
    "level": "必備單U19"
  },
  {
    "word": "crop",
    "pos": "n.",
    "ch": "農作物",
    "example_en": "The farmers are hoping for a good corn crop this year.",
    "example_ch": "農民們希望今年玉米收成良好。",
    "level": "必備單U19"
  },
  {
    "word": "dime",
    "pos": "n.",
    "ch": "（美金）一角硬幣",
    "example_en": "He didn't have even a single dime in his pocket.",
    "example_ch": "他口袋裡連一毛錢都沒有。",
    "level": "必備單U19"
  },
  {
    "word": "be a dime a dozen",
    "pos": "phrase",
    "ch": "多得不稀罕；物多而不貴",
    "example_en": "Talented singers are a dime a dozen in this city.",
    "example_ch": "在這個城市，有才華的歌手多如牛毛。",
    "level": "必備單U19"
  },
  {
    "word": "dirt",
    "pos": "n.",
    "ch": "泥土；汙垢",
    "example_en": "His clothes were covered in dirt after working in the garden.",
    "example_ch": "在花園工作後，他的衣服沾滿了泥土。",
    "level": "必備單U19"
  },
  {
    "word": "dirty",
    "pos": "adj.",
    "ch": "髒的",
    "example_en": "Don't put your dirty shoes on the clean carpet.",
    "example_ch": "不要把你的髒鞋子放在乾淨的地毯上。",
    "level": "必備單U19"
  },
  {
    "word": "treat sb. like dirt",
    "pos": "phrase",
    "ch": "視某人如草芥；卑劣地對待某人",
    "example_en": "She quit her job because her boss treated her like dirt.",
    "example_ch": "她辭職了，因為她的老闆對待她像對待垃圾一樣。",
    "level": "必備單U19"
  },
  {
    "word": "drama",
    "pos": "n.",
    "ch": "戲劇；戲劇性事件",
    "example_en": "I enjoy watching historical dramas on television.",
    "example_ch": "我喜歡看電視上的歷史劇。",
    "level": "必備單U19"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "ch": "戲劇性的；顯著的",
    "example_en": "There has been a dramatic increase in sales this month.",
    "example_ch": "本月的銷售額有了顯著的增長。",
    "level": "必備單U19"
  },
  {
    "word": "familiar",
    "pos": "adj.",
    "ch": "熟悉的",
    "example_en": "Your face looks very familiar, but I can't remember your name.",
    "example_ch": "你的臉看起來很眼熟，但我記不起你的名字。",
    "level": "必備單U19"
  },
  {
    "word": "unfamiliar",
    "pos": "adj.",
    "ch": "不熟悉的；陌生的",
    "example_en": "I felt lost in the unfamiliar streets of the city.",
    "example_ch": "在城市陌生的街道上，我感到迷失了方向。",
    "level": "必備單U19"
  },
  {
    "word": "familiarity",
    "pos": "n.",
    "ch": "熟悉；親密",
    "example_en": "His familiarity with the area helped us find a shortcut.",
    "example_ch": "他對該地區的熟悉程度幫助我們找到了一條捷徑。",
    "level": "必備單U19"
  },
  {
    "word": "familiar with",
    "pos": "phrase",
    "ch": "對...熟悉",
    "example_en": "Are you familiar with the latest computer software?",
    "example_ch": "你熟悉最新的電腦軟體嗎？",
    "level": "必備單U19"
  },
  {
    "word": "familiar to sb.",
    "pos": "phrase",
    "ch": "對某人來說很熟悉",
    "example_en": "The melody of this song is familiar to most people.",
    "example_ch": "這首歌的旋律對大多數人來說都很熟悉。",
    "level": "必備單U19"
  },
  {
    "word": "frank",
    "pos": "adj.",
    "ch": "坦白的；直率的",
    "example_en": "I'll be frank with you; I don't think this is a good idea.",
    "example_ch": "我就跟你直說吧；我覺得這不是個好主意。",
    "level": "必備單U19"
  },
  {
    "word": "frankness",
    "pos": "n.",
    "ch": "坦白；真誠",
    "example_en": "I admire her frankness even when the truth is difficult.",
    "example_ch": "我欽佩她的直率，即使真相令人難以接受。",
    "level": "必備單U19"
  },
  {
    "word": "frankly",
    "pos": "adv.",
    "ch": "坦白地說",
    "example_en": "Frankly, I am surprised that he passed the exam.",
    "example_ch": "坦白說，我很驚訝他通過了考試。",
    "level": "必備單U19"
  },
  {
    "word": "to be frank",
    "pos": "phrase",
    "ch": "老實說",
    "example_en": "To be frank, the food was quite disappointing.",
    "example_ch": "老實說，這食物挺令人失望的。",
    "level": "必備單U19"
  },
  {
    "word": "fright",
    "pos": "n.",
    "ch": "驚嚇；恐懼",
    "example_en": "The sudden loud noise gave me a real fright.",
    "example_ch": "突然的巨響著實嚇了我一跳。",
    "level": "必備單U19"
  },
  {
    "word": "stage fright",
    "pos": "n.",
    "ch": "怯場",
    "example_en": "Even experienced actors can suffer from stage fright.",
    "example_ch": "即使是有經驗的演員也可能會有怯場的情況。",
    "level": "必備單U19"
  },
  {
    "word": "frighten",
    "pos": "v.",
    "ch": "使驚嚇",
    "example_en": "The horror movie really frightened the children.",
    "example_ch": "那部恐怖片真的嚇到了孩子們。",
    "level": "必備單U19"
  },
  {
    "word": "frightening",
    "pos": "adj.",
    "ch": "令人恐懼的",
    "example_en": "It was a frightening experience to be caught in the storm.",
    "example_ch": "受困於暴風雨中是一次可怕的經歷。",
    "level": "必備單U19"
  },
  {
    "word": "frightened",
    "pos": "adj.",
    "ch": "受驚嚇的",
    "example_en": "The frightened bird flew away when I approached.",
    "example_ch": "當我靠近時，那隻受驚的小鳥飛走了。",
    "level": "必備單U19"
  },
  {
    "word": "fuel",
    "pos": "n./v.",
    "ch": "燃料；激起",
    "example_en": "The car is running out of fuel.",
    "example_ch": "這輛汽車快沒油了。",
    "level": "必備單U19"
  },
  {
    "word": "fossil fuel",
    "pos": "n.",
    "ch": "化石燃料",
    "example_en": "Burning fossil fuels is a major cause of global warming.",
    "example_ch": "燃燒化石燃料是全球暖化的主要原因。",
    "level": "必備單U19"
  },
  {
    "word": "add fuel to the fire",
    "pos": "phrase",
    "ch": "火上加油",
    "example_en": "His angry words only added fuel to the fire.",
    "example_ch": "他憤怒的話語只會火上加油。",
    "level": "必備單U19"
  },
  {
    "word": "gamble",
    "pos": "v./n.",
    "ch": "賭博；投機",
    "example_en": "He decided to gamble all his savings on the stock market.",
    "example_ch": "他決定把所有的積蓄投在股市上賭一把。",
    "level": "必備單U19"
  },
  {
    "word": "greedy",
    "pos": "adj.",
    "ch": "貪婪的",
    "example_en": "Don't be greedy; share your candy with your friends.",
    "example_ch": "不要太貪心；把你的糖果分給你的朋友。",
    "level": "必備單U19"
  },
  {
    "word": "grocery",
    "pos": "n.",
    "ch": "食品雜貨(店)",
    "example_en": "I need to go to the grocery store to buy some milk.",
    "example_ch": "我需要去雜貨店買些牛奶。",
    "level": "必備單U19"
  },
  {
    "word": "gum",
    "pos": "n.",
    "ch": "口香糖；牙齦",
    "example_en": "It's rude to chew gum loudly in class.",
    "example_ch": "在課堂上大聲嚼口香糖是不禮貌的。",
    "level": "必備單U19"
  },
  {
    "word": "bubble gum",
    "pos": "n.",
    "ch": "泡泡糖",
    "example_en": "The little boy blew a huge bubble with his bubble gum.",
    "example_ch": "那個小男孩用他的泡泡糖吹了一個巨大的泡泡。",
    "level": "必備單U19"
  },
  {
    "word": "chewing gum",
    "pos": "n.",
    "ch": "口香糖",
    "example_en": "She stuck her chewing gum under the table.",
    "example_ch": "她把她的口香糖黏在桌子底下。",
    "level": "必備單U19"
  },
  {
    "word": "hairdresser",
    "pos": "n.",
    "ch": "美髮師",
    "example_en": "I need to find a new hairdresser who can style short hair.",
    "example_ch": "我需要找一個會設計短髮造型的新理髮師。",
    "level": "必備單U19"
  },
  {
    "word": "haircut",
    "pos": "n.",
    "ch": "理髮",
    "example_en": "Your new haircut looks great on you!",
    "example_ch": "你的新髮型非常適合你！",
    "level": "必備單U19"
  },
  {
    "word": "hallway",
    "pos": "n.",
    "ch": "走廊",
    "example_en": "The children ran down the hallway to the classroom.",
    "example_ch": "孩子們沿著走廊跑向教室。",
    "level": "必備單U19"
  },
  {
    "word": "hammer",
    "pos": "n./v.",
    "ch": "鐵鎚；敲打",
    "example_en": "Use a hammer to drive the nail into the wood.",
    "example_ch": "用鐵鎚把釘子釘進木頭裡。",
    "level": "必備單U19"
  },
  {
    "word": "hammer out",
    "pos": "phrase",
    "ch": "（努力地）商定；敲定",
    "example_en": "They spent hours trying to hammer out a deal.",
    "example_ch": "他們花了幾個小時試圖敲定一項協議。",
    "level": "必備單U19"
  },
  {
    "word": "heal",
    "pos": "v.",
    "ch": "癒合；治癒",
    "example_en": "It will take some time for your broken arm to heal.",
    "example_ch": "你受傷的手臂需要一段時間才能癒合。",
    "level": "必備單U19"
  },
  {
    "word": "cure",
    "pos": "v./n.",
    "ch": "治療；藥方",
    "example_en": "Scientists are working hard to find a cure for cancer.",
    "example_ch": "科學家們正努力尋找癌症的治療方法。",
    "level": "必備單U19"
  },
  {
    "word": "lord",
    "pos": "n.",
    "ch": "領主；上帝",
    "example_en": "The castle was the home of a powerful lord.",
    "example_ch": "這座城堡是一位強大領主的家。",
    "level": "必備單U19"
  },
  {
    "word": "loser",
    "pos": "n.",
    "ch": "輸家；失敗者",
    "example_en": "In every game, there is a winner and a loser.",
    "example_ch": "每場比賽中，都會有贏家和輸家。",
    "level": "必備單U19"
  },
  {
    "word": "winner",
    "pos": "n.",
    "ch": "贏家；勝利者",
    "example_en": "The winner of the race received a gold medal.",
    "example_ch": "比賽的冠軍獲得了一枚金牌。",
    "level": "必備單U19"
  },
  {
    "word": "lose",
    "pos": "v.",
    "ch": "失去；輸掉",
    "example_en": "I don't want to lose my keys again.",
    "example_ch": "我不想再弄丟我的鑰匙了。",
    "level": "必備單U19"
  },
  {
    "word": "lung",
    "pos": "n.",
    "ch": "肺",
    "example_en": "Smoking causes severe damage to your lungs.",
    "example_ch": "吸菸會對你的肺部造成嚴重損害。",
    "level": "必備單U19"
  },
  {
    "word": "lung cancer",
    "pos": "n.",
    "ch": "肺癌",
    "example_en": "He was diagnosed with lung cancer last year.",
    "example_ch": "他去年被診斷出患有肺癌。",
    "level": "必備單U19"
  },
  {
    "word": "at the top of one’s lungs",
    "pos": "phrase",
    "ch": "大聲地；竭盡全力地(喊叫)",
    "example_en": "The fans were screaming at the top of their lungs.",
    "example_ch": "歌迷們正在竭盡全力地尖叫。",
    "level": "必備單U19"
  },
  {
    "word": "maid",
    "pos": "n.",
    "ch": "女僕；女傭",
    "example_en": "The hotel maid cleaned the room and changed the sheets.",
    "example_ch": "飯店女僕打掃了房間並更換了床單。",
    "level": "必備單U19"
  },
  {
    "word": "marker",
    "pos": "n.",
    "ch": "彩色筆；標記物",
    "example_en": "I used a red marker to highlight the important words.",
    "example_ch": "我用紅色的彩色筆標出了重要的單字。",
    "level": "必備單U19"
  },
  {
    "word": "mark",
    "pos": "n./v.",
    "ch": "分數；標記",
    "example_en": "He got a high mark on his math exam.",
    "example_ch": "他在數學考試中獲得了高分。",
    "level": "必備單U19"
  },
  {
    "word": "meadow",
    "pos": "n.",
    "ch": "草地；牧場",
    "example_en": "The cows were grazing in the green meadow.",
    "example_ch": "牛群正在綠色的草地上吃草。",
    "level": "必備單U19"
  },
  {
    "word": "lawn",
    "pos": "n.",
    "ch": "草坪",
    "example_en": "He spends his Sunday mornings mowing the lawn.",
    "example_ch": "他在週日早晨修剪草坪。",
    "level": "必備單U19"
  },
  {
    "word": "microphone",
    "pos": "n.",
    "ch": "麥克風",
    "example_en": "Please speak into the microphone so everyone can hear you.",
    "example_ch": "請對著麥克風說話，以便大家都能聽到。",
    "level": "必備單U19"
  },
  {
    "word": "loudspeaker",
    "pos": "n.",
    "ch": "揚聲器；擴音器",
    "example_en": "The announcement was made over the public loudspeaker.",
    "example_ch": "公告是透過公共擴音器發布的。",
    "level": "必備單U19"
  },
  {
    "word": "mike",
    "pos": "n.",
    "ch": "麥克風(簡稱)",
    "example_en": "Is the mike turned on?",
    "example_ch": "麥克風打開了嗎？",
    "level": "必備單U19"
  },
  {
    "word": "microwave",
    "pos": "n./v.",
    "ch": "微波爐；微波(食物)",
    "example_en": "You can heat up the leftovers in the microwave.",
    "example_ch": "你可以用微波爐加熱剩菜。",
    "level": "必備單U19"
  },
  {
    "word": "passport",
    "pos": "n.",
    "ch": "護照",
    "example_en": "Don't forget to bring your passport when you travel abroad.",
    "example_ch": "出國旅遊時別忘了帶護照。",
    "level": "必備單U19"
  },
  {
    "word": "visa",
    "pos": "n.",
    "ch": "簽證",
    "example_en": "I need to apply for a student visa to study in the UK.",
    "example_ch": "我需要申請學生簽證才能去英國留學。",
    "level": "必備單U19"
  },
  {
    "word": "poverty",
    "pos": "n.",
    "ch": "貧窮",
    "example_en": "Many people in the world are still living in extreme poverty.",
    "example_ch": "世界上仍有許多人生活在極端貧困中。",
    "level": "必備單U19"
  },
  {
    "word": "live in poverty",
    "pos": "phrase",
    "ch": "生活在貧困中",
    "example_en": "No child should have to live in poverty.",
    "example_ch": "不應該有孩子必須生活在貧困中。",
    "level": "必備單U19"
  },
  {
    "word": "profit",
    "pos": "n./v.",
    "ch": "利潤；獲利",
    "example_en": "The company made a huge profit this year.",
    "example_ch": "這家公司今年賺取了巨額利潤。",
    "level": "必備單U19"
  },
  {
    "word": "profitable",
    "pos": "adj.",
    "ch": "有利潤的；賺錢的",
    "example_en": "The new business venture proved to be very profitable.",
    "example_ch": "這項新的創業投資證明是非常賺錢的。",
    "level": "必備單U19"
  },
  {
    "word": "nonprofit",
    "pos": "adj.",
    "ch": "非營利的",
    "example_en": "She works for a nonprofit organization that helps the homeless.",
    "example_ch": "她在一家幫助無家可歸者的非營利組織工作。",
    "level": "必備單U19"
  },
  {
    "word": "scatter",
    "pos": "v.",
    "ch": "撒；散開",
    "example_en": "The wind scattered the leaves across the yard.",
    "example_ch": "風把葉子吹散在院子裡。",
    "level": "必備單U19"
  },
  {
    "word": "spice",
    "pos": "n.",
    "ch": "香料",
    "example_en": "Add some spice to the soup to give it more flavor.",
    "example_ch": "在湯裡加點香料，讓它更有味道。",
    "level": "必備單U19"
  },
  {
    "word": "spicy",
    "pos": "adj.",
    "ch": "辛辣的",
    "example_en": "I love spicy food, but this curry is too hot for me.",
    "example_ch": "我喜歡吃辣的食物，但這咖哩對我來說太辣了。",
    "level": "必備單U19"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "ch": "策略",
    "example_en": "The team is developing a new strategy to win the game.",
    "example_ch": "球隊正在制定一套贏得比賽的新策略。",
    "level": "必備單U19"
  },
  {
    "word": "strategic",
    "pos": "adj.",
    "ch": "戰略性的",
    "example_en": "The city holds a strategic position near the border.",
    "example_ch": "這座城市在邊界附近佔據著戰略位置。",
    "level": "必備單U19"
  },
  {
    "word": "sum",
    "pos": "n./v.",
    "ch": "總金額；總和",
    "example_en": "The total sum of the bill was fifty dollars.",
    "example_ch": "帳單的總金額是五十美元。",
    "level": "必備單U19"
  },
  {
    "word": "in sum",
    "pos": "phrase",
    "ch": "總之",
    "example_en": "In sum, we need to work harder to achieve our goals.",
    "example_ch": "總之，我們需要更加努力才能達成目標。",
    "level": "必備單U19"
  },
  {
    "word": "survivor",
    "pos": "n.",
    "ch": "生還者",
    "example_en": "The search party is looking for survivors of the plane crash.",
    "example_ch": "搜救小組正在尋找空難的生還者。",
    "level": "必備單U19"
  },
  {
    "word": "survive",
    "pos": "v.",
    "ch": "存活；倖存",
    "example_en": "Some plants can survive even in very dry conditions.",
    "example_ch": "有些植物即使在非常乾燥的條件下也能存活。",
    "level": "必備單U19"
  },
  {
    "word": "survival",
    "pos": "n.",
    "ch": "生存",
    "example_en": "The survival of the tigers depends on protecting their habitat.",
    "example_ch": "老虎的生存取決於保護牠們的棲息地。",
    "level": "必備單U19"
  },
  {
    "word": "swell",
    "pos": "v.",
    "ch": "腫脹；膨脹",
    "example_en": "His ankle started to swell after he tripped.",
    "example_ch": "他絆倒後腳踝開始腫了起來。",
    "level": "必備單U19"
  },
  {
    "word": "swollen",
    "pos": "adj.",
    "ch": "腫脹的",
    "example_en": "She has a swollen eye because of an insect bite.",
    "example_ch": "因為被昆蟲咬傷，她的眼睛腫了。",
    "level": "必備單U19"
  },
  {
    "word": "swelling",
    "pos": "n.",
    "ch": "腫塊；腫脹處",
    "example_en": "Put some ice on the swelling to reduce the pain.",
    "example_ch": "在腫脹處敷點冰以減輕疼痛。",
    "level": "必備單U19"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "ch": "暫時的",
    "example_en": "They are living in a temporary shelter after the flood.",
    "example_ch": "洪水過後，他們住在臨時避難所。",
    "level": "必備單U19"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "ch": "永久的",
    "example_en": "She is looking for a permanent job instead of part-time work.",
    "example_ch": "她正在尋找一份正職（永久性）工作，而不是兼職。",
    "level": "必備單U19"
  },
  {
    "word": "visible",
    "pos": "adj.",
    "ch": "可見的",
    "example_en": "The mountain peak was visible through the clouds.",
    "example_ch": "山頂在雲層中隱約可見。",
    "level": "必備單U19"
  },
  {
    "word": "invisible",
    "pos": "adj.",
    "ch": "隱形的；看不見的",
    "example_en": "Bacteria are invisible to the naked eye.",
    "example_ch": "細菌是肉眼看不見的。",
    "level": "必備單U19"
  },
  {
    "word": "vision",
    "pos": "n.",
    "ch": "視力；遠見",
    "example_en": "He has poor vision and needs to wear glasses.",
    "example_ch": "他的視力不好，需要戴眼鏡。",
    "level": "必備單U19"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "ch": "視覺的",
    "example_en": "The teacher used visual aids to help the students learn.",
    "example_ch": "老師使用視覺教具來幫助學生學習。",
    "level": "必備單U19"
  },
  {
    "word": "youngster",
    "pos": "n.",
    "ch": "年輕人；少年",
    "example_en": "Many youngsters today are very skilled with technology.",
    "example_ch": "現在的許多年輕人都很精通科技。",
    "level": "必備單U19"
  },
  {
    "word": "young",
    "pos": "adj.",
    "ch": "年輕的",
    "example_en": "He is a talented young artist with a bright future.",
    "example_ch": "他是一位前途光明、有才華的年輕藝術家。",
    "level": "必備單U19"
  },
  {
    "word": "almond",
    "pos": "n.",
    "ch": "杏仁",
    "example_en": "I like to add sliced almonds to my morning cereal.",
    "example_ch": "我喜歡在早晨的麥片裡加入杏仁片。",
    "level": "必備單U18"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "ch": "字母表",
    "example_en": "Children learn the alphabet at a very young age.",
    "example_ch": "孩子們在很小的時候就學習字母表。",
    "level": "必備單U18"
  },
  {
    "word": "alphabetical",
    "pos": "adj.",
    "ch": "按字母順序的",
    "example_en": "The books on the shelf are arranged in alphabetical order.",
    "example_ch": "書架上的書是按字母順序排列的。",
    "level": "必備單U18"
  },
  {
    "word": "apart",
    "pos": "adv./adj.",
    "ch": "分開地；相距地",
    "example_en": "The two houses are built about 50 meters apart.",
    "example_ch": "這兩棟房子相距大約 50 公尺。",
    "level": "必備單U18"
  },
  {
    "word": "fall apart",
    "pos": "phrase",
    "ch": "散架；崩潰；瓦解",
    "example_en": "This old book is starting to fall apart.",
    "example_ch": "這本舊書開始散架了。",
    "level": "必備單U18"
  },
  {
    "word": "tell sth. apart",
    "pos": "phrase",
    "ch": "分辨；區分",
    "example_en": "The twins look so much alike that I can't tell them apart.",
    "example_ch": "這對雙胞胎長得太像了，我分不出誰是誰。",
    "level": "必備單U18"
  },
  {
    "word": "set sth. apart from sth.",
    "pos": "phrase",
    "ch": "使...與眾不同",
    "example_en": "Her unique voice sets her apart from other singers.",
    "example_ch": "她獨特的嗓音使她與其他歌手截然不同。",
    "level": "必備單U18"
  },
  {
    "word": "bait",
    "pos": "n./v.",
    "ch": "餌；引誘",
    "example_en": "He used a small worm as bait to catch the fish.",
    "example_ch": "他用一條小蟲作為誘餌來釣魚。",
    "level": "必備單U18"
  },
  {
    "word": "bare",
    "pos": "adj.",
    "ch": "赤裸的；僅有的",
    "example_en": "The trees are bare in the middle of winter.",
    "example_ch": "冬至時分，樹木都變得光禿禿的。",
    "level": "必備單U18"
  },
  {
    "word": "naked",
    "pos": "adj.",
    "ch": "裸體的；無遮蓋的",
    "example_en": "The child ran across the beach completely naked.",
    "example_ch": "那個小孩全身赤裸地跑過沙灘。",
    "level": "必備單U18"
  },
  {
    "word": "naked eye",
    "pos": "n.",
    "ch": "肉眼",
    "example_en": "Many stars are too small to be seen with the naked eye.",
    "example_ch": "許多星星太小了，肉眼看不見。",
    "level": "必備單U18"
  },
  {
    "word": "barely",
    "pos": "adv.",
    "ch": "幾乎不；僅僅",
    "example_en": "I could barely hear what she was saying over the noise.",
    "example_ch": "在噪音中，我幾乎聽不見她在說什麼。",
    "level": "必備單U18"
  },
  {
    "word": "barn",
    "pos": "n.",
    "ch": "穀倉；牲口棚",
    "example_en": "The farmer keeps the hay and the tractor in the barn.",
    "example_ch": "農夫把乾草和牽引機放在穀倉裡。",
    "level": "必備單U18"
  },
  {
    "word": "barrel",
    "pos": "n.",
    "ch": "桶",
    "example_en": "They stored the wine in large wooden barrels.",
    "example_ch": "他們將酒儲存在大型木桶中。",
    "level": "必備單U18"
  },
  {
    "word": "bold",
    "pos": "adj.",
    "ch": "大膽的；粗體的",
    "example_en": "It was a bold move to quit his job and start a business.",
    "example_ch": "辭職創業是一個大膽的舉動。",
    "level": "必備單U18"
  },
  {
    "word": "boldness",
    "pos": "n.",
    "ch": "大膽；厚顏無恥",
    "example_en": "Everyone was surprised by the boldness of her plan.",
    "example_ch": "每個人都對她計畫的大膽感到驚訝。",
    "level": "必備單U18"
  },
  {
    "word": "bomb",
    "pos": "n./v.",
    "ch": "炸彈；轟炸",
    "example_en": "The city was heavily bombed during the war.",
    "example_ch": "戰爭期間這座城市遭到了猛烈轟炸。",
    "level": "必備單U18"
  },
  {
    "word": "photobomb",
    "pos": "v.",
    "ch": "（在他人拍照時）突然入鏡",
    "example_en": "A curious cat tried to photobomb our family portrait.",
    "example_ch": "一隻好奇的貓試圖在我們拍全家福時湊熱鬧入鏡。",
    "level": "必備單U18"
  },
  {
    "word": "cabin",
    "pos": "n.",
    "ch": "小木屋；機艙；船艙",
    "example_en": "We stayed in a cozy log cabin in the mountains.",
    "example_ch": "我們住在山上一間溫馨的圓木小木屋裡。",
    "level": "必備單U18"
  },
  {
    "word": "cable",
    "pos": "n.",
    "ch": "電纜；鋼索",
    "example_en": "The bridge is held up by thick steel cables.",
    "example_ch": "這座橋是由粗鋼索支撐的。",
    "level": "必備單U18"
  },
  {
    "word": "cable car",
    "pos": "n.",
    "ch": "纜車",
    "example_en": "Taking the cable car is the easiest way to reach the peak.",
    "example_ch": "搭乘纜車是到達山頂最簡單的方式。",
    "level": "必備單U18"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "ch": "自助餐廳",
    "example_en": "I usually have lunch with my coworkers in the cafeteria.",
    "example_ch": "我通常和同事在自助餐廳吃午餐。",
    "level": "必備單U18"
  },
  {
    "word": "cave",
    "pos": "n.",
    "ch": "洞穴",
    "example_en": "The explorers discovered ancient paintings on the cave walls.",
    "example_ch": "探險家們在洞穴牆壁上發現了古代繪畫。",
    "level": "必備單U18"
  },
  {
    "word": "cave in to",
    "pos": "phrase",
    "ch": "屈服於；讓步",
    "example_en": "The government refused to cave in to the protesters' demands.",
    "example_ch": "政府拒絕向抗議者的訴求屈服。",
    "level": "必備單U18"
  },
  {
    "word": "coach",
    "pos": "n./v.",
    "ch": "教練；長途客運；指導",
    "example_en": "The team's coach was very proud of their performance.",
    "example_ch": "球隊教練對他們的表現感到非常自豪。",
    "level": "必備單U18"
  },
  {
    "word": "committee",
    "pos": "n.",
    "ch": "委員會",
    "example_en": "The committee is meeting today to discuss the new budget.",
    "example_ch": "委員會今天開會討論新的預算。",
    "level": "必備單U18"
  },
  {
    "word": "confuse",
    "pos": "v.",
    "ch": "使困惑；混淆",
    "example_en": "The complicated instructions might confuse the users.",
    "example_ch": "複雜的說明可能會讓使用者感到困惑。",
    "level": "必備單U18"
  },
  {
    "word": "confusion",
    "pos": "n.",
    "ch": "混亂；困惑",
    "example_en": "There was a lot of confusion regarding the change in schedule.",
    "example_ch": "關於行程變動存在很多混亂。",
    "level": "必備單U18"
  },
  {
    "word": "confuse sth. with sth.",
    "pos": "phrase",
    "ch": "把...與...混淆",
    "example_en": "People often confuse me with my older brother.",
    "example_ch": "人們經常把我跟我哥哥搞混。",
    "level": "必備單U18"
  },
  {
    "word": "dust",
    "pos": "n./v.",
    "ch": "灰塵；拂去灰塵",
    "example_en": "The old furniture was covered in a thick layer of dust.",
    "example_ch": "舊家具上覆蓋著一層厚厚的灰塵。",
    "level": "必備單U18"
  },
  {
    "word": "dusty",
    "pos": "adj.",
    "ch": "佈滿灰塵的",
    "example_en": "The books in the attic were very dusty.",
    "example_ch": "閣樓裡的書佈滿了灰塵。",
    "level": "必備單U18"
  },
  {
    "word": "fence",
    "pos": "n.",
    "ch": "柵欄；籬笆",
    "example_en": "We built a wooden fence around the garden.",
    "example_ch": "我們在花園周圍築了一道木柵欄。",
    "level": "必備單U18"
  },
  {
    "word": "fighter",
    "pos": "n.",
    "ch": "戰士；戰鬥機",
    "example_en": "He is a fighter who overcame many challenges in his life.",
    "example_ch": "他是一位克服了生活中許多挑戰的戰士。",
    "level": "必備單U18"
  },
  {
    "word": "fight",
    "pos": "v./n.",
    "ch": "打架；奮鬥",
    "example_en": "They had a small fight over who should wash the dishes.",
    "example_ch": "他們為了誰該洗碗吵了一小架。",
    "level": "必備單U18"
  },
  {
    "word": "firefighter",
    "pos": "n.",
    "ch": "消防員",
    "example_en": "The firefighters worked through the night to put out the fire.",
    "example_ch": "消防員徹夜工作以撲滅大火。",
    "level": "必備單U18"
  },
  {
    "word": "firework",
    "pos": "n.",
    "ch": "煙火",
    "example_en": "We watched the fireworks display on New Year's Eve.",
    "example_ch": "我們在跨年夜觀看了煙火秀。",
    "level": "必備單U18"
  },
  {
    "word": "firecracker",
    "pos": "n.",
    "ch": "鞭炮",
    "example_en": "Setting off firecrackers is a traditional way to celebrate Chinese New Year.",
    "example_ch": "放鞭炮是慶祝農曆新年的傳統方式。",
    "level": "必備單U18"
  },
  {
    "word": "helmet",
    "pos": "n.",
    "ch": "頭盔；安全帽",
    "example_en": "You should always wear a helmet when riding a bicycle.",
    "example_ch": "騎單車時應始終戴安全帽。",
    "level": "必備單U18"
  },
  {
    "word": "kilometer",
    "pos": "n.",
    "ch": "公里",
    "example_en": "The nearest gas station is five kilometers away.",
    "example_ch": "最近的加油站在五公里外。",
    "level": "必備單U18"
  },
  {
    "word": "meter",
    "pos": "n.",
    "ch": "公尺；儀表",
    "example_en": "The pool is 25 meters long.",
    "example_ch": "這個泳池長 25 公尺。",
    "level": "必備單U18"
  },
  {
    "word": "centimeter",
    "pos": "n.",
    "ch": "公分",
    "example_en": "There are 100 centimeters in one meter.",
    "example_ch": "一公尺等於一百公分。",
    "level": "必備單U18"
  },
  {
    "word": "loose",
    "pos": "adj.",
    "ch": "鬆的",
    "example_en": "One of my shirt buttons is loose.",
    "example_ch": "我襯衫的一顆鈕扣鬆了。",
    "level": "必備單U18"
  },
  {
    "word": "tight",
    "pos": "adj.",
    "ch": "緊的",
    "example_en": "These shoes are a bit tight for me.",
    "example_ch": "這些鞋子對我來說有點緊。",
    "level": "必備單U18"
  },
  {
    "word": "loosen",
    "pos": "v.",
    "ch": "放鬆；弄鬆",
    "example_en": "He loosened his tie after the long meeting.",
    "example_ch": "長會結束後，他鬆開了領帶。",
    "level": "必備單U18"
  },
  {
    "word": "marvelous",
    "pos": "adj.",
    "ch": "極好的；不可思議的",
    "example_en": "We had a marvelous time at the party last night.",
    "example_ch": "昨晚我們在派對上玩得很開心。",
    "level": "必備單U18"
  },
  {
    "word": "marvel",
    "pos": "v./n.",
    "ch": "對...感到驚異；奇蹟",
    "example_en": "People still marvel at the beauty of the Grand Canyon.",
    "example_ch": "人們仍然對大峽谷的美麗感到驚嘆。",
    "level": "必備單U18"
  },
  {
    "word": "novelist",
    "pos": "n.",
    "ch": "小說家",
    "example_en": "She is a famous novelist who has written many bestsellers.",
    "example_ch": "她是一位寫過許多暢銷書的著名小說家。",
    "level": "必備單U18"
  },
  {
    "word": "novel",
    "pos": "n./adj.",
    "ch": "小說；新奇的",
    "example_en": "I'm currently reading a historical novel about the Ming Dynasty.",
    "example_ch": "我目前正在讀一本關於明朝的歷史小說。",
    "level": "必備單U18"
  },
  {
    "word": "onto",
    "pos": "prep.",
    "ch": "到...之上",
    "example_en": "The cat jumped onto the kitchen counter.",
    "example_ch": "貓跳到了廚房流理台上。",
    "level": "必備單U18"
  },
  {
    "word": "passion",
    "pos": "n.",
    "ch": "熱情",
    "example_en": "Cooking has always been a great passion of mine.",
    "example_ch": "烹飪一直是我極大的熱情所在。",
    "level": "必備單U18"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "ch": "熱情的",
    "example_en": "He is very passionate about animal rights.",
    "example_ch": "他對動物權利非常有熱忱。",
    "level": "必備單U18"
  },
  {
    "word": "a passion for sth.",
    "pos": "phrase",
    "ch": "對...的熱情",
    "example_en": "She has a passion for classical music.",
    "example_ch": "她對古典音樂充滿熱情。",
    "level": "必備單U18"
  },
  {
    "word": "react",
    "pos": "v.",
    "ch": "反應",
    "example_en": "How did he react when you told him the news?",
    "example_ch": "你告訴他這個消息時他有什麼反應？",
    "level": "必備單U18"
  },
  {
    "word": "reactive",
    "pos": "adj.",
    "ch": "反應性的；被動的",
    "example_en": "The company was reactive rather than proactive in solving the issue.",
    "example_ch": "該公司在解決問題時是被動的而非主動。",
    "level": "必備單U18"
  },
  {
    "word": "reaction",
    "pos": "n.",
    "ch": "反應",
    "example_en": "His first reaction was one of pure shock.",
    "example_ch": "他的第一反應是純粹的震驚。",
    "level": "必備單U18"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "ch": "合理的；講道理的",
    "example_en": "The price of the meal was quite reasonable.",
    "example_ch": "那餐飯的價格相當合理。",
    "level": "必備單U18"
  },
  {
    "word": "unreasonable",
    "pos": "adj.",
    "ch": "不合理的",
    "example_en": "It is unreasonable to expect perfection all the time.",
    "example_ch": "指望一直完美是不合理的。",
    "level": "必備單U18"
  },
  {
    "word": "reason",
    "pos": "n./v.",
    "ch": "原因；理性；推論",
    "example_en": "There is no reason to be afraid of the dark.",
    "example_ch": "沒有理由害怕黑暗。",
    "level": "必備單U18"
  },
  {
    "word": "salary",
    "pos": "n.",
    "ch": "薪水",
    "example_en": "She is happy with her current salary and benefits.",
    "example_ch": "她對目前的薪水和福利感到滿意。",
    "level": "必備單U18"
  },
  {
    "word": "salary man",
    "pos": "n.",
    "ch": "上班族",
    "example_en": "He lives the typical life of a salary man in Tokyo.",
    "example_ch": "他在東京過著典型上班族的生活。",
    "level": "必備單U18"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "ch": "顯著的；重要的",
    "example_en": "There has been a significant change in the weather lately.",
    "example_ch": "最近天氣發生了顯著變化。",
    "level": "必備單U18"
  },
  {
    "word": "insignificant",
    "pos": "adj.",
    "ch": "微不足道的",
    "example_en": "The difference in price was insignificant.",
    "example_ch": "價格上的差異微不足道。",
    "level": "必備單U18"
  },
  {
    "word": "significance",
    "pos": "n.",
    "ch": "重要性；意義",
    "example_en": "We must understand the historical significance of this event.",
    "example_ch": "我們必須理解這一事件的歷史意義。",
    "level": "必備單U18"
  },
  {
    "word": "stare",
    "pos": "v./n.",
    "ch": "凝視；瞪",
    "example_en": "It's rude to stare at people in public.",
    "example_ch": "在公共場合盯著人看是不禮貌的。",
    "level": "必備單U18"
  },
  {
    "word": "stare out",
    "pos": "phrase",
    "ch": "（向外）凝視",
    "example_en": "She sat by the window and stared out at the rain.",
    "example_ch": "她坐在窗邊，凝視著外面的雨。",
    "level": "必備單U18"
  },
  {
    "word": "stare sth. in the face",
    "pos": "phrase",
    "ch": "面臨（危險、失敗等）",
    "example_en": "The company was staring bankruptcy in the face.",
    "example_ch": "這家公司正面臨破產的危機。",
    "level": "必備單U18"
  },
  {
    "word": "starve",
    "pos": "v.",
    "ch": "挨餓；餓死",
    "example_en": "Millions of people are starving due to the famine.",
    "example_ch": "數百萬人因饑荒而挨餓。",
    "level": "必備單U18"
  },
  {
    "word": "starving",
    "pos": "adj.",
    "ch": "極餓的",
    "example_en": "When is dinner? I'm absolutely starving!",
    "example_ch": "晚餐什麼時候好？我快餓扁了！",
    "level": "必備單U18"
  },
  {
    "word": "sweat",
    "pos": "v./n.",
    "ch": "流汗；汗水",
    "example_en": "He was dripping with sweat after his workout.",
    "example_ch": "健身後他大汗淋漓。",
    "level": "必備單U18"
  },
  {
    "word": "sweaty",
    "pos": "adj.",
    "ch": "滿頭大汗的；有汗味的",
    "example_en": "His palms were sweaty before the interview.",
    "example_ch": "面試前他的手心在冒汗。",
    "level": "必備單U18"
  },
  {
    "word": "No sweat!",
    "pos": "phrase",
    "ch": "小意思！沒問題！",
    "example_en": "A: Thanks for helping me. B: No sweat!",
    "example_ch": "A：謝謝你幫我。B：小意思！",
    "level": "必備單U18"
  },
  {
    "word": "sweat like a pig",
    "pos": "phrase",
    "ch": "滿頭大汗",
    "example_en": "It was so hot in the office that I was sweating like a pig.",
    "example_ch": "辦公室太熱了，我流了一身汗。",
    "level": "必備單U18"
  },
  {
    "word": "technical",
    "pos": "adj.",
    "ch": "技術的；專門的",
    "example_en": "The computer problem is too technical for me to solve.",
    "example_ch": "這個電腦問題太具技術性了，我解決不了。",
    "level": "必備單U18"
  },
  {
    "word": "technician",
    "pos": "n.",
    "ch": "技術人員",
    "example_en": "The laboratory technician is analyzing the blood samples.",
    "example_ch": "實驗室技術員正在分析血液樣本。",
    "level": "必備單U18"
  },
  {
    "word": "technique",
    "pos": "n.",
    "ch": "技巧；技術",
    "example_en": "The pianist has an amazing playing technique.",
    "example_ch": "這位鋼琴家擁有驚人的演奏技巧。",
    "level": "必備單U18"
  },
  {
    "word": "tough",
    "pos": "adj.",
    "ch": "艱難的；堅韌的；強硬的",
    "example_en": "It was a tough decision to make, but it was necessary.",
    "example_ch": "這是一個艱難的決定，但卻是必要的。",
    "level": "必備單U18"
  },
  {
    "word": "toughness",
    "pos": "n.",
    "ch": "堅韌；強硬",
    "example_en": "The game tested the mental toughness of the players.",
    "example_ch": "這場比賽測試了球員們的心理韌性。",
    "level": "必備單U18"
  },
  {
    "word": "tug",
    "pos": "v./n.",
    "ch": "用力拉",
    "example_en": "The little boy gave his mother's sleeve a gentle tug.",
    "example_ch": "小男孩輕輕拉了拉母親的袖子。",
    "level": "必備單U18"
  },
  {
    "word": "tug-of-war",
    "pos": "n.",
    "ch": "拔河",
    "example_en": "Our class won the tug-of-war competition during Sports Day.",
    "example_ch": "我們班在運動會的拔河比賽中獲勝。",
    "level": "必備單U18"
  },
  {
    "word": "twin",
    "pos": "n.",
    "ch": "雙胞胎之一",
    "example_en": "My brother and I are identical twins.",
    "example_ch": "我哥哥和我是同卵雙胞胎。",
    "level": "必備單U18"
  },
  {
    "word": "triplet",
    "pos": "n.",
    "ch": "三胞胎之一",
    "example_en": "The mother was surprised to find out she was having triplets.",
    "example_ch": "這位母親驚訝地發現她懷了三胞胎。",
    "level": "必備單U18"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "ch": "車輛；傳遞媒介",
    "example_en": "Emergency vehicles have priority on the road.",
    "example_ch": "緊急車輛在路上有優先通行權。",
    "level": "必備單U18"
  },
  {
    "word": "electric vehicle",
    "pos": "n.",
    "ch": "電動車",
    "example_en": "The demand for electric vehicles is rising globally.",
    "example_ch": "全球對電動車的需求正在上升。",
    "level": "必備單U18"
  },
  {
    "word": "sport utility vehicle",
    "pos": "n.",
    "ch": "運動型多用途車 (SUV)",
    "example_en": "SUVs are popular among families due to their spaciousness.",
    "example_ch": "運動休旅車因其空間寬敞而受到家庭的歡迎。",
    "level": "必備單U18"
  }
];