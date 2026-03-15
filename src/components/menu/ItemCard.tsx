"use client";

import { useState } from "react";
import Image from "next/image";
import type { MenuItem } from "@/types/menu";

interface ItemCardProps {
  item: MenuItem;
}

/** 需預訂 Badge */
function ReservationBadge() {
  return (
    <span className="inline-flex items-center rounded-md bg-rakuten-gold-light px-2 py-0.5 text-xs font-semibold text-rakuten-gold ring-1 ring-inset ring-rakuten-gold/30">
      需預訂
    </span>
  );
}

/**
 * 單點品項卡片 — RWD
 *
 * 桌機：左圖（大）右資訊（上品名/價格，下介紹），永遠展開
 * 手機：小圖 + 品名/價格，介紹預設收折
 */
export function ItemCard({ item }: ItemCardProps) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* ── 桌機版：左圖右資訊（上下分區），永遠展開 ── */}
      <div className="hidden md:flex">
        {/* 左側：產品圖片（大） */}
        <div className="relative h-48 w-48 shrink-0 bg-neutral-100">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
              圖片
            </div>
          )}
          <span className="absolute bottom-0 left-0 w-full bg-black/40 py-0.5 text-center text-[10px] text-white/80">
            圖片僅供參考
          </span>
        </div>

        {/* 右側：上下分區 */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* 上區：品名、價格、份量 */}
          <div className="flex items-start justify-between gap-3 p-4 pb-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-base font-bold text-neutral-900">{item.name}</p>
                {item.needsReservation && <ReservationBadge />}
              </div>
              <p className="mt-0.5 text-sm text-neutral-500">{item.portion}</p>
              {item.origin && (
                <p className="mt-0.5 text-xs text-neutral-400">
                  產地：{item.origin}
                </p>
              )}
            </div>
            <p className="shrink-0 text-lg font-bold text-rakuten-crimson">
              ${item.price.toLocaleString()}
            </p>
          </div>

          {/* 下區：食材介紹 */}
          {item.description && (
            <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-3">
              <p className="text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── 手機版：緊湊卡片，預設收折介紹 ── */}
      <div
        className="md:hidden"
        onClick={() => item.description && setMobileExpanded(!mobileExpanded)}
        role={item.description ? "button" : undefined}
      >
        <div className="flex items-center gap-3 p-3">
          {/* 產品圖片 */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
                圖片
              </div>
            )}
            <span className="absolute bottom-0 left-0 w-full bg-black/40 py-px text-center text-[8px] leading-tight text-white/80">
              圖片僅供參考
            </span>
          </div>

          {/* 品項資訊 */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <p className="font-medium text-neutral-900">{item.name}</p>
              {item.needsReservation && <ReservationBadge />}
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="font-bold text-rakuten-crimson">
                ${item.price.toLocaleString()}
              </p>
              <p className="text-sm text-neutral-500">{item.portion}</p>
            </div>
            {item.origin && (
              <p className="mt-0.5 text-[11px] text-neutral-400">
                產地：{item.origin}
              </p>
            )}
            {item.description && (
              <span className={`mt-1 inline-block text-xs text-neutral-400 transition-transform ${mobileExpanded ? "rotate-180" : ""}`}>
                ▼
              </span>
            )}
          </div>
        </div>

        {/* 手機展開介紹 */}
        {mobileExpanded && item.description && (
          <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-3">
            <p className="text-sm leading-relaxed text-neutral-600">
              {item.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
