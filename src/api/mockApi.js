import axios from "axios";

export const api = axios.create({
  baseURL: "https://68c7ac8e5d8d9f5147328736.mockapi.io/",
  headers: { "Content-Type": "application/json" },
  timeout: 1000,
});
