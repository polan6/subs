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
  description: "50人クラフト/ニート部のグループチャンネルの登録者数・再生回数・動画数を表示します。",
};


import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
				<Analytics/>
      </body>
    </html>
  );
}
