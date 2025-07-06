# abcjs プロジェクト

abcjs ライブラリを使用して ABC 音楽記譜法で楽譜を表示するプロジェクトです。

## 概要

- **abcjs**: ABC 音楽記譜法のレンダリングライブラリ
- **楽曲**: Fontaine (6/8拍子、Em調、170BPM)
- **機能**: 楽譜表示、コード進行表示

## セットアップ

### 1. 依存関係のインストール

```bash
npm install --save abcjs
```

### 2. ファイル構成

```
abcjs-prj/
├── index.html          # メインHTMLファイル
├── script.js           # JavaScriptファイル（楽譜描画）
├── test.md             # ABC記譜法の楽譜データ
├── package.json        # プロジェクト設定
└── node_modules/       # 依存関係
```

### 3. ローカルサーバーの起動

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

### ABC記譜法の要素

- **X**: 曲番号
- **T**: タイトル
- **M**: 拍子記号
- **L**: デフォルト音符の長さ
- **K**: 調号
- **Q**: テンポ
- **%%MIDI**: MIDI関連の設定
- **"コード名"**: コード進行

## 参考リンク

- [abcjs 公式ドキュメント](https://paulrosen.github.io/abcjs/overview/getting-started.html)
- [ABC記譜法について](https://abcnotation.com/)

## 技術仕様

- **ライブラリ**: abcjs 6.5.1
- **配布形式**: UMD (ブラウザ直接読み込み)
- **ファイル**: `node_modules/abcjs/dist/abcjs-basic-min.js`
