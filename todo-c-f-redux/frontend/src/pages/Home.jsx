import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Home;
