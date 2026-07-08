import http from "http"


const PORT = 3000



// // 1.
// const server = http.createServer((req, res)=>{
//     res.end("Hello from my server")
// })
// server.listen(PORT,()=>{
//     console.log(`server run on http://localhost/${PORT}`);

// })


// // 2.
// const server = http.createServer((req, res) => {
//     if (req.url === "/" && req.method === "GET") {
//         res.end("home page")
//     } else if (req.url === "/about" && req.method === "GET") {
//         res.end("About Page")
//     } else if (req.url === "/contact" && req.method === "GET") {
//         res.end("Contact Page")
//     } else {
//         res.statusCode = 404
//         res.end("Page Not Found")
//     }
// })
// server.listen(PORT,()=>{
//     console.log(`server run on http://localhost/${PORT}`);
// })


// // 3.
// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         if (req.url === "/users") {
//             res.end("Users list")
//         } else {
//             res.statusCode = 404
//             res.end("Page Not Found")
//         }}
//         else if (req.method === "POST") {
//             if (req.url === "/users") {
//                 res.end("user created")
//             } else {
//                 res.statusCode = 404
//                 res.end("Page Not Found")
//             }
//         } else {
//             res.end("Method Not Allowed")
//         }
//     }
// )

// server.listen(PORT)