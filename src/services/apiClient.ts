import axios from "axios";

// Único lugar donde se escribe la dirección de la API (viene de .env.development).
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});
