import express from "express";
import { createtab, getAll, createSold, getSoldierById, updateSold, deleteSold, chengeStatusSold } from "./control/controler.js";
import { checkId, checkBody, checkStatus } from "./midellware/vlidation.js";

const router = express.Router()


router.get("/createTable", createtab)

router.get("/", getAll)

router.post("/", checkBody, createSold)

router.get("/:id", checkId, getSoldierById)

router.put("/:id", checkId, checkBody, updateSold)

router.delete("/:id", checkId, deleteSold)

router.patch("/:id/status", checkId, checkStatus, chengeStatusSold)


export default router