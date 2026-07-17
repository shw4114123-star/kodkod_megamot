import express from "express";
import router from "./routers/router.js"

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/", router)

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost/${PORT}`);
    
})