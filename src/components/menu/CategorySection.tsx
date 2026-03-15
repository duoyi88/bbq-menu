import type { MenuCategory } from "@/types/menu";
import { ItemCard } from "./ItemCard";

interface CategorySectionProps {
  category: MenuCategory;
}

/**
 * 單點分類區塊 — 樂天色系
 *
 * section ID 對應導覽列錨點
 */
export function CategorySection({ category }: CategorySectionProps) {
  return (
    <section id={`section-${category.name}`} className="scroll-mt-28">
      <h2 className="mb-3 flex items-center gap-2 border-l-4 border-rakuten-crimson pl-3 text-base font-bold text-neutral-900">
        <span>{category.name}</span>
        <span className="text-sm font-normal text-neutral-400">
          {category.items.length} 項
        </span>
      </h2>

      <div className="space-y-3">
        {category.items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
