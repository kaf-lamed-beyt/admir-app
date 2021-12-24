import axios from "axios";

const public_routes = axios.create({
  baseURL: process.env.BASE_API_ENDPOINT,
});

export { public_routes };
