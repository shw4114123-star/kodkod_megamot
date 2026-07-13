import express from "express";
import { idValidation } from "./middleware/checkID.js"
import { checkOrders, checkBody, checkBodyForUpdate, checkBodyStatus } from "./middleware/validation.js"
// import { checkOrderId, deleteOrder } from "./service.js"
import { readFile } from "./readAndWriteFile.js"
// import {checkOrder} from "./middleware/validation.js"
import { orderById, deleteOrders, checkquery, createOrder, updateOrder, updateStatusOrder } from "./controler.js"

const router = express.Router()


router.get("/:id", idValidation, orderById)

router.get("/", checkOrders, checkquery)

router.delete("/:id", idValidation, deleteOrders)

router.post("/", checkBody, createOrder)

router.put("/:id", idValidation, checkBodyForUpdate, updateOrder)

router.patch("/:id/status", idValidation, checkBodyStatus, updateStatusOrder)

export default router