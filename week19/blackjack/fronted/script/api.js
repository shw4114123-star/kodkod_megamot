


export async function createPlayer() {
    try {
        const res = await fetch("http://localhost:3000/start-game", {
            method: "post",
            headers: { "Content-Type": "application/json" }
        })
        const data = res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function createGame(bet, playerId) {
    try {
        const res = await fetch("http://localhost:3000/start-round", {
            method: "post",
            headers: { "Content-Type": "application/json", playerid: playerId },
            body: JSON.stringify({ bet })
        })
        const data = res.json()
        return data
    } catch (error) {
        console.error(error);

    }

}