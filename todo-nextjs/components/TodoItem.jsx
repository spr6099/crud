import React from "react";

const TodoItem = ({ todo, onDelete, onToggle, initialEdit }) => {
  return (
    <>
      <li className="todoItem">
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => onToggle(todo._id, { completed: !todo.completed })}
        >
          {todo.text}
        </span>
        <button onClick={() => initialEdit(todo._id, todo.text)}>Edit</button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </li>
    </>
  );
};

export default TodoItem;
