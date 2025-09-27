"use client";
import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { addTodo, deleteTodos, getTodos, updateTodo } from "../services/api";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  const onAdd = async (text) => {
    await addTodo(text);
    fetchTodos();
  };

  const onToggle = async (id, data) => {
    await updateTodo(id, data);
    fetchTodos();
  };

  const initialEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const onUpdate = async (id, data) => {
    await updateTodo(id, data);
    setEditId(null);
    setEditText("");
    fetchTodos();
  };

  const onDelete = async (id) => {
    await deleteTodos(id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>
      <TodoInput
        onAdd={onAdd}
        editId={editId}
        editText={editText}
        onUpdate={onUpdate}
      />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        onToggle={onToggle}
        initialEdit={initialEdit}
      />
    </div>
  );
}
