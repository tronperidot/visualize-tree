import React from 'react';

type Props = {
  from: { x: number; y: number };
  to: { x: number; y: number };
};

const Line: React.FC<Props> = ({ from, to }) => {
  const strokeWidth = 3;
  const margin = randRange(10, 90);
  const points = [
    `${from.x},${from.y}`,
    `${from.x + margin},${from.y}`,
    `${from.x + margin},${to.y}`,
    `${to.x - 5},${to.y}`
  ].join(' ');
  return (
    <g stroke="black">
      <polyline
        fill="none"
        points={points}
        markerEnd="url(#arrow)"
        strokeWidth={strokeWidth}
      />
      <text x={calcMiddle(from.x, to.x) + 30} y={calcMiddle(from.y, to.y)}>
        {/* {strokeWidth} */}
      </text>
    </g>
  );
};

const calcMiddle = (from: number, to: number) => (from + to) / 2;
const randRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default Line;
