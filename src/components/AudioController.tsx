declare const ABCJS: any;
import React, { useEffect, useRef } from 'react';
import { AudioControllerProps } from '../types';

const AudioController: React.FC<AudioControllerProps> = ({ id, visualObj }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && visualObj) {
      const synthControl = new ABCJS.synth.SynthController();
      
      // 基本的な設定
      const options = {
        displayRestart: true,
        displayPlay: true,
        displayProgress: true,
        displayWarp: true,
        showCursor: true
      };
      
      synthControl.load(`#${id}`, null, options);
      
      synthControl.setTune(visualObj, false).catch((error: any) => {
        console.warn("Synth setTune error:", error);
      });

      // 音符ハイライト機能
      if (visualObj && visualObj[0]) {
        const tune = visualObj[0];
        
        // デバッグ用: 利用可能なメソッドを確認
        console.log('Tune object:', tune);
        console.log('Available methods:', Object.getOwnPropertyNames(tune));
        
        // イベントリスナーを設定
        synthControl.onEvent((event: any) => {
          console.log('Audio event:', event);
          
          // 再生開始
          if (event.type === 'start') {
            console.log('Playback started');
          }
          
          // 音符イベント
          if (event.type === 'note') {
            console.log('Note event:', event);
            // 音符要素を探してハイライト
            highlightCurrentNote(event);
          }
          
          // タイマーイベント
          if (event.type === 'timer') {
            console.log('Timer event:', event);
          }
        });

        // 音符ハイライト関数
        const highlightCurrentNote = (event: any) => {
          // 現在の音符要素を探す
          const noteElements = document.querySelectorAll('.abcjs-note, .abcjs-chord');
          noteElements.forEach((element: any) => {
            // 一時的にハイライト
            element.style.fill = '#2ed573';
            element.style.stroke = '#1e90ff';
            element.style.strokeWidth = '2px';
            
            setTimeout(() => {
              element.style.fill = '';
              element.style.stroke = '';
              element.style.strokeWidth = '';
            }, 200);
          });
        };
      }
    }
  }, [id, visualObj]);

  return <div id={id} ref={containerRef} />;
};

export default AudioController; 