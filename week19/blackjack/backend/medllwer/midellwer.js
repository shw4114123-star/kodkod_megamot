import { createError } from "../servises/service.js";
import { getPlayerById } from "../DAL/dal.js";

export async function checkPlayerId(req, res, next) {
    const player = req.headers;
    if (!player.playerid) throw createError(401, "Player ID not sent");
    const play = await getPlayerById(player.playerid)
    if (!play) throw createError(401, "Player not found")
    req.player = player;
    next()
}