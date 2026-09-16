import { comparePassword, hashPassword } from "../services/authService.js"
import { findUserByEmailDAL, createUserDAL } from "../DAL/dal.user.js"
import { craeteError } from "../services/errorHandler.js";
import { generateToken } from "../services/generateToken.js";


export async function createUser(req, res) {
    const { userName, email, password } = req.body;
    const existsUser = await findUserByEmailDAL(email);
    if (existsUser) throw new craeteError("User already exists", 409)
    const hashPass = await hashPassword(password);
    const newUser = await createUserDAL({ userName, email, passwordHash: hashPass })
    delete newUser.passwordHash;
    res.status(201).json(newUser)
}


export async function loginUser(req, res) {
    const { email, password } = req.body;
    const existsUser = await findUserByEmailDAL(email);
    if (!existsUser) throw new craeteError("user not found", 404)
    const valid = await comparePassword(password, existsUser.passwordHash)
    if (!valid) throw new craeteError("email / password not correct", 401)
    const token = generateToken(existsUser._id)
    res.json({ token, email: existsUser.email })
}