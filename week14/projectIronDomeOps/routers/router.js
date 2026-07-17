import express from "express";
import { createOperators, openIncidents, getOpenIncidents, updateStatuts } from "./../controllers/controler.js"

const router = express.Router()

router.post("/operators", createOperators)

router.post("/incidents", openIncidents)

router.patch("/incidents/:id/status", updateStatuts)

router.get("/incidents/open", getOpenIncidents)


export default router