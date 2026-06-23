// // 1.
// function hello(name) {
//   return `hello ${name}`
// }
// console.log(hello("shlomo"))


// // 2.
// function sum(num1, num2) {
//   return num1 + num2
// }
// console.log(sum(3,5))


// // 3.
// function number(num) {
//   if (num % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(number(3))
// console.log(number(4))


// // 4.
// function arr(numbers) {
//   return numbers[numbers.length - 1]
// }
// console.log(arr([1,3,5,4,"momo"]))


// // 5.
// const bigLeter = name => name.toUpperCase()
// console.log(bigLeter("shlomo"))


// // 6.
// let x = 5;
// function test() {
//   let x = 10;
//   console.log(x);
// }
// test();
// console.log(x);
// // קודם יודפס ה x שבתוך הפונקציה
// // ואחר כך יודפס ה x שמחוץ לפונקציה
// // כי זה סדר הקריאה וה x שבתוך הפונקציה לא קשורה ל x בחוץ


// // 7.
// // function test() {
// //   y = 10;
// // }
// // test();
// // console.log(y);
// //הבעייה היא שהמשתנה v הופך להיות גלובלי
// // צריך להפוך אותו למשתנה בתוך הסקופ ולהחזיר אותו
// // תיקון:
// function test() {
//   let y = 10;
//   return y
// }
// console.log(test());


// // 8.
// let x = 1;
// function a() {
//   console.log(x);
// }
// function b() {
//   let x = 2;
//   a();
// }
// b();
// // בפונקציה השנייה אין החזרה או הדפסה
// // רק קריאה לפונקצייה הראשונה ושם מדפיסים את x שהוא שווה ל 1


// // 9.
// { let y = 10; }
// function test() {
//   console.log(y)
// }
// test()


// // 10.
// // let count = 0;
// // function add() {
// //   count++;
// // }
// תיקון:
// function add() {
//   let count = 0;
//   count++;
//   return count
// }


// // 11.
// function sum(arr) {
//   let count = 0
//   for (i of arr) {
//     count += i
//   }
//   return count
// }
// console.log(sum([1, 4, 3, 2, 56, 6]))


// // 12.
// const squer = num => num ** 2
// const use = function (num) {
//   return squer(num)
// }
// console.log(use(5))


// // 13.
// let x = 10;
// function test(x) {
//   return x * 2;
// }
// console.log(test())
// // כי כשאתה קורה לו בפונקציה הוא לא משתמש עם המשתנה בחוץ
// // הוא משתמש רק עם המשתנה בתוך הפונקציה


// // 14.
// function even(arr) {
//   evenNumbers = []
//   for (i of arr) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }
//   return evenNumbers
// }
// console.log(even([1,3,2,4,6,8,,67,56]))


// // 15.
// // let total = 0;
// // function addToTotal(num) {
// //   total += num;
// // }
// // function reset() {
// //   total = 0;
// // }
// // addToTotal(5);
// // addToTotal(10);
// // reset();
// // console.log(total);

// כי זה ממש משנה את הערך total וזה מסוכן לשנות ערך גלובלי

// // let total = 0;
// // function addToTotal(num) {
// //   return total + num;
// // }
// // function reset() {
// //   total = 0;
// // }
// // addToTotal(5);
// // addToTotal(10);
// // reset();
// // console.log(total);










