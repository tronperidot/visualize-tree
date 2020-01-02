import React from 'react';
import './App.css';
import ProcessBlock from './components/ProcessBlock';
import Line from './components/Line';
import { SVG_WINDOW } from './constants';
import { buildPathQuery } from './functions';
import { Questions } from './mockData/Questions';
import { Cinemas } from './mockData/Cinemas';
import { buildBlockArray, buildArrayToQuery } from './functions/builder';
import Defs from './components/defs';

const App: React.FC = () => {
  const ary = buildBlockArray(Questions, Cinemas);
  const processes = buildArrayToQuery(ary);
  const lines = buildPathQuery(processes);
  return (
    <div className="App">
      <svg width={SVG_WINDOW.WIDTH} height={SVG_WINDOW.HEIGHT} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {lines.map((line, key) => (
          <Line from={line.fromPosition} to={line.toPosition } key={key} isSelected={(key % 2) > 0} />
        ))}
        {processes.map((value, idx) => {
          return (
            <ProcessBlock query={value} key={idx} />
          )
        })}
        <Defs />
      </svg>
    </div>
  );
}

export default App;
