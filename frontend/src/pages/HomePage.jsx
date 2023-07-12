import axios from "axios";
import { useState, useEffect } from "react";
import Users from "../components/Users";

export default function HomePage() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function llamarUsers() {
      const res = await axios.get('http://localhost:8000/users')
      setUsers(res.data)
    }
    llamarUsers()
  }, [])

  return (
    <div className="p-4">
      <Users users={users} />
    </div>
  );
}