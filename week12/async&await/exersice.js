// // 5.
// async function pro(params) {
//     const p = await fetch(params)
//     console.log(p);
// }
// pro("https://jsonplaceholder.typicode.com/todos/1")


// // 6.
// async function returnDone() {
//     const n = "done"
//     return n
// }
// const re = await returnDone()
// console.log(re);


// // 7.
// async function squer(number) {
//     try {
//         const num = number ** 2;
//         return num;
//     } catch (e) {
//         console.log(e);
//     }
// }
// const s = await squer(4)
// console.log(s);


// // 9.
// async function users(params) {
//     const users = await fetch(params)
//     const data = await users.json()
//     return data
//     }
// const user = await users("https://jsonplaceholder.typicode.com/users")
// console.log(user);


// // 10./ 11.
// async function chekEven(num) {
//     const res = await (num % 2 === 0)
//     return `is the number even? : ${res}`
// }
// async function evenNumbers(num) {
//     const even = await chekEven(num)
//     return console.log(even);
// }
// evenNumbers(3)
// evenNumbers(2)


// // 12./ 13.
// async function fetchPosts() {
//     const userId = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const all = await userId.json()
//     for (const post of all) {
//         const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
//         const comm = await commentsResponse.json()
//         console.log(comm);
//     }}
// fetchPosts()


// 14.
















