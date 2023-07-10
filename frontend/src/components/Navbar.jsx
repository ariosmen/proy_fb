import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="py-4 px-10 bg-slate-400 flex items-center justify-between">
      <Link to={"/"} className="text-3xl font-bold">
        Home User
      </Link>
      <Link to={"/users/new_user"} className="text-2xl">
        Create User
      </Link>
    </div>
  );
}