import express from "express"
import { autoMiddleware } from "../middleware/authMiddleware.js"
import { asyncWrapper } from "../services/asyncWrapper.js"
import { getAllUsers } from "../controllers/usersController.js"

const router = express.Router()


router.get("/", autoMiddleware, asyncWrapper(getAllUsers))


export default router