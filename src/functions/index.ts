import { Answer } from "../mockData/Questions";
import { ProcessBlockQuery } from "../models/ProcessBlockQuery";
import { LineQuery } from "../models/LineQuery";

export type ProcessType = 'question' | 'cinema';

// 線を引く
export const buildPathQuery = (source: ProcessBlockQuery[]): LineQuery[] => {
  const result = source.reduce<LineQuery[]>((prev, query) => {
    query.getAnswerList.forEach((answer: Answer, idx) => {
      const next = source.find(s => s.isMatch(answer));
      if (!!next) {
        prev.push(new LineQuery(
          next.type,
          query.id!,
          next.id!,
          query.getFromPosition(idx),
          next.getToPosition(),
        ));
      }
    });
    return prev;
  },[]);
  return result;
}
