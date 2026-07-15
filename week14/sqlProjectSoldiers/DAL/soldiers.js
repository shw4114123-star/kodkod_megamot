import { pool } from "../database/db.js"



export async function createTable() {
    try {
        const [refernse] = await pool.execute(
            "create table soldiers (\
        id int auto_increment primary key,\
        name varchar(20) not null,\
        soldier_rank varchar(20) not null,\
        unit varchar(20) not null,\
        age int not null,\
        service_status enum('active', 'not_active') default 'active',\
        data_of_creation datetime default current_timestamp);"
        )
        return refernse
    } catch (e) {
        throw new Error(`error from createTable: ${e}`);
    }
}


export async function getAllSoldiers(soldier_rank, unit, service_status) {
    try {
        let [rows] = await pool.execute("select * from soldiers;")
        if (unit) {
            rows = rows.filter(soldier => soldier.unit === unit)
        }
        if (soldier_rank) {
            rows = rows.filter(soldier => soldier.soldier_rank === soldier_rank)
        }
        if (service_status) {
            rows = rows.filter(soldier => soldier.service_status === service_status)
        }
        return rows
    } catch (e) {
        throw new Error(`error from getAllSoldiers: ${e}`);
    }
}


export async function createSoldier(body) {
    try {
        const [refernse] = await pool.execute("\
        insert into soldiers (name, soldier_rank, unit, age) values \
        (?, ?, ?, ?)", [body.name, body.soldier_rank, body.unit, body.age])
        return getById(refernse.insertId)
    } catch (e) {
        throw new Error(`error from createSoldier: ${e}`);
    }
}


export async function getById(id) {
    try {
        const [rows] = await pool.execute("select * from soldiers where id = ?", [id])
        return rows
    } catch (e) {
        throw new Error(`error from getById: ${e}`);
    }
}


export async function updateSoldier(id, body) {
    try {
        const [refernse] = await pool.execute("update soldiers set\
        name = ?, soldier_rank = ?, unit = ?, age = ? where id = ?",
            [body.name, body.soldier_rank, body.unit, body.age, id])
        return getById(id)
    } catch (e) {
        throw new Error(`error from updateSoldier: ${e}`);
    }
}

export async function deleteSoldier(id) {
    try {
        const [refernse] = await pool.execute("delete from soldiers where id = ?", [id])
        return refernse
    } catch (e) {
        throw new Error(`error from deleteSoldier: ${e}`);
    }
}


export async function chengeStatusSoldier(id, status) {
    try {
        const [refernse] = await pool.execute("update soldiers set service_status = ? where id = ?", [status, id])
        return refernse
    } catch (e) {
        throw new Error(`error from chengeStatusSoldier: ${e}`);
    }
}