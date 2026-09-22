import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017")
export const db = client.db("users")

try {
    client.connect()
    console.log("DB connect");
} catch (error) {
    console.error(error);
    process.exit(1)
}