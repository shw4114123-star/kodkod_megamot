import express from "express"
import { Server } from "socket.io"
import { createServer } from "http"
import "dotenv/config"


const PORT = process.env.PORT
const app = express()
app.use(express.json())
const server = createServer()





server.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT} / ws://localhost:${PORT}`);
    
})