// dont touch
export const runner = () => null;

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

// console.log(randomInteger(1, 5));

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

// function arrayFromString(str) {
//   let arr = [];
//   let arrEl = "";
//   for (let index = 0; index < str.length; index++) {
//     let startFixedPoing = 0;
//     if (str[index] === " ") startFixedPoing = index;
//     if (startFixedPoing === 0) {
//       arrEl = arrEl + str[index];
//     } else {
//       arr.push(arrEl);
//       arrEl = "";
//     }
//   }
//   return arr;
//   return str.split(' ')
// }

// let str =
//   "brings you the latest celebrity & royal news from the UK & around the world";

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

// arr.forEach((el, i, arr) => {
//   console.log(`In array ${arr} element ${el} has index ${i}`)
// });

//=====================================================
//========== DATATYPES.ARRAYMETHODS.PROBLEMS ==========
//=====================================================

// const camelsize = (str) => {
//   let words = str.split("-").map((value) => value.split(""));
//   for (let i = 0; i < words.length; i++) {
//     let firstLetter = words[i].at(0).toUpperCase();
//     words[i].splice(0, 1, firstLetter);
//     words[i].join('')
//   }
//   str = words.map(value => value.join('')).join('')
//   return str;
// };

// const camelsize = (str) => {
//   const letters = str.split("");

//   const firstChar = (char) => char.toUpperCase();
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] == "-") {
//       letters.splice(i, 2, firstChar(letters[i + 1]));
//     }
//   }
//   str = letters.join("");
//   return str;
// };

// const capitalizeFirstLetters = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "-") {
//       arr.splice(i, 2, arr[i + 1].toUpperCase());
//     }
//   }
//   return arr
// }

// const camelsize = (str) => capitalizeFirstLetters(str.split('')).join('');

// const camelsize = (str) =>
//   str
//     .split("-")
//     .map(
//       (word, index) =>
//         (word = index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     )
//     .join("");

// console.log(camelsize("list-style-image"));

//==================================================================================

// const filterRange = (arr, a, b) =>
//   arr.filter((value) => value >= a && value <= b);

// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4), arr);

//==================================================================================

// const filterRangeInPlace = (arr, a, b) =>
//   arr.forEach((item, index, arr) => {
//     if (item <= a || item >= b) arr.splice(index, 1);
//   });

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

//==================================================================================

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b - a)

// console.log(arr);

//==================================================================================

// const newArr = [...[1,2,3], ...[10,12]]

// const newArr2 = newArr.map((el) => el).reverse()
// console.log(newArr, newArr2);

//==================================================================================

// const copySorted = (arr) => arr.map((el) => el).sort();
// const copySorted = (arr) => arr.slice().sort();

// let arr = ["HTML", "JavaScript", "CSS"];

// console.log(copySorted(arr), arr);

//==================================================================================

// function Calculator() {
//   this.calculate = (str) => {
//     let arr = str.split(" ");
//     let a = +arr[0];
//     let b = +arr[2];
//     let operator = arr[1];
//     let sum;
//     if (operator == "+") {
//       sum = a + b;
//     } else if (operator == "-") {
//       sum = a - b;
//     }

//     return sum;
//   };
//   this.addMethod = (name, func) => {
//     this.calculate = (str) => {
//       let arr = str.split(" ");
//       let a = +arr[0];
//       let b = +arr[2];
//       let sum = func(a, b);
//       return sum;
//     };
//   };
// }

// function Calculator() {
//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };
//   this.calculate = (str) => {
//     let split = str.split(" ");
//     let a = +split[0];
//     let b = +split[2];
//     let operator = split[1];
//     if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }
//     return this.methods[operator](a, b);
//   };
//   this.addMethod = (name, func) => {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator();
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);

// console.log(calc.calculate("3 + 7"), powerCalc.calculate("6 / 2"));
// console.log(calc.calculate("3 + 7"));

//==================================================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)

// console.log(names);

//==================================================================================

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// console.log(usersMapped, usersMapped[0].id, usersMapped[0].fullName);

//==================================================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// const sortByAge = (arr) => arr.sort((user1,user2) => user1.age - user2.age)

// console.log(sortByAge(users));

//==================================================================================

// const randomInteger = (min, max) =>
//   Math.floor(min + Math.random() * (max + 1 - min));

// let arr = [1, 2, 3];
// let chars = ["a", "b", "c"];

// const shuffle = (arr) => {
//   let newArr = [];
//   do {

//     let randomIndex = randomInteger(0, arr.length - 1)
//     newArr.push(arr.splice(randomIndex, 1))

//   } while (arr.length != 0);
//   return newArr
// }

// arr = shuffle(arr)
// console.log(arr);

//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!
//ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!ЭТО ПИЗДЕЦ!!!!!!!!!!!!!

// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   array = shuffle(array);
//   count[array.join('')]++;
// }

// for (const key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

//==================================================================================

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// const getAverageAge = (users) =>
//   users.reduce((perv, user) => perv + user.age, 0) / users.length;

// console.log(getAverageAge(arr));

//==================================================================================

//Оставить уникальные элементы массива

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// const unique = (arr) => {
//   arr.sort();
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == arr[i - 1]) arr.splice(i, 1);
//   }
//   return arr;
// };

// console.log(unique(strings), strings);

//==================================================================================
//Создайте объект с ключами из массива

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// const groupById = (arr) => {
//   let obj = {
//     createValue(arr) {
//       arr.reduce((obj, item) => (this[item.id] = item), obj);
//     },
//   };
//   obj.createValue(arr);
//   delete obj.createValue;
//   return obj;
// };

// const groupById = (arr) => arr.reduce((obj, item) => {
//   obj[item.id] = item;
//   return obj
// }, {})

// let usersById = groupById(users);

// console.log(usersById);

//=================================================
//========== DATATYPES.ITERABLES.THEORY ===========
//=================================================

// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// console.log(range);

// for (const iterator of range) {
//   // console.log(iterator);
// }

// let string = "Download the React DevTools for"

// for (const key in string) {
//   console.log(string[key]);
// }

// for (const iterator of string) {
//   console.log(iterator);
// }

// let iterator = string[Symbol.iterator]()

// while (true) {
//   let result = iterator.next()
//   if (result.done) {
//     break
//   }
//   console.log(result);
// }>

//=================================================
//========== DATATYPES.MAP & SET.THEORY ===========
//=================================================

// const map = new Map();

// map.set('1', 'str')
// map.set(1, 'num')
// map.set(true, 'boolean')

// const map = new Map();

// map.set('1', 'str').set(1, 'num').set(true, 'boolean')

// for (const key of map.keys()) {
//   console.log(key);
// }
// for (const value of map.values()) {
//   console.log(key);
// }
// for (const entries of map) {
//   console.log(entries);
// }

// console.log(map.get(1),map.get('1'),map.get(true), map.size);

// let john = {name: 'John'}

// const map = new Map()

// map.set(john, 123)
// console.log(map.get(john));

// let john = {name: "john"}
// let ben = {name: "ben"}

// let visitsCountObj = {}

// visitsCountObj[john] = 123
// visitsCountObj[ben] = 321

// console.log(visitsCountObj['[object Object]']);

// let recipeMap = new Map([
//   ['огурец', 500],
//   ['помидор', 344],
//   ['лук', 21]
// ])

// for (const vegetable of recipeMap.keys()) {
//   console.log(vegetables);
// }
// for (const amount of recipeMap.values()) {
//   console.log(amount);
// }
// for (const entries of recipeMap) {
//   console.log(entries);
// }

// recipeMap.forEach((value, key, map) => console.log(`${key} ${value}`))

// let map = new Map([
//   ['1', 'str'],
//   [1, 'num'],
//   [true, 'boolean'],
// ])

// console.log(map.get('1'));
// console.log(map.get(1));
// console.log(map);

// let john = {
//   name: 'john',
//   age: 23
// }

// let map = new Map (Object.entries(john))

// console.log(map.get('name'));

// let prices = Object.fromEntries([
//   ['banana', 34],
//   ['orange', 45],
//   ['apple', 23],
// ])

// console.log(prices['apple']);

// let map = new Map();
// map.set("banana", 34);
// map.set("orange", 54);
// map.set("apple", 14);

// let obj = Object.fromEntries(map)

// console.log(obj);

// let set = new Set()

// let john = {name: 'john'}
// let ann = {name: 'ann'}
// let ben = {name: 'ben'}

// set.add(john)
// set.add(john)
// set.add(ann)
// set.add(john)
// set.add(ben)

// for (const user of set) {
//   console.log(user.name);

// }

// console.log(set);

// let set = new Set(['orange','banana','apple'])

// // for (const value of set) {
// //   console.log(value);
// // }

// set.forEach(value => console.log(value))

//=================================================
//========== DATATYPES.MAP&SET.PROBLEMS ===========
//=================================================

//Filter unique array members=====================

// function unique(arr) {
//   let set = new Set()
//   let values = []
//   for (const string of arr) {

//     set.add(string)
//   }
//   set.forEach((value) => values.push(value))
//   return values
// }

// const unique = (arr) => Array.from(new Set(arr))

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values));

//Отфильтруйте анаграммы=====================

// const aclean = (arr) => {
//   let set = new Set();
//   for (let word of arr) {
//     let sortedString = word.toLowerCase().split("").sort().join("");
//     set.add(sortedString);
//   }
//   let sorted = [];
//   for (const string of set.values()) {
//     for (const item of arr) {
//       if (string == item.toLowerCase().split("").sort().join("")) {
//         sorted.push(item);
//         break;
//       }
//     }
//   }
//   return sorted;
// };

// const aclean = (arr) => {
//   let map = new Map();
//   for (const word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// };

// const aclean = (arr) => {
//   let obj = {};
//   for (const word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");
//     obj[sorted] = word
//   }
//   return Object.values(obj)
// };

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

//Отфильтруйте анаграммы=====================

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys())
// keys.push('more')

// console.log(keys, map.keys());

//=================================================
//========== DATATYPES.WEAKMAP&WEAKSET.THEORY =====
//=================================================

// let john = {name: 'john'}

// let array = ['pete', john]

// john = null

// console.log(array[1]);

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok"); // работает (объект в качестве ключа)

// // нельзя использовать строку в качестве ключа
// weakMap.set("test", "Whoops");

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "5654");

// // john = null;
// console.log(weakMap.get(john));

// let visitsCountMap = new Map(); // map: пользователь => число визитов

// // увеличиваем счётчик
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let john = { name: "John" };

// countUser(john); //ведём подсчёт посещений
// countUser(john); //ведём подсчёт посещений
// countUser(john); //ведём подсчёт посещений
// countUser(john); //ведём подсчёт посещений
// john = null;
// console.log(visitsCountMap.keys());
// // пользователь покинул нас

//=================================================
//========== DATATYPES.WEAKMAP&WEAKSET.PROBLEMS ===
//=================================================

//Хранение отметок "не прочитано"==================

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];

// // let isMessageRead = new WeakMap();
// // let check = true;
// // for (const message of messages) {
// //   if (check === true) {
// //     isMessageRead.set(message, true);
// //   } else {
// //     isMessageRead.set(message, false);
// //   }
// // }

// // messages[0] = null;

// // console.log(isMessageRead.get(messages[0]));

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

// console.log("read message 0: " + readMessages.has(messages[0]));

// messages.shift(); //???????????????????

// console.log(readMessages);

//Хранение времени прочтения==================

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];

// let messagesDate = new WeakMap();

// let date = "23.04.33";

// messagesDate.set(messages[0], date);

// console.log(messagesDate);

//============================================================
//========== DATATYPES.OBJECT.KEYS.VALUES.ENTRIES.THEORY =====
//============================================================

// let map = new Map();
// map.set("apple", 1);
// map.set("orange", 2);
// map.set("banana", 5);
// map.set("pine", 7);

// let obj = {
//   apple: 1,
//   orange: 4,
//   banana: 6,
// };

// console.log(map.keys(), obj);

//============================================================
//========== DATATYPES.OBJECT.KEYS.VALUES.ENTRIES.PROBLEMS ===
//============================================================

//Сумма свойств объекта====================================

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const sumSalaries = (salaries) => {
//   let sum = 0;
//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// };

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
// }

// console.log(sumSalaries(salaries));

//Подсчёт количества свойств объекта====================================

// let user = {
//   name: "John",
//   age: 30,
// };

// const count = (obj) => Object.keys(obj).length;

// let smth = count(user)
// console.log(count(user));

//=======================================================
//========== DATATYPES.DESTRUCTURINGASSIGNMENT ==========
//=======================================================

// let arr = ["potato", "tomato"];

// let [firstVeg, secVeg] = arr;

// console.log(firstVeg, secVeg);

// let [firstName, secondName] = "john smith".split(" ");

// console.log(firstName, secondName);

// let {height, width, title} = { title: "Menu", height: 200, width: 100 }

// console.log(title);

//Деструктурирующее присваивание=====================================

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

//Максимальная зарплата=====================================

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const topSalaries = (salaries) => {
//   let max = 0
//   let maxName = null
//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary
//       maxName = name
//     }
//   }
//   return maxName;
// };

// topSalaries(salaries);

//=======================================================
//========== DATATYPES.DATE&TIME ===================
//=======================================================

// let date = new Date ()
// console.log(date.getDay());

//Создайте дату

// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

//Покажите день недели

// const getWeekDay = (date) => {
//   const weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
//   // return weekDays.find((day, index) => index == date.getDay(date));
//   return weekDays[date.getDay(date)]
// };

// let date = new Date(2012, 0, 3);

// console.log(getWeekDay(date));

//День недели в европейской нумерации

// const getLocalDay = function (date) {
//   // let dayNumber = date.getDay(date) > 0 ? date.getDay(date) : 7;
//   // return dayNumber;
//   let day = date.getDay(date);
//   if (day == 0) day = 7;
//   return day;
// };

// let date = new Date(2012, 0, 1);

// console.log(getLocalDay(date));

//Какой день месяца был много дней назад? solved(0)

// const getDateAgo = function (date, days) {
//   // let daysTimeStamp = days * 24 * 3600 * 1000
//   // let dateDaysAgo = new Date(date.getTime() - daysTimeStamp);
//   // return dateDaysAgo.getDate();
//   let dateDaysAgo = new Date(date)
//   dateDaysAgo.setDate(date.getDate() - days)
//   return dateDaysAgo.getDate()
// };

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

//Последнее число месяца? solved(1)

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1)); solved(0)

// function getSecondsToday() {
//   //my
//   // let today = new Date();
//   // let todayStart = today.setHours(0, 0, 0, 0);
//   // return Math.floor((Date.now() - todayStart) / 1000);

//   //alt#1
//   // let now = new Date();
//   // let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   // let diff = now - today;
//   // return Math.floor(diff / 1000);

//   //alt#2
//   // let date = new Date();
//   // return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
// }

// console.log(getSecondsToday());

//Сколько секунд осталось до завтра? solves(0)

// function getSecondsToTomorow() {
//   //my
//   // let date = new Date();
//   // let secondsInDay = 24 * 60 * 60;
//   // return secondsInDay - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());

//   //alt#1
//   // let now = new Date();
//   // let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   // return Math.floor((tomorrow - now) / 1000);
// }

// console.log(getSecondsToTomorow());

//Форматирование относительной даты solved(0)

// function formatDate(date) {
//   //my
//   // let diff = (Date.now() - date) / 1000;
//   // if (diff < 1) {
//   //   return "right now";
//   // } else if (diff < 60) {
//   //   return diff + " seconds ago";
//   // } else if (diff < 60 * 60) {
//   //   return `${diff / 60} minutes ago`;
//   // } else {
//   //   return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
//   // }

//   //alt#1
//   // let diff = Math.floor(Date.now() - date);
//   // if (diff < 1000) return "right now";

//   // let sec = Math.floor(diff / 1000);
//   // if (sec < 60) return sec + " seconds ago";

//   // let min = Math.floor(diff / 60000);
//   // if (min < 60) return min + " minutes ago";

//   // let formatDate = [
//   //   "0" + date.getDate(),
//   //   "0" + date.getMonth(),
//   //   "" + date.getFullYear(),
//   //   "0" + date.getHours(),
//   //   "0" + date.getMinutes(),
//   // ].map(comonent => comonent.slice(-2))
//   // return formatDate.slice(0,3).join('.') + ' ' + formatDate.slice(3).join(':')
// }

// let date = new Date(new Date() - 1);
// date = new Date(new Date() - 30 * 1000);
// date = new Date(new Date() - 5 * 60 * 1000);
// date = new Date(new Date() - 86400 * 1000);
// console.log(formatDate(date));

//JSON methods, toJSON

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

//Преобразуйте объект в JSON, а затем обратно в обычный объект solved(1)

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let userJson = JSON.stringify(user)
// let userAgain = JSON.parse(userJson)

// console.log(userJson, userAgain);

//Исключить обратные ссылки solved(-1)

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key !== "" && value == meetup ? undefined : value;
//   })
// );

//Продвинутая работа с функциями. Рекурсия и стек

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2, 3));

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 3));

// let company = {
//   // тот же самый объект, сжатый для краткости
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((perv, current) => perv + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (const subDep of Object.values(department)) {
//       sum += sumSalaries(subDep);
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company));

//Вычислить сумму чисел до данного solved(0)

// const sumTo = function (n) {
//   let result = 0
//   for (let i = n; i > 0; i--) {
//     result += i
//   }
//   return result;
// };

// const sumTo = (n) => (n == 1 ? n : n + sumTo(n - 1));

// const sumTo = (n) => ((n + 1) * n) / 2;

// console.log(sumTo(10));

//Вычислить факториал solved(0)

// const factorial = (n) => n == 1 ? n : n * factorial(n - 1)

// console.log(factorial(5));

//Числа Фибоначчи solved(0)

// const fib = function (n) {
//   let arr = [1, 1];
//   for (let i = 1; i < n - 1; i++) {
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//     console.log(arr);
//   }
//   return arr[n - 1];
// };

// const fib = function(n) {
//   let a = 1
//   let b = 1
//   for (let i = 3; i <= n; i++) {
//     let c = a + b
//     a = b
//     b = c
//   }
//   return b
// }

// console.log(fib(7));

//Вывод односвязного списка solved(-1)

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//   let temp = list;
//   while (temp) {
//     console.log(temp.value);
//     temp = temp.next;
//   }
// }

// printList(list);

// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }

// printList(list);

//Вывод односвязного списка в обратном порядке sovved(-1)

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next)
//   }
//   console.log(list.value);
// }

// printReverseList(list);

// function printReverseList(list) {
//   let arr = []
//   let temp = list
//   while (temp) {
//     arr.push(temp.value)
//     temp = temp.next
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// printReverseList(list);

//Продвинутая работа с функциями. Остаточные параметры и оператор расширения

// function sumAll(...args) {
//   let sum = 0
//   for (const arg of args){
//     sum += arg
//   }
//   return sum
// }

// console.log(sumAll(1,2,3));

// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + ' ' + lastName);
//   console.log(titles[0], titles[1], titles.length);
// }

// showName('ivan', 'toporizhkin', 'hodil', 'na', 'ohotu')

// function showName() {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// showName('ivan', 'toporizhkin', 'hodil', 'na', 'ohotu')

// showName('ivan')

// function f() {
//   let showArg = () => console.log(arguments[0]);
//   showArg(2)
// }

// f(1)

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2));

// let merged = [...arr1, ...arr2]
// console.log(merged);

// let str = 'hello'
// console.log([...str]);

//Продвинутая работа с функциями. Область видимости переменных, замыкание

// function makeCounter() {
//   let count = 0
//   return function() {
//     return count++
//   }
// }

// let counter = makeCounter()

// console.log(counter());

// function f() {
//   let value = 123;

//   return function() {
//     console.log(value);
//   }
// }

// let g = f();
// g()
// g()
// g()
// g()

// function f() {
//   let value = Math.random()
//   return function() {
//     console.log(value);
//   }
// }

// let arr = [f(),f(),f()]
// arr[0]()
// arr[1]()
// arr[2]()

//Сумма с помощью замыканий solved(-1)

// function sum(b) {
//   return function (a) {
//     return a + b;
//   };
// }

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

//Фильтрация с помощью функции solved(0)

// function inBetween(a, b) {
//   return function (item) {
//     // if (item >= a && item <= b) return true;
//     return item >= a && item <= b;
//   };
// }
// function inArray(arr) {
//   return function (item) {
//     // return arr.includes(item) ? true : false;
//     return arr.includes(item);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 2, 10])));

//Сортировать по полю solved(-1)

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(fieldName) {
//   // return function (a, b) {
//   //   return a.fieldName > b.fieldName ? 1 : -1;
//   // };
//   return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }

// // users.sort((a, b) => (a.name > b.name ? 1 : -1));
// // users.sort((a, b) => (a.age > b.age ? 1 : -1));

// console.log(users.sort(byField("name")));

//Армия функций solved(1)

// function makeArmy() {
//   let shooters = [];

//   let i = 0;

//   while (i < 10) {
//     let j = i
//     let shooter = function () {
//       console.log(j);
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[1]();
// army[2]();

//Продвинутая работа с функциями. Глобальный объект

