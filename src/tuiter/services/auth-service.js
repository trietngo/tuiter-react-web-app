import axios from "axios";

// get the URL to the remote API
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;

// URL to auth controller
const USERS_URL = `${SERVER_API_URL}/users`;
console.log("USERS_URL:", USERS_URL);

// configure axios to support cookies
// for passing credentials
const api = axios.create({ withCredentials: true })

// Login Service function
export const login = async ({ username, password}) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    return response.data;
};

// Logout
export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

// Profile
export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`);

    console.log("Respond data is:", response.data);
    return response.data;
};

// Update User
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

// Register user
export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    return response.data;
}