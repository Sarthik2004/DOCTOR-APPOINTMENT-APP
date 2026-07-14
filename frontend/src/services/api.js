import axios from "axios";

const api = axios.create({
  baseURL: "https://doctor-appointment-app-fgad.onrender.com",
});

export default api;