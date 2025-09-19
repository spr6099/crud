import axios from "axios";

const API_URL = "http://localhost:3004/api";

export const addTodo = (text) => axios.post(`${API_URL}/`, { text });
export const getTodos = () => axios.get(`${API_URL}/`);
export const updateTodo = (id,data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTodos = (id) => axios.delete(`${API_URL}/${id}`);
