// любые знаки препинания нужно заигнорить

const INPUT = 'Простое предложение для проверки!';

const generate = (sentence) => {};

const OUTPUT = {
  word1: {
    value: 'простое',
    letters: {
      п: 1,
      р: 1,
      о: 2,
      c: 1,
      т: 1,
      е: 1,
    },
  },

  word2: {
    // ...
  },

  word3: {
    // ...
  },
};

export const runner = () => console.table(generate(INPUT));

// const INPUT = 'Списо^#к букв кирил(*лицы';

// const fn = (symbol) => {
//   if (symbol.match(/\s/)) return 'пробел';
//   if (symbol.match(/[аеёиоуыэюя]/)) return 'гласная';
//   if (symbol.match(/[бвгджзйклмнпрстфхцчшщъь]/)) return 'согласная';
//   return 'знак препинания';
// };

// const generate = (string) => string.split('').map((value) => ({ value, type: fn(value) }));

// // const generate = (string) => {
// //   string = string.toLowerCase();

// //   const arrayFromString = [];

// //   for (let index = 0; index < string.length; index++) {
// //     const objectFromString = {
// //       value: string.at(index),
// //       type: fn(string.at(index)),
// //     };

// //     arrayFromString.push(objectFromString);
// //   }

// //   return arrayFromString;
// // };

// // Пример ответа
// // [
// //   {
// //     value: "х",
// //     type: "согласная",
// //   },
// //   {
// //     value: "у",
// //     type: "гласная",
// //   },
// //   {
// //     value: "й",
// //     type: "согласная",
// //   },
// //   {
// //     value: " ",
// //     type: "пробел",
// //   },
// //   {
// //     value: "!",
// //     type: "знак препинания",
// //   },
// // ];

// // не трогать
// export const runner = () => console.table(generate(INPUT));
