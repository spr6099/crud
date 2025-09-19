import React, { useEffect, useState } from "react";

const TodoInput = ({ onAdd, editId, editText, onUpdate }) => {
  const [text, settext] = useState("");

  const handleAdd = async () => {
    if (text.trim()) {
      if (editId) {
        onUpdate(editId, { text });
      } else {
        onAdd(text);
      }
      settext("");
    }
  };

  useEffect(() => {
    settext(editText);
  }, [editId, editText]);

  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={(e) => settext(e.target.value)}
      ></input>
      <button onClick={handleAdd}>{editId ? "Update Todo" : "Add Todo"}</button>
    </div>
  );
};

export default TodoInput;
