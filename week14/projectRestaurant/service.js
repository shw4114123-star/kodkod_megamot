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