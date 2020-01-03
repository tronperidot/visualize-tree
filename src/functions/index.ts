import { Answer, Questions } from "../mockData/Questions";
import { ProcessBlockQuery } from "../models/ProcessBlockQuery";
import { LineQuery } from "../models/LineQuery";
import { buildBlockArray, buildArrayToQuery, setSelectCount } from "./builder";
import { Cinemas } from "../mockData/Cinemas";
import { SelectedItemList } from "../mockData/SelectedItemList";

export type ProcessType = 'question' | 'cinema';

export const makeChart = () => {
  const ary = buildBlockArray(Questions, Cinemas);
  const processes = buildArrayToQuery(ary);
  setSelectCount(processes, SelectedItemList);
  console.log(processes);
  const lines = buildPathQuery(processes);
  return { processes, lines }
}

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
