import { useState } from "react"
import { useNavigate } from "react-router"
import "../css/welcomePage.css"
import Footer from "../components/footer/Footer"

export default function WelcomePage() {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const saveLocal = () => {
        if (name.trim().length < 2) {
            alert("הכנס קלט תקין");
            return;
        }
        localStorage.setItem("userName", name)
        navigate("/home")
    }
    return (
        <div>
            <div className="welcome">
                <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="...הכנס שם" />
                <button className="button" onClick={saveLocal}>...התחל</button>
            </div>
            <Footer />
        </div>
    )
}
