// svgの領域サイズ
export const SVG_WINDOW_WIDTH = 3000;
// 設問ブロックの領域
export const PROCESS_BLOCK_SIZE = {
  WIDTH: 130,
  HEIGHT: 50
};

export const GAP_SIZE = 50;

// 箱と箱の隙間のサイズ
export const SLIDE_SIZE = PROCESS_BLOCK_SIZE.WIDTH + GAP_SIZE;

export interface SVGPosition {
  x: number,
  y: number,
};
