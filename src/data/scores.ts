// 楽譜データ
export const scores = {
  fontaine: {
    id: "paper",
    title: "1. 基本楽譜 (Fontaine)",
    abcNotation: `X: 1
T: Fontaine
M: 6/8
L: 1/8
K: Em
Q: 170
%%MIDI gchord fccfcc
"Em"e3 "Fm/E"d2 c | "Em"B3~BEF | "Am"GAB AGE | "B+"G3 "B7"^F3 |
"Em"e2 z "Fm"d2 c | "Em"B3~A9/C#"BEF | "Am"GAB "B7"AGF | "Em"E3 zEF|
"Am7"GFG "D7"A2d | "Gmaj7"B3 zEF| "Am7"GFG "D7"A2d | "Gmaj7"B3 zB^c|
"Bm"d^cB"F#m"c2F | "G"BAG"D"A2D | "Em"GFE"F#+"D2^C | "Bm"B,6|`,
    showAudio: false
  },
  fontaineAudio: {
    id: "paper-audio",
    title: "2. オーディオ再生付き楽譜",
    abcNotation: `X: 1
T: Fontaine (Audio)
M: 6/8
L: 1/8
K: Em
Q: 170
%%MIDI gchord fccfcc
"Em"e3 "Fm/E"d2 c | "Em"B3~BEF | "Am"GAB AGE | "B+"G3 "B7"^F3 |
"Em"e2 z "Fm"d2 c | "Em"B3~A9/C#"BEF | "Am"GAB "B7"AGF | "Em"E3 zEF|
"Am7"GFG "D7"A2d | "Gmaj7"B3 zEF| "Am7"GFG "D7"A2d | "Gmaj7"B3 zB^c|
"Bm"d^cB"F#m"c2F | "G"BAG"D"A2D | "Em"GFE"F#+"D2^C | "Bm"B,6|`,
    showAudio: true
  },
  simple: {
    id: "paper-simple",
    title: "3. シンプルなメロディー",
    abcNotation: `X: 2
T: Simple Melody
M: 4/4
L: 1/4
K: C
CDEF | GABc | cBAG | FEDC |`,
    showAudio: true,
    scale: 1.2
  }
}; 