import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, onDelete, onEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          toggleTodo={toggleTodo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
