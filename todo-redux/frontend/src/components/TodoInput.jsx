// src/components/TodoInput.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, editTodo, clearEdit } from "../redux/todoSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const { editId, editText } = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(editText || "");
  }, [editId, editText]);

  const handleAddOrUpdate = () => {
    if (text.trim()) {
      if (editId) {
        dispatch(editTodo({ id: editId, data: { text } }));
        dispatch(clearEdit());
      } else {
        dispatch(createTodo(text));
      }
      setText("");
    }
  };

  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editId ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
};



export default TodoInput;
