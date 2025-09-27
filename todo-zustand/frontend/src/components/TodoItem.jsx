import React from "react";
import useTodoStore from "../store/todoStore";

const TodoItem = ({ todo }) => {
  const { toggleTodo, onDelete, initiateEdit } = useTodoStore();

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTodo(todo._id, { completed: !todo.completed })}
      >
        {todo.text}
      </span>
      <button onClick={() => initiateEdit(todo._id, todo.text)}>Edit</button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
