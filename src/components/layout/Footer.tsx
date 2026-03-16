/**
 * 頁尾 — 樂天色系
 */
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-rakuten-dark py-6 text-center text-sm text-white/70">
      <div className="mx-auto max-w-3xl px-4">
        <p>&copy; {new Date().getFullYear()} 樂天桃猿 黑松沙士快樂熱炒區</p>
        <a
          href="https://www.stockfeel.com.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-white/50 transition-colors hover:text-white/70"
        >
          <span>by 股感媒體</span>
          <Image
            src="/logo.png"
            alt="Stockfeel Logo"
            width={91}
            height={28}
            className="rounded-sm"
          />
        </a>
      </div>
    </footer>
  );
}
