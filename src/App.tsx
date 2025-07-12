import React from 'react';
import Score from './components/Score';
import { scores } from './data/scores';
import { scores as scores2 } from './data/scores2';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>abcjs デモ</h1>
      
      <Score {...scores.fontaine} />
      {/* <Score {...scores.fontaineAudio} /> */}
      <Score {...scores.simple} />
      {/* <Score {...scores.guitar} /> */}
      {/* <Score {...scores2.mygoDarkGlow} /> */}
      <Score
        id="score1"
        title="テスト"
        abcNotation={`X:1\nT:Test\nK:C\nC D E F|G A B c|`}
        showAudio={true}
      />
    </div>
  );
};

export default App; 