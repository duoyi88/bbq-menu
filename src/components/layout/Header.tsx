/**
 * 網站頂部導覽列 — 樂天色系 + 外部導航連結
 */
import Image from "next/image";
import Link from "next/link";

/** Header 外部導航項目 */
const navItems = [
  {
    label: "席次介紹",
    href: "https://monkeys.rakuten.com.tw/news_detail/755",
    external: true,
  },
  {
    label: "場次查詢",
    href: "/schedule",
    external: false,
  },
  {
    label: "前往購票",
    href: "https://ticket.ibon.com.tw/ActivityInfo/Details/39428",
    external: true,
  },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-rakuten-crimson text-white shadow-md">
      {/* 品牌列 */}
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <Link href="/" className="shrink-0">
          <p className="text-[10px] font-medium tracking-wide text-white/80 sm:text-xs">
            Rakuten Monkeys 樂天桃猿
          </p>
          <h1 className="text-base font-bold leading-tight tracking-tight sm:text-lg">
            黑松沙士快樂炒區
          </h1>
        </Link>
        <Image
          src="/logo.png"
          alt="Stockfeel 股感媒體 Logo"
          width={260}
          height={80}
          className="h-8 w-auto rounded sm:h-10 md:h-12"
        />
      </div>

      {/* 導航列 */}
      <nav className="border-t border-white/20 bg-rakuten-dark">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-1 px-4 py-1.5">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-1 text-xs font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white sm:text-sm"
              >
                {item.label}
                <span className="ml-0.5 text-[10px] text-white/50">↗</span>
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-1 text-xs font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white sm:text-sm"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
