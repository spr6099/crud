import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";

const TodoItem = ({ todo, seteditTodo }) => {
  const dispatch = useDispatch();
  return (
    <div className="todoItem">
      <li>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() =>
            dispatch(toggleTodo({ id: todo._id, completed: !todo.completed }))
          }
        >
          {todo.text}
        </span>
        <button onClick={() => seteditTodo(todo)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
      </li>
    </div>
  );
};

export default TodoItem;
