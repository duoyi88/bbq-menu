/**
 * 網站頂部導覽列 — 樂天色系
 *
 * TODO: 替換為正式 Logo 圖檔
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-rakuten-crimson text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-white/80">
            Rakuten Monkeys 樂天桃猿
          </p>
          <h1 className="text-lg font-bold leading-tight tracking-tight">
            黑松沙士快樂熱炒區
          </h1>
        </div>
        <span className="rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium">
          菜單
        </span>
        {/* Phase 2: 購物車按鈕 */}
      </div>
    </header>
  );
}
