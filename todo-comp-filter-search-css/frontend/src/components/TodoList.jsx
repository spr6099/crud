import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle, initialEdit }) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          initialEdit={initialEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
