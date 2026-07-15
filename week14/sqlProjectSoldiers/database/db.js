import mysql2 from "mysql2/promise"



export const pool = mysql2.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "soldier_db",
    connectionLimit: 10
})