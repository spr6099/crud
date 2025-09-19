// src/redux/todoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addTodo, deleteTodos, getTodos, updateTodo } from "../services/api";

// --- Async thunks ---
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { data } = await getTodos();
  return data;
});

export const createTodo = createAsyncThunk("todos/createTodo", async (text) => {
  await addTodo(text);
  const { data } = await getTodos(); // refetch after add
  return data;
});

export const editTodo = createAsyncThunk("todos/editTodo", async ({ id, data }) => {
  await updateTodo(id, data);
  const { data: todos } = await getTodos();
  return todos;
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  await deleteTodos(id);
  const { data } = await getTodos();
  return data;
});

// --- Slice ---
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    editId: null,
    editText: "",
    loading: false,
    error: null,
  },
  reducers: {
    setEdit(state, action) {
      state.editId = action.payload.id;
      state.editText = action.payload.text;
    },
    clearEdit(state) {
      state.editId = null;
      state.editText = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.items = action.payload;
        state.editId = null;
        state.editText = "";
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export const { setEdit, clearEdit } = todoSlice.actions;
export default todoSlice.reducer;
