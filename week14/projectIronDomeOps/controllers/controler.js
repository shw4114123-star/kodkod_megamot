import { createOperator, getAllOpenIncidents, openIncident, chengeStatus } from "./../DAL/repositories.js"



export async function createOperators(req, res, next) {
    console.log(req.body);
    const { name, soldier_rank } = req.body
    const operator = await createOperator(name, soldier_rank)
    res.status(201).json(operator)
}


export async function getOpenIncidents(req, res, next) {
    const incidents = await getAllOpenIncidents()
    res.json(incidents)
}


export async function openIncidents(req, res, next) {
    const { code_name, threat_level, operator_id } = req.body
    const incidents = await openIncident(code_name, threat_level, operator_id)
    res.status(201).json(incidents)
}


export async function updateStatuts(req, res, next) {
    const {id} = req.params
    const { status } = req.body
    const updatestatus = await chengeStatus(status, id)
    res.json(updatestatus)
}