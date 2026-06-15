import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFrog } from "../api/frogs";

function Home() {
  const [frogName, setFrogName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAdopt = async () => {
    if (!frogName.trim()) return;

    try {
      setLoading(true);

      await createFrog(frogName);

      navigate("/swamp");
    } catch (error) {
      console.error(error);
      alert("No se pudo crear el sapo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">
        Adopta un Sapo
      </h1>

      <input
        type="text"
        value={frogName}
        onChange={(e) => setFrogName(e.target.value)}
        placeholder="Nombre del sapo"
        className="border rounded p-3"
      />

      <button
        onClick={handleAdopt}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        {loading ? "Creando..." : "Adoptar"}
      </button>

      <img
        src="../public/images/frog.png"
        alt="frog"
        className="w-64"
      />
    </div>
  );
}

export default Home;