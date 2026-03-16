import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "黑松沙士快樂炒區｜樂天桃猿主場燒烤菜單｜青埔棒球場 BBQ｜朵頤 × 股感",
  description:
    "樂天桃猿 Rakuten Monkeys 桃園國際棒球場（青埔棒球場）黑松沙士快樂炒區燒烤菜單。看中華職棒 CPBL 球賽邊烤和牛、牛排、海鮮！朵頤餐飲 × 股感 Stockfeel 聯名企劃，2026 賽季全主場 52 場次。席次介紹、場次查詢、線上購票一站搞定。",
  keywords: [
    "樂天桃猿",
    "Rakuten Monkeys",
    "中華職棒",
    "CPBL",
    "Team Taiwan",
    "青埔棒球場",
    "桃園國際棒球場",
    "黑松沙士快樂炒區",
    "棒球場燒烤",
    "BBQ",
    "棒球場美食",
    "朵頤",
    "股感",
    "Stockfeel",
    "看棒球吃燒烤",
    "球場烤肉",
    "中職",
    "桃猿主場",
    "棒球場菜單",
    "2026 CPBL",
  ],
  openGraph: {
    title: "黑松沙士快樂炒區｜樂天桃猿主場燒烤菜單",
    description:
      "在青埔棒球場看中華職棒樂天桃猿，邊看球邊烤和牛、海鮮！朵頤 × 股感聯名，52 場主場全程供應。",
    locale: "zh_TW",
    type: "website",
    siteName: "朵頤 × 股感｜黑松沙士快樂炒區",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/** JSON-LD 結構化資料 — 棒球場餐廳 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "黑松沙士快樂炒區",
  description:
    "樂天桃猿 Rakuten Monkeys 桃園國際棒球場（青埔棒球場）內的露天燒烤區，由朵頤餐飲 × 股感 Stockfeel 聯名營運。中華職棒 CPBL 2026 賽季全主場 52 場次供應和牛、牛排、海鮮燒烤。",
  image: "/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "桃園市中壢區領航北路一段1號",
    addressLocality: "桃園市",
    addressRegion: "台灣",
    postalCode: "320",
    addressCountry: "TW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.0063,
    longitude: 121.2169,
  },
  servesCuisine: ["燒烤", "BBQ", "和牛", "海鮮"],
  containedInPlace: {
    "@type": "StadiumOrArena",
    name: "樂天桃猿棒球場（桃園國際棒球場）",
    alternateName: "青埔棒球場",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} min-h-screen bg-neutral-50 font-sans antialiased`}
      >
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
