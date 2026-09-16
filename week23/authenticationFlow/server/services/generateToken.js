import "dotenv/config"
import jwt from "jsonwebtoken"
import { craeteError } from "./errorHandler.js";

export function generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}


export function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new craeteError("Unauthorized", 401)
    }
}