import { useState } from "react"
import { Link } from "react-router";

export default function RegisterComponent() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [referns, setReferens] = useState({})
    const handle = async () => {
        const response = await fetch("http://localhost:3001/auto/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, email, password })
        });
        const data = await response.json()
        console.log(data);
        setReferens(data)
    }
    return (
        <div>
            <input type="text" placeholder="enter userName" value={userName} onChange={e => { setUserName(e.target.value) }} />
            <input type="text" placeholder="enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
            <input type="text" placeholder="enter password" value={password} onChange={e => { setPassword(e.target.value) }} />
            <button type="submit" onClick={handle}>enter</button>
            <h6>Already have an account?<Link to={"/auto/Login"}>Login</Link></h6>
        </div>
    )
}
