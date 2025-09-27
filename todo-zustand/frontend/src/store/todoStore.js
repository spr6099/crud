import { create } from "zustand";
import { addTodo, updateTodo, deleteTodos, getTodos } from "../services/api";

const useTodoStore = create((set, get) => ({
  todos: [],
  editId: null,
  editText: "",
  searchText: "",
  filterstatus: "all",

  // Fetch all todos
  fetchTodos: async () => {
    const { data } = await getTodos();
    set({ todos: data });
  },

  // Add new todo
  AddTodo: async (text) => {
    await addTodo(text);
    await get().fetchTodos();
  },

  // Toggle completed/incompleted
  toggleTodo: async (id, data) => {
    await updateTodo(id, data);
    await get().fetchTodos();
  },

  // Start editing
  initiateEdit: (id, text) => {
    set({ editId: id, editText: text });
  },

  // Update todo
  onUpdate: async (id, data) => {
    await updateTodo(id, data);
    set({ editId: null, editText: "" });
    await get().fetchTodos();
  },

  // Delete todo
  onDelete: async (id) => {
    await deleteTodos(id);
    await get().fetchTodos();
  },

  // Filters
  setSearchText: (text) => set({ searchText: text }),
  setFilterstatus: (status) => set({ filterstatus: status }),
}));

export default useTodoStore;
