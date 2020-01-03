import React from 'react';

type Props = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isSelected: boolean;
};

const Line: React.FC<Props> = ({ from, to, isSelected }) => {
  const selected = isSelected
    ? {
        stroke: 'black',
        marker: 'url(#arrow)'
      }
    : {
        stroke: 'royalblue',
        marker: 'url(#arrow-selected)'
      };
  const margin = randRange(10, 90);
  const points = [
    `${from.x},${from.y}`,
    `${from.x + margin},${from.y}`,
    `${from.x + margin},${to.y}`,
    `${to.x - 5},${to.y}`
  ].join(' ');
  return (
    <g stroke={selected.stroke}>
      <polyline
        fill="none"
        points={points}
        markerEnd={selected.marker}
        strokeWidth={2}
      />
    </g>
  );
};

// const calcMiddle = (from: number, to: number) => (from + to) / 2;
const randRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default Line;
