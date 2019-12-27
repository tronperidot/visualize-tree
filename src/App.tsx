import React from 'react';
import './App.css';
import ProcessBlock from './components/ProcessBlock';
import Line from './components/Line';
import { SVG_WIDTH } from './constants';
import { buildQuestionsToBlock } from './functions';
import { Questions } from './mockData/Questions';

const App: React.FC = () => {
  const processes = buildQuestionsToBlock(Questions);
  console.log(processes);
  return (
    <div className="App">
      <svg width={SVG_WIDTH} height={500} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <Line from={{ x: 300, y: 35 }} to={{ x: 50, y: 235 } } />
        {processes.map((value, idx) => (
          <ProcessBlock position={value.position} contents={{ text: value.question.label }} key={idx} />
        ))}
      </svg>
    </div>
  );
}

export default App;
