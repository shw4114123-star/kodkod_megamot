const fs = require("fs")
const fsPromises = require("fs/promises")


// // 1.
// function readFile(){
//     fs.readFile("./input.txt", "utf-8", (error, data)=>{
//         if (error) return console.log(`the error is: ${error}`)
//         console.log(`file content: ${data}`) 
//     })
// }
// readFile()


// // 2.
// function writeFile() {
//     fs.writeFile("output.txt", "writed succesfuly by Node.js!", "utf-8", (err)=>{
//         if (err) return console.log(`typing error: ${err}`);
//         console.log("the file writed succesfuly.");
//     })
// }
// writeFile()


// // 3.
// function readWriteFile() {
//     fs.readFile("./input.txt", "utf-8", (err, data) => {
//         if (err) return console.log(`the error is: ${err}`);
//         fs.writeFile("./output-upper.txt", data.toUpperCase(), "utf-8", (err) => {
//             if (err) return console.log(`the error is: ${err}`);
//             console.log("everything ended successfully.");
//         })
//     })
// }
// readWriteFile()


// // 4.
// function readFile() {
//     const file = fsPromises.readFile("./input.txt", "utf-8")
//     file.then((data) => {
//         console.log(`I read with Promise: ${data}`);
//     })
//         .catch(err => console.log(`the error is: ${err}`)
//         )
// }
// readFile()


// // 5.
// function readAndWriteFile() {
//     const file = fsPromises.readFile("./input.txt", "utf-8")
//     file.then((data) => {
//         return fsPromises.writeFile("output-upper.txt", data.toUpperCase(), "utf-8")
//             .then(() => {
//                 return console.log("writed succecfuly");
//             })
//             .catch(err => console.log(`the error is: ${err}`))
//     })
// }
// readAndWriteFile()


// // 6.
// function allPromises() {
//     const promis1 = fsPromises.readFile("input.txt", "utf-8")
//     const promis2 = fsPromises.readFile("output.txt", "utf-8")
//     Promise.all([promis1, promis2])
//         .then(results => {
//             results.forEach(result => {
//                 return console.log(result.length);
//             });
//         })
//         .catch(err => console.log(err));
// }
// allPromises()


// שאלות להגשה

// // 1.
// fs עובד עם callback כשקוראים לקובץ , מעבירים פונקציה שתופעל בסיום הקריאה
// fsPromise עובד עם promise שמחזיר הבטחה שאפשר אחר כך להשתמש איתו עם .then 

// // 2.
// כשמשתמשים ב callback ויש כמה פעולות אסיכרניות כל פעולה צריכה להיכתב
// בתוך הcallback של הפעןלה הקודמת וזה נהיה שירשור מאד מסובך ולא קריא

// // 3.
// השימוש ב then() זה נהיה רשימה מסודרת ולא מקונן אחד בתוך השני 
// וזה יותר קריא וגם אפשר לתפוס catch פעם אחת ולא צריך בכל callback בנפרד

// // 4.
// כי אם לא עושים return בתוך ה then זה לא יחזיר והבא בשרשרת 
// לא יקבל את זה אלא יקבל undefined


