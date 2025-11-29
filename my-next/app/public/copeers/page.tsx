// app/(public)/copeers/page.tsx
import Link from "next/link";

const mockCopeers = [
  {
    id: "c-001",
    name: "山本 凛",
    role: "数学 Copeer",
    school: "高知高専 電気情報工学科",
    badge: "Platinum Copeer",
    intro:
      "極限・微分を「グラフと言葉」で説明するのが得意。編入数学の“わからん”を一緒にほどいていきます。",
    focus: ["微分積分", "極限", "証明"],
  },
  {
    id: "c-002",
    name: "佐藤 海斗",
    role: "物理 Copeer",
    school: "香川高専 機械工学科",
    badge: "Gold Copeer",
    intro:
      "力学の図解とエネルギー視点の解説を担当。式だけじゃなく、イメージで腑に落ちる物理を目指してます。",
    focus: ["力学", "振動・波動"],
  },
  {
    id: "c-003",
    name: "中村 彩",
    role: "情報 Copeer",
    school: "高知高専 情報セキュリティ系",
    badge: "Gold Copeer",
    intro:
      "ネットワーク・セキュリティの基礎を“高専生のことば”で解説。暗記じゃなくて仕組みから理解したい人向け。",
    focus: ["ネットワーク", "情報セキュリティ"],
  },
  {
    id: "c-004",
    name: "田中 悠",
    role: "英語 Copeer",
    school: "徳山高専 制御情報工学科",
    badge: "Silver Copeer",
    intro:
      "編入英語の長文・英作文を担当。日本語での発想をどう英語に乗せるか、一緒に練習していきましょう。",
    focus: ["長文読解", "英作文"],
  },
];

export default function CopeersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:py-16">
        {/* ヘッダー */}
        <header className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
                Copeers - 解説でつながる先輩たち
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Copeers 紹介
              </h1>
              <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                「高専から編入せよ！」の
                <span className="font-semibold text-slate-100">
                  解説を書いている先輩・講師たち
                </span>
                のページです。自分の志望分野に近い Copeer を見つけて、
                解説を読んだり、どんなバックグラウンドの人がいるか覗いてみよう。
              </p>
            </div>

            {/* ホームに戻る */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
            >
              <span className="text-sm">⌂</span>
              <span>ホームに戻る</span>
            </Link>
          </div>

          {/* サブナビ */}
          <nav className="flex flex-wrap gap-2 text-xs text-slate-400">
            <Link
              href="/problems"
              className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-500 hover:text-slate-100"
            >
              解法アリーナ（解説を見る）
            </Link>
            <Link
              href="/colosseum"
              className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-500 hover:text-slate-100"
            >
              問題コロシアム（バトルモード）
            </Link>
          </nav>
        </header>

        {/* Copeerとは？ */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-lg shadow-black/30 md:p-6">
          <h2 className="text-sm font-semibold text-slate-100 md:text-base">
            Copeer ってなに？
          </h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
              Copeer は、
              <span className="font-semibold text-slate-100">
                「解説を書くことで理解を深め、知識を継承していく先輩たち」
              </span>
              の総称です。高専生・編入生・講師がそれぞれの得意分野で問題を作り、
              解説を投稿することで、次の世代の高専生をサポートします。
            </p>
            <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
              Copeer になるために、特別な肩書きは必要ありません。
              <span className="font-semibold text-slate-100">
                「自分の言葉で人に説明してみたい」
              </span>
              という気持ちと、誠実にフィードバックを受け取る姿勢があればOK。
              解説の質や貢献度に応じて Copias バッジが付与されます。
            </p>
          </div>
        </section>

        {/* Copeer カード一覧 */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-slate-100 md:text-base">
              注目の Copeers
            </h2>
            <p className="text-[11px] text-slate-400">
              実際のサービスでは DB から Copeer 情報を取得して表示します。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mockCopeers.map((copeer) => (
              <article
                key={copeer.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                {/* 背景グラデ */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/30 blur-3xl" />
                  <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-fuchsia-500/25 blur-3xl" />
                </div>

                <div className="relative z-10 space-y-3">
                  <header className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-cyan-300">
                        {copeer.role}
                      </p>
                      <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                        {copeer.name}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {copeer.school}
                      </p>
                    </div>
                    <span className="rounded-full border border-amber-400/70 bg-amber-500/10 px-2 py-1 text-[10px] font-semibold text-amber-200">
                      {copeer.badge}
                    </span>
                  </header>

                  <p className="text-xs leading-relaxed text-slate-200 md:text-sm">
                    {copeer.intro}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {copeer.focus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-200 group-hover:bg-slate-800/90"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>主な担当：解説付き問題・添削コメント</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                    >
                      この人の解説を見る
                      <span className="text-xs">↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Copeer に興味がある人向けの案内 */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300 shadow-lg shadow-black/40 md:p-6">
          <h2 className="text-sm font-semibold text-slate-100 md:text-base">
            自分も Copeer として参加したい人へ
          </h2>
          <p className="mt-2 leading-relaxed md:text-sm">
            近い将来、
            <span className="font-semibold text-slate-50">
              「Copeer 応募フォーム」や「試しに1問解説を書いてみるモード」
            </span>
            を公開予定です。現時点ではクローズド運用ですが、テスト参加に興味がある方は
            運営までお問い合わせください。
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-800 px-3 py-1">
              ・テクノゼミ講師経験者 / 大学生 Copeer 歓迎
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1">
              ・高専生でも参加できるトライアル枠を検討中
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
