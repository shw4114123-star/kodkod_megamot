import { readFile } from "./../readAndWriteFile.js"
import { checkByStatus, checkByCustomer, checkByTable } from "./../service.js"

const statuts = ["NEW", "PREPARING", "READY", "DELIVERED", "CANCELLED"]

export const checkOrders = async (req, res, next) => {
    const { status, customer, table } = req.query
    if (!statuts.includes(status) || isNaN(table) || !isNaN(customer)) return res.status(400).end("wrong url")
    next()
}

export const checkBody = async (req, res, next) => {
    const { customer, table } = req.body
    if (!customer && !table) return res.status(400).end("wrong body")
    if (isNaN(table) || !isNaN(customer)) return res.status(400).end("wrong parameters in the body")
    next()
}


export const checkBodyForUpdate = async (req, res, next) => {
    const { status, customer, table } = req.body
    if (!status && !customer && !table) return res.status(400).end("wrong body")
    if (!statuts.includes(status) || isNaN(table) || !isNaN(customer)) return res.status(400).end("wrong parameters in the body")
    next()
}

export const checkBodyStatus = async (req, res, next) => {
    const { status } = req.body
    if (!status || !statuts.includes(status)) return res.status(400).end("wrong parameters in the body")
    next()
}
