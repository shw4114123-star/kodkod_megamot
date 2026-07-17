import { pool } from "./../db/db.js"


export async function createOperator(name, soldier_rank) {
    const [referns] = await pool.execute("insert into operators (name, soldier_rank)\
        values (?,?)", [name, soldier_rank])
    return referns
}


export async function getAllOpenIncidents() {
    const [rows] = await pool.execute("select * from incidents where status = ?", ["OPEN"])
    return rows

}

export async function openIncident(code_name, threat_level, operator_id) {
    const [referns] = await pool.execute("insert into incidents\
        (code_name, threat_level, status, operator_id) values (?, ?, ?, ?)", [code_name, threat_level, "OPEN", operator_id])
    return referns
}

export async function chengeStatus(status, id) {
    const [referns] = await pool.execute("update incidents set status = ? where id = ?", [status, id])
    return referns
}