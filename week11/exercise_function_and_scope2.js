// // 1.
// const number = num => num * 3
// console.log(number(3))


// // 2.
// const string = str => str.length
// console.log(string("shlomo"))


// // 3.
// const number = function (num) {
//   if (num < 0) {
//     return "negative"
//   } else if (num > 0) {
//     return "positive"
//   } else if (num === 0) {
//     return "zero"
//   }
// }
// console.log(number(3))
// console.log(number(-3))
// console.log(number(0))


// // 4.
// const numbers = function (num1, num2) {
//   if (num1 > num2) {
//     return num1
//   } else {
//     return num2
//   }
// }
// console.log(numbers(3,5))
// console.log(numbers(5,3))


// // 5.
// const numbers = arr => arr.length
// console.log(numbers([2,4,5,6,3,2,1,3,4,5]))


// // 6.
// let a = 3;
// function test() {
//   a = 7;
// }
// test();
// console.log(a);
// // מדפיס 7 כי a בתוך הפונקציה עושים לו השמה ל 7
// // ואפשר לגשת אליו כי הוא let


// // 7.
// function test() {
//   let a = 5;
// }
// test();
// console.log(a);
// // שגיאה כי ההשמה של a הוא בתוך הפונקצייה והוא לא מכיר אותו בחוץ
// // גם אם הוא ידפיס את הפונקצייה היא לא מחזירה כלום


// // 8.
// let x = 10;
// function change() {
//   let x = 20;
// }
// console.log(x);
// // זה יכול להיות קוד תקין וזה יכול להיות באג
// // אין לו החזרה בפונקצייה ואין לו קריאה בפונקציה
// // אין קריאה לפונקציה אז אוטומטי
// // אם אתה מדפיס את x אין לו מושג מה קורה שם
// // אז הוא מדפיס את x כ 10


// // 9.
// let num = 1;
// function first() {
//   num++;
// }
// function second() {
//   num = num + 2;
// }
// first();
// second();
// console.log(num);
// יודפס 4


// // 10.
// // let message = "Hi";
// // function print() {
// //   console.log(message);
// // }
// // תיקון
// function print() {
//   let message = "Hi";
//   console.log(message);
// }


// // 11.
// const numbers = function (arr) {
//   let fmin = arr[0]
//   for (i o arr) {
//     if (i < min) {
//       min = i
//     }
//   } return min
// }
// console.log(numbers([8,7,4,2,4,1,64,3,3]))


// // 12.
// const numbers = function (num1, num2) {
//   if (num1 % num2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(numbers(4, 3))
// console.log(numbers(4, 2))


// // 13.
// const string = arrStr => arrStr.join("")
// console.log(string(["shlomo", "mendy", "waxman"]))


// // 14.
// let x = 5;
// function test(x) {
//   x = x + 10;
//   return x;
// }
// let result = test(x);
// console.log(x);
// console.log(result);
// // יודפס X ששווה ל 5 ואחר כך יודפס result ששוה 15


// // 15.
// const number = function (num) {
//   for (let i = 1; i < num; i++) {
//     console.log(i)
//   }
// }
// number(32)


// // 16.
// const numbers = function (numbersList) {
//   let newArr = []
//   for (i of numbersList) {
//     if (!newArr.includes(i))
//       newArr.push(i)
//   }
//   return newArr
// }
// console.log(numbers([1,2,3,1,2,3,4,6,4,6,7,5,7,5,4,4]))


// // 17.
// // let sum = 0;
// // function add(numbers) {
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// // }
// // add([1, 2]);
// // add([3, 4]);
// // console.log(sum);
// // המשתנה sum הוא גלובלי ואם כן בכל קריאה לפונקציה הוא מתעדכן
// // וכשמדפיסים אותו זה מדפיס עם כל מה שקראו לפונקציה
// // תיקון
// function add(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum
// }
// console.log(add([1, 2]));
// console.log(add([3, 4]));


// // 18.
// const arr = function (myarr) {
//   let count = 0
//   for (i of myarr) {
//     if (i.length % 2 === 0)
//     count += 1
//   }
//   return count
// }
// console.log(arr(["shlomo", "mendy", "tzipi", "waxman"]))


// // 19.
// let x = 1;
// function a() {
//   let x = 2;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();
// // יודפס 2 כי יש הדפסה רק בפונקציה b ושם יש הדפסה וב a אין הדפסה


// // 20.
// // let discount = 0.1;
// // function getPrice(price) {
// //   return price - price * discount;
// // }


// const getPrice = price => price - price * 0.1;
// console.log(getPrice(21))





















