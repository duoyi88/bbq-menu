import Image from "next/image";
import { menuData } from "@/data/menu";
import { MenuNav, SetMealCard, CategorySection } from "@/components/menu";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

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

      {/* 股感 Stockfeel 介紹 */}
      <section className="mt-12 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="p-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Stockfeel 股感媒體 Logo"
              width={260}
              height={80}
              className="h-9 w-auto shrink-0 rounded sm:h-11"
            />
            <h2 className="text-sm font-bold text-neutral-900 sm:text-base">
              股感 Stockfeel
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            股感媒體是台灣領先的財經生活媒體，相信理財不只在螢幕上，更在日常裡。
            這次我們走進青埔棒球場，實際營運黑松沙士快樂炒區——用一場球賽、一頓燒烤，讓財經理財知識跟你的生活更緊密地融合。
            從投資組合到烤肉組合，從資產配置到菜單配置，我們想證明：
            <strong>好的生活體驗，本身就是最好的理財實踐。</strong>
          </p>
        </div>
        <a
          href="https://www.stockfeel.com.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-t border-neutral-100 bg-rakuten-light/50 px-4 py-3 text-sm font-bold text-rakuten-crimson transition-colors hover:bg-rakuten-light"
        >
          一起揮出理財 Home Run ↗
        </a>
      </section>

      {/* 浮動回到頂部按鈕 */}
      <ScrollToTop />
    </div>
  );
}
