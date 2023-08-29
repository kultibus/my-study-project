// 1 написать функцию, котораю по переданной строке сгенерирует массив объектов для каждой буквы типа
// {
//   value: string;
//   type: 'гласная' | 'согласная' | 'знак препинания' | 'пробел'
// }

const INPUT = 'Списо^#к букв кирил(*лицы';

const fn = (symbol) => {
  if (symbol.match(/\s/)) return 'пробел';
  if (symbol.match(/[аеёиоуыэюя]/)) return 'гласная';
  if (symbol.match(/[бвгджзйклмнпрстфхцчшщъь]/)) return 'согласная';
  return 'знак препинания';
};

const generate = (string) => string.split('').map((value) => ({ value, type: fn(value) }));

// const generate = (string) => {
//   string = string.toLowerCase();

//   const arrayFromString = [];

//   for (let index = 0; index < string.length; index++) {
//     const objectFromString = {
//       value: string.at(index),
//       type: fn(string.at(index)),
//     };

//     arrayFromString.push(objectFromString);
//   }

//   return arrayFromString;
// };

// Пример ответа
// [
//   {
//     value: "х",
//     type: "согласная",
//   },
//   {
//     value: "у",
//     type: "гласная",
//   },
//   {
//     value: "й",
//     type: "согласная",
//   },
//   {
//     value: " ",
//     type: "пробел",
//   },
//   {
//     value: "!",
//     type: "знак препинания",
//   },
// ];

// не трогать
export const runner = () => console.table(generate(INPUT));
