// const obj = {
//   name: "vasya",
//   age: 39,
//   siblings: [
//     {
//       name: "vanya",
//       age: 109,
//     },
//   ],
// };

// const func = () => {
//   return `${obj.siblings[0].name}`;
// };

const anyOtherFn = (arr) => {
  return arr.map((el) => `this is ${el}`);
};

// dont touch
export const runner = () => console.log();

//=====================================================>

// function readNumber() {
//   let num;
//   do {
//     num = prompt("input number", 0);
//   } while (!isFinite(num));
//   if (!num) return `Number: ${null}`;
//   return `Number: ${+num}`;
// }

// let random = function (min, max) {
//   let result;
//   do {
//     result = Math.random() * (max - min);
//   } while (result <= min || result > max);
//   return result;
// };

// let randomInteger = function (min, max) {
//   let result = min + Math.random() * (max - min);
//   return result.toFixed(0);
// };

// let func = function () {
//   let string = "hello";
//   for (const char of string) {
//     console.log(char);
//   }
// };

// func();

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа';

// function findPos(str, target, pos) {
//   pos = -1;
//   while ((pos = str.indexOf(target, pos + 1)) !== -1) {

//     console.log(`found positon ${pos}`)
//   }
// }

// findPos(str, target)

// let ucFirst = (str) => {
//   let firstChar = str.at(0).toUpperCase()
//   let anotherChar = str.slice(1)
//   return firstChar + anotherChar;
// }

// let str = 'вася'

// console.log(ucFirst(str))

// const checkSpam = (str) => {
//   let strLowerCase = str.toLowerCase();
//   return strLowerCase.includes("viagra") || strLowerCase.includes("xxx")
//   // if (strLowerCase.includes("viagra") || strLowerCase.includes("xxx")) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// };

// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam('innocent rabbit'))

// const truncate = (str, maxlength) => {
//   return (str.length > maxlength)
//     ? str.slice(0, maxlength - 1) + String.fromCodePoint(0x2026)
//     : str;
//   // let strLength = str.length;
//   // let strTruncate;
//   // if (strLength <= maxlength) {
//   //   return str;
//   // } else {
//   //   return (strTruncate = str.slice(0, maxlength - 1) + String.fromCodePoint(0x2026));
//   // }
// };

// console.log(truncate("Всем привет!", 20));
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

const extractCurrencyValue = (str) => {
  
}