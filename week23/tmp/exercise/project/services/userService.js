import bcrypt from "bcrypt"

// // 1
// export async function hashPassword(password) {
//     return bcrypt.hash(password, 10)
// }


// // 2
// export async function checkPassword(password, hash) {
//     return bcrypt.compare(password, hash)
// }


// // 3
// export async function registerUser(username, password) {
//     const hash = bcrypt.hashSync(password, 10)
//     return {
//         username,
//         password: hash
//     }
// }


// // 4
// export async function loginUser(password, savedHash) {
//     return bcrypt.compare(password, savedHash)
// }


// // 5
// export async function registerUser(username, password) {
//     return {
//         username,
//         password : bcrypt.hashSync(password, 10)
//     }
// }

// export async function loginUser(password, savedHash) {
//     return bcrypt.compare(password, savedHash)
// }



