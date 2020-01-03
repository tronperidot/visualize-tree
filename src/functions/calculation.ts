import { PROCESS_BLOCK_SIZE, MARGIN_RIGHT, MARGIN_BOTTOM, SVG_WINDOW } from "../constants"

// 設問のxのポジションを算出する
export const calcXPos = (deepCnt: number): number => {
  const contentSize = (PROCESS_BLOCK_SIZE.WIDTH + MARGIN_RIGHT) * (deepCnt + 1);
  // 中央位置を求めたいので
  const slideToCenter = (PROCESS_BLOCK_SIZE.WIDTH / 2);
  return contentSize - slideToCenter;
}

export const caclYPos = (contentLength: number, pos: number): number => {
  const oneSize = (PROCESS_BLOCK_SIZE.HEIGHT + MARGIN_BOTTOM);
  const contentFullSize = oneSize * (contentLength) - MARGIN_BOTTOM;
  const firstPosition = (SVG_WINDOW.HEIGHT - contentFullSize) / 2;
  const slideToCenter = (PROCESS_BLOCK_SIZE.HEIGHT / 2);
  return firstPosition + (oneSize * pos) + slideToCenter;
}

export const rate = (max: number, x?: number) => {
  const base = 10;
  const value = (x || 0) * 100;
  return Math.round((value / max) * base) / base;
}