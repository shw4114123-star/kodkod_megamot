import type { User } from "../store/authStore";

export default function UserCard(props: User | any) {
    console.log(props);
    return (
        <div>
            <h2>{props.userName}</h2>
            <h3>{props._id}</h3>
            <h4>{props.email}</h4>
            <h5>{props.createdAt}</h5>
        </div>
    )
}
