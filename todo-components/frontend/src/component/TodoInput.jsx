import React, { useEffect, useState } from "react";

const TodoInput = ({ AddTodo, editId, editText, onUpdate }) => {
  const [text, settext] = useState("");

  const handleAddTodo = async () => {
    if (text.trim()) {
      if (editId) {
        await onUpdate(editId, { text });
      } else {
        await AddTodo(text);
      }
      settext("");
    }
  };

  useEffect(() => {
    if (editId) {
      settext(editText);
    }
  }, [editId, editText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter new todo"
        onChange={(e) => settext(e.target.value)}
      ></input>
      <button onClick={handleAddTodo}>
        {editId ? "Update todo" : "Add Todo"}
      </button>
    </div>
  );
};

export default TodoInput;
