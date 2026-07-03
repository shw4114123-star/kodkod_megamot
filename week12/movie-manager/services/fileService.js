import fsPromise from "fs/promises"


export async function readData() {
    try {
        const data = await fsPromise.readFile("./data/movies.json", "utf-8");
        return JSON.parse(data || []);
    } catch (e) {
        console.log(e);
        return [];
    }
}


export async function writeData(data) {
    try {
        const write = await fsPromise.writeFile("./data/movies.json", JSON.stringify(data,null,4), "utf-8");
        return console.log("the file writed succesfuly");
    } catch (e) {
        return console.log(e);
    }
}