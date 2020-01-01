import { ProcessType } from "../functions";
import { SVGPosition } from "../constants";

export class LineQuery {
  type: ProcessType;
  fromId: number;
  toId: number;
  fromPosition: SVGPosition;
  toPosition: SVGPosition;

  constructor(type: ProcessType, fromId: number, toId: number, fromPosition: SVGPosition, toPosition: SVGPosition) {
    this.type = type;
    this.fromId = fromId;
    this.toId = toId;
    this.fromPosition = fromPosition;
    this.toPosition = toPosition;
  }
}