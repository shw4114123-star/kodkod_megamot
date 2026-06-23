// // 1.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }


// // 2.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }


// // 3.
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
//   console.log(sum)


// // 4.
// const names = ["דנה", "יוסי", "מיכל", "רון"];
// for (i = 0; i < names.length; i++) {
//   console.log(names[i])
// }


// // 5.
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i])
//   }
// }


// // 6.
// const numbers = [3, 99, 12, 45, 78];
// let bigest = 0;
// for (i = 0; i < numbers.length; i++){
//   if (numbers[i] > bigest) {
//     bigest = numbers[i]
//   }
// }
// console.log(bigest)


// // 7.
// const word = "javascript";
// for (i = 0; i < word.length; i++) {
//   console.log(word[i])
// }


// // 8.
// const numbers = [1, 2, 3, 4];
// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] * 2)
// }


// // 9.
// let i = 0
// while (i < 10) {
//   i++
//   console.log(i)
// }


// // 10.
// let input = "";
// while (input !== "stop") {
//   console.log("please enter `stop`")
//   input = "stop"
// }


// // 11.
// let number = 3;
// let sum = 0;
// while (number !== 0) {
//   console.log("please enter a number")
//   sum += number
// }


// // 12.
// const secret = 7;
// let input = 0
// while (input !== secret) {
//   console.log("please enter a number")
//   console.log(input)
// }


// // 13.
// let x = 1;
// while (x !== 20) {
//   console.log(x)
//   x += 1
// }


// // 14.
// let password = "";
// while (password !== "1234") {
//   console.log("please enter a password")
//   password = "1234"
// }


// // 15.
// let count = 0;
// do {
//   count ++
// } while (count < 10)
// console.log(count)


// // 16.
// let choice = "exit";
// do {
//   choice !== "exit"
// } while (choice !== "exit")
// console.log("please enter a choice")


// // 17.
// const numbers = [1, 3, 7, 9, 15, 2];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10)
//     break
//   console.log(numbers[i])
// }


// // 18.
// const numbers = [5, -1, 8, -3, 10];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0)
//     continue
//   console.log(numbers[i])
// }


// // 19.
// const ages = [12, 15, 18, 21, 25];
// for (i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18)
//     break
//     console.log(ages[i])
// }


// // 20.
// const arr = [10, 20, 30, 40, 50];
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }


// // 21.
// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0)
//   sum += numbers[i]
// }
// console.log(sum)


// // 22.
// const target = 25;
// const numbers = [10, 15, 20, 25, 30];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] !== target)
//     continue
//   console.log("the number is", numbers[i])
// }


// // 23.
// const word = "hello world";
// for (i = 0; i < word.length; i++) {
//   console.log(word[i].toUpperCase())
// }


// // 24.
// const numbers = [2, 4, 6, 8, 10, 12]; {
//   for (i of numbers) {
//     if (i < 8 && i % 2 === 0) {
//       console.log(i)
//     }
//   }
// }


// // 25.
// const students = [
//   { name: "דנה", grade: 55 },
//   { name: "יוסי", grade: 90 },
//   { name: "שלמה", grade: 100 },
//   { name: "מיכל", grade: 78 },
//   { name: "רון", grade: 45 }]; 
// let stu = []
// for (i of students) {
//   if (i.grade > 60) {
//     stu.push(i)
//     if (i.grade === 100) {
//       break
//     }
//   }
// }
// console.log(stu)
