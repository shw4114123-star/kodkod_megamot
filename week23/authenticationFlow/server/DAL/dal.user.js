import { db } from "../config/db.js"

const users = db.collection("users")

export async function createUserDAL({ userName, email, passwordHash }) {
    const user = {
        userName,
        email: email.toLowerCase(),
        passwordHash,
        createAt: new Date().toISOString()
    }
    const { insertedId } = await users.insertOne(user)
    user._id = insertedId
    return user;
}

export async function findUserByEmailDAL(email) {
    const normalizedEmail = email.toLowerCase()
    const user = await users.findOne({ email: normalizedEmail })
    return user
}