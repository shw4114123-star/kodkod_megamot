import {db} from "../db/db.js"

const users = db.collection("ws")

export async function createUseDAL(userName, email, hashPass) {
    const user = {userName, email, hashPass}
    const result = await users.insertOne(user)
    user._id = result.insertedId
    return user    
}

export async function getUserByEmailDAL(email) {
    const user = await users.findOne({email})
    return user    
}