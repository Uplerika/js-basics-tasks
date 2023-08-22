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
const rle = (input) => {
  let result = '';
  const arr = str.split('');
  const uniqueArr = arr.filter((item, i, ar) => ar.indexOf(item) == i);
  for ( let j = 0; j < uniqueArr.length; j++) {
  const uniqueLength = arr.filter((item) => item === uniqueArr[j]
  ).length;
  const count = uniqueLength !== 1 ? uniqueLength : "";
  result += `${uniqueArr[j]}${count}`
  }
  return result;
};


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
