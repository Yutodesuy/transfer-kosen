// app/public/co-edit/new/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const initialMarkdown = `# 問題タイトル（例：極限と微分の「0/0」の本質を押さえる問題）

## 問題のねらい
この問題を通して、学んでほしいポイント・狙いを書きます。

- 例：0/0 型の極限を、「計算できない」ではなく「関数の形を読み解くサイン」として捉えること
- 例：因数分解やグラフのイメージと結びつけること など

## 問題文
ここに問題文（または概要）を書きます。
実際の画像は別途アップロードされる前提で、「どんな問題か」が分かるようにまとめます。

## 解説
### 1. まずは素直に計算してみる

途中式・考え方・図のイメージを、できるだけ「自分の言葉」で説明してください。

### 2. グラフ・イメージとのつながり

グラフの形、x→a のときの様子など、「頭の中でどう見えているか」も説明すると、
読む人が理解しやすくなります。

### 3. ここが本質！

- 公式の丸暗記ではなく、なぜそうなるのか
- 他の問題にも応用できる視点

などを書いてみましょう。

## よくあるミス
- 例：0/0 型になった瞬間に「極限は存在しない」と決めつけてしまう。
- 例：約分できるのに、いきなりロピタルを使おうとする。 など

## ポイントのまとめ
1. この問題で一番大事な一文
2. 他の問題でも使える視点
3. 後輩に一言メッセージがあるとなお良いです。`;

function renderMarkdown(md: string) {
  const blocks = md.split("\n\n");

  return blocks.map((block, idx) => {
    // 見出し level 1
    if (block.startsWith("# ")) {
      const text = block.replace(/^# /, "");
      return (
        <h1
          key={idx}
          className="mt-4 mb-2 border-b border-gray-300 pb-1 text-2xl font-bold text-black"
        >
          {text}
        </h1>
      );
    }

    // 見出し level 2
    if (block.startsWith("## ")) {
      const text = block.replace(/^## /, "");
      return (
        <h2
          key={idx}
          className="mt-4 mb-2 text-xl font-semibold text-black"
        >
          {text}
        </h2>
      );
    }

    // 見出し level 3
    if (block.startsWith("### ")) {
      const text = block.replace(/^### /, "");
      return (
        <h3
          key={idx}
          className="mt-3 mb-1 text-lg font-semibold text-black"
        >
          {text}
        </h3>
      );
    }

    // 箇条書き
    if (block.trim().startsWith("- ")) {
      const lines = block.split("\n").filter((l) => l.trim().startsWith("- "));
      return (
        <ul
          key={idx}
          className="my-2 list-disc list-inside space-y-1 text-sm text-black"
        >
          {lines.map((line, i) => (
            <li key={i}>{line.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }

    // 番号付きリスト
    if (block.trim().match(/^[0-9]+\. /)) {
      const lines = block
        .split("\n")
        .filter((l) => l.trim().match(/^[0-9]+\. /));
      return (
        <ol
          key={idx}
          className="my-2 list-decimal list-inside space-y-1 text-sm text-black"
        >
          {lines.map((line, i) => (
            <li key={i}>{line.replace(/^[0-9]+\. /, "")}</li>
          ))}
        </ol>
      );
    }

    // 通常テキスト
    return (
      <p
        key={idx}
        className="my-2 whitespace-pre-wrap text-sm leading-relaxed text-black"
      >
        {block}
      </p>
    );
  });
}

export default function CoEditNewPage() {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [fullscreen, setFullscreen] = useState(false);

  const handleSubmit = () => {
    console.log("投稿内容（Markdown）:", markdown);
    alert(
      "今はデモ版なので、実際の投稿はまだ実装していません。\nでも、この内容で「添削お願い」投稿がされるイメージです！"
    );
  };

  return (
    <main className="relative min-h-screen bg-slate-950 py-8 px-4 text-slate-50">
      <div className="mx-auto max-w-6xl space-y-6 pb-24">
        {/* 上部：戻る導線＋タイトル */}
        <div className="flex items-center justify-between">
          <Link
            href="/public/co-edit"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-300 transition hover:border-fuchsia-500 hover:text-fuchsia-300"
          >
            <span className="text-lg leading-none">←</span>
            <span>Co-Edit に戻る</span>
          </Link>

          <span className="text-[11px] text-slate-500">
            新規解説 / Co-Edit Editor
          </span>
        </div>

        <header className="space-y-1">
          <h1 className="text-2xl font-bold">Co-Edit Editor</h1>
          <p className="text-sm text-slate-400">
            左側でマークダウン形式で解説を書き、右側でプレビューを確認できます。
          </p>
        </header>

        {/* メイン：2カラム（入力 / プレビュー） */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* 左：Markdown入力 */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100">
                ✍️ 解説入力（Markdown）
              </h2>
              <span className="text-[11px] text-slate-500">
                テンプレは自由に書き換えてOK
              </span>
            </div>

            <textarea
              className="mt-3 h-[70vh] w-full flex-1 resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>

          {/* 右：プレビュー（白背景＋黒文字・全画面対応） */}
          <div
            className={`flex flex-col border border-slate-800 bg-slate-900/70 p-4 transition ${
              fullscreen
                ? "fixed inset-0 z-50 m-0 rounded-none bg-white text-black"
                : "rounded-2xl"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2
                className={`text-sm font-semibold ${
                  fullscreen ? "text-black" : "text-slate-100"
                }`}
              >
                👀 プレビュー
              </h2>

              {/* 全画面トグルボタン */}
              <button
                type="button"
                onClick={() => setFullscreen((prev) => !prev)}
                className={`rounded-full p-1.5 text-slate-300 transition hover:text-fuchsia-500 ${
                  fullscreen ? "hover:bg-slate-200" : "hover:bg-slate-800"
                }`}
                title={fullscreen ? "全画面を閉じる" : "全画面表示にする"}
              >
                {/* フルスクリーン風アイコン（画像のイメージ） */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M9 3H5a2 2 0 0 0-2 2v4" />
                  <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                  <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
                  <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
                </svg>
              </button>
            </div>

            <div
              className={`mt-3 flex-1 overflow-auto rounded-xl border border-gray-300 bg-white px-4 py-3 text-black ${
                fullscreen ? "" : "h-[70vh]"
              }`}
              style={fullscreen ? { height: "calc(100vh - 96px)" } : undefined}
            >
              {renderMarkdown(markdown)}
            </div>
          </div>
        </section>
      </div>

      {/* 右下：投稿ボタン */}
      <button
        type="button"
        onClick={handleSubmit}
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-fuchsia-500/40 transition hover:bg-fuchsia-700 hover:shadow-fuchsia-500/60 active:scale-95"
      >
        <span>📤 投稿（添削お願い）をする</span>
      </button>
    </main>
  );
}
