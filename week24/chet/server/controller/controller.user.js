import { hashPassword } from "../servises/hash.service.js"
import { createUseDAL, getUserByEmailDAL } from "../DAL/dal.users.js"
import { createError } from "../servises/error.servise.js"


export const createUser = async (req, res) => {
    const { userName, password, email } = req.body
    const existsUser = await getUserByEmailDAL(email)
    if (existsUser) throw new createError("user alredy exists", 401)
    const passHash = await hashPassword(password)
    const user = await createUseDAL(userName, email, passHash)
    res.status(201).json(user)
}