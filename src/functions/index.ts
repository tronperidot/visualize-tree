import { Question } from "../mockData/Questions";
import { SVG_WIDTH, SVGPosition } from "../constants";
import { PROCESS_BLOCK_SIZE } from "../components/ProcessBlock";

export interface ProcessBlockQuery {
  position: SVGPosition;

  question: Question;
}

export const buildQuestionsToBlock = (questions: Question[]) => {
  const first = {
    x: SVG_WIDTH / 2,
    y: (PROCESS_BLOCK_SIZE.HEIGHT / 2) + 10,
  };

  const reduceProcessBlock = (question: Question, position: SVGPosition, deepCnt: number, result: ProcessBlockQuery[]): ProcessBlockQuery[] => {
    result.push(buildQuery(question, position));
    question.answerList.forEach((answer, idx) => {
      // TODO: cinema or question
      // TODO: search result
      const nextQuestion = questions.find((q) => q.id === answer.nextQuestionId);
      const nextDeepCnt = deepCnt + 1;
      if (nextQuestion) {
        const nextPosition = {
          x: position.x + slideX(idx),
          y: position.y + slideY(),
        }
        reduceProcessBlock(nextQuestion, nextPosition, nextDeepCnt, result)
      }
    });
    return result;
  }

  return reduceProcessBlock(questions[0], first, 0, []);
}

// NOTE: 現在は2つにしか広がらないので
const slideX = (index: number) => (
  (index === 0) ? -60 : 60
)

const slideY = () => (
  (PROCESS_BLOCK_SIZE.HEIGHT + 50)
)

const buildQuery = (question: Question, position: SVGPosition): ProcessBlockQuery => (
  {
    position: {
      ...position
    },
    question: {
      ...question
    }
  }
)
