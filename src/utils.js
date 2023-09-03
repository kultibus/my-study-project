// любые знаки препинания нужно заигнорить

const INPUT = 'Простое предложение для проверки!';

//=================== #1 =====================================

const deleteStrPunct = (str) => {
  let ignore = 'ignore';

  let arr = str
    .toLowerCase()
    .split('')
    .map((element) => {
      return (element =
        element.match(/\s/) || element.match(/[аеёиоуыэюя]/) || element.match(/[бвгджзйклмнпрстфхцчшщъь]/)
          ? element
          : ignore);
    });

  arr.forEach((el, i, arr) => {
    if (el === ignore) arr.splice(i, 1);
  });

  str = arr.join('');

  return str;
};

const createObjProps = (str) => {
  let arr = str.split(' ');

  let obj = {};

  arr.forEach((el, i) => {
    obj['word' + (i + 1)] = {
      value: el,
    };
  });

  return obj;
};

const createLettersObjects = (str) => {
  let obj = {};

  let counter = 1;

  for (let index = 0; index < str.length; index++) {
    let key = str[index];

    if (!(str[index] in obj)) {
      obj[key] = 1;
    } else {
      obj[key] = ++counter;
    }
  }

  return obj;
};

const generate = (sentence) => {
  sentence = deleteStrPunct(sentence);

  let obj = createObjProps(sentence);

  for (const prop in obj) {
    obj[prop].letters = createLettersObjects(obj[prop].value);
  }

  return obj;
};

//=================== #2 =====================================

// const generate = (sentence) => {
//   let words = {};

//   let wordsArr = sentence.toLowerCase().split(' ');

//   for (let index = 0; index < wordsArr.length; index++) {
//     words['word' + (index + 1)] = {
//       value: wordsArr[index],
//     };
//   }

//   const genLetters = (str) => {
//     let obj = {};

//     let counter = 1;
//     for (let index = 0; index < str.length; index++) {
//       let key = str[index];
//       if (!(str[index] in obj)) {
//         obj[key] = 1;
//       } else {
//         obj[key] = ++counter;
//       }
//     }

//     return obj;
//   };

//   for (const key in words) {
//     words[key].letters = genLetters(words[key].value);
//   }
//   return words;
// };

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

export const runner = () => {
  console.table(generate(INPUT));
};

//==================================================================================================

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
