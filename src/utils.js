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

import { forwardRef } from "react";

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

//========== dataTypes.strings.theory ====================================================================

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа';

// function findPos(str, target, pos) {
//   pos = -1;
//   while ((pos = str.indexOf(target, pos + 1)) !== -1) {

//     console.log(`found positon ${pos}`)
//   }
// }

// findPos(str, target)

//========== dataTypes.strings.problems ====================================================================

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

// const extractCurrencyValue = (str) => {
//   let newStr = "";
//   for (let index = 0; index < str.length; index++) {
//     if (!isFinite(str.at(index))) continue;
//     newStr += str.at(index)
//   }
//   return newStr;
// };

// let str = "$120";
// console.log(extractCurrencyValue(str))

//=========================================================================================================
//========== dataTypes.arrays.theory ====================================================================
//=========================================================================================================

// let arrayFromString = [];
// let string = 'hello'
// for (let index = 0; index < string.length; index++) {
//   arrayFromString.push(string.at(index))
// }

// console.log(arrayFromString)

// for (const char of arrayFromString) {
//   // console.log(char)
// }

//=========================================================================================================
//========== dataTypes.arrays.problems ====================================================================
//=========================================================================================================

// let styles = ["jazz", "blues"];
// console.log(styles);
// styles.push("rock-n-roll");
// console.log(styles);
// // let arrayMiddle = Math.floor(styles.length / 2);
// // styles[arrayMiddle] = "classic";
// styles[Math.floor((styles.length - 1) / 2)] = "classic";
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("hip-hop", "reggey");
// console.log(styles);

//======================================

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2]();

//======================================

// function sumInput() {
//   let array = [];
//   let sum = 0;
//   do {
//     array.push(prompt("input number", 0));
//   } while (array.at(-1) && array.at(-1) != "");
//   for (const item of array) {
//     if (isFinite(item)) {
//       sum += +item;
//     } else {
//       continue;
//     }
//   }
//   array.length = 0;
//   return sum;
// }

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("input number", 0);
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (const item of numbers) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(sumInput());

//====================================== подмассив максимальной суммы

// function getMaxSubSum(arr) {
//   let subArr = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         subArr.push(arr[i] + arr[j])
//       }
//   }

//   return Math.max(...subArr);
// }

// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//       console.log(sumFixedStart, maxSum)
//     }
//   }

//   return maxSum;
// }

// const getMaxSubSum = (arr) => {
//   let maxSum = 0;
//   let partialSum = 0;
//   for (const el of arr) {
//     partialSum += el;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//     console.log(partialSum, maxSum);
//   }
//   return maxSum;
// };

//CYRIL
// const getMaxSubSum = (arr) => {
//   if (arr.every((el) => el < 0)) return 0;

//   let sum = arr.reduce((acc, el) => acc + el, 0);

//   let l = 0;
//   let r = arr.length - 1;

//   while (l <= r) {
//     const newSum = arr.slice(l, r + 1).reduce((acc, el) => acc + el, 0);

//     sum = Math.max(sum, newSum);

//     if (arr[l] < arr[r]) {
//       l = l + 1;
//     } else {
//       r = r - 1;
//     }
//   }

//   return sum;
// };

// let arr = [-1, 2, 3, -9]
// console.log(getMaxSubSum(arr));

//=====================================================
//========== DATATYPES.ARRAYMETHODS.THEORY ============
//=====================================================

function arrayFromString(str) {
  // let arr = [];
  // let arrEl = "";
  // for (let index = 0; index < str.length; index++) {
  //   let startFixedPoing = 0;
  //   if (str[index] === " ") startFixedPoing = index;
  //   if (startFixedPoing === 0) {
  //     arrEl = arrEl + str[index];
  //   } else {
  //     arr.push(arrEl);
  //     arrEl = "";
  //   }
  // }
  // return arr;
  return str.split(' ')
}

let str =
  "brings you the latest celebrity & royal news from the UK & around the world";

  // let arr = [1,2,3];
  

// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 5
// };


// arr.sort(function (a,b) {
  //   return a - b;
  // })
  let arr = [1, -2, 15, 2, 0, 8];
  console.log(arr)

// arr.forEach((el, i, arr) => {
//   console.log(`In array ${arr} element ${el} has index ${i}`)
// });

