/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 * node homework/rle.js
 */
export default function rle(input) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    let j = i;

    if (char === input[++j]) {
      let count = 1;

      while (char === input[j++]) {
        count += 1;
      }

      result += `${char}${count}`;
      i += count - 1;
    } else {
      result += char;
    }
  }
  return result;
}