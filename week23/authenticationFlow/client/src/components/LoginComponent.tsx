import { useState } from "react"
import { Link, useNavigate } from "react-router";
import { useToken } from "../store/authStore";


export default function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [referns, setReferens] = useState({})
    const token = useToken(s => s.addToken)
    const navigate = useNavigate()
    const handle = async () => {
        const response = await fetch("http://localhost:3001/auto/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json()
        // console.log(data);
        setReferens(data)
        token(data)
        navigate("/users")
    }
    return (
        <div>
            <input type="text" placeholder="enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
            <input type="text" placeholder="enter password" value={password} onChange={e => { setPassword(e.target.value) }} />
            <button type="submit" onClick={handle}>enter</button>
            <h6>Don't have an account? <Link to={"/auto/register"}>Register</Link></h6>
        </div>
    )
}
