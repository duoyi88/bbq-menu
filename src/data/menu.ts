import type { MenuData } from "@/types/menu";

/**
 * 菜單資料
 *
 * 樂天桃猿 黑松沙士快樂炒區 完整菜單
 * 資料來源：菜單列表.md（2026-03-16 定案版）
 */
export const menuData: MenuData = {
  // ──────────────────────────────────────────
  // 套餐（7組）
  // ──────────────────────────────────────────
  setMeals: [
    {
      name: "桃猿最強四人假日宴",
      type: "group",
      price: 3200,
      servings: "3-5人",
      totalIfSingle: 3530,
      image: "/images/sets/RM_08393_0.jpg",
      items: [
        { category: "牛肉", name: "汰暉 板腱牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 牛五花燒烤片", quantity: 1, unitPrice: 280 },
        { category: "豬肉", name: "全州喜比食堂 168小時熟成豬五層肉", quantity: 1, unitPrice: 499 },
        { category: "豬肉", name: "陞煇 台灣鹹豬肉", quantity: 1, unitPrice: 349 },
        { category: "豬肉", name: "陞煇 台灣梅花豬燒烤片", quantity: 1, unitPrice: 280 },
        { category: "雞肉", name: "御正 台灣去骨雞腿排", quantity: 1, unitPrice: 239 },
        { category: "水產", name: "路邊烤肉 柳葉魚", quantity: 1, unitPrice: 249 },
        { category: "水產", name: "真花枝丸", quantity: 1, unitPrice: 219 },
        { category: "香腸", name: "香檬馬告創意香腸", quantity: 1, unitPrice: 299 },
        { category: "蔬菜", name: "四人蔬菜組合", quantity: 1, unitPrice: 399 },
        { category: "蔬菜", name: "奶油金針菇玉米盒", quantity: 1, unitPrice: 129 },
        { category: "配料", name: "墨西哥捲餅皮", quantity: 1, unitPrice: 219 },
      ],
    },
    {
      name: "做伙應猿十人平日宴",
      type: "group",
      price: 6000,
      servings: "8-10人",
      totalIfSingle: 6555,
      image: "/images/sets/RM_08230_0.jpg",
      items: [
        { category: "牛肉", name: "汰暉 帶骨牛小排", quantity: 1, unitPrice: 459 },
        { category: "牛肉", name: "汰暉 板腱牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 CAB 梅花牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 骰子牛", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 牛五花燒烤片", quantity: 2, unitPrice: 280 },
        { category: "豬肉", name: "全州喜比食堂 168小時熟成豬五層肉", quantity: 1, unitPrice: 499 },
        { category: "豬肉", name: "陞煇 台灣帶骨豬小排", quantity: 1, unitPrice: 369 },
        { category: "豬肉", name: "陞煇 台灣鹹豬肉", quantity: 1, unitPrice: 349 },
        { category: "豬肉", name: "陞煇 台灣梅花豬燒烤片", quantity: 1, unitPrice: 280 },
        { category: "雞肉", name: "御正 台灣去骨雞腿排", quantity: 1, unitPrice: 239 },
        { category: "水產", name: "路邊烤肉 午魚一夜干", quantity: 1, unitPrice: 429 },
        { category: "水產", name: "甜不辣", quantity: 1, unitPrice: 349 },
        { category: "水產", name: "路邊烤肉 柳葉魚", quantity: 1, unitPrice: 249 },
        { category: "水產", name: "真花枝丸", quantity: 1, unitPrice: 219 },
        { category: "香腸", name: "高粱古早味酒香腸", quantity: 1, unitPrice: 499 },
        { category: "蔬菜", name: "十人蔬菜組合", quantity: 1, unitPrice: 600 },
        { category: "蔬菜", name: "奶油金針菇玉米盒", quantity: 1, unitPrice: 129 },
        { category: "配料", name: "墨西哥捲餅皮", quantity: 1, unitPrice: 219 },
      ],
    },
    {
      name: "全猿主場十人假日宴",
      type: "group",
      price: 8000,
      servings: "8-10人",
      totalIfSingle: 8767,
      image: "/images/sets/RM_07911_0.jpg",
      items: [
        { category: "和牛", name: "汰暉 澳洲和牛和尚頭燒烤片", quantity: 1, unitPrice: 499 },
        { category: "牛肉", name: "汰暉 帶骨牛小排", quantity: 1, unitPrice: 459 },
        { category: "牛肉", name: "汰暉 板腱牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 CAB 梅花牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 骰子牛", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 牛五花燒烤片", quantity: 2, unitPrice: 280 },
        { category: "豬肉", name: "全州喜比食堂 168小時熟成豬五層肉", quantity: 2, unitPrice: 499 },
        { category: "豬肉", name: "陞煇 台灣帶骨豬小排", quantity: 1, unitPrice: 369 },
        { category: "豬肉", name: "陞煇 台灣鹹豬肉", quantity: 1, unitPrice: 349 },
        { category: "豬肉", name: "陞煇 台灣梅花豬燒烤片", quantity: 2, unitPrice: 280 },
        { category: "雞肉", name: "御正 台灣去骨雞腿排", quantity: 2, unitPrice: 239 },
        { category: "雞肉", name: "路邊烤肉 台灣雞里肌串", quantity: 1, unitPrice: 229 },
        { category: "水產", name: "路邊烤肉 午魚一夜干", quantity: 1, unitPrice: 429 },
        { category: "水產", name: "甜不辣", quantity: 1, unitPrice: 349 },
        { category: "水產", name: "路邊烤肉 柳葉魚", quantity: 1, unitPrice: 249 },
        { category: "水產", name: "真花枝丸", quantity: 1, unitPrice: 219 },
        { category: "香腸", name: "香檬馬告創意香腸", quantity: 1, unitPrice: 299 },
        { category: "香腸", name: "剝皮辣椒創意香腸", quantity: 1, unitPrice: 299 },
        { category: "蔬菜", name: "十人豪華蔬菜組合", quantity: 1, unitPrice: 967 },
        { category: "蔬菜", name: "奶油金針菇玉米盒", quantity: 1, unitPrice: 129 },
        { category: "配料", name: "墨西哥捲餅皮", quantity: 1, unitPrice: 219 },
      ],
    },
    {
      name: "無敵和牛組",
      type: "combo",
      price: 1899,
      servings: "2-3人",
      totalIfSingle: 2097,
      image: "/images/sets/invincible-wagyu.png",
      items: [
        { category: "和牛", name: "汰暉 日本A5和牛肋條骰子", quantity: 1, unitPrice: 799 },
        { category: "和牛", name: "汰暉 澳洲和牛M9背肩燒烤片", quantity: 1, unitPrice: 499 },
        { category: "和牛", name: "汰暉 澳洲和牛和尚頭燒烤片", quantity: 1, unitPrice: 499 },
        { category: "蔬菜", name: "季節綜合蔬菜盤", quantity: 1, unitPrice: 300 },
      ],
    },
    {
      name: "全猿牛肉組",
      type: "combo",
      price: 1599,
      servings: "2-3人",
      totalIfSingle: 1777,
      image: "/images/sets/full-monkeys-beef.png",
      items: [
        { category: "牛肉", name: "汰暉 帶骨牛小排", quantity: 1, unitPrice: 459 },
        { category: "牛肉", name: "汰暉 板腱牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 CAB 梅花牛燒烤片", quantity: 1, unitPrice: 369 },
        { category: "牛肉", name: "汰暉 牛五花燒烤片", quantity: 1, unitPrice: 280 },
        { category: "蔬菜", name: "季節綜合蔬菜盤", quantity: 1, unitPrice: 300 },
      ],
    },
    {
      name: "做伙雞豬組",
      type: "combo",
      price: 1399,
      servings: "2-3人",
      totalIfSingle: 1537,
      image: "/images/sets/RM_08471_0.jpg",
      items: [
        { category: "豬肉", name: "陞煇 台灣帶骨豬小排", quantity: 1, unitPrice: 369 },
        { category: "豬肉", name: "陞煇 台灣鹹豬肉", quantity: 1, unitPrice: 349 },
        { category: "豬肉", name: "陞煇 台灣梅花豬燒烤片", quantity: 1, unitPrice: 280 },
        { category: "雞肉", name: "御正 台灣去骨雞腿排", quantity: 1, unitPrice: 239 },
        { category: "蔬菜", name: "季節綜合蔬菜盤", quantity: 1, unitPrice: 300 },
      ],
    },
    {
      name: "海味水產組",
      type: "combo",
      price: 2199,
      servings: "2-3人",
      totalIfSingle: 2474,
      image: "/images/sets/RM_08641_0.jpg",
      items: [
        { category: "水產", name: "嚴選活凍草蝦", quantity: 1, unitPrice: 899 },
        { category: "水產", name: "路邊烤肉 午魚一夜干", quantity: 1, unitPrice: 429 },
        { category: "水產", name: "甜不辣", quantity: 1, unitPrice: 349 },
        { category: "水產", name: "凍半殼扇貝", quantity: 1, unitPrice: 329 },
        { category: "水產", name: "路邊烤肉 柳葉魚", quantity: 1, unitPrice: 249 },
        { category: "水產", name: "真花枝丸", quantity: 1, unitPrice: 219 },
      ],
    },
  ],

  // ──────────────────────────────────────────
  // 單點分類（8類，共37品項）
  // ──────────────────────────────────────────
  categories: [
    {
      name: "和牛",
      items: [
        {
          name: "日本A5和牛紐約客牛排",
          portion: "250g",
          price: 2999,
          needsReservation: true,
          image: "/images/items/a5-newyork-steak.png",
          description:
            "日本A5等級，紐約客部位，筋肉交錯間密布著頂級油花。250g厚切建議五分熟，切開來的粉嫩斷面和入口即化的油脂，就是這個價格最好的說明。",
        },
        {
          name: "日本A5和牛菲力牛排",
          portion: "150g",
          price: 2499,
          needsReservation: true,
          image: "/images/items/a5-filet.png",
          description:
            "腰內肉。零筋膜。A5油脂。150g，化口即融，不需要其他形容詞。",
        },
        {
          name: "汰暉 日本A5和牛肋條骰子",
          portion: "200g",
          price: 799,
          image: "/images/items/a5-dice.png",
          description:
            "烤到表面微焦的瞬間翻面——外層酥香、內裡滿是油潤肉汁。A5肋條的香氣會在嘴裡停留很久，是和牛的入門，也可能是回不去的開始。",
        },
        {
          name: "汰暉 澳洲和牛M9背肩燒烤片",
          portion: "200g",
          price: 499,
          image: "/images/items/m9-shoulder.png",
          description:
            "先吃一片原味，什麼都不沾。M9油花化開的那個甜味，沾了醬反而可惜。薄切上爐幾秒即熟，別烤過頭。",
        },
        {
          name: "汰暉 澳洲和牛和尚頭燒烤片",
          portion: "200g",
          price: 499,
          image: "/images/items/wagyu-topside.png",
          description:
            "和M9背肩相比，和尚頭的嚼勁更明顯，油花不是化口型而是越嚼越甜。取自牛頸背交界處，喜歡扎實口感的人會更偏這一款。",
        },
      ],
    },
    {
      name: "牛肉",
      items: [
        {
          name: "汰暉 CAB 比臉大牛排",
          portion: "300g",
          price: 499,
          image: "/images/items/cab-big-steak.png",
          description:
            "300g，真的比臉大。CAB認證安格斯牛，兩個人分一份剛好，一個人挑戰也沒問題——上桌的時候隔壁桌會回頭看。",
        },
        {
          name: "汰暉 帶骨牛小排",
          portion: "300g",
          price: 459,
          image: "/images/items/IMG_0950.jpg",
          description:
            "拿著骨頭啃，不需要刀叉。骨邊肉的膠質和油脂只有這樣吃才完整，兩片裝300g，啃完骨頭你會想把手指也舔乾淨。",
        },
        {
          name: "汰暉 板腱牛燒烤片",
          portion: "200g",
          price: 369,
          image: "/images/items/flat-iron-slice.png",
          description:
            "板腱取自牛肩核心，中央一條筋膜是這個部位的特徵。薄切快烤讓筋膜軟化、肉汁鎖在裡面，口感嫩中帶勁，層次感在牛肉裡算特別突出的。",
        },
        {
          name: "汰暉 CAB 梅花牛燒烤片",
          portion: "200g",
          price: 369,
          image: "/images/items/cab-chuck-roll.png",
          description:
            "上爐，三秒，翻面，三秒，起。CAB認證梅花牛的油花分布均勻到讓人懷疑是不是排好的，不用想太多，就是這麼簡單好吃。",
        },
        {
          name: "汰暉 骰子牛",
          portion: "200g",
          price: 369,
          image: "/images/items/dice-beef.png",
          description:
            "大火快烤到外層焦香、切開來內裡還是粉色。一口一塊，撒點椒鹽，焦香跟肉汁同時到位。",
        },
        {
          name: "汰暉 牛五花燒烤片",
          portion: "200g",
          price: 280,
          image: "/images/items/beef-belly-slice.png",
          description:
            "油脂與瘦肉交疊，烤到微焦，沾醬。每桌必點，不需要理由。",
        },
      ],
    },
    {
      name: "豬肉",
      items: [
        {
          name: "全州喜比食堂 168小時熟成豬五層肉",
          portion: "180g",
          price: 499,
          image: "/images/items/IMG_0949.jpg",
          description:
            "168小時——整整七天的熟成，讓水分蒸散、風味濃縮。五層分明的油脂與瘦肉各司其職，燒烤後的香氣密度是一般豬五花沒辦法比的。",
        },
        {
          name: "陞煇 台灣松阪豬",
          portion: "200g",
          price: 499,
          image: "/images/items/matsusaka-pork.png",
          origin: "台灣",
          description:
            "看起來只是一片薄切豬肉。入口才發現，爽脆彈牙的程度完全不像豬肉該有的口感。取自豬頸與肩胛交界的稀少部位，台灣在地飼育，一頭豬只有這一小塊。",
        },
        {
          name: "汰暉 伊比利豬梅花",
          portion: "200g",
          price: 499,
          image: "/images/items/iberico-chuck.png",
          description:
            "西班牙橡果飼育，放牧14個月以上，油脂帶著堅果與奶油的香氣。梅花部位油花均勻，烤後收尾有淡淡堅果尾韻——這是一般豬肉不會有的風味。",
        },
        {
          name: "陞煇 台灣帶骨豬小排",
          portion: "300g",
          price: 369,
          image: "/images/items/bone-in-pork-rib.png",
          origin: "台灣",
          description:
            "燒烤到骨肉微微分離的時候就是最好的時機。拿起來沿著骨頭啃，膠質黏唇、肉汁飽滿。台灣在地豬肉，300g，不用客氣。",
        },
        {
          name: "陞煇 台灣鹹豬肉",
          portion: "300g",
          price: 349,
          image: "/images/items/salted-pork.png",
          origin: "台灣",
          description:
            "蒜頭、米酒、鹽巴，醃漬入味後燒烤逼出油脂。切片搭蒜苗，鹹香從第一口貫穿到最後一口——這就是台灣夏天的味道。",
        },
        {
          name: "陞煇 台灣梅花豬燒烤片",
          portion: "200g",
          price: 280,
          image: "/images/items/pork-chuck-slice.png",
          origin: "台灣",
          description:
            "全桌回烤率最高的品項。不是最貴的，但每次都最快見底。台灣在地梅花豬，薄切幾秒即熟，好吃到不需要形容。",
        },
      ],
    },
    {
      name: "雞肉",
      items: [
        {
          name: "御正 台灣去骨雞腿排",
          portion: "1包兩入",
          price: 239,
          image: "/images/items/boneless-chicken-thigh.png",
          origin: "台灣",
          description:
            "燒烤到雞皮金黃的那個「喀滋」聲，就是這道菜的重點。去骨處理方便食用，皮脆肉嫩，台灣在地雞肉。一包兩入，手速慢的搶不到。",
        },
        {
          name: "路邊烤肉 台灣雞里肌串",
          portion: "6入/包",
          price: 229,
          image: "/images/items/chicken-tender-skewer.png",
          origin: "台灣",
          description:
            "大口吃肉之間需要一個清爽的段落。雞里肌低脂細嫩，串燒受熱均勻，台灣在地雞肉，6入一包，是讓味蕾重新開機的存在。",
        },
      ],
    },
    {
      name: "水產",
      items: [
        {
          name: "鱈場蟹腳",
          portion: "--",
          price: 3999,
          needsReservation: true,
          image: "/images/items/king-crab-leg.png",
          description:
            "北太平洋冷水蟹王。肉質飽滿、甜度極高。需提前預訂。",
        },
        {
          name: "大龍蝦身",
          portion: "--",
          price: 1299,
          needsReservation: true,
          image: "/images/items/IMG_0948.jpg",
          description:
            "對切上爐，看著蝦肉從透明慢慢轉成白玉色，鎖住的鮮汁在殼內微微冒泡。不加調味，鮮甜本身就是最好的醬。需提前預訂。",
        },
        {
          name: "嚴選活凍草蝦",
          portion: "600g/盒",
          price: 899,
          image: "/images/items/IMG_0945.jpg",
          description:
            "600g一整盒，急速冷凍鎖住活蝦鮮度。蝦身飽滿，燒烤後蝦殼微焦、蝦肉緊實彈牙，剝殼的過程本身就是一種享受。",
        },
        {
          name: "路邊烤肉 午魚一夜干",
          portion: "250g/尾",
          price: 429,
          image: "/images/items/dried-goatfish.png",
          description:
            "一夜風乾，鮮味濃縮在這250g裡。外皮燒烤到酥脆，筷子撥開來魚肉還是嫩滑多汁。懂吃的人知道，一夜干的功夫全在等待。",
        },
        {
          name: "甜不辣",
          portion: "1套/包",
          price: 349,
          image: "/images/items/tempura.png",
          description:
            "球場邊的那個味道。台式魚漿紮實彈牙，燒烤後外焦內軟，沾醬入口，看球的氣氛就回來了。",
        },
        {
          name: "凍半殼扇貝",
          portion: "1包",
          price: 329,
          image: "/images/items/IMG_0952.jpg",
          description:
            "放上烤爐，加一點奶油或蒜蓉，等殼內的醬汁開始冒泡——這時候才是最佳入口時機。扇貝肉吸飽湯汁，鮮甜到不想分給別人。",
        },
        {
          name: "路邊烤肉 柳葉魚",
          portion: "1包8入",
          price: 249,
          image: "/images/items/shishamo.png",
          description:
            "小小一尾，存在感卻很強。烤到魚皮酥脆、咬開來魚卵飽滿，鹹香解膩的效果好到讓人忘記剛吃了多少肉。8入一包。",
        },
        {
          name: "真花枝丸",
          portion: "1套/包",
          price: 219,
          image: "/images/items/cuttlefish-ball.png",
          description:
            "真材實料的花枝漿，咬得到花枝纖維。燒烤到表面微焦，海鮮香氣自己會說話。",
        },
      ],
    },
    {
      name: "香腸",
      items: [
        {
          name: "高粱古早味酒香腸",
          portion: "10入",
          price: 499,
          image: "/images/items/IMG_0951.jpg",
          description:
            "第一口是肉香，第二口高粱的酒氣才慢慢浮上來——醇厚、飽滿、收尾帶甘。10入份量，整桌一起吃剛好。",
        },
        {
          name: "蒜味古早味香腸",
          portion: "10入",
          price: 499,
          image: "/images/items/IMG_0951.jpg",
          description: "蒜香。肉汁。10入。蒜味控不用多說。",
        },
        {
          name: "香檬馬告創意香腸",
          portion: "5入",
          price: 299,
          image: "/images/items/IMG_0951.jpg",
          description:
            "馬告，台灣原住民族的山胡椒，帶著檸檬草般的清新辛香。與香檬酸香交織在紮實肉腸裡，咬下去先是肉香、收尾是山林的氣息。只有台灣才有的味道。",
        },
        {
          name: "剝皮辣椒創意香腸",
          portion: "5入",
          price: 299,
          image: "/images/items/IMG_0951.jpg",
          description:
            "看起來和普通香腸沒兩樣。咬下去才知道不一樣——剝皮辣椒的甘辣藏在肉汁深處，先甜後辣，後勁綿長。",
        },
      ],
    },
    {
      name: "蔬菜",
      items: [
        {
          name: "季節綜合蔬菜盤",
          portion: "1份",
          price: 300,
          image: "/images/items/veggie-platter.png",
          description:
            "連吃了三輪肉，這時候需要它。當季蔬菜燒烤後甜度提升，一口下去味蕾瞬間舒緩，然後你又可以繼續吃肉了。",
        },
        {
          name: "櫛瓜",
          portion: "1條",
          price: 169,
          image: "/images/items/zucchini.png",
          description:
            "切片燒烤後帶著漂亮的焦紋，一口咬下微甜清爽。最安靜的蔬菜配角，但少了它整桌都不對。",
        },
        {
          name: "奶油金針菇玉米盒",
          portion: "1盒",
          price: 129,
          image: "/images/items/butter-enoki-corn.png",
          description:
            "放上烤爐等奶油融化，滲進金針菇和玉米粒裡。掀開鋁箔的那一刻蒸氣與香氣同時撲面而來——$129 的小確幸。",
        },
        {
          name: "杏鮑菇",
          portion: "200g",
          price: 99,
          image: "/images/items/king-oyster-mushroom.png",
          description:
            "$99，吃起來像在吃肉。厚實多汁、吸汁力強，沾醬之後更是加分。",
        },
      ],
    },
    {
      name: "配料",
      items: [
        {
          name: "墨西哥捲餅皮",
          portion: "1包10片",
          price: 219,
          image: "/images/items/tortilla.png",
          description:
            "鋪上烤肉、夾蔬菜、擠醬料，捲起來一口咬——所有味道同時匯合的瞬間，才是燒烤的終極吃法。10片一包。",
        },
        {
          name: "路邊烤肉 炸豆包",
          portion: "300g/包",
          price: 189,
          image: "/images/items/fried-tofu-skin.png",
          description:
            "不起眼的台式小食，上了烤爐卻意外搶戲。外皮酥脆、內裡綿密的反差口感，讓不少人從「隨便點的」變成「每次必點」。",
        },
      ],
    },
  ],
};
