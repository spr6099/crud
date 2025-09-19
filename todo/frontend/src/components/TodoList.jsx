import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ seteditTodo }) => {
  const {
    items: todos,
    loadingTodos,
    error,
  } = useSelector((state) => state.todos);

  if (loadingTodos) return <p>Loading....</p>;
  if (error) return <p style={{ color: "red" }}>error</p>;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} seteditTodo={seteditTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
