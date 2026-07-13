import { readFile, writeFile } from "./readAndWriteFile.js";

export async function checkOrderId(id) {
    const data = await readFile()
    const order = data.find(ord => ord.id === +id)
    return order
}

export async function deleteOrder(id) {
    const data = await readFile()
    const newOrders = data.filter(order => order.id !== +id)
    if (newOrders.length === data.length) return 404
    writeFile(newOrders)
    return "grate"
}

export async function checkByStatus(status) {
    const data = await readFile()
    const byStatus = data.filter(order => order.status === status)
    return byStatus
}
export async function checkByCustomer(customer) {
    const data = await readFile()
    const byCustomer = data.filter(order => order.customer === customer)
    return byCustomer
}
export async function checkByTable(table) {
    const data = await readFile()
    const ByTable = data.filter(order => order.table === +table)
    return ByTable
}

export async function writeToJson(body) {
    const data = await readFile()
    const nextId = Math.max(...data.map(order => order.id)) + 1
    data.push({ "id": nextId, "status": NEW, ...body })
    await writeFile(data)
}

export async function updateorder(id, body) {
    const data = await readFile()
    const order = data.find(ord => ord.id === +id)
    order.status = body.status
    order.customer = body.customer
    order.table = body.table
    await writeFile(data)
}

export async function updateStatus(id, body) {
    const data = await readFile()
    const order = data.find(ord => ord.id === +id)
    order.status = body.status
    await writeFile(data)
}