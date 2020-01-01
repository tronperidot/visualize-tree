import { Question, Answer } from "../mockData/Questions";
import { SVG_WINDOW, SVGPosition, SLIDE_SIZE, PROCESS_BLOCK_SIZE, GAP_SIZE } from "../constants";
import { Cinemas, Cinema } from "../mockData/Cinemas";
import { buildBlockArray } from "./builder";

export type ProcessType = 'question' | 'cinema';

// TODO 削除予定
export interface ProcessBlockQuery {
  type: ProcessType;
  position: SVGPosition;
  question?: Question;
  cinema?: Cinema;
}

export interface LineQuery {
  type: ProcessType;
  fromId: number,
  toId: number,
  fromPosition: SVGPosition,
  toPosition: SVGPosition,
}

// 設問からブロックを作るやつ
export const buildQuestionsToBlock = (questions: Question[]) => {
  console.log(buildBlockArray(questions, Cinemas));
  const first = {
    x: SVG_WINDOW.WIDTH / 2,
    y: (PROCESS_BLOCK_SIZE.HEIGHT / 2) + 10,
  };

  const reduceProcessBlock = (next: Next, position: SVGPosition, deepCnt: number, result: ProcessBlockQuery[]): ProcessBlockQuery[] => {
    if (next.type === 'question') {
      const searchByResult = result.find((v) => v.question && v.question.id === next.src.id);
      if (!!searchByResult) {
        if (searchByResult.position.y <= position.y) {
          searchByResult.position = position;
        }
      } else {
        result.push(buildQuery(next.src as Question, position))
      }
      (next.src as Question).answerList.forEach((answer, idx) => {
        // TODO: cinema or question
        const next = findNext(answer, questions);
        const nextDeepCnt = deepCnt + 1;
        if (next) {
          const nextPosition = {
            x: position.x + slideX(idx),
            y: position.y + slideY(next.type),
          }
          reduceProcessBlock(next, nextPosition, nextDeepCnt, result)
        }
      });
    } else {
      const searchByResult = result.find((v) => v.cinema && v.cinema.id === next.src.id);
      if (!!searchByResult) {
        if (searchByResult.position.y <= position.y) {
          searchByResult.position = position;
        }
      } else {
        result.push(buildCinema(next.src as Cinema, position))
      }
    }
    return result;
  }
  const result = reduceProcessBlock({ type: 'question', src: questions[0] }, first, 0, []);
  return positionFit(result);
}


const positionFit = (source: ProcessBlockQuery[]): ProcessBlockQuery[] => {
  
  const groupByY = source.reduce<{y: number, blocks: SVGPosition[] }[]>((prev, current) => {
    const y = current.position.y;
    const position = prev.find((v) => v.y === y);
    if (!!position) {
      position.blocks.push(current.position);
    } else {
      prev.push({
        y,
        blocks: [current.position],
      })
    }
    return prev;
  }, []);
  // HACK: 参照渡しなので無理くりかえちゃう
  // HACK: もう少し自然に見えるように位置をずらす
  groupByY.filter((group) => group.blocks.length > 0).forEach((group) => {
    // 最初にfirstの調整をする
    group.blocks[0].x = leftXPosition(group.blocks.length);
    group.blocks.forEach((block, idx, array) => {
      const slide = (idx !== 0) ? (SLIDE_SIZE * idx): 0;
      block.x = array[0].x + slide;
    });
  });

  return source;
}

// NOTE: 現在は2つにしか広がらないので
const slideX = (index: number) => (
  (index === 0) ? -SLIDE_SIZE : SLIDE_SIZE
)

const slideY = (type: ProcessType) => {
  const slide = (type === 'cinema') ?
  (PROCESS_BLOCK_SIZE.HEIGHT + 50) :
  ((PROCESS_BLOCK_SIZE.HEIGHT + 30) * 2) + 20;
  return slide; 
}

const buildQuery = (question: Question, position: SVGPosition): ProcessBlockQuery => (
  {
    type: 'question',
    position: {
      ...position
    },
    question: {
      ...question
    }
  }
)

const buildCinema = (cinema: Cinema, position: SVGPosition): ProcessBlockQuery => (
  {
    type: 'cinema',
    position: {
      ...position
    },
    cinema: {
      ...cinema
    }
  }
)

type Next = { type: ProcessType, src: Question | Cinema};
const findNext = (answer: Answer, store: Question[]): Next => {
  const question = (answer.nextQuestionId) ? store.find((q) => q.id === answer.nextQuestionId) : null;
  if (question) {
    return { type: 'question', src: question };
  }
  return {
    type: 'cinema',
    src: Cinemas.find((cinema) => cinema.id === answer.resultCinemaId)!!
  };
}

// 線を引く
export const buildPathQuery = (source: ProcessBlockQuery[]): LineQuery[] => {
  const result = source.reduce<LineQuery[]>((prev, query) => {
    if (query.type === 'question') {
      query.question!.answerList.forEach((value) => {
        const nextQuestion = source.find(s => s.question && s.question.id === value.nextQuestionId);
        if (nextQuestion) {
          prev.push({
            type: 'question',
            fromId: query.question!.id,
            toId: nextQuestion.question!.id,
            fromPosition: query.position,
            toPosition: nextQuestion.position,
          });
        } else {
          // リファクタリング
          const resultCinema = source.find(s => s.cinema && s.cinema.id === value.resultCinemaId);
          if (resultCinema) {
            prev.push({
              type: 'cinema',
              fromId: query.question!.id,
              toId: resultCinema.cinema!.id,
              fromPosition: query.position,
              toPosition: resultCinema.position,
            });
          }
        }
      });
    }
    return prev;
  }, []);
  return result;
}

// 選択肢の数から一番左の要素のx座標を求める
const leftXPosition = (contentSize: number) => {
  const contentFullSize = (contentSize * PROCESS_BLOCK_SIZE.WIDTH) + (GAP_SIZE * (contentSize -1));
  const leftPosition = (SVG_WINDOW.WIDTH - contentFullSize) / 2;
  // xは要素の中央にしているので
  return leftPosition + (PROCESS_BLOCK_SIZE.WIDTH / 2);
}