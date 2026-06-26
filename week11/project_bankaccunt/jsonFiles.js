import fs from "fs";


export function readJson () {
    const readFile = fs.readFileSync('./accounts.json', 'utf8')
    const customers = JSON.parse(readFile)
    return customers
}

export function writhJson (data) {
    const writhFile = JSON.stringify(data, null, 2);
    fs.writeFileSync('./accounts.json', writhFile);
}




