import express from "express";
import { idValidation } from "./middleware/checkID.js"
import { checkOrders } from "./middleware/validation.js"
// import { checkOrderId, deleteOrder } from "./service.js"
import { readFile } from "./readAndWriteFile.js"
// import {checkOrder} from "./middleware/validation.js"
import { orderById, deleteOrders } from "./controler.js"

const router = express.Router()


router.get("/:id", idValidation, orderById)



router.get("/", checkOrders, async (req, res) => {
})

router.delete("/:id", idValidation, deleteOrders)

export default router