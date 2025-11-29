// app/layout.tsx
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "高専から編入せよ！",
  description: "co-studyで編入合格まで最速で到達する学習プラットフォーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {/* ====== 主張の激しいヘッダー ====== */}
        <header className="relative z-30">
          {/* ペンキ飛び散り風の背景 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 左上の爆発 */}
            <div className="absolute -top-16 -left-20 h-64 w-64 bg-fuchsia-500/70 blur-3xl rounded-full animate-pulse" />

            {/* 右側のネオングラデーション */}
            <div className="absolute top-0 right-0 h-60 w-96 bg-gradient-to-l from-cyan-500/70 to-blue-500/70 blur-2xl rotate-12" />

            {/* 下部の波形（SVG） */}
            <svg
              className="absolute bottom-0 left-0 w-full"
              height="90"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#0f172a"
                fillOpacity="1"
                d="M0,128L60,133.3C120,139,240,149,360,176C480,203,600,245,720,234.7C840,224,960,160,1080,149.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L0,320Z"
              />
            </svg>
          </div>

          {/* 実ヘッダー内容 */}
          <div className="relative mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            {/* ロゴ部分 */}
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black tracking-tight">
                高専から編入せよ！
              </span>
            </div>

            {/* ボタン（押したくなる系） */}
            <button
              className="px-6 py-2 rounded-xl text-lg font-semibold 
              bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 
              text-white shadow-[0_0_20px_rgba(255,0,255,0.5)]
              hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] 
              hover:scale-105 active:scale-95 transition-all duration-200"
            >
              はじめる
            </button>
          </div>
        </header>

        {/* コンテンツ本体 */}
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
