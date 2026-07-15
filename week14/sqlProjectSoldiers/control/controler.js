import { createTable, getAllSoldiers, createSoldier, getById, updateSoldier, deleteSoldier, chengeStatusSoldier } from "./../DAL/soldiers.js";


export const createtab = async (req, res, next) => {
    try {
        const create = await createTable()
        res.status(201).json({ status: 202, message: "table created succesfuly" })
    } catch (e) {
        next(e)
    }
}

export const getAll = async (req, res, next) => {
    try {
        const { soldier_rank, unit, service_status } = req.query
        const allSoldiers = await getAllSoldiers(soldier_rank, unit, service_status)
        res.json(allSoldiers)
    } catch (e) {
        next(e)
    }
}

export const createSold = async (req, res, next) => {
    try {
        const soldier = req.body
        const sold = await createSoldier(soldier)
        res.status(201).json({ status: 202, data: `${sold}` })
    } catch (e) {
        next(e)
    }
}

export const getSoldierById = async (req, res, next) => {
    try {
        const { id } = req.params
        const soldier = await getById(id)
        res.json(soldier)
    } catch (e) {
        next(e)
    }
}

export const updateSold = async (req, res, next) => {
    try {
        const { id } = req.params
        const soldier = req.body
        const sold = await updateSoldier(id, soldier)
        res.status(200).json({ status: 200, data: `${sold}` })
    } catch (e) {
        next(e)
    }
}

export const deleteSold = async (req, res, next) => {
    try {
        const { id } = req.params
        const soldier = await deleteSoldier(id)
        if (soldier.affectedRows !== 0) {
            res.sendStatus(204)
        } else {
            res.status(404).json({ status: 404, message: "soldier not found" })
        }
    } catch (e) {
        next(e)
    }
}

export const chengeStatusSold = async (req, res, next) => {
    try {
        const { service_status } = req.body
        const { id } = req.params
        const soldier = await chengeStatusSoldier(id, service_status)
        if (soldier.affectedRows === 0) {
            res.status(404).json({ status: 404, message: "soldier not found" })
        }
        if (soldier.changedRows === 0) {
            res.status(200).json({ status: 200, message: "nothing has changed." })
        }
        res.status(200).json({ status: 200, message: "service_status changed succesfuly" })
    } catch (e) {
        next(e)
    }
}