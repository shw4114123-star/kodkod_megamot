import { MongoClient } from "mongodb"
import "dotenv/config"

const client = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017");


export async function  conectToMngodb() {
    try {
        await client.connect()
        console.log("connect to mongodb");
    } catch (error) {
        console.error(error);
    }
}
const db = client.db("blackjacl")
export const connectPlayer = db.collection("player")
export const connectGame = db.collection("game")
