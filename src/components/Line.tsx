import React from 'react';

type Props = {
  from: { x: number; y: number };
  to: { x: number; y: number };
};

const Line: React.FC<Props> = ({ from, to }) => {
  const strokeWidth = 6;
  return (
    <g stroke="black">
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        strokeWidth={strokeWidth}
      />
      <text x={calcMiddle(from.x, to.x) + 30} y={calcMiddle(from.y, to.y)}>
        {strokeWidth}
      </text>
    </g>
  );
};

const calcMiddle = (from: number, to: number) => (from + to) / 2;

export default Line;
