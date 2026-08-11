import express, { urlencoded } from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.post("/", (req, res)=>{
    const {name, email, help, story} = req.body
    res.send({"name":`${name}`, "email":`${email}`, "help":`${help}`, "story":`${story}`})
})
app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
})