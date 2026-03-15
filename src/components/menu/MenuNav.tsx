"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/types/menu";

/** 導覽列所有區塊定義 */
interface NavSection {
  id: string;
  label: string;
}

interface MenuNavProps {
  categories: MenuCategory[];
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * 菜單分類導覽列（水平捲動，錨點捲動）— 樂天色系
 *
 * 所有區塊在同一頁，點按鈕捲動到對應區塊。
 * IntersectionObserver 追蹤目前可見區塊。
 * activeId 變化時，導航列自動滾動讓該按鈕對齊可見區域右側。
 */
export function MenuNav({ categories }: MenuNavProps) {
  const sections: NavSection[] = [
    { id: "section-group", label: "多人組合套餐" },
    { id: "section-combo", label: "超值優惠組合" },
    ...categories.map((cat) => ({
      id: `section-${cat.name}`,
      label: cat.name,
    })),
  ];

  const [activeId, setActiveId] = useState(sections[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const setBtnRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      if (el) btnRefs.current.set(id, el);
      else btnRefs.current.delete(id);
    },
    [],
  );

  /* ── 頁面捲動 → 偵測可見區塊 ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── activeId 變化 → 導航列自動滾動，按鈕對齊右側 ── */
  useEffect(() => {
    const container = scrollRef.current;
    const btn = btnRefs.current.get(activeId);
    if (!container || !btn) return;

    // 目標：讓按鈕右緣對齊容器可見區域右緣（留 16px 間距）
    const padding = 16;
    const btnRight = btn.offsetLeft + btn.offsetWidth;
    const targetScroll = btnRight - container.clientWidth + padding;

    // 第一個按鈕：滾到最左
    const idx = sections.findIndex((s) => s.id === activeId);
    const scrollTo = idx === 0 ? 0 : Math.max(0, targetScroll);

    container.scrollTo({ left: scrollTo, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  return (
    <nav
      className="sticky top-16 z-40 -mx-4 border-b border-neutral-200 bg-white"
    >
      <div
        ref={scrollRef}
        className="overflow-x-auto"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex w-max gap-1 px-4 py-2">
          {sections.map((sec) => (
            <button
              key={sec.id}
              ref={setBtnRef(sec.id)}
              onClick={() => scrollToSection(sec.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeId === sec.id
                  ? "bg-rakuten-crimson text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-rakuten-light hover:text-rakuten-crimson"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
