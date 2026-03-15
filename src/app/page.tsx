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
      {/* 分類導覽（錨點捲動） */}
      <MenuNav categories={menuData.categories} />

      {/* 全部內容 */}
      <div className="mt-6 space-y-10">
        {/* 多人組合套餐 */}
        <section id="section-group" className="scroll-mt-28">
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
        <section id="section-combo" className="scroll-mt-28">
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
