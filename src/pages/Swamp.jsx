import { useEffect, useState } from "react";
import { getFrogs } from "../api/frogs";
import Frog from "../components/Frog";

function Swamp() {
  const [frogs, setFrogs] = useState([]);

  useEffect(() => {
    loadFrogs();
  }, []);

  async function loadFrogs() {
    try {
      const data = await getFrogs(20);

      const frogsWithPosition = data.map((frog) => ({
        ...frog,

        x: Math.random() * 900,
        y: Math.random() * 500,
      }));

      setFrogs(frogsWithPosition);
    } catch (error) {
      console.error(error);
    }
  }

  return (
  <div className="min-h-screen bg-green-100 p-6 flex flex-col items-center">
    <h1 className="text-center text-4xl font-bold mb-6">
        Pantano
    </h1>

    <div
      className="
        relative
        w-[1000px]
        h-[600px]
        max-w-[95vw]
        overflow-hidden
        rounded-xl
        border-4 border-green-800
      "
      style={{
        backgroundImage: "url('/images/swamp-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {frogs.map((frog) => (
        <Frog
          key={frog.id}
          frog={frog}
          x={frog.x}
          y={frog.y}
        />
      ))}
    </div>
  </div>
);
}

export default Swamp;