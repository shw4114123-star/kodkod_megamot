import { useState } from "react";
import { useToken } from "../store/authStore"
import UserCard from "./userCard";
import type { User } from "../store/authStore"

export default function UsersComponent() {
    const [users, setUsers] = useState<User[]>([])
    const token = useToken(s => s.token)
    console.log(token);

    const handle = async () => {
        const response = await fetch("http://localhost:3001/users", {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
        });
        const data = await response.json()
        if (!data || data.length === 0) return <h1>No data</h1>;
        console.log(users);
        setUsers(data)
    }
    return (
        <div>
            <button type="button" onClick={handle}>show data</button>
            {users && users?.map((user) => (
                <UserCard key={user._id} {...user} />
            ))}
        </div>
    )
}
