import React from 'react';
import './App.css';
import ProcessBlock from './components/ProcessBlock';
import Line from './components/Line';
import { SVG_WINDOW_WIDTH } from './constants';
import { buildQuestionsToBlock, buildPathQuery } from './functions';
import { Questions } from './mockData/Questions';

const App: React.FC = () => {
  const processes = buildQuestionsToBlock(Questions);
  // console.log(processes.sort((a, b) => a.question.id - b.question.id).map((q) => q.question));
  const lines = buildPathQuery(processes);
  return (
    <div className="App">
      <svg width={SVG_WINDOW_WIDTH} height={1500} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {lines.map((line, key) => (
          <Line from={line.fromPosition} to={line.toPosition } key={key} />
        ))}
        {processes.map((value, idx) => {
          const contents = {
            type: value.type,
            text: (value.question) ? value.question.label : value.cinema!.title
          }
          return (
            <ProcessBlock position={value.position} contents={contents} key={idx} />
          )
        })}
      </svg>
    </div>
  );
}

export default App;
