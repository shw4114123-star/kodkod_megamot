// const fs = require("fs");

// // 1.
// function writeFileAsPromise(filePath, content) {
//   const promise = new Promise((resolve, reject) => {
//     fs.writeFile(filePath, content, "utf-8", (e) => {
//       if (e) {
//         reject(e);
//         return;
//       }
//       resolve()
//       console.log("writed succesfuly");
//     })
//   })
//   return promise
// }
// const pr = writeFileAsPromise("./data/message.txt", "shlomo waxman")
// pr.then((v) => {
//   console.log("v");
// })
//   .catch((e) => {
//     console.log("Error");
//   })


// // 2.
// function readFileAsPromise(filePath) {
//   const promise = new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf-8", (e, data) => {
//       if (e) {
//         reject(e);
//         return;
//       }
//       resolve(data);
//     })
//   })
//   return promise;
// }
// const pr = readFileAsPromise("./data/message.txt");
// pr.then((v) => {
//   console.log(v);
// })
//   .catch((e) => {
//     console.log("Error");
//   })


// // 3.
// function readFileAsPromise(filePath) {
//   const promise = new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf-8", (e, data) => {
//       if (e) {
//         reject(e);
//         return;
//       }
//       resolve(data.length);
//     })
//   })
//   return promise;
// }
// const pr = readFileAsPromise("./data/message.txt");
// pr.then((v) => {
//   console.log(v);
// })
//   .catch((e) => {
//     console.log("Error");
//   })


// 4.
// function appendFileAsPromise(filePath, conten) {
//   const promise = new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf-8", (e) => {
//       if (e) {
//         reject(e);
//         return;
//       }
//       resolve();
//     })
//   })
//   return promise;
// }
// const pr1 = appendFileAsPromise("./data/step1.txt", "mendy waxman compiuters")
// pr1.then((v) => {
//   const pr2 = appendFileAsPromise("./data/step2.txt", "shlomo waxman progreming")
//   pr2.then((v) =>{
//     console.log(v);    
//   })
//   .catch((e)=>{
//     console.log("Error");
//   })
//   console.log(v);
// })
//   .catch((e) => {
//     console.log("Error");
//   })