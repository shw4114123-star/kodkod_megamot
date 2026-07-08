import http from "http"
import { parse } from 'path';
import { connect } from 'net';

const users = [
    { "userName": "Idan_Cohen", "id": 1 },
    { "userName": "Noa_Levi", "id": 2 },
    { "userName": "Amit_Avraham", "id": 3 },
    { "userName": "Maya_Barak", "id": 4 },
    { "userName": "Yossi_Mizrahi", "id": 5 },
    { "userName": "Michal_Saban", "id": 6 },
    { "userName": "Tomer_Asulin", "id": 7 },
    { "userName": "Adi_Peretz", "id": 8 },
    { "userName": "Daniel_Kaufman", "id": 9 },
    { "userName": "Roni_Stern", "id": 10 }
]

const server = http.createServer((req, res) => {
    const searchParams = new URL(req.url, "http://localhost").searchParams
    if (req.url === "/users" && req.method.toLowerCase() === "get") {
        console.log(users);
        return res.end(JSON.stringify(users))
    }
    else if (req.url.startsWith("/users?") && req.method.toLowerCase() === "get") {
        const userName = searchParams.get("userName")
        const user = users.find((user) => user.userName === userName)
        if (!user) {
            res.statusCode = 404
            return res.end("not found")
        }
        return res.end(JSON.stringify(user))
    } else if (req.url.startsWith("/users/") && req.method.toLowerCase() === "get") {
        const params = req.url.split("/")
        if (params.length !== 3) return res.end("wrong url")
        const id = params[2]
        const userById = users.find((user) => user.id === Number(id))
        if (userById !== users.length) {
            res.statusCode = 404
            return res.end("not found")
        }
        return res.end(JSON.stringify(userById))
    } else if (req.url === "/users" && req.method.toLowerCase() === "post") {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk.toString()
        })
        req.on("end", () => {
            if (!req.headers["content-type"].includes("application/json")) return res.end("invalid data")
            try {
                const data = JSON.parse(body)
                console.log(data)
                users.push(data)
                return res.end(JSON.stringify(users))
            } catch (e) {
                return res.end(`error: ${e}`)
            }
        })
        req.on("error", (e) => {
            console.log(e)
        })
    } else {
        return res.end("wrong url")
    }
})

server.listen(3000, () => {
    console.log("server runing...");
})


























































