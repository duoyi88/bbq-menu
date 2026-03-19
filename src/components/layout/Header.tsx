/**
 * 網站頂部導覽列 — 樂天色系 + 外部導航連結
 * 手機：漢堡選單；sm 以上：水平導航列
 */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/** Header 導航項目（順序：菜單 → 場次查詢 → 席次介紹 → 前往購票 → 食材品牌） */
const navItems = [
  {
    label: "菜單",
    href: "/",
    external: false,
  },
  {
    label: "場次查詢",
    href: "/schedule",
    external: false,
  },
  {
    label: "席次介紹",
    href: "https://monkeys.rakuten.com.tw/news_detail/755",
    external: true,
  },
  {
    label: "前往購票",
    href: "https://ticket.ibon.com.tw/ActivityInfo/Details/39428",
    external: true,
  },
  {
    label: "食材品牌",
    href: "/brands",
    external: false,
  },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 品牌列 — rakuten-dark */}
      <div className="bg-rakuten-dark text-white">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <p className="text-[10px] font-medium tracking-wide text-white/80 sm:text-xs">
              Rakuten Monkeys 樂天桃猿
            </p>
            <h1 className="text-base font-bold leading-tight tracking-tight sm:text-lg">
              黑松沙士快樂炒區
            </h1>
          </Link>

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Stockfeel 股感媒體 Logo"
              width={260}
              height={80}
              className="h-8 w-auto rounded sm:h-10 md:h-12"
            />
            {/* 漢堡按鈕 — 僅手機 */}
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded sm:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "關閉選單" : "開啟選單"}
              aria-expanded={menuOpen}
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 桌面導航列 — sm 以上 */}
      <nav className="hidden bg-rakuten-crimson text-white sm:block">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-1 px-4 py-1.5">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-1 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              >
                {item.label}
                <span className="ml-0.5 text-[10px] text-white/50">↗</span>
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-1 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>

      {/* 手機下拉選單 */}
      {menuOpen && (
        <nav className="bg-rakuten-crimson text-white sm:hidden">
          <div className="mx-auto max-w-3xl divide-y divide-white/10">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-5 py-3 text-sm font-medium text-white/90 transition-colors active:bg-white/10"
                >
                  {item.label}
                  <span className="text-xs text-white/50">↗</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-5 py-3 text-sm font-medium text-white/90 transition-colors active:bg-white/10"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
