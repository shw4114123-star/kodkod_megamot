import { error } from "node:console"


export function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("args nust be a number")
    }
    return a + b
}

export function isEven(n) {
    if (n % 2 === 0) return true
    else return false
}