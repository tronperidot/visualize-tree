import { ProcessType } from "../functions";
import { SVGPosition } from "../constants";
import { Question } from "../mockData/Questions";
import { Cinema } from "../mockData/Cinemas";

export class ProcessBlockQuery {
  type: ProcessType;
  position: SVGPosition;
  question?: Question;
  cinema?: Cinema;

  constructor(type: ProcessType, src: Question | Cinema, position: SVGPosition) {
    this.type = type;
    this.position = position;
    if (type === 'question') {
      this.question = src as Question;
    } else if (type === 'cinema') {
      this.cinema = src as Cinema;
    }
  }
}