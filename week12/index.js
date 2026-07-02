
// function log() {
//   console.log("some");
// }
// console.log("start");
// console.log(log());
// console.log("end");


// console.log("start")

// setTimeout(() => {
// console.log("set time out")
// },30000);

// console.log("emd")


// const fs = require("fs")

// fs.writeFile("./data/momo.txt", "momo is a king", "utf-8", (e) => {
//   if (e) return console.log(e);
//   console.log("file created successfully");
//   readFile("./data/momo.txt", "utf-8", (e, data) => {
//     if (e) return console.log(e);
//   });
// });





// function getUser() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
//   });
//   return p;
// }
// const pr = getUser();
// pr.then((v) => {
// })

// console.log("after promise");




// function getUser() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject();
//     }, 2000);
//   });
//   return p;
// }
// const pr = getUser();

// pr.then((v) => {
//   console.log(v)
// })
//   .catch((e) => {
//   console.log("error")
// })

// console.log("after promise");




// const fs = require("fs")

// function getUser() {
//   const p = new Promise((resolve, reject) => {
//     fs.readFile("./data.momo.txt", "utf-8", (e, data) => {
//       if (e) {
//         reject(e)
//         return;
//       };
//       resolve
//     })
//   });
//   return p;
// }
// const pr = getUser();

// pr.then((v) => {
//   console.log(v)
// })
//   .catch((e) => {
//     console.log("error")
//   })

// console.log("after promise");




// const fs = require("fs")

// function getUser() {
// 	const p = new Promise((resolve, reject) => {
// 		console.log("start promise");
// 		fs.readFile("./callbacks-fs-practice/data/message.txt","utf-8",(err, data) => {
// 			if (err) {
// 				reject(err);
// 				return;
// 			};
// 			resolve(data);
// 			console.log("success");
// 		})
// 	});
// 	return p;
// }
// const pr = getUser();
// pr.then((v) => {
// 	console.log(v);
// })
// 	.catch((e) => {
// 		console.log("Error");

// 	})
// console.log("After promise");



// const { readFile } = require("fs");
// const fs = require("fs/promises")
// const p = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")
// p.then((data) => {
// 	console.log(data);
// 	const p2 = readFile("./callbacks-fs-practice/data/copy.txt", "utf-8");
// 	p2.then(() => {

// 	})
// 	.catch(() => {

// 	})
// })
// 	.catch(e => {
// 		console.log(e);
// 	})
// 	.finally(() => {
// 		console.log("End handler promise");
// 	})



// const fs = require("fs/promises")
// const p1 = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")
// const p2 = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")
// const p3 = fs.readFile("./callbacks-fs-practice/data/message.txt", "utf-8")

// Promise.all([p1, p2, p3])
// 	.then(results => {
// 		console.log(results);
// 	})
// 	.catch(err => console.log(err));

// // Promise.race([p1, p2, p3])
// 	.then(result => {
// 		console.log(result);
// 	})
// 	.catch(err => console.log(err));


// Promise.allSettled([p1, p2, p3])
// 	.then(results => {
// 		console.log(results);
// 	})
// 	.catch(err => console.log(err))




// const fs = require("fs/promises")
// const p1 = fs.readFile("./callbacks-fs-practice/data/copy.txt", "utf-8");

// setTimeout(() => {
//   console.log("settimeout");
// }, 10);
// p1.then(res => console.log(res))
//   .catch(err => console.log(err));




// const fs = require("fs/promises")
// fs.readFile("./step1.txt", "utf-8")
//   .then((val1) => {
//     return fs.writeFile("./step2.txt", val1 + "\n this tow contenst", "utf-8")
//       .then(() => {
//         return fs.writeFile("./step3.txt", val1 + "\n this tow contenst" + "\n this three contenst", "utf-8")
//           .then(() => {
//             console.log("Finish write 2 files");
//           })
//       })
//   }).catch(err => {
//     console.log(err);
//   })







// const fs = require("fs")

// function readFile(){
//   return new Promise((res, rej)=>{
//     fs.readFile("./step1.txt", "utf-8", (err, data)=>{
//       if (err) return rej(err);
//       res(data)
//     })
//   })
// }
// readFile().then(console.log)
// .catch(console.log)

// async function readFile() {
//   return 8;
// }

// const res = readFile()
// res.then((v)=>{
//   console.log(v)
// }).catch(console.log)




// const fs = require("fs/promises")

// async function readFile() {
//   try {
//     const res = await fs.readFile("./step1.txt", "utf-8");
//     fs.writeFile("./step2.txt", res + "\nshlomo", "utf-8");
//     fs.writeFile("./step3.txt", res + "\nshlomo" + "\nwaxman", "utf-8");
//   } catch (e) {
//     console.log(e);
//   }
// }

// const res = readFile();
// console.log("End file");




const fs = require("fs/promises")

async function readData() {
  try {
    const res = await fs.readFile("./step.json", "utf-8");
    return JSON.parse(res || []);
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function writeData(data) {
  try {
    await fs.writeFile("./step.json", JSON.stringify(data), "utf-8");
    return true;
  } catch (e) {
    console.error(e);
  }
}

async function createUser() {
  try {
    const name = "Shlomo";
    const id = 3;
    const users = await readData();
    users.push({name, id});
    const res = await writeData(users);
    console.log(res ? "success" : "failed to write data");
  } catch (e) {
    console.error(e)
  }
}

async function writeUsers() {
  try {
    await createUser();
    await createUser();
  } catch (e) {
    console.error(e);
  }
}

writeUsers()
