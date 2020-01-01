import { ProcessType } from "../functions";
import { SVGPosition, PROCESS_BLOCK_SIZE } from "../constants";
import { Question, Answer } from "../mockData/Questions";
import { Cinema } from "../mockData/Cinemas";

export class ProcessBlockQuery {
  type: ProcessType;
  position: SVGPosition;
  question?: Question;
  cinema?: Cinema;

  get id() {
    return this.getQuestionId || this.getCinemaId;
  }

  get isQuestion() {
    return this.type === 'question';
  }

  get isCinema() {
    return this.type === 'cinema';
  }

  get getAnswerList() {
    return this.isQuestion ? this.question!.answerList : [];
  }

  get getQuestionId() {
    return this.isQuestion ? this.question!.id : undefined;
  }

  get getCinemaId() {
    return this.isCinema ? this.cinema!.id : undefined;
  }

  constructor(type: ProcessType, src: Question | Cinema, position: SVGPosition) {
    this.type = type;
    this.position = position;
    if (type === 'question') {
      this.question = src as Question;
    } else if (type === 'cinema') {
      this.cinema = src as Cinema;
    }
  }

  isMatch(answer: Answer) {
    if (!!answer.nextQuestionId && this.isQuestion) {
      return this.getQuestionId === answer.nextQuestionId;
    } else if (!!answer.resultCinemaId && this.isCinema) {
      return this.getCinemaId === answer.resultCinemaId;
    }
    return false;
  }

  // TODO: これはアンサーごとにyがずれる
  getFromPosition(): SVGPosition {
    return {
      x: this.position.x + (PROCESS_BLOCK_SIZE.WIDTH / 2),
      y: this.position.y
    };
  }

  getToPosition(): SVGPosition {
    return {
      x: this.position.x - (PROCESS_BLOCK_SIZE.WIDTH / 2),
      y: this.position.y
    };
  }

}