import { createPlayer, createGame } from "./api.js"


const body = document.querySelector("body")



const bnt = document.createElement("button")
bnt.textContent = "start-game"
bnt.classList.add("button")
body.appendChild(bnt)
bnt.addEventListener("click", async (e) => {
    e.preventDefault()
    const data = await createPlayer()
    const li = document.createElement("span")
    li.classList.add("player")
    li.textContent = JSON.stringify(data)
    body.appendChild(li)
})

const inputChips = document.createElement("input")
inputChips.classList.add("chips")
const inputPlayer = document.createElement("input")
inputPlayer.classList.add("playerId")
// const inputChip = document.querySelector(".chips")
// const inputPlay = document.querySelector(".playerId")
const bntRound = document.createElement("button")
bntRound.textContent = "start-round"
bntRound.classList.add("button-round")
body.appendChild(inputChips)
body.appendChild(inputPlayer)
body.appendChild(bntRound)
bntRound.addEventListener("click", async (e) => {
    e.preventDefault()
    const data = await createGame(inputChips.value, inputPlayer.value)
    const li = document.createElement("span")
    li.classList.add("game")
    li.textContent = JSON.stringify(data)
    body.appendChild(li)
})

// לא מצליח כי לא מצליח לקרוא את הווליו שנתתי לונפוטציפ ולונפוטפליי 