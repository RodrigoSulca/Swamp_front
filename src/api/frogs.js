const API_URL = "http://localhost:3000/api";

export async function createFrog(name) {
  const response = await fetch(`${API_URL}/frogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Error al crear sapo");
  }

  return response.json();
}

export async function getFrogs(limit = 20) {
  const response = await fetch(
    `${API_URL}/frogs?limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener sapos");
  }

  return response.json();
}