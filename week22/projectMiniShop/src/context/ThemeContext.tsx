import { createContext } from "react"


type themeType = {
    theme: "light" | "dark" | string
    themeToggle: () => void
}


export const UseContext = createContext<themeType>({
    theme: "light",
    themeToggle: () => { }
})
