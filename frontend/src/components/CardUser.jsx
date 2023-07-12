import { useNavigate } from "react-router-dom"

export default function CardUser({ user }) {
    const navigate = useNavigate()

    return (
        <div className="bg-zinc-950 p-2 hover:cursor-pointer hover:bg-gray-600" onClick={()=> {navigate(`/users/${user.id}`)}}>
            <h2>{user.nombre} {user.apellido}</h2>    
            <h2>{user.email}</h2>
        </div>
  )
}