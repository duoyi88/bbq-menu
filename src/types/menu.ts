// ============================================================
// 菜單資料型別定義
// ============================================================

/** 單點品項 */
export interface MenuItem {
  /** 品項名稱 */
  name: string;
  /** 份量描述（如 "200g", "1包兩入"） */
  portion: string;
  /** 售價（新台幣） */
  price: number;
  /** 食材介紹文字 */
  description?: string;
  /** 是否需要預訂 */
  needsReservation?: boolean;
  /** 原料產地來源（含雞豬牛肉品及其製品須標註） */
  origin?: string;
  /** 產品圖片路徑（相對於 /public/images/） */
  image?: string;
}

/** 套餐內含品項 */
export interface SetMealItem {
  /** 分類（如 "牛肉", "水產"） */
  category: string;
  /** 品項名稱 */
  name: string;
  /** 數量（如 1, 2） */
  quantity: number;
  /** 單價（新台幣） */
  unitPrice: number;
}

/** 套餐類型 */
export type SetMealType = "group" | "combo";

/** 套餐 */
export interface SetMeal {
  /** 套餐名稱 */
  name: string;
  /** 套餐售價（新台幣） */
  price: number;
  /** 套餐類型：group=多人組合套餐, combo=超值優惠組合 */
  type: SetMealType;
  /** 適合人數（如 "3-5人", "8-10人"） */
  servings: string;
  /** 套餐內含品項 */
  items: SetMealItem[];
  /** 單點合計金額（用於顯示省了多少） */
  totalIfSingle: number;
  /** 套餐主圖路徑（相對於 /public/images/） */
  image?: string;
}

/** 單點分類 */
export interface MenuCategory {
  /** 分類名稱（如 "和牛", "牛肉", "水產"） */
  name: string;
  /** 該分類下的品項 */
  items: MenuItem[];
}

/** 完整菜單資料 */
export interface MenuData {
  /** 套餐列表 */
  setMeals: SetMeal[];
  /** 單點分類列表 */
  categories: MenuCategory[];
}

// ============================================================
// Phase 2 預留型別（預點單系統）
// ============================================================

/** 購物車項目 */
export interface CartItem {
  /** 類型：套餐 or 單點 */
  type: "setMeal" | "item";
  /** 品項名稱 */
  name: string;
  /** 數量 */
  quantity: number;
  /** 單價 */
  unitPrice: number;
}

/** 預點單 */
export interface PreOrder {
  /** 訂單 ID */
  id: string;
  /** 比賽日期 */
  date: string;
  /** 桌位編號 */
  tableNumber: string;
  /** 訂位人姓名 */
  customerName: string;
  /** 聯絡電話 */
  phone: string;
  /** 點選品項 */
  items: CartItem[];
  /** 總金額 */
  totalAmount: number;
  /** 建立時間 */
  createdAt: string;
}
