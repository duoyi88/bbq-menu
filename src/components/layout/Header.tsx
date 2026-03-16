/**
 * 網站頂部導覽列 — 樂天色系
 */
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-rakuten-crimson text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-white/80">
            Rakuten Monkeys 樂天桃猿
          </p>
          <h1 className="text-lg font-bold leading-tight tracking-tight">
            黑松沙士快樂炒區
          </h1>
        </div>
        <Image
          src="/logo.png"
          alt="Stockfeel Logo"
          width={130}
          height={40}
          className="rounded"
        />
      </div>
    </header>
  );
}
