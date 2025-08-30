// abcjsの型定義
declare global {
  const ABCJS: {
    renderAbc: (id: string, abcNotation: string, options?: any) => any[];
    highlightNote: (note: any, highlight: boolean) => void;
    synth: {
      SynthController: new () => any;
    };
  };
}

export interface ScoreProps {
  id: string;
  title: string;
  abcNotation: string;
  showAudio?: boolean;
  scale?: number;
  tablature?: any[];
  displayProgress?: boolean;
}

export interface AudioControllerProps {
  id: string;
  visualObj: any;
} 