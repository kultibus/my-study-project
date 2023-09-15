// dont touch
export const runner = () => null;

//Продвинутая работа с функциями. Объект функции, NFE

// function sayHi() {
//   console.log('hi');
// }

// const sayHi = function() {
//   console.log('hi');
// }

// function f(sayHi = function () {}) {
//   alert(sayHi.name);
// }
// f();

// console.log(sayHi.name);

// function sayHi() {
//   console.log('hi');
//   sayHi.counter++
// }

// sayHi.counter = 0

// sayHi()
// sayHi()

// console.log(`sayHi function was called ${sayHi.counter} times`);

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   return counter;
// }

// let counter = makeCounter()

// console.log(counter());
// console.log(counter());
// console.log(counter());

// Установка и уменьшение значения счётчика
// solved(0)

// let counter = () => {
//   let count = 0
//   counter = () => count++
//   counter.decrease = () => count--;
//   counter.set = value => count = value;
//   return counter();
// };

// console.log(counter());
// console.log(counter());

// counter.set(10)
// console.log(counter());

// counter.decrease()
// console.log(counter());

// Сумма с произвольным количеством скобок

// const sum = (a) => (b) => a + b;

// function sum(a) {

//   function sum(b) {
//     return a + b;
//   };
//   return sum
// }

// console.log(sum(4)(2));

// let user = {
//   name: "John",
//   money: 1000,

//   // для хинта равного "string"
//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   // для хинта равного "number" или "default"
//   valueOf() {
//     return this.money;
//   }

// };

// console.log(+user);

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function () {
//     return currentSum;
//   };

//   return f;
// }

// console.log(+sum(1)(2));

// Продвинутая работа с функциями. Планирование: setTimeout и setInterval

// let timerId = setTimeout((phrase, who) => console.log(phrase + ' ' + who), 500, 'fuck you', 'dude')
// let timerId = setInterval(() => console.log("fuck you"), 1000);
// setTimeout(() => {
//   clearInterval(timerId);
// }, 10000);

// let timerId = setTimeout(function sayHi() {
//   // console.log(timerId);
//   timerId = setTimeout(sayHi, 1000)
//   console.log(timerId);
// }, 1000)
// setTimeout(() => {
//   clearTimeout(timerId)
// }, 11000);

// let start = Date.now()
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);
//   if (start + 100 < Date.now()) console.log(times);
//   else setTimeout(run)
// })

// Вывод каждую секунду

// function printNumbers(from, to) {
//   let timerId = setInterval(() => {
//     console.log(from++);
//     if (from > to) clearInterval(timerId);
//   }, 1000);
// }

// function printNumbers(from, to) {
//   setTimeout(function print() {
//     console.log(from++);
//     if (from <= to) setTimeout(print, 500);
//   }, 0);
// }

// printNumbers(1, 10);

// Продвинутая работа с функциями. Декораторы и переадресация вызова, call/apply

// Декоратор-шпион

// function work(a, b) {
//   console.log(a + b);
// }


// function spy(func) {
//   let cache = []
//   return function f () {
//     cache.push(Array.from(arguments))
//     func(...arguments)
//     f.calls = cache
//   }
// }

// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args)
//     return func.apply(this, args)
//   }
//   wrapper.calls = []
//   return wrapper
// }


// work = spy(work);

// work(1, 2);
// work(4, 5);




// for (const args of work.calls) {
//   console.log("call:" + args.join());
// }


// Задерживающий декоратор

