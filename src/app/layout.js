import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "50人クラフトの統計",
  description: "このサイトは50人クラフト/ニート部のメインチャンネル・参加勢のグループチャンネル・参加勢の個人チャンネルの登録者数・再生回数・動画数などを表示します。また、新着動画の一覧も見ることができます。",
};


import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
			<head>
				<meta name="google-site-verification" content="yYTYpswWG10laX1mhOoVHZYI1jbcTfKZb8VvNjMsRlc" />
			</head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
				<Analytics/>
      </body>
    </html>
  );
}
