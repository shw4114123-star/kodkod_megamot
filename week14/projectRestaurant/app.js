import express from "express"
import orderRouter from "./routers.js"

const app = express()


app.use(express.json())

app.use("/orders", orderRouter)



app.use((err, req, res, next)=>{
    return res.status(500).json({message: err.message})
})



app.listen(3000, (req, res)=>{
    console.log("server running");
})