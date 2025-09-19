import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const addTodo = (text) => axios.post(`${API_URL}/`, { text });
export const getAllTodos = () => axios.get(`${API_URL}/`);
export const updateTodo = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
