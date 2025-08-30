import React, { useEffect, useRef, useState } from 'react';
import { ScoreProps } from '../types';
import AudioController from './AudioController';

// Extend the Window interface to include ABCJS
declare global {
  interface Window {
    ABCJS: any;
  }
}

const Score: React.FC<ScoreProps> = ({ 
  id, 
  title, 
  abcNotation, 
  showAudio = false, 
  scale = 1.0,
  tablature 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visualObj, setVisualObj] = useState<any>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    function tryRender() {
      console.log('abcNotation:', abcNotation);
      console.log('window.ABCJS:', window.ABCJS);
      if (containerRef.current && typeof window !== 'undefined' && window.ABCJS) {
        const cursorControl = {
          onStart: () => {},
          onEvent: (ev: any) => {
            if (ev && ev.abselem) {
              ev.abselem.highlight && ev.abselem.highlight("highlight");
            }
          },
          onFinished: () => {
            document.querySelectorAll('.abcjs-note.highlight').forEach(el => {
              el.classList.remove('highlight');
            });
          },
          onClick: (abcElem: any) => {
            if (abcElem && abcElem.abselem) {
              abcElem.abselem.highlight && abcElem.abselem.highlight("highlight");
              setTimeout(() => {
                abcElem.abselem.unhighlight && abcElem.abselem.unhighlight("highlight");
              }, 3000);
            }
          }
        };
        const options: any = {
          responsive: "resize",
          scale,
          cursorControl
        };

        if (tablature) {
          options.tablature = tablature;
        }

        const visualObjs = window.ABCJS.renderAbc(id, abcNotation, options);
        console.log('visualObjs:', visualObjs);
        
        if (showAudio && visualObjs && visualObjs[0]) {
          setVisualObj(visualObjs[0]);
        }

        // スコア全体の幅を調整
        if (containerRef.current) {
          containerRef.current.style.width = '80%';
          containerRef.current.style.margin = '0 auto';
          containerRef.current.style.display = 'block';
        }
        if (interval) clearInterval(interval);
      }
    }
    if (!window.ABCJS) {
      interval = setInterval(tryRender, 100);
    } else {
      tryRender();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [id, abcNotation, showAudio, scale, tablature]);

  return (
    <div className="score-container">
      <div className="score-title">{title}</div>
      <div id={id} ref={containerRef} />
      {showAudio && visualObj && (
        <AudioController id={`audio-control-${id}`} visualObj={visualObj} />
      )}
    </div>
  );
};

export default Score; 