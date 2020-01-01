import React from 'react';
import './App.css';
import ProcessBlock from './components/ProcessBlock';
import Line from './components/Line';
import { SVG_WINDOW } from './constants';
import { buildPathQuery } from './functions';
import { Questions } from './mockData/Questions';
import { Cinemas } from './mockData/Cinemas';
import { buildBlockArray, buildArrayToQuery } from './functions/builder';

const App: React.FC = () => {
  const ary = buildBlockArray(Questions, Cinemas);
  const processes = buildArrayToQuery(ary);
  const lines = buildPathQuery(processes);
  return (
    <div className="App">
      <svg width={SVG_WINDOW.WIDTH} height={SVG_WINDOW.HEIGHT} version="1.1" xmlns="http://www.w3.org/2000/svg">
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
