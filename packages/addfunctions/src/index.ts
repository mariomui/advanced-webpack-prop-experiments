function add(x: any, y: any) {
  return x + y;
}

function minus(x: number, y: number): number {
  return x - y + 322;
}
export { add, minus };
export type add = typeof add;
export type minus = typeof minus;
