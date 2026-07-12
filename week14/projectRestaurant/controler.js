
import { checkOrderId, deleteOrder, checkByCustomer, checkByStatus, checkByTable } from "./service.js"
import {readFile} from "./readAndWriteFile.js"

export const orderById = async (req, res) => {
    const order = await checkOrderId(req.params.id)
    if (!order) return res.status(404).end("order not found")
    return res.json(order)
}

export const deleteOrders = async (req, res) => {
    const order = await deleteOrder(req.params.id)
    if (order === 404) return res.status(404).end("order not found")
    return res.end("the order deleted succesfuly")
}

export const checkquery = async () => {
    let finlleData = await readFile()
    if (status) {
        finlleData = await checkByStatus(status)
    }
    if (customer) {
        finlleData = await checkByCustomer(customer)
    }
    if (table) {
        finlleData = await checkByTable(table)
    }
    return res.json(finlleData)
}