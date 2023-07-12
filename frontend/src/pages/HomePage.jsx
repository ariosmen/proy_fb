import axios from "axios";
import { useState, useEffect } from "react";
import Users from "../components/Users";

export default function HomePage() {

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    async function llamarUsers() {
      const res = await axios.get('http://localhost:8000/users')
      setUser(res.data)
    }
    llamarUsers()
  }, [])

  return (
    <div className="h-96 flex justify-center items-center">
      <Users user={user} />
    </div>
  );
}