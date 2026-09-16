import { hashPassword } from "../services/authService.js"
import { findUserByEmailDAL, createUserDAL } from "../DAL/dal.user.js"
import { craeteError } from "../services/errorHandler.js";




export async function createUser(req, res) {
    const { userName, email, password } = req.body;
    const existsUser = await findUserByEmailDAL(email);
    if (existsUser) throw new craeteError("User already exists", 409)
    const hashPass = await hashPassword(password);
    const newUser = await createUserDAL({ userName, email, passwordHash: hashPass })
    delete newUser.passwordHash;
    res.status(201).json(newUser)
}