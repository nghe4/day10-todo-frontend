import axios from "axios";
import { message } from "antd";

const api = axios.create({
  baseURL: "https://68c7ac8e5d8d9f5147328736.mockapi.io/",
  headers: { "Content-Type": "application/json" },
  timeout: 1000,
});

api.interceptors.response.use(
  (response) => {
    // handle response
    return response;
  },
  (error) => {
    // handle response error
    if (error.response) {
      const { status, data } = error.response;
      if (status === 404) {
        message.error(data.message);
      }
    } else {
      // Handle cases where error.response is undefined (e.g., network error)
      message.error("Network error or timeout occurred.");
    }
    return Promise.reject(error);
  }
);

export { api };
