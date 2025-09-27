import React, { useEffect, useState } from "react";
import useTodoStore from "../store/todoStore";

const TodoInput = () => {
  const { AddTodo, editId, editText, onUpdate } = useTodoStore();
  const [text, setText] = useState("");

  const handleAddTodo = async () => {
    if (text.trim()) {
      if (editId) {
        await onUpdate(editId, { text });
      } else {
        await AddTodo(text);
      }
      setText("");
    }
  };

  useEffect(() => {
    if (editId) {
      setText(editText);
    }
  }, [editId, editText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter new todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>
        {editId ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
};

export default TodoInput;
