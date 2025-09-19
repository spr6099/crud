import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo, onUpdate } from "../redux/todoSlice";

const TodoInput = ({ editTodo, seteditTodo }) => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch(onUpdate({ id: editTodo._id, text }));
      seteditTodo(null);
    } else {
      dispatch(createTodo(text));
    }
    settext("");
  };

  useEffect(() => {
    if (editTodo) {
      settext(editTodo.text);
    }
  }, [editTodo]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      ></input>
      <button onClick={handleAdd}>
        {editTodo ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
};

export default TodoInput;
