import express from "express"
import { text } from 'express';

const app = express()


app.use(express.json())

const message = []
app.post("/message", (req, res) => {
  console.log("momo")
  const { username } = req.body
  console.log(username)
  message.push(username)
  console.log(message)
  res.json(message)
})


app.listen(3000, ()=>{
  console.log("server runing...")
})



















