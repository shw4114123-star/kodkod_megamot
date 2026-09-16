import express from "express";
import "dotenv/config"
import cors from "cors"
import "./config/db.js"
import autoRouter from "./routes/authRoutes.js"
import userRouter from "./routes/usersRoutes.js"
import { errorHandler } from "./services/errorHandler.js";

const app = express()
const PORT = process.env.PORT || 3001


app.use(cors({}))
app.use(express.json())

app.use("/auto", autoRouter)
app.use("/users", userRouter)


app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})