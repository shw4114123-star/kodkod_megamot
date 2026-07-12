import fsPromises from "fs/promises"



export async function readFile() {
    try {
        const data = await fsPromises.readFile("./orders.json", "utf-8")
        return JSON.parse(data || []);
    } catch (e) {
        console.log(e);
        return [];
    }
}


export async function writeFile(data) {
    try {
        await fsPromises.writeFile("./orders.json", JSON.stringify(data, null, 4), "utf-8")
        return "grate"
    } catch (e) {
        return console.log(e);
    }
}