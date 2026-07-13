
import { checkOrderId, deleteOrder, checkByCustomer, checkByStatus, checkByTable, writeToJson, updateorder, updateStatus } from "./service.js"
import { readFile } from "./readAndWriteFile.js"

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

export const checkquery = async (req, res) => {
    const { status, customer, table } = req.query
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

export const createOrder = async (req, res) => {
    await writeToJson(req.body)
    return res.end("the order added succesfuly")
}

export const updateOrder = async (req, res) => {
    const { id } = req.params
    await updateorder(id, req.body)
    return res.end("the order updated succesfuly")
}

export const updateStatusOrder = async (req, res) => {
    const { id } = req.params
    await updateStatus(id, req.body)
    return res.end("the order updated succesfuly")
}