// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo, setEdit } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todoItem">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() =>
          dispatch(editTodo({ id: todo._id, data: { completed: !todo.completed } }))
        }
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(setEdit({ id: todo._id, text: todo.text }))}>
        Edit
      </button>
      <button onClick={() => dispatch(removeTodo(todo._id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
