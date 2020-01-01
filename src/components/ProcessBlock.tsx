import React from 'react';
import { PROCESS_BLOCK_SIZE } from '../constants';
import { ProcessBlockQuery } from '../models/ProcessBlockQuery';

type Props = {
  query: ProcessBlockQuery;
};

// NOTE: color codes
// https://www.december.com/html/spec/colorsvg.html

/**
 * xとyが中心になるように広がる
 *
 * @param param0
 */
const ProcessBlock: React.FC<Props> = ({ query }) => {
  const { x, y } = query.position;
  const rectX = x - PROCESS_BLOCK_SIZE.WIDTH / 2;
  const rectY = y - PROCESS_BLOCK_SIZE.HEIGHT / 2;
  const fill = query.type === 'question' ? 'mediumseagreen' : 'gainsboro';
  const multiLineText = [query.getLabel()];
  if (query.isQuestion) {
    query.getAnswerList.forEach(v => multiLineText.push(v.label));
  }
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
          y={rectY + 15 + 16 * idx}
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
