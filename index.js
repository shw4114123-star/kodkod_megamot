 
// const arr = [1, 2, 3, 4, 5]

// const obj = { shlomo: 23 }
// obj["shlomo"]
// console.log(obj)
// console.log(arr[arr.length - 2])


// console.log(Number("3") - 3)


// if (3 > 1 && 5 > 6) {
//   let conter = 5;
//   console.log(conter);
// } else if (3 > 2) {
//   console.log("else if");
// } else {
//   console.log("else");
// }



// console.log(
//   5 == 0 ? "momo" : "else"
// );




// if (num == 5) {
//   else if (num == 4);

//   else if (num == 3);
// }


// let num = "1";

// switch (num) {
//   case 5:
//     console.log("num equal to 5");
//     break;
//   case 4:
//     console.log("num equal to 4");
//     break;
//   case 3:
//     console.log("num equal to 3");
//     break;
//   default:
//     console.log("some default");
// }



// for (let i = 0; i < 10; i+= 2) {
//   console.log(i);
// }


// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) console.log(arr[i]);
// }



// const arr = [1, 2, 3, 4, 5, 6];
// for (index in arr) {
//   console.log(index)
// }


// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i])
// }

// // let counter = 0
// // while (counter < 20) {
// //   if (counter === 14)
// //     console.log("nehoray")
// //     counter++;
// //     continue;
// //   }


// let counter = 0
// do {
// counter ++
// } while (counter < 20)
// console.log(counter)


// for (var i = 0; i < 5; i++) {


// }


// console.log(i)







// function sum(a, b) {
//   return a + b
// }

// console.log(sum(8, 9))


// const sum2 = function (a, b) {
//   return a + b
// }

// console.log(sum2(8, 9))


// const sum3 = (a) => a + 6

// console.log(sum3(8))


// function getManyArgs(...args) {
//   console.log(args)
// }


// getManyArgs(2,3,4,5,"4,", true, "momo")

// function momo() {
//   if (true) {
//     var arr = []
//     arr.push(2)
//     arr.push(2)
//     arr.push(2)
//     arr.push(2)
//   }
//   console.log(arr)
// }

// momo();
// momo();
// momo();
// momo();
// momo();




// const nums = [1, 2, 3];

// const sum = nums.reduce((acc, item) =>{
//   console.log('acc:', acc, 'item:', item);
//   return acc + item;
// },
//   0);

// console.log(sum)




// const numbers = [1, 2, 3, 4]

// const sum = numbers.reduce((acc, val) => {
//   return acc + val
// }, 0)

// console.log(sum)




// const numbers = [2, 3, 4, "dd"]

// const sum = numbers.some((s) => s === 4)

// console.log(sum)




// const numbers = [[2], [3], [4], ["dd"]]

// const sum = numbers.flatMap((s => s.split(" ")))

// console.log(sum)
// users.flatMap(u => u.orders);

// const numbers = [3, 1, 2]


// numbers.sort((a, b) => b - a);
// console.log(numbers)




// const arr = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// console.log([...arr,...arr2.slice(0,3)]);


// const obj = { name: "shlomo", momo: "@" };
// const obj2 = { phone: "momo", name: "momo" };
// console.log({ ...obj, ...obj2 })


// const obj = { name: "shlomo", momo: "2" };
// const { name, ...rest } = obj;
// console.log(name, rest)


// const arr = ["moshe", 2, "ahlomo", ];
// const [name, ...rest] = arr;
// console.log(name, rest)






// function createCounter() {
//     let counter = 0;
//     const obj = {
//         inc: () => {
//             ++counter;
//         },
//         dec: function () {
//             --counter;
//         },
//         getCounter: () => counter,
//         setCounter: (newCounter) => counter = newCounter
//     }
//     return obj;
// }






















