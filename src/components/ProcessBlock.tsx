import React from 'react';
import { SVGPosition } from '../constants';

export const PROCESS_BLOCK_SIZE = {
  WIDTH: 100,
  HEIGHT: 50
};

type Props = {
  position: SVGPosition;
  contents: {
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
  // TODO: single line text to multi line text.
  const rectX = x - PROCESS_BLOCK_SIZE.WIDTH / 2;
  const rectY = y - PROCESS_BLOCK_SIZE.HEIGHT / 2;
  return (
    <g>
      <rect
        x={rectX}
        y={rectY}
        width={PROCESS_BLOCK_SIZE.WIDTH}
        height={PROCESS_BLOCK_SIZE.HEIGHT}
        style={{ fill: 'mediumseagreen' }}
      />
      <text
        x={rectX + 16}
        y={rectY + 20}
        width={10}
        height={PROCESS_BLOCK_SIZE.HEIGHT}
        fontSize="10"
      >
        {contents.text}
      </text>
    </g>
  );
};

export default ProcessBlock;
