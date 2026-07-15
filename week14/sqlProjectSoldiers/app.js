import express from "express"
import soldiersRouter from "./router.js"

const PORT = process.env.PORT
const app = express()
app.use(express.json())

app.use("/soldiers", soldiersRouter)


app.use((err, req, res, next) =>{
    res.status(500 || err.statusCode).json({message: err.message} || {message: ""})
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost/${PORT}`);
})