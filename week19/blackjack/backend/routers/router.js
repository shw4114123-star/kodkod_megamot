import express from "express";
import { createPlayer, createGame, addCardToPlayer, addCardToDealer, findplayerInGameById } from "../DAL/dal.js";
import { addToPlayer, addToDealer } from "../servises/service.js";
import { checkPlayerId } from "../medllwer/midellwer.js";

const router = express.Router()


router.post("/start-game", async (req, res) => {
    try {
        const player = await createPlayer()
        res.status(201).json(player)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})

router.post("/start-round", checkPlayerId, async (req, res) => {
    try {
        const { bet } = req.body
        const { playerid } = req.player
        const player = await createGame(playerid, bet)
        res.status(201).json(player)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})

router.post("/hit", async (req, res) => {
    try {
        const { gameId } = req.query
        const update = await addToPlayer(gameId)
        res.json(update)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})


router.post("/stand", async (req, res) => {
    try {
        const { gameId } = req.query
        const update = await addToDealer(gameId)
        res.json(update)
    } catch (error) {
        console.log(error);

        res.status(error.status).json(error.message)
    }
})
// לא מחזיר את הקלפים של בדילר עם הקלף המכוסה
router.get("/my-round", checkPlayerId, async (req, res) => {
    const { playerid } = req.player
    const player = await findplayerInGameById(playerid)
    res.json({ roundId: player._id, playerCard: player.playerCards, dealerUpCard: player.dealerCards, bet: player.bet, status: player.status })
})


export default router