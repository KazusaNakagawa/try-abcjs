document.addEventListener('DOMContentLoaded', function() {
  console.log("window.ABCJS:", window.ABCJS);
  console.log("window.abcjs:", window.abcjs);
  if (window.ABCJS && window.ABCJS.renderAbc) {
    window.ABCJS.renderAbc("paper", "X:1\nK:C\nCDEF GABc|");
  } else if (window.abcjs && window.abcjs.renderAbc) {
    window.abcjs.renderAbc("paper", "X:1\nK:C\nCDEF GABc|");
  } else {
    alert("ABCJSが正しくロードされていません。scriptやパス、キャッシュを確認してください。");
  }

  // スコア全体の幅を調整
  const setScoreWidth = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.width = '80%';
      el.style.margin = '0 auto';
      el.style.display = 'block';
    }
  };

  // 基本譜面
  ABCJS.renderAbc("paper", `X: 1\nT: Fontaine\nM: 6/8\nL: 1/8\nK: Em\nQ: 170\n%%MIDI gchord fccfcc\n\"Em\"e3 \"Fm/E\"d2 c | \"Em\"B3~BEF | \"Am\"GAB AGE | \"B+\"G3 \"B7\"^F3 |\n\"Em\"e2 z \"Fm\"d2 c | \"Em\"B3~A9/C#\"BEF | \"Am\"GAB \"B7\"AGF | \"Em\"E3 zEF|\n\"Am7\"GFG \"D7\"A2d | \"Gmaj7\"B3 zEF| \"Am7\"GFG \"D7\"A2d | \"Gmaj7\"B3 zB^c|\n\"Bm\"d^cB\"F#m\"c2F | \"G\"BAG\"D\"A2D | \"Em\"GFE\"F#+\"D2^C | \"Bm\"B,6|`, {
    responsive: "resize"
    // scale: 1.0
  });
  setScoreWidth('paper');

  // オーディオ譜面
  const audioAbc = `X: 1\nT: Fontaine (Audio)\nM: 6/8\nL: 1/8\nK: Em\nQ: 170\n%%MIDI gchord fccfcc\n\"Em\"e3 \"Fm/E\"d2 c | \"Em\"B3~BEF | \"Am\"GAB AGE | \"B+\"G3 \"B7\"^F3 |\n\"Em\"e2 z \"Fm\"d2 c | \"Em\"B3~A9/C#\"BEF | \"Am\"GAB \"B7\"AGF | \"Em\"E3 zEF|\n\"Am7\"GFG \"D7\"A2d | \"Gmaj7\"B3 zEF| \"Am7\"GFG \"D7\"A2d | \"Gmaj7\"B3 zB^c|\n\"Bm\"d^cB\"F#m\"c2F | \"G\"BAG\"D\"A2D | \"Em\"GFE\"F#+\"D2^C | \"Bm\"B,6|`;
  const visualObjs = ABCJS.renderAbc("paper-audio", audioAbc, {
    responsive: "resize"
    // scale: 1.0
  });
  setScoreWidth('paper-audio');
  const synthControl = new ABCJS.synth.SynthController();
  synthControl.load("#audio-control", null, {
    displayRestart: true,
    displayPlay: true,
    displayProgress: true,
    displayWarp: true
  });
  synthControl.setTune(visualObjs[0], false).catch(function(error){
    console.warn("Synth setTune error:", error);
  });

  // シンプルな楽譜
  const simpleTune = `X: 2\nT: Simple Melody\nM: 4/4\nL: 1/4\nK: C\nCDEF | GABc | cBAG | FEDC |`;
  ABCJS.renderAbc("paper-simple", simpleTune, {
    responsive: "resize",
    scale: 1.2
  });
  setScoreWidth('paper-simple');

  // ガールズバンド風ギター譜面（3分程度、明るく疾走感のあるロック調）
  const girlsBandGuitar = `X: 4
T: Girls Band Rock
C: AI Composer
M: 4/4
L: 1/8
Q: 180
K: E
%%MIDI program 29
%%MIDI chordprog 29
V: Gtr clef=treble name="Guitar" snm="Gtr"
"E"E2 E2 G2 B2 | "A"A2 A2 c2 e2 | "B"B2 B2 d2 f2 | "E"e2 e2 g2 b2 |
"C#m"c2 c2 e2 g2 | "A"A2 A2 c2 e2 | "F#m"f2 f2 a2 c'2 | "B"B2 B2 d2 f2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |
"C#m"c2 e2 g2 c'2 | "A"A2 c2 e2 a2 | "F#m"f2 a2 c'2 f'2 | "B"B2 d2 f2 b2 |
"E"E2 G2 B2 e2 | "A"A2 c2 e2 a2 | "B"B2 d2 f2 b2 | "E"e2 g2 b2 e'2 |`;

  // ギター譜面を描画し、オーディオコントロールも付与
  const guitarVisualObjs = ABCJS.renderAbc("paper-tab", girlsBandGuitar, {
    responsive: "resize",
    scale: 1.0,
    tablature: [
      {
        instrument: "guitar",
        label: "Guitar",
        tuning: ["E,", "A,", "D", "G", "B", "e"]
      }
    ]
  });
  // ギター用オーディオコントローラ
  if (document.getElementById('audio-control-guitar') === null) {
    const audioDiv = document.createElement('div');
    audioDiv.id = 'audio-control-guitar';
    document.getElementById('paper-tab').parentNode.appendChild(audioDiv);
  }
  const synthControlGuitar = new ABCJS.synth.SynthController();
  synthControlGuitar.load("#audio-control-guitar", null, {
    displayRestart: true,
    displayPlay: true,
    displayProgress: true,
    displayWarp: true
  });
  synthControlGuitar.setTune(guitarVisualObjs[0], false).catch(function(error){
    console.warn("Guitar Synth setTune error:", error);
  });

  // クリックイベントの設定
  const papers = document.querySelectorAll('#paper, #paper-audio, #paper-simple, #paper-tab');
  papers.forEach(paper => {
    paper.addEventListener('click', function(e) {
      if (e.target.classList.contains('abcjs-note') || e.target.classList.contains('abcjs-chord')) {
        console.log('Clicked on:', e.target.textContent);
        e.target.style.fill = '#ff0000';
        setTimeout(() => {
          e.target.style.fill = '';
        }, 500);
      }
    });
  });

  // 楽譜の情報をコンソールに出力
  console.log('abcjs version:', ABCJS.version);
  console.log('Rendered tunes:', document.querySelectorAll('.abcjs-score').length);
}); 