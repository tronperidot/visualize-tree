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
  const multiLineText = [query.getLabel()];
  if (query.isQuestion) {
    query.getAnswerList.forEach(v => multiLineText.push(v.label));
  }
  return (
    <g>
      {query.isQuestion
        ? renderQuestion(rectX, rectY, multiLineText)
        : renderAnswer(rectX, rectY, multiLineText)}
    </g>
  );
};

const renderQuestion = (
  rectX: number,
  rectY: number,
  multiLineText: string[]
) => {
  const oneHeight = PROCESS_BLOCK_SIZE.HEIGHT / 3;
  const blocks = multiLineText.map((text, idx) => {
    const isTitle = idx === 0;
    const selected =
      idx % 2 > 0
        ? {
            fill: 'royalblue',
            textColor: 'snow'
          }
        : {
            fill: 'whitesmoke',
            textColor: 'black'
          };
    return {
      text: isTitle ? text : `　　${text}`,
      fill: isTitle ? 'ivory' : selected.fill,
      x: rectX,
      y: rectY + oneHeight * idx,
      textColor: isTitle ? 'black' : selected.textColor
    };
  });
  return (
    <>
      {blocks.map(({ text, x, y, fill, textColor }, idx) => (
        <>
          <rect
            key={idx}
            x={x}
            y={y}
            stroke="lightgray"
            width={PROCESS_BLOCK_SIZE.WIDTH}
            height={oneHeight}
            style={{ fill }}
          />
          <text
            key={idx}
            x={x + 5}
            y={y + 15}
            fill={textColor}
            // textAnchor="middle"
            width={PROCESS_BLOCK_SIZE.WIDTH}
            height={oneHeight}
            fontSize="10"
          >
            {text}
          </text>
        </>
      ))}
    </>
  );
};

const renderAnswer = (
  rectX: number,
  rectY: number,
  multiLineText: string[]
) => {
  return (
    <>
      <rect
        x={rectX}
        y={rectY}
        width={PROCESS_BLOCK_SIZE.WIDTH}
        height={PROCESS_BLOCK_SIZE.HEIGHT}
        style={{ fill: 'gainsboro' }}
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
    </>
  );
};

export default ProcessBlock;

// const split = (text: string, size: number) => {
//   const ary = [];
//   for (let i = 0; i < text.length; i += size) {
//     ary.push(text.slice(i, i + size));
//   }
//   return ary;
// };
