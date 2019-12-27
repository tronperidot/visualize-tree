import React from 'react';
import './App.css';
import ProcessBlock from './components/ProcessBlock';
import Line from './components/Line';

const App: React.FC = () => {
  return (
    <div className="App">
      <svg width={800} height={500} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <Line from={{ x: 150, y: 35 }} to={{ x: 100, y: 135 } } />
        <ProcessBlock x={100} y={35} />
      </svg>
    </div>
  );
}

export default App;
