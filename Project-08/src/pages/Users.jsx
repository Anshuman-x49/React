import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import UserCard from "../components/UserCard"

const Users = () => {
    const { users } = useContext(UserContext)
    return (
        <div className="grid grid-cols-4 gap-4">
            {users.map((user) => (
                <UserCard user={user} key={user.id} />
            ))}
        </div>
    )
}

export default Users