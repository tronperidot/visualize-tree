import React from 'react';

type Props = {
  x: number;
  y: number;
};

// NOTE: color codes
// https://www.december.com/html/spec/colorsvg.html

const ProcessBlock: React.FC<Props> = ({ x, y }) => {
  const width = 100;
  const height = 50;
  // TODO: single line text to multi line text.
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: 'mediumseagreen' }}
      />
      <text
        x={x + 16}
        y={y + height / 2}
        width={10}
        height={height}
        font-size="10"
      >
        主人公になりたくないのになってしまう
      </text>
    </g>
  );
};

export default ProcessBlock;
