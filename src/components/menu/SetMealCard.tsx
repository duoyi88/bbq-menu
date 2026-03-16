import Image from "next/image";
import type { SetMeal } from "@/types/menu";

interface SetMealCardProps {
  setMeal: SetMeal;
}

/**
 * 套餐卡片元件 — 樂天色系，含圖片預留位
 *
 * 顯示：主圖（或 placeholder）、套餐名稱、價格、人數、內含品項、省多少錢
 */
export function SetMealCard({ setMeal }: SetMealCardProps) {
  const savings = setMeal.totalIfSingle - setMeal.price;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {/* 套餐主圖 */}
      <div className="relative aspect-[16/9] w-full bg-neutral-100">
        {setMeal.image ? (
          <Image
            src={setMeal.image}
            alt={setMeal.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
            套餐圖片
          </div>
        )}

        {/* 圖片僅供參考 */}
        <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white/80">
          圖片僅供參考
        </span>

        {/* 價格標籤 */}
        <div className="absolute bottom-3 right-3 rounded-lg bg-rakuten-crimson px-3 py-1.5 text-white shadow-lg">
          <span className="text-lg font-bold">
            ${setMeal.price.toLocaleString()}
          </span>
        </div>

        {/* 省多少 */}
        {savings > 0 && (
          <div className="absolute top-3 left-3 rounded-md bg-rakuten-gold px-2 py-1 text-xs font-semibold text-white">
            現省 ${savings}
          </div>
        )}
      </div>

      {/* 資訊區 */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-base font-bold text-neutral-900">
            {setMeal.name}
          </h3>
          <span className="text-sm text-neutral-500">
            {setMeal.servings}
          </span>
        </div>

        {/* 品項列表 */}
        <div className="space-y-1">
          {setMeal.items.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-neutral-700">
                <span className="mr-1.5 text-xs text-neutral-400">
                  {item.category}
                </span>
                {item.name}
              </span>
              <span className="text-neutral-400">
                ${item.unitPrice} · x{item.quantity}
              </span>
            </div>
          ))}
        </div>

        {/* Phase 2: 加入購物車按鈕 */}
      </div>
    </div>
  );
}
