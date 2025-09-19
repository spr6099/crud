import React, { useEffect, useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const url = "http://localhost:5001/api";
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);
  const [editText, seteditText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get(`${url}/todos`);
    settodos(response.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;

    await axios.post(`${url}/todos`, { text });
    settext("");
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await axios.put(`${url}/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  const EditTodo = (id, text) => {
    seteditId(id);
    seteditText(text);
  };

  const updateTodo = async () => {
    if (!editText.trim()) return;
    await axios.put(`${url}/todos/${editId}`, { text: editText });
    seteditId(null);
    seteditText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${url}/todos/${id}`);
    fetchTodos();
  };

  return (
    <div>
      {editId && editId !== null ? (
        <>
          <input
            value={editText}
            onChange={(e) => seteditText(e.target.value)}
          ></input>
          <button onClick={updateTodo}>update Todo</button>
          <button onClick={() => seteditId(null)}>Cancel</button>
        </>
      ) : (
        <>
          <input
            placeholder="Enter a new todo"
            value={text}
            onChange={(e) => settext(e.target.value)}
          ></input>
          <button onClick={addTodo}>Add Todo</button>
        </>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(todo._id, todo.completed)}
            >
              {todo.text}
            </span>
            <button onClick={() => EditTodo(todo._id, todo.text)}>Edit</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
