import axios from "axios";

// we should be able to distinguish between
// API endpoints that are not required for an
// authenticated user and a unathenticated one
const publicRoute = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export { publicRoute };
