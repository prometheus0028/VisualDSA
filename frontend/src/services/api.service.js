const BASE_URL = import.meta.env.VITE_API_URL;
fetch(`${BASE_URL}/api`);
export const api = (endpoint) => `${BASE_URL}/api${endpoint}`;
