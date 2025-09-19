import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodos, getTodos, updateTodo } from "../services/api";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { data } = await getTodos();
  return data;
});

export const createTodo = createAsyncThunk("todos/createTodo", async (text) => {
  const { data } = await addTodo(text);
  return data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await deleteTodos(id);
  return id;
});

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async ({ id, completed }) => {
    const { data } = await updateTodo(id, { completed });
    return data;
  }
);

export const onUpdate = createAsyncThunk(
  "todos/onUpdate",
  async ({ id, text }) => {
    const { data } = await updateTodo(id, { text });
    return data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    loadingTodos: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch
      .addCase(fetchTodos.pending, (state) => {
        state.loadingTodos = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loadingTodos = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loadingTodos = false;
        state.error = action.error.message;
      })

      //create

      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })

      //   deleteTodo

      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((todo) => todo._id !== action.payload);
      })

      //   toggleTodo

      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (t) => t._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      //   updateTodo
      .addCase(onUpdate.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (t) => t._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;
