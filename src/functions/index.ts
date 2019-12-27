import { Question, Questions, Answer } from "../mockData/Questions";
import { SVG_WIDTH, SVGPosition } from "../constants";
import { PROCESS_BLOCK_SIZE } from "../components/ProcessBlock";
import { Cinemas, Cinema } from "../mockData/Cinemas";

export interface ProcessBlockQuery {
  type: 'question' | 'cinema';
  position: SVGPosition;
  question?: Question;
  cinema?: Cinema;
}

export interface LineQuery {
  type: 'question' | 'cinema';
  fromId: number,
  toId: number,
  fromPosition: SVGPosition,
  toPosition: SVGPosition,
}

// 設問からブロックを作るやつ
export const buildQuestionsToBlock = (questions: Question[]) => {
  const first = {
    x: SVG_WIDTH / 2,
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
            y: position.y + slideY(),
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
  groupByY.forEach((group) => {
    group.blocks.forEach((block, idx, array) => {
      const slide = (idx !== 0) ? (SLIDE_SIZE * idx) + (SLIDE_SIZE / 2) : 0;
      block.x = array[0].x + slide;
    });
  });

  return source;
}

const SLIDE_SIZE = 120;
// NOTE: 現在は2つにしか広がらないので
const slideX = (index: number) => (
  (index === 0) ? -SLIDE_SIZE : SLIDE_SIZE
)

const slideY = () => (
  (PROCESS_BLOCK_SIZE.HEIGHT + 50)
)

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

type Next = { type: 'question' | 'cinema', src: Question | Cinema};
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
