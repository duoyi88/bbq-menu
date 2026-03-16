# bbq-menu — 樂天桃猿 黑松沙士快樂炒區 菜單網站

> 朵頤系統旗下前端專案 | Next.js 15 + Tailwind CSS v4

---

## 專案說明

**黑松沙士快樂炒區**是樂天桃猿球場內的燒烤包廂區。本專案為該區的互動式菜單瀏覽網站，提供：

- 套餐組合展示（多人組合套餐 / 超值優惠組合）
- 單點品項瀏覽（和牛、牛肉、豬肉、雞肉、水產、香腸、蔬菜、配料）
- 分類導覽列（錨點捲動 + IntersectionObserver 追蹤）
- RWD 設計（手機收折介紹 / 桌機展開）
- 品項圖片支援（`/public/images/items/`、`/public/images/sets/`）

**Phase 2（預留）**：預點單系統（購物車、訂單送出）

---

## 技術棧

| 項目 | 版本 |
|------|------|
| Next.js | 16.x (App Router) |
| React | 19.x |
| Tailwind CSS | v4 |
| TypeScript | 5.x |

---

## 目錄結構

```
bbq-menu/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 根 Layout（Header + Footer）
│   │   ├── page.tsx          # 首頁（單頁捲動菜單）
│   │   └── globals.css       # 全域樣式 + 樂天色系 CSS 變數
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    # 頂部導覽列（樂天紅）
│   │   │   └── Footer.tsx    # 頁尾
│   │   └── menu/
│   │       ├── MenuNav.tsx       # 分類導覽列（水平捲動 + 錨點）
│   │       ├── CategorySection.tsx  # 單點分類區塊
│   │       ├── ItemCard.tsx      # 單點品項卡片（RWD）
│   │       └── SetMealCard.tsx   # 套餐卡片
│   ├── data/
│   │   └── menu.ts           # 菜單資料（套餐 + 單點，共 7 套餐 + 8 分類）
│   └── types/
│       └── menu.ts           # TypeScript 型別定義
├── public/
│   └── images/
│       ├── items/            # 單點品項圖（.webp）
│       └── sets/             # 套餐主圖（.webp）
├── IMAGE_PROMPTS.md          # 菜單圖片 AI 生成 Prompt 清單
└── package.json
```

---

## 色系（樂天色系）

定義於 `src/app/globals.css`：

| 變數 | 色碼 | 用途 |
|------|------|------|
| `--color-rakuten-crimson` | `#bf0000` | 主色（按鈕、標題邊框、價格） |
| `--color-rakuten-dark` | `#8c0000` | 深紅（hover 狀態） |
| `--color-rakuten-light` | `#ffeaea` | 淺紅（hover 背景） |
| `--color-rakuten-gold` | `#c5a100` | 金色（套餐省錢標籤） |
| `--color-rakuten-gold-light` | `#fff8d6` | 淺金（需預訂 badge 背景） |

---

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置
npm run build

# 型別檢查
npx tsc --noEmit
```

開啟 [http://localhost:3000](http://localhost:3000) 瀏覽。

---

## 菜單資料更新

菜單資料集中在 `src/data/menu.ts`，結構如下：

```typescript
export const menuData: MenuData = {
  setMeals: [ /* 套餐陣列 */ ],
  categories: [ /* 單點分類陣列 */ ],
};
```

型別定義見 `src/types/menu.ts`。

---

## 圖片生成

品項圖片 Prompt 清單見 `IMAGE_PROMPTS.md`。

- 生成後轉檔為 `.webp`
- 單點圖放 `public/images/items/`
- 套餐圖放 `public/images/sets/`

---

## Phase 2 規劃

- 購物車功能（`CartItem`、`PreOrder` 型別已預留）
- 預點單送出（整合朵頤系統後端 API）
- 訂單管理後台

---

## 關聯資料

- 菜單定價來源：`食材供應整理/菜單定價/菜單列表.md`
- 食材成本：`食材供應整理/食材成本.md`
- 供應商資料：`食材供應整理/供應商.md`
