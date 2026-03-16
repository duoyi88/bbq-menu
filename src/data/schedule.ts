/**
 * 2026 中華職棒 CPBL 樂天桃猿主場賽程
 *
 * 樂天桃園棒球場（青埔棒球場）52 場主場賽事
 * 資料來源：商業周刊 2026 中職完整賽程、NOWnews 2026 賽程懶人包
 */

/** CPBL 對戰球隊 */
export type CpblTeam =
  | "中信兄弟"
  | "統一7-ELEVEn獅"
  | "富邦悍將"
  | "味全龍"
  | "台鋼雄鷹";

/** 主場賽事 */
export interface HomeGame {
  /** 場次編號 */
  id: number;
  /** 日期 YYYY-MM-DD */
  date: string;
  /** 星期 */
  dayOfWeek: string;
  /** 對手球隊 */
  opponent: CpblTeam;
  /** 開賽時間 */
  gameTime: string;
  /** 上/下半季 */
  half: "上半季" | "下半季";
}

/** 對手球隊縮寫對照（UI 顯示用） */
export const teamShortNames: Record<CpblTeam, string> = {
  中信兄弟: "兄弟",
  "統一7-ELEVEn獅": "統一獅",
  富邦悍將: "悍將",
  味全龍: "味全",
  台鋼雄鷹: "雄鷹",
};

/** 對手球隊代表色（UI badge 用） */
export const teamColors: Record<CpblTeam, string> = {
  中信兄弟: "bg-yellow-500 text-black",
  "統一7-ELEVEn獅": "bg-orange-500 text-white",
  富邦悍將: "bg-blue-700 text-white",
  味全龍: "bg-red-600 text-white",
  台鋼雄鷹: "bg-emerald-700 text-white",
};

/** 2026 完整 52 場主場賽程 */
export const homeGames: HomeGame[] = [
  // ── 上半季（3/28 – 6/21）──
  { id: 1, date: "2026-03-28", dayOfWeek: "六", opponent: "中信兄弟", gameTime: "17:05", half: "上半季" },
  { id: 2, date: "2026-03-29", dayOfWeek: "日", opponent: "味全龍", gameTime: "17:05", half: "上半季" },
  { id: 3, date: "2026-03-31", dayOfWeek: "二", opponent: "台鋼雄鷹", gameTime: "18:35", half: "上半季" },
  { id: 4, date: "2026-04-01", dayOfWeek: "三", opponent: "台鋼雄鷹", gameTime: "18:35", half: "上半季" },
  { id: 5, date: "2026-04-10", dayOfWeek: "五", opponent: "中信兄弟", gameTime: "18:35", half: "上半季" },
  { id: 6, date: "2026-04-11", dayOfWeek: "六", opponent: "中信兄弟", gameTime: "17:05", half: "上半季" },
  { id: 7, date: "2026-04-12", dayOfWeek: "日", opponent: "中信兄弟", gameTime: "17:05", half: "上半季" },
  { id: 8, date: "2026-04-15", dayOfWeek: "三", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "上半季" },
  { id: 9, date: "2026-04-16", dayOfWeek: "四", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "上半季" },
  { id: 10, date: "2026-04-21", dayOfWeek: "二", opponent: "富邦悍將", gameTime: "18:35", half: "上半季" },
  { id: 11, date: "2026-04-22", dayOfWeek: "三", opponent: "富邦悍將", gameTime: "18:35", half: "上半季" },
  { id: 12, date: "2026-04-24", dayOfWeek: "五", opponent: "味全龍", gameTime: "18:35", half: "上半季" },
  { id: 13, date: "2026-04-25", dayOfWeek: "六", opponent: "味全龍", gameTime: "17:05", half: "上半季" },
  { id: 14, date: "2026-04-26", dayOfWeek: "日", opponent: "味全龍", gameTime: "17:05", half: "上半季" },
  { id: 15, date: "2026-05-08", dayOfWeek: "五", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "上半季" },
  { id: 16, date: "2026-05-09", dayOfWeek: "六", opponent: "統一7-ELEVEn獅", gameTime: "17:05", half: "上半季" },
  { id: 17, date: "2026-05-10", dayOfWeek: "日", opponent: "統一7-ELEVEn獅", gameTime: "17:05", half: "上半季" },
  { id: 18, date: "2026-05-20", dayOfWeek: "三", opponent: "中信兄弟", gameTime: "18:35", half: "上半季" },
  { id: 19, date: "2026-05-22", dayOfWeek: "五", opponent: "富邦悍將", gameTime: "18:35", half: "上半季" },
  { id: 20, date: "2026-05-23", dayOfWeek: "六", opponent: "富邦悍將", gameTime: "17:05", half: "上半季" },
  { id: 21, date: "2026-05-24", dayOfWeek: "日", opponent: "富邦悍將", gameTime: "17:05", half: "上半季" },
  { id: 22, date: "2026-05-29", dayOfWeek: "五", opponent: "台鋼雄鷹", gameTime: "18:35", half: "上半季" },
  { id: 23, date: "2026-05-30", dayOfWeek: "六", opponent: "台鋼雄鷹", gameTime: "17:05", half: "上半季" },
  { id: 24, date: "2026-05-31", dayOfWeek: "日", opponent: "台鋼雄鷹", gameTime: "17:05", half: "上半季" },
  { id: 25, date: "2026-06-03", dayOfWeek: "三", opponent: "味全龍", gameTime: "18:35", half: "上半季" },
  { id: 26, date: "2026-06-10", dayOfWeek: "三", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "上半季" },
  { id: 27, date: "2026-06-18", dayOfWeek: "四", opponent: "味全龍", gameTime: "18:35", half: "上半季" },
  { id: 28, date: "2026-06-19", dayOfWeek: "五", opponent: "味全龍", gameTime: "18:35", half: "上半季" },
  { id: 29, date: "2026-06-20", dayOfWeek: "六", opponent: "富邦悍將", gameTime: "17:05", half: "上半季" },
  { id: 30, date: "2026-06-21", dayOfWeek: "日", opponent: "富邦悍將", gameTime: "17:05", half: "上半季" },
  // ── 下半季（7/10 – 9/9）──
  { id: 31, date: "2026-07-10", dayOfWeek: "五", opponent: "台鋼雄鷹", gameTime: "18:35", half: "下半季" },
  { id: 32, date: "2026-07-11", dayOfWeek: "六", opponent: "台鋼雄鷹", gameTime: "17:05", half: "下半季" },
  { id: 33, date: "2026-07-12", dayOfWeek: "日", opponent: "台鋼雄鷹", gameTime: "17:05", half: "下半季" },
  { id: 34, date: "2026-07-15", dayOfWeek: "三", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "下半季" },
  { id: 35, date: "2026-07-16", dayOfWeek: "四", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "下半季" },
  { id: 36, date: "2026-07-24", dayOfWeek: "五", opponent: "富邦悍將", gameTime: "18:35", half: "下半季" },
  { id: 37, date: "2026-07-25", dayOfWeek: "六", opponent: "富邦悍將", gameTime: "17:05", half: "下半季" },
  { id: 38, date: "2026-07-26", dayOfWeek: "日", opponent: "富邦悍將", gameTime: "17:05", half: "下半季" },
  { id: 39, date: "2026-07-29", dayOfWeek: "三", opponent: "中信兄弟", gameTime: "18:35", half: "下半季" },
  { id: 40, date: "2026-07-30", dayOfWeek: "四", opponent: "中信兄弟", gameTime: "18:35", half: "下半季" },
  { id: 41, date: "2026-08-07", dayOfWeek: "五", opponent: "味全龍", gameTime: "18:35", half: "下半季" },
  { id: 42, date: "2026-08-08", dayOfWeek: "六", opponent: "味全龍", gameTime: "17:05", half: "下半季" },
  { id: 43, date: "2026-08-09", dayOfWeek: "日", opponent: "味全龍", gameTime: "17:05", half: "下半季" },
  { id: 44, date: "2026-08-18", dayOfWeek: "二", opponent: "富邦悍將", gameTime: "18:35", half: "下半季" },
  { id: 45, date: "2026-08-19", dayOfWeek: "三", opponent: "富邦悍將", gameTime: "18:35", half: "下半季" },
  { id: 46, date: "2026-08-28", dayOfWeek: "五", opponent: "統一7-ELEVEn獅", gameTime: "18:35", half: "下半季" },
  { id: 47, date: "2026-08-29", dayOfWeek: "六", opponent: "統一7-ELEVEn獅", gameTime: "17:05", half: "下半季" },
  { id: 48, date: "2026-08-30", dayOfWeek: "日", opponent: "統一7-ELEVEn獅", gameTime: "17:05", half: "下半季" },
  { id: 49, date: "2026-09-02", dayOfWeek: "三", opponent: "味全龍", gameTime: "18:35", half: "下半季" },
  { id: 50, date: "2026-09-03", dayOfWeek: "四", opponent: "味全龍", gameTime: "18:35", half: "下半季" },
  { id: 51, date: "2026-09-08", dayOfWeek: "二", opponent: "台鋼雄鷹", gameTime: "18:35", half: "下半季" },
  { id: 52, date: "2026-09-09", dayOfWeek: "三", opponent: "台鋼雄鷹", gameTime: "18:35", half: "下半季" },
];
