import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserCreate() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!params.id) {
      const res = await axios.post("http://localhost:8000/users", {
        nombre,
        apellido,
        email,
      })
      
    } else {
      const res = await axios.put(`http://localhost:8000/users/${params.id}`, {
        nombre,
        apellido,
        email,
      }) 
    }
    e.target.reset();
    navigate("/");
  };

  const delete_user = async (e) => {
    e.preventDefault();
    const res = await axios.delete(`http://localhost:8000/users/${params.id}`);
    console.log(`Usuario ${params.id} eliminado`);
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      update();
    }
    async function update() {
      const res = await axios.get(`http://localhost:8000/users/${params.id}`);
      setNombre(res.data.nombre);
      setApellido(res.data.apellido);
      setEmail(res.data.email);
    }
  }, []);

  return (
    <>
      <div className="flex justify-center h-96">
        <form
          action=""
          className="mt-10 border-4 rounded-xl w-80 p-2 text-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl p-3 text-white">Formulario</h1>
          <input
            className="rounded mt-2 p-2 text-xl"
            type="text"
            placeholder="Nombre"
            autoFocus
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            required
          />
          <input
            className="rounded mt-2 p-2 text-xl"
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
          <input
            className="rounded mt-2 p-2 text-xl"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex justify-between mt-10 px-4">
            <button className="hover:text-cyan-600">
              {params.id ? "Guardar cambios" : "Guardar"}
            </button>
            <button className="hover:text-red-600" onClick={delete_user}>
              {params.id ? "Eliminar" : ""}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

{/* {
params.id ? (
    <div className="mt-10 text-2xl p-2 text-center bg-green-400">
      Guardado
    </div>
  ) : null
} */}