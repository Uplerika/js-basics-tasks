/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * node homework/getMinMax.js
 */
export default function getMinMax(input) {
  const str = input
    .replace(/[,#!$%&;:{}=`~()]/g, '')
    .replace(/\s{2,}/g, ' ')
    .split(' ');
  const arr = str.map(item => parseFloat(item));
  const total = arr.filter(i => Number.isNaN(i) !== true);
  const result = {};

  result.min = Math.min(...total);
  result.max = Math.max(...total);
  if (total.length === 0) {
    return { min: undefined, max: undefined };
  }
  return result;
}
