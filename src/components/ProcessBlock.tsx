import React from 'react';
import { SVGPosition, PROCESS_BLOCK_SIZE } from '../constants';

type Props = {
  position: SVGPosition;
  contents: {
    type: 'question' | 'cinema';
    text: string;
  };
};

// NOTE: color codes
// https://www.december.com/html/spec/colorsvg.html

/**
 * xとyが中心になるように広がる
 *
 * @param param0
 */
const ProcessBlock: React.FC<Props> = ({ position: { x, y }, contents }) => {
  const rectX = x - PROCESS_BLOCK_SIZE.WIDTH / 2;
  const rectY = y - PROCESS_BLOCK_SIZE.HEIGHT / 2;
  const fill = contents.type === 'question' ? 'mediumseagreen' : 'gainsboro';
  const multiLineText =
    contents.type === 'question'
      ? split(contents.text, 11)
      : contents.text.split('<br />');
  return (
    <g>
      <rect
        x={rectX}
        y={rectY}
        width={PROCESS_BLOCK_SIZE.WIDTH}
        height={PROCESS_BLOCK_SIZE.HEIGHT}
        style={{ fill }}
      />
      {multiLineText.map((text, idx) => (
        <text
          key={idx}
          x={rectX + 5}
          y={rectY + 20 + 16 * idx}
          width={10}
          height={PROCESS_BLOCK_SIZE.HEIGHT}
          fontSize="10"
        >
          {text}
        </text>
      ))}
    </g>
  );
};

export default ProcessBlock;

const split = (text: string, size: number) => {
  const ary = [];
  for (let i = 0; i < text.length; i += size) {
    ary.push(text.slice(i, i + size));
  }
  return ary;
};
