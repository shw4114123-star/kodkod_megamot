
// // 1.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res => res.json())
// .then(data => console.log(data.title))
// .catch(console.log);



// // 2.
// fetch("https://jsonplaceholder.typicode.com/notfound")
//     .then(res => {
//         console.log("status code:", res.status);
//         if (!res.ok) {
//             return "the response is not OK";
//         } else {
//             return res.json()
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// // 3.
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())

//     .then(data => {
//         data.forEach(res => {
//             console.log(res.title)
//         })
//     })
//     .catch(console.log);


// // 4.
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         "title": "כותרת חדשה",
//         "body": "תוכן הפוסט",
//         "userId": 1
//     })
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })
// .catch(console.log)


// 5.
















