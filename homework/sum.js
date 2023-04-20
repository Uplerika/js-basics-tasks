/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 * @param {*} x число или undefined
 * @returns а это уже сами решите
 * node homework/sum.js
 */
export default function sum(x) {
  let count = x;

  if (x === undefined) {
    return 0;
  }
  return function twoy(y) {
    if (y !== undefined) {
      count += y;
      return twoy;
    }
    return count;
  };
}