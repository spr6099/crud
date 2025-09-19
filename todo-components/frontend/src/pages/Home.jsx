import React, { useEffect, useState } from "react";
import TodoInput from "../component/TodoInput";
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "../services/api";
import TodoList from "../component/TodoList";

const Home = () => {
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);
  const [editText, seteditText] = useState("");

  const [searchText, setsearchText] = useState("");
  const [filterstatus, setfilterstatus] = useState("all");

  const fetchTodos = async () => {
    const { data } = await getAllTodos();
    settodos(data);
  };

  const AddTodo = async (text) => {
    await addTodo(text);
    fetchTodos();
  };

  const toggleTodo = async (id, data) => {
    await updateTodo(id, data);
    fetchTodos();
  };

  const initiateEdit = (editId, editText) => {
    seteditId(editId);
    seteditText(editText);
  };

  const onUpdate = async (id, data) => {
    await updateTodo(id, data);
    seteditId(null);
    seteditText("");
    fetchTodos();
  };

  const onDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesFilter =
      filterstatus === "all"
        ? true
        : filterstatus === "completed"
        ? todo.completed
        : !todo.completed;

    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <h2>Todo App</h2>

      {/* Search Input */}

      <input
        type="text"
        placeholder="search todos..."
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      ></input>

      {/* Filter status */}

      <div>
        <button onClick={() => setfilterstatus("all")}>All</button>
        <button onClick={() => setfilterstatus("completed")}>completed</button>
        <button onClick={() => setfilterstatus("incompleted")}>
          incompleted
        </button>
      </div>

      <TodoInput
        AddTodo={AddTodo}
        editId={editId}
        editText={editText}
        onUpdate={onUpdate}
      />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        onDelete={onDelete}
        onEdit={initiateEdit}
      />
    </div>
  );
};

export default Home;
