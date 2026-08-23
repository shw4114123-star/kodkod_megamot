import { ObjectId } from "mongodb";
import { connectPlayer, connectGame } from "../db/db.js";

const deck = [
    '7', '4', 'K', '3', '10', 'A', 'J', '2', '8', 'Q', '5', '9', '6',
    'K', '2', '9', '4', 'J', 'A', '6', '10', '3', '8', 'Q', '7', '5',
    '3', '10', '8', '2', 'K', '6', 'Q', '4', 'A', '9', 'J', '7', '5',
    '9', '5', 'Q', '7', '2', '10', 'K', '3', '8', 'J', '6', '4', 'A'
];

export async function createPlayer() {
    const player = {
        chips: 1000,
        createAt: new Date()
    }
    const res = await connectPlayer.insertOne(player)
    return { _id: res.insertedId, ...player }
}

export async function getPlayerById(id) {
    const player = await connectPlayer.findOne({ _id: new ObjectId(id) })
    // console.log(player);

    return player

}

export async function createGame(playerId, bet) {
    const player = await connectPlayer.findOne({ _id: new ObjectId(playerId) });
    const dealerCards = [deck.pop(), deck.pop()]
    const game = { playerCards: [deck.pop(), deck.pop()], status: "in_progress" }
    const res = await connectGame.insertOne({ playerId, bet, dealerCards, ...game });
    return { _id: res.insertedId, playerId, bet, dealerCards: [dealerCards[0]], ...game, chips: player.chips - bet }
}

export async function findGameById(gameId) {
    const game = await connectGame.findOne({ _id: new ObjectId(gameId) });
    return game
}

export async function findplayerInGameById(playerId) {
    console.log(playerId);

    const game = await connectGame.findOne({ playerId: playerId });
    console.log(game);

    return game
}

export async function addCardToPlayer(gameId) {
    const game = await connectGame.findOneAndUpdate(
        { _id: new ObjectId(gameId) },
        { $push: { playerCards: deck.pop() } },
        { returnDocument: "after" }
    )
    return game
}

export async function addCardToDealer(gameId) {
    const game = await connectGame.findOneAndUpdate(
        { _id: new ObjectId(gameId) },
        { $push: { dealerCards: deck.pop() } },
        { returnDocument: "after" }
    )
    return game
}

export async function chengeStatus(gameId, status) {
    const game = await connectGame.findOneAndUpdate(
        { _id: new ObjectId(gameId) },
        { $set: { status: status } },
        { returnDocument: "after" }
    )
    return game
}