import express from "express"
import "dotenv/config"
import { conectToMngodb } from "./db/db.js"
import playerRouter from "./routers/router.js"
import cors from "cors"


const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use("/", playerRouter)



conectToMngodb().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    })
})
