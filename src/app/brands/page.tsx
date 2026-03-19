import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title:
    "食材品牌介紹｜黑松沙士快樂炒區｜樂天桃猿主場｜青埔棒球場｜股感 Stockfeel",
  description:
    "黑松沙士快樂炒區精選食材品牌——全州喜比食堂 168 小時熟成豬、汰暉全球嚴選肉品、陞煇 78 年台灣雲林豬、御正人道飼養白肉雞、路邊烤肉 Wildbbq。每一口都有來歷。",
};

export default function BrandsPage() {
  return (
    <div className="space-y-8">
      {/* 頁面標題 */}
      <div>
        <Link
          href="/"
          className="mb-3 inline-flex items-center gap-1 text-sm text-rakuten-crimson hover:underline"
        >
          ← 回菜單
        </Link>

        {/* 場地主視覺 */}
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <Image
            src="/images/venue-spread-1.jpg"
            alt="黑松沙士快樂炒區精選食材擺盤"
            width={1200}
            height={630}
            className="w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-4 left-5 text-lg font-bold text-white drop-shadow-md">
            嚴選食材，每一口都有來歷
          </p>
        </div>

        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          食材品牌介紹
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          每一份食材都有名字，每一個品牌都有堅持。
        </p>
      </div>

      {/* 品牌列表 */}
      <div className="space-y-6">
        {brands.map((brand, i) => (
          <section
            key={brand.nameEn}
            className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
          >
            {/* 品牌標頭 */}
            <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-4">
              <p className="text-[11px] font-medium tracking-widest text-neutral-400">
                {brand.nameEn}
              </p>
              <h2 className="mt-0.5 text-lg font-bold text-neutral-900">
                {brand.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-rakuten-crimson">
                {brand.tagline}
              </p>
            </div>

            {/* 品牌內容 */}
            <div className="px-5 py-4">
              <div className="space-y-2">
                {brand.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed text-neutral-600"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* 代表品項 */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium text-neutral-400">
                  菜單品項
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {brand.menuItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-rakuten-light px-2.5 py-0.5 text-xs font-medium text-rakuten-dark"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 品牌連結 */}
            {brand.url && (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 border-t border-neutral-100 bg-neutral-50/50 px-4 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
              >
                了解更多 {brand.name}
                <span className="text-[10px] text-neutral-400">↗</span>
              </a>
            )}
          </section>
        ))}
      </div>

      {/* 底部導流 */}
      <div className="space-y-3">
        <Link
          href="/"
          className="flex items-center justify-between rounded-xl bg-rakuten-crimson p-4 text-white shadow-sm transition-shadow hover:shadow-md"
        >
          <div>
            <p className="text-sm font-medium text-white/80">
              認識了品牌，來看看菜單
            </p>
            <p className="text-lg font-bold">瀏覽完整燒烤菜單</p>
          </div>
          <span className="text-2xl">→</span>
        </Link>

        <a
          href="https://ticket.ibon.com.tw/ActivityInfo/Details/39428"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl border border-rakuten-crimson p-4 text-rakuten-crimson transition-colors hover:bg-rakuten-light/50"
        >
          <div>
            <p className="text-sm text-neutral-500">
              想親自嚐嚐這些品牌的味道？
            </p>
            <p className="text-lg font-bold">立即購買快樂炒區門票</p>
          </div>
          <span className="text-2xl">→</span>
        </a>
      </div>
    </div>
  );
}
