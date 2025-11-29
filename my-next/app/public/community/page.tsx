// app/(public)/community/page.tsx
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 space-y-12">
        {/* 戻るボタン */}
        <Link
          href="/"
          className="inline-flex items-center text-xs text-slate-400 hover:text-slate-200"
        >
          ← ホームに戻る
        </Link>

        {/* タイトル */}
        <section>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            コミュニティ & テクノゼミについて
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            「高専から編入せよ！」は、高専生の学習と挑戦を支えるコミュニティです。
            特にオンライン塾
            <span className="font-semibold text-slate-100"> テクノゼミ </span>
            と連携し、編入数学・物理・情報の学習から進路支援まで、一貫してサポートします。
          </p>
        </section>

        {/* テクノゼミとは？ */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/70">
          <h2 className="text-xl font-semibold text-slate-100">
            テクノゼミとは？
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            テクノゼミは、高専生の「編入学」を圧倒的に近道にするための
            オンライン学習ゼミです。
            授業は編入試験に直結する
            <span className="font-semibold text-slate-100"> 数学・物理・情報 </span>
            の3本柱に特化し、専門の講師によるライブ授業・添削・模試を通して
            「説明できる理解」を身につけることを重視しています。
          </p>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            また、全国の高専生とつながるコミュニティとして、
            限定イベント・勉強会・進路相談などのサポートも充実しています。
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            {/* テクノゼミ公式サイトへ */}
            <a
              href="https://techno-semi.com" // 後で本物に変えてOK
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
            >
              テクノゼミ公式ホームページへ
              <span className="ml-1.5 text-xs">→</span>
            </a>

            <p className="text-xs text-slate-400">
              外部サイトへ移動します。
            </p>
          </div>
        </section>

        {/* テクノゼミ生の特典 */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/70">
          <h2 className="text-xl font-semibold text-slate-100">
            テクノゼミ生限定の特典
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              ・「高専から編入せよ！」内の
              <span className="text-slate-100 font-semibold"> 演習ページ（practice）</span>
              のフルアクセス
            </li>
            <li>
              ・編入数学／物理の
              <span className="text-slate-100 font-semibold"> 模試（mock）</span>
              をオンライン受験可能
            </li>
            <li>
              ・講師による
              <span className="text-slate-100 font-semibold"> 解説の添削・フィードバック優先権</span>
            </li>
            <li>
              ・学習進捗に応じた
              <span className="text-slate-100 font-semibold"> 個別アドバイス・質問対応</span>
            </li>
            <li>
              ・限定勉強会・進路相談会などの
              <span className="text-slate-100 font-semibold"> コミュニティ特典</span>
            </li>
          </ul>

          <p className="mt-4 text-xs text-slate-400">
            ※ テクノゼミ生はログイン後、自動的に特典が反映されます。
          </p>
        </section>
      </div>
    </main>
  );
}
