import React from "react";

const TodoItem = ({ todo, toggleTodo, onDelete, onEdit }) => {
  return (
    <div>
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
        <button onClick={() => onEdit(todo._id, todo.text)}>edit</button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </li>
    </div>
  );
};

export default TodoItem;
