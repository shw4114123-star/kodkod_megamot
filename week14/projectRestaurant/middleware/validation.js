import { readFile } from "./../readAndWriteFile.js"
import { checkByStatus, checkByCustomer, checkByTable } from "./../service.js"

const statuts = ["NEW", "PREPARING", "READY", "DELIVERED", "CANCELLED"]

export const checkOrders = async (req, res, next) => {
    const { status, customer, table } = req.query
    if (statuts.includes(status))
    if (table)
    if (customer) return res.end("grate")
    next()
}



