import React, { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [editTodo, seteditTodo] = useState(null);
  console.log(editTodo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoInput editTodo={editTodo} seteditTodo={seteditTodo} />
      <TodoList seteditTodo={seteditTodo} />
    </div>
  );
};

export default Home;
