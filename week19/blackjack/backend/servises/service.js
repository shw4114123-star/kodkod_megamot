import { addCardToPlayer, addCardToDealer, findGameById, chengeStatus } from "../DAL/dal.js"

export function createError(status, message) {
    const error = new Error(message);
    error.status = status;
    return error;
}

export async function addToPlayer(gameId) {
    const playerGame = await findGameById(gameId)
    if (playerGame.status === "in_progress") {
        const game = await addCardToPlayer(gameId)
        const cards = game.playerCards
        const totalPlayer = await sumTotal(cards)
        if (totalPlayer > 21) chengeStatus(gameId, "player_bust")
        return { ...game, totalPlayer }
    }
    else { throw createError(404, "You cannot add cards to a game that is not in action.") }
}

export async function addToDealer(gameId) {
    const playerGame = await findGameById(gameId)
    if (playerGame.status === "in_progress") {
        let totalDealer = await sumTotal(playerGame.dealerCards)
        while (totalDealer < 17) {
            const game = await addCardToDealer(gameId)
            totalDealer = await sumTotal(game.dealerCards)            
        }
        chengeStatus(gameId, "dealer-win")
        return { ...playerGame, totalDealer }
    }
    throw createError(404, "You cannot add cards to a game that is not in action.")
}


export async function chackround(playerId, bet) {
    
}

export async function sumTotal(cards) {
    let totalDealer = 0
    for (let card of cards) {
        if (card === "A") {
            if ((totalDealer + 11) > 21) { card = "1" } else { card = "11" }
        }
        if (card === "J" || card === "Q" || card === "K") { card = "10" }
        card = Number(card)
        totalDealer += card
    }
    return totalDealer
}