import express from "express"
import tasksRouter from "./tasks.js"


const app = express()


app.use(express.json())
app.use("/tasks", tasksRouter)

app.listen(3000, ()=>{
  console.log("server runing...")
})