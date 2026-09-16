import { getAllUsersDAL } from "../DAL/dal.user.js"

export async function getAllUsers(req, res) {
    const userList = await getAllUsersDAL()
    userList.forEach((item) => delete item.passwordHash)
    res.json(userList)
}