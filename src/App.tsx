import React from 'react';
import './App.css';
import ProcessBlock from './components/ProcessBlock';
import Line from './components/Line';
import { SVG_WINDOW } from './constants';
import { makeChart } from './functions';
import Defs from './components/defs';

const App: React.FC = () => {
  const { processes, lines } = makeChart();
  return (
    <div className="App">
      <svg width={SVG_WINDOW.WIDTH} height={SVG_WINDOW.HEIGHT} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {lines.map((line, key) => (
          <Line from={line.fromPosition} to={line.toPosition } key={key} isSelected={(key % 2) > 0 || true} />
        ))}
        {processes.map((value, idx) => {
          return (
            <ProcessBlock query={value} key={`${value.id}_${idx}`} />
          )
        })}
        <Defs />
      </svg>
    </div>
  );
}

export default App;
