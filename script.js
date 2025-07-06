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

  // オーディオ譜面
  const audioAbc = `X: 1\nT: Fontaine (Audio)\nM: 6/8\nL: 1/8\nK: Em\nQ: 170\n%%MIDI gchord fccfcc\n\"Em\"e3 \"Fm/E\"d2 c | \"Em\"B3~BEF | \"Am\"GAB AGE | \"B+\"G3 \"B7\"^F3 |\n\"Em\"e2 z \"Fm\"d2 c | \"Em\"B3~A9/C#\"BEF | \"Am\"GAB \"B7\"AGF | \"Em\"E3 zEF|\n\"Am7\"GFG \"D7\"A2d | \"Gmaj7\"B3 zEF| \"Am7\"GFG \"D7\"A2d | \"Gmaj7\"B3 zB^c|\n\"Bm\"d^cB\"F#m\"c2F | \"G\"BAG\"D\"A2D | \"Em\"GFE\"F#+\"D2^C | \"Bm\"B,6|`;
  const visualObjs = ABCJS.renderAbc("paper-audio", audioAbc, {
    responsive: "resize"
  });
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

  // タブ譜
  const tabTune = `X: 3\nT: Guitar Tab Example\nM: 4/4\nL: 1/4\nK: G\n\"G\"G2 \"D\"d2 | \"G\"G2 \"D\"d2 | \"C\"c2 \"G\"g2 | \"D\"d4 |`;
  ABCJS.renderAbc("paper-tab", tabTune, {
    responsive: "resize",
    tablature: [
      {
        instrument: "guitar",
        label: "Guitar",
        tuning: ["E,", "A,", "D", "G", "B", "e"]
      }
    ]
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