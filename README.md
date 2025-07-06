# abcjs 試し

abcjs ライブラリを使用して ABC 音楽記譜法で楽譜を表示。

## 概要

- **abcjs**: ABC 音楽記譜法のレンダリングライブラリ
- **楽曲**: Fontaine (6/8拍子、Em調、170BPM)
- **機能**: 楽譜表示、コード進行表示、オーディオ再生

## セットアップ

### 1. 依存関係のインストール

```bash
npm install --save abcjs
```

### 2. abcjs のJS/CSSを `libs/` ディレクトリにコピー

静的サーバーから確実に配信するため、`node_modules` から必要なファイルを `libs/` にコピーします。

```bash
mkdir -p libs
cp node_modules/abcjs/dist/abcjs-basic-min.js libs/
cp node_modules/abcjs/abcjs-audio.css libs/
```

### 3. ファイル構成

```
abcjs-prj/
├── index.html          # メインHTMLファイル
├── script.js           # JavaScriptファイル（楽譜描画）
├── test.md             # ABC記譜法の楽譜データ
├── libs/               # abcjsのJS/CSSを格納
│   ├── abcjs-basic-min.js
│   └── abcjs-audio.css
├── package.json        # プロジェクト設定
├── .gitignore          # Git管理除外ファイル
└── node_modules/       # 依存関係
```

### 4. ローカルサーバーの起動

```bash
npx serve . -l 5173
```

ブラウザで http://localhost:5173 を開いて確認してください。

## 使用方法

### 基本的な楽譜表示

```javascript
ABCJS.renderAbc("paper", `X: 1
T: Fontaine
M: 6/8
L: 1/8
K: Em
Q: 170
%%MIDI gchord fccfcc
"Em"e3 "Fm/E"d2 c | "Em"B3~BEF | "Am"GAB AGE | "B+"G3 "B7"^F3 |
"Em"e2 z "Fm"d2 c | "Em"B3~A9/C#"BEF | "Am"GAB "B7"AGF | "Em"E3 zEF|
"Am7"GFG "D7"A2d | "Gmaj7"B3 zEF| "Am7"GFG "D7"A2d | "Gmaj7"B3 zB^c|
"Bm"d^cB"F#m"c2F | "G"BAG"D"A2D | "Em"GFE"F#+"D2^C | "Bm"B,6|`);
```

### オーディオ再生機能

`abcjs-basic-min.js` にはオーディオ再生機能も含まれています。譜面描画後、`ABCJS.synth.SynthController` を使って再生UIを表示できます。

## .gitignore について

- `node_modules/` や各種ログ、OS・エディタ固有ファイルを除外
- `libs/` ディレクトリは基本除外しつつ、abcjsの必要ファイル（`abcjs-*.js` と `abcjs-audio.css`）はバージョン管理対象
- `.env` などの環境変数ファイルやビルド成果物も除外

## 参考リンク

- [abcjs 公式ドキュメント](https://paulrosen.github.io/abcjs/overview/getting-started.html)
- [ABC記譜法について](https://abcnotation.com/)

## 技術仕様

- **ライブラリ**: abcjs 6.5.1
- **配布形式**: UMD (ブラウザ直接読み込み)
- **ファイル**: `libs/abcjs-basic-min.js`, `libs/abcjs-audio.css`
