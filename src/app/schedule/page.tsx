import type { Metadata } from "next";
import Link from "next/link";
import { homeGames, teamShortNames, teamColors } from "@/data/schedule";

export const metadata: Metadata = {
  title: "2026 樂天桃猿主場賽程｜52 場次查詢｜青埔棒球場｜黑松沙士快樂炒區",
  description:
    "2026 中華職棒 CPBL 樂天桃猿 Rakuten Monkeys 桃園國際棒球場（青埔棒球場）主場 52 場完整賽程表。場次日期、對手、開賽時間一覽，邊看球邊在黑松沙士快樂炒區享受燒烤！",
};

const firstHalf = homeGames.filter((g) => g.half === "上半季");
const secondHalf = homeGames.filter((g) => g.half === "下半季");

/** 日期格式化：3/28（六） */
function formatDate(dateStr: string, dow: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}（${dow}）`;
}

/** 判斷是否為週末 */
function isWeekend(dow: string) {
  return dow === "六" || dow === "日";
}

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      {/* 頁面標題 */}
      <div>
        <Link
          href="/"
          className="mb-3 inline-flex items-center gap-1 text-sm text-rakuten-crimson hover:underline"
        >
          ← 回菜單
        </Link>
        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          2026 樂天桃猿主場賽程
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          樂天桃園棒球場（青埔）· 全主場 52 場 ·{" "}
          <span className="text-rakuten-crimson font-medium">
            黑松沙士快樂炒區全程供應
          </span>
        </p>
      </div>

      {/* 快速購票 CTA */}
      <a
        href="https://ticket.ibon.com.tw/ActivityInfo/Details/39428"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-xl bg-rakuten-crimson p-4 text-white shadow-sm transition-shadow hover:shadow-md"
      >
        <div>
          <p className="text-sm font-medium text-white/80">想邊看球邊烤肉？</p>
          <p className="text-lg font-bold">立即購買黑松沙士快樂炒區門票</p>
        </div>
        <span className="text-2xl">→</span>
      </a>

      {/* 上半季 */}
      <section>
        <h2 className="mb-3 border-l-4 border-rakuten-crimson pl-3 text-lg font-bold">
          上半季
          <span className="ml-2 text-sm font-normal text-neutral-400">
            3/28 – 6/21 · {firstHalf.length} 場
          </span>
        </h2>
        <GameTable games={firstHalf} />
      </section>

      {/* 下半季 */}
      <section>
        <h2 className="mb-3 border-l-4 border-rakuten-gold pl-3 text-lg font-bold">
          下半季
          <span className="ml-2 text-sm font-normal text-neutral-400">
            7/10 – 9/9 · {secondHalf.length} 場
          </span>
        </h2>
        <GameTable games={secondHalf} />
      </section>

      {/* SEO 內容 */}
      <section className="rounded-xl bg-neutral-100 p-4 text-sm leading-relaxed text-neutral-600">
        <h3 className="mb-2 font-bold text-neutral-700">
          關於樂天桃猿主場 · 青埔棒球場
        </h3>
        <p>
          樂天桃園國際棒球場（青埔棒球場）位於桃園市中壢區，是中華職棒 CPBL
          樂天桃猿 Rakuten Monkeys 的主場。2026 賽季樂天桃猿在此進行 52
          場主場賽事，從 3 月底的開幕戰到 9 月的例行賽尾聲，每場比賽都能在
          <strong>黑松沙士快樂炒區</strong>
          享受由朵頤餐飲 × 股感 Stockfeel 聯名提供的頂級燒烤——和牛、帶骨牛小排、
          伊比利豬、活凍草蝦，邊看球邊烤肉，是全台最獨特的棒球觀賽體驗。
        </p>
        <p className="mt-2">
          無論你是 Team Taiwan 的忠實球迷，還是想體驗中職文化的新朋友，
          黑松沙士快樂炒區都歡迎你帶家人、朋友一起來青埔棒球場，感受最熱血的比賽氣氛。
        </p>
      </section>

      {/* 備註 */}
      <p className="text-center text-xs text-neutral-400">
        賽程資訊以中華職棒大聯盟及樂天桃猿官方公告為準，如遇天候因素可能調整。
      </p>
    </div>
  );
}

/* ─── 賽程表格元件 ─── */

function GameTable({ games }: { games: typeof homeGames }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {/* 表頭 — 桌機 */}
      <div className="hidden border-b border-neutral-100 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-500 sm:grid sm:grid-cols-[3rem_7rem_1fr_4.5rem]">
        <span>#</span>
        <span>日期</span>
        <span>對手</span>
        <span className="text-right">開賽</span>
      </div>

      {games.map((game, i) => {
        const weekend = isWeekend(game.dayOfWeek);
        return (
          <div
            key={game.id}
            className={`grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 px-4 py-2.5 text-sm sm:grid-cols-[3rem_7rem_1fr_4.5rem] ${
              i > 0 ? "border-t border-neutral-100" : ""
            } ${weekend ? "bg-rakuten-light/30" : ""}`}
          >
            {/* 場次 */}
            <span className="text-xs text-neutral-400">{game.id}</span>

            {/* 日期 */}
            <span className={`font-medium ${weekend ? "text-rakuten-crimson" : "text-neutral-800"}`}>
              {formatDate(game.date, game.dayOfWeek)}
            </span>

            {/* 對手 */}
            <span className="flex items-center gap-1.5">
              <span
                className={`inline-block rounded px-1.5 py-0.5 text-[11px] font-medium leading-tight ${teamColors[game.opponent]}`}
              >
                {teamShortNames[game.opponent]}
              </span>
              <span className="hidden text-neutral-600 sm:inline">
                {game.opponent}
              </span>
            </span>

            {/* 開賽時間 */}
            <span className="text-right text-neutral-500">{game.gameTime}</span>
          </div>
        );
      })}
    </div>
  );
}
