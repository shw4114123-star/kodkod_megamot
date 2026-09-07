import { useContext } from "react"
import { UseContext } from "../context/ThemeContext"
import "../css/ThemeToggle.css"
export default function ThemeToggle() {
    const { theme, themeToggle } = useContext(UseContext)
    return (
        <div>
            <button className="theme" onClick={() => themeToggle()}>{theme === "dark" ? "🌙" : "🔆"}</button>
        </div>
    )
}
