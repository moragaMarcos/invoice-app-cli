import axios from "axios";
// Si no funciona en https://localhost:7154/api, intenta con http://localhost:5034/api
const api = axios.create({
  baseURL: "https://localhost:7154/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
