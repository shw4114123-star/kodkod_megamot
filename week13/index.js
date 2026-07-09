// import http from "http"

// const PORT = 3000

// const server = http.createServer((req, res) => {
//     console.log(res.url);
//     res.writeHead(200,{"content-type": "application/json"})
//     res.end(JSON.stringify({"hello": "from vanilla"}));
// })


// server.listen(PORT,()=>{
//     console.log(`server run on http://localhost:${PORT}`);

// })



// const server = http.createServer((req, res) => {
//     if (req.url === '/' && req.method === 'GET') {
//         res.end('Home Page');
//     } else if (req.url === '/users' && req.method === 'GET') {
//         res.end('Users List');
//     } else if (req.url === '/users' && req.method === 'POST') {
//         res.end('Create User');
//     } else {
//         res.statusCode = 404;
//         res.end('Not Found');
//     }
// });

// server.listen(3000, () => { console.log('Server running'); });



// יום שני 
// import http from "http"


// function users(req, res){
//     res.end(JSON.stringify([{name: "moshe", id: 1}]))
// }


// const server = http.createServer((req, res)=>{
//     console.log(req.headers);
//     if (req.url === "/users" && req.method === "GET"){
//         users(req, res);
//         return;
//     }
//     res.end("hello")

// });

// server.listen(3000, ()=>{
//     console.log("server runing...");

// })
// console.log("end file");



// import { error } from "console";
// import http from "http"
// import { get } from "https";
// import { fileURLToPathBuffer } from "url";


// function users(req, res) {
//     res.end(JSON.stringify([{ name: "moshe", id: 1 }]))
// }


// const server = http.createServer((req, res)=>{
//     // name=momo&age=3
//     const queryStr = req.url.split("?")[1]
//     if (queryStr){
//     const paramsStr = queryStr.split("&");
//     const params = paramsStr[0].split("=");
//     const user = [{userName: "momo", id: 0}, {userName: "nisim", id: 3}].find((u)=>u.userName === params[1]);
//     }
//     res.end("hello")

// });






// const server = http.createServer((req, res) => {
//     // name=momo&age=3
//     const searchParams = new URL(`http://momo${req.url}`).searchParams;
//     const userName = searchParams.get("userName");
//     const result = users.find((u) => u.userName === userName);
//     res.end(JSON.stringify(result))

//     res.end("hello")

// });

// const users = [{ userName: "momo", id: 0 }, { userName: "nisim", id: 3 }]

// const server = http.createServer((req, res) => {
//     if (req.url.startsWith("/users")) {
//         // "/users/4"
//         const paths = req.url.split("/");
//         const id = paths[2];
//         const foundUser = users.find((u) => (u.id + "") === id);
//         res.end(JSON.stringify(foundUser))
//         console.log(JSON.stringify(foundUser));

//         return;
//     }
//     res.end(JSON.stringify("hello"));

// });



// server.listen(3000, () => {
//     console.log("server runing...");
// })





// body

// const users = [{ userName: "momo", id: 0 }, { userName: "nisim", id: 3 }]

// // const server = http.createServer((req, res) => {
//     // let bodystr = "";
//     // req.on("data", (chank) => {
//     //     bodystr += chank.toString();
//     // })
//     // req.on("end", () => {
//     //     try {
//     //         const data = JSON.parse(bodystr)
//     //         return data;
//     //     } catch (e) {
//     //         console.error(e)
//     //     }
//     // })
//     // req.on("error", (e)=>{
//     //     console.error(e)
//     // })
// // });


// function getData(req){
//     return new Promise((resulve, reject) =>{
//         let bodystr = "";
//     req.on("data", (chank) => {
//         bodystr += chank.toString();
//     })
//     req.on("end", () => {
//         try {
//             const data = JSON.parse(bodystr)
//             resulve(data);
//         } catch (e) {
//             reject(e)
//         }
//     })

//     req.on("error", (e)=>{
//         reject(e)
//     })
//     })
// }

// const allowsBOdy = ["post", "put", "patch"];
// const server = http.createServer(async (req, res) => {
//     if (allowsBOdy.includes(req.method.toLowerCase())){
//         const body = await getData(req);
//         req.body = body;
//         console.log(req.body);
//     }
// res.end(JSON.stringify(req.body));
// });

// server.listen(3000, () => {
//     console.log("server runing...");
// })





// יום שלישי


// import http from "http"

// 1.
// const server = http.createServer(async (req, res) => {
//     const {momo} = req.headers
//     console.log(momo);
//     res.end("end")
// });


// 2.
// const server = http.createServer(async (req, res) => {
//     const searchParams = new URL(req.url, "http://localhost").searchParams
//     if (!searchParams.get("username") || !searchParams.get("momo")){
//         return res.end("miss required param")
//     }
//     console.log(searchParams);
//     res.end("end")
// });



// 3.
// function checkPathParams(req, pattern, method) {
//     if (req.url.startsWith("/users/") && req.method.toLowerCase() === method) {
//         const paths = req.url.split("/");
//         if (paths.length !== 3 || isNaN(+paths[2])) return;
//         return true;
//     }
// }

// const server = http.createServer(async (req, res) => {
//     if (!checkPathParams(req, "/users/", "post")) return res.end("somthing wromg");
//     return res.end("end");
// })

// server.listen(3000, () => {
//     console.log("server runing...");
// });



// body



// const server = http.createServer((req, res) => {
//     let body = ""
//     req.on("data", (chunk) => {
//         body += chunk.toString();
//     })
//     req.on("end", () => {
//         console.log("end get all chunks");
//         if (!req.headers["content-type"].includes("application/json")) return res.end("invalid data")
//         try {
//             const data = JSON.parse(body)
//             res.end(data.username);
//             console.log(JSON.stringify(data));
//         } catch (e) {
//             console.log(e);
//         }
//     })
//     req.on("error", (e) => {
//         console.log(`error: ${e}`);
//     })
//     console.log("end request");
// });


// server.listen(3000, () => {
//     console.log("server runing...");
// });



// תרגול
// query param כשאני מכניס ב url נתונים עם ?
// const server = http.createServer((req, res) => {
//     const searchParams = new URL(req.url, "http://localhost").searchParams
//     if (!req.url.startsWith("/users") || req.method.toLowerCase() !== "get") {
//         return res.end("wrong url")
//     } else if (searchParams.get("username")) {
//         return res.end(JSON.stringify(searchParams.get("username")))
//     }
// }
// );

// path param
// const server = http.createServer((req, res) => {
//     if (!req.url.startsWith("/users/") || req.method.toLowerCase() !== "get") {
//         return res.end("somthing is not good")
//     } else {
//         const params = req.url.split("/")
//         if (params.length !== 3 || isNaN(+params[2])) {
//             return res.end("not good")
//         } else {
//             const a = params[1]
//             const b = params[2]
//             return res.end(JSON.stringify({a:{b}}))
//         }
//     }
// })
// server.listen(3000, () => {
//     console.log("server runing...");
// });


// יום רביעי
// import express from "express"



// const app = express();


// app.get("/", (req, res)=>{
//     console.log("Hello");
//     res.end("Hello, client")
// })


// app.get("/momo", (req, res)=>{
//     console.log("momo");
//     res.end("momo")
// })


// app.get("/", (req, res)=>{
//     const {username} = req.query
//     if (!username || username.length < 5)return res.end("blabla")
//     console.log(req.query);
//     res.end("Hello, client")
// })


// app.get("/users/:id", (req,res)=>{
    //     console.log(req.params);
    //     res.end("hello momo\n");
    // })
    


// app.listen(3000, () => {
//     console.log("server tuning...");
// })




// צהריים 
// הפרדה בין השרתים הפרדה בין router ל app
import express from "express"
import usersRouter from "./routes/users.js"
import postsRouter from "./routes/users.js"

// const app = express()

// app.use(express.json())

// app.use("/users", usersRouter)
// app.use("/posts", postsRouter)



// app.listen(3000, ()=>{
//     console.log("server runing...");
    
// })







console.log(process.env.USER_NAME);



