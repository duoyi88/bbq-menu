import Image from "next/image";
import { menuData } from "@/data/menu";
import { MenuNav, SetMealCard, CategorySection } from "@/components/menu";

const groupMeals = menuData.setMeals.filter((m) => m.type === "group");
const comboMeals = menuData.setMeals.filter((m) => m.type === "combo");

/**
 * 首頁 — 單頁捲動菜單
 *
 * 所有區塊一次顯示，導覽列錨點捲動到對應區塊。
 */
export default function MenuPage() {
  return (
    <div>
      {/* Stockfeel 股感媒體介紹 */}
      <section className="mb-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center gap-4 p-4">
          <Image
            src="/logo.png"
            alt="Stockfeel 股感媒體 Logo"
            width={260}
            height={80}
            className="h-10 w-auto shrink-0 rounded sm:h-12"
          />
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-neutral-900 sm:text-base">
              股感 Stockfeel × 朵頤餐飲
            </h2>
            <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              股感媒體為台灣領先的財經生活媒體，本次與朵頤餐飲聯手進駐
              樂天桃猿主場——黑松沙士快樂炒區，讓你在青埔棒球場邊看中華職棒邊享受頂級燒烤體驗。
            </p>
          </div>
        </div>
        <a
          href="https://www.stockfeel.com.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-t border-neutral-100 bg-neutral-50 px-4 py-2 text-center text-xs font-medium text-rakuten-crimson transition-colors hover:bg-rakuten-light"
        >
          了解更多股感 Stockfeel ↗
        </a>
      </section>

      {/* 分類導覽（錨點捲動） */}
      <MenuNav categories={menuData.categories} />

      {/* 全部內容 */}
      <div className="mt-6 space-y-10">
        {/* 多人組合套餐 */}
        <section id="section-group" className="scroll-mt-36">
          <h2 className="mb-4 border-l-4 border-rakuten-crimson pl-3 text-lg font-bold">
            多人組合套餐
          </h2>
          <div className="space-y-4">
            {groupMeals.map((meal) => (
              <SetMealCard key={meal.name} setMeal={meal} />
            ))}
          </div>
        </section>

        {/* 超值優惠組合 */}
        <section id="section-combo" className="scroll-mt-36">
          <h2 className="mb-4 border-l-4 border-rakuten-gold pl-3 text-lg font-bold">
            超值優惠組合
          </h2>
          <div className="space-y-4">
            {comboMeals.map((meal) => (
              <SetMealCard key={meal.name} setMeal={meal} />
            ))}
          </div>
        </section>

        {/* 單點分類 */}
        {menuData.categories.map((cat) => (
          <CategorySection key={cat.name} category={cat} />
        ))}
      </div>
    </div>
  );
}
