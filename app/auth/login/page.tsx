// app/auth/login/page.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 md:flex-row md:items-center md:gap-12">

        {/* 左側 */}
        <section className="flex-1 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs text-slate-400 hover:text-slate-200"
          >
            ← ホームに戻る
          </Link>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Login
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              コピアとして、
              <span className="block text-cyan-300">
                解説アリーナにログイン。
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              「高専から編入せよ！」のアカウントでログインすると、
              解説の投稿・編集・コメント・ハートなど、
              協働学習に参加できます。
            </p>
          </div>

          <ul className="space-y-2 text-xs text-slate-300">
            <li>・自分の解説を「資産」としてストック</li>
            <li>・先輩コピアや講師からフィードバック</li>
            <li>・テクノゼミ生は演習・模試ページにもアクセス</li>
          </ul>
        </section>

        {/* 右側：ログインフォーム */}
        <section className="mt-8 flex-1 md:mt-0">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/70">
            <h2 className="text-sm font-semibold text-slate-100">
              アカウントでログイン
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              まだアカウントがない場合は、下の「新規登録」から。
            </p>

            <form className="mt-6 space-y-4">

              {/* メール */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-200"
                >
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="example@kosen.ac.jp"
                />
              </div>

              {/* パスワード */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-slate-200"
                  >
                    パスワード
                  </label>
                  <button
                    type="button"
                    className="text-[11px] text-slate-400 hover:text-slate-200"
                  >
                    パスワードをお忘れですか？
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
              >
                ログインして参加する
              </button>
            </form>

            <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">アカウントを持っていませんか？</span>
                <Link
                  href="/auth/register"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  新規登録へ →
                </Link>
              </div>

              <p className="text-[11px] text-slate-500">
                ※ テクノゼミ生は、配布されたメールアドレスでの登録・ログインを推奨しています。
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
