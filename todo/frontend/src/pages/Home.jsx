import React, { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import { addTodo, deleteTodos, getTodos, updateTodo } from "../services/api";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);
  const [editText, seteditText] = useState("");

  const fetchTodos = async () => {
    const { data } = await getTodos();
    settodos(data);
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
    seteditId(id);
    seteditText(text);
  };
  const onUpdate = async (id, data) => {
    await updateTodo(id, data);
    seteditId(null);
    seteditText("");
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
};

export default Home;
