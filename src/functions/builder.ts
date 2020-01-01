import { Question, Answer } from "../mockData/Questions";
import { Cinema } from "../mockData/Cinemas";
import { ProcessType } from ".";
import { ProcessBlockQuery } from "../models/ProcessBlockQuery";
import { calcXPos, caclYPos } from "./calculation";

type Next = { type: ProcessType, src: Question | Cinema};

// 配列を作る
export const buildBlockArray = (questions: Question[], cinemas: Cinema[]): Next[][] => {
  const pushItem = (next: Next, deepCnt: number, result: Next[][]): void => {
    if (result[deepCnt] === undefined) {
      result[deepCnt] = [];
    }
    result[deepCnt].push(next);
  }
  const reduceProcessBlock = (next: Next, deepCnt: number, result: Next[][]): Next[][] => {
    const findFn = ((item: Next) => item.type === next.type && item.src.id === next.src.id);
    // remove
    result.forEach((deep: Next[], cnt) => {
      const idx = deep.findIndex(findFn);
      if (idx != -1 && cnt < deepCnt) {
        deep.slice(idx, 1);
      }
    });
    // 今挿入しようとしているものがこれより深い所に既にあったら挿入してはいけない
    if (!result.some((val, idx) => idx >= deepCnt && val.find(findFn))) {
      pushItem(next, deepCnt, result);
    }
    if (next.type === 'question') {
      (next.src as Question).answerList.forEach((answer, idx) => {
        const next = findNext(answer, questions, cinemas);
        if (!!next) {
          const nextDeepCnt = deepCnt + 1;
          reduceProcessBlock(next, nextDeepCnt, result);
        }
      })
    }
    return result;
  }
  const result: Next[][] = reduceProcessBlock({ type: 'question', src: questions[0] }, 0, [[]]);
  return result;
}

export const buildArrayToQuery = (source: Next[][]): ProcessBlockQuery[] => {
  const result: ProcessBlockQuery[]  = [];
  source.forEach((deepItems: Next[], deepCnt: number) => {
    const x = calcXPos(deepCnt);
    deepItems.forEach((next, idx) => {
      const y = caclYPos(deepItems.length, idx);
      result.push(new ProcessBlockQuery(next.type, next.src, { x, y }))
    });
  });
  return result;
}

export const findNext = (answer: Answer, questions: Question[], cinemas: Cinema[]): Next => {
  const question = (answer.nextQuestionId) ? questions.find((q) => q.id === answer.nextQuestionId) : null;
  if (question) {
    return { type: 'question', src: question };
  }
  return {
    type: 'cinema',
    src: cinemas.find((cinema) => cinema.id === answer.resultCinemaId)!!
  };
}