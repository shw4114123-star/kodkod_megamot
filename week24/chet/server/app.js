import express from "express"
import "dotenv/config"
import { createServer } from "http"
import helmet from "helmet"
import "./db/db.js"
import userRouter from "./routes/router.js"


const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(helmet())

app.use("/", userRouter)
const server = createServer(app)


server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT} / ws://localhost:${PORT}`);
})
