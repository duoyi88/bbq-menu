/**
 * 頁尾 — 樂天色系
 */
export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-rakuten-dark py-6 text-center text-sm text-white/70">
      <div className="mx-auto max-w-3xl px-4">
        {/* TODO: 確認版權資訊 */}
        <p>&copy; {new Date().getFullYear()} 樂天桃猿 黑松沙士快樂熱炒區</p>
        <p className="mt-1 text-white/50">by 股感媒體集團</p>
      </div>
    </footer>
  );
}
