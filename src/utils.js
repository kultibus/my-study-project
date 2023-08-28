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

