import express from "express"
import {createUser, loginUser} from "../controllers/authController.js"
import { validate } from "../services/validate.js"
import { createUserValidation, loginUserValidation } from "../validations/user.validation.js"
import { asyncWrapper } from "../services/asyncWrapper.js"


const router = express.Router()

router.post("/register", validate(createUserValidation), asyncWrapper(createUser))

router.post("/login", validate(loginUserValidation), asyncWrapper(loginUser))

export default router