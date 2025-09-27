import React, { useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import useTodoStore from "../store/todoStore";

const Home = () => {
  const {
    todos,
    searchText,
    filterstatus,
    fetchTodos,
    setSearchText,
    setFilterstatus,
  } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesFilter =
      filterstatus === "all"
        ? true
        : filterstatus === "completed"
        ? todo.completed
        : !todo.completed;

    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <h2>Todo App </h2>

      <div className="header">
        <div className="search">
          <input
            placeholder="Search todo"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
        </div>
        <div className="filter">
          <select onClick={(e) => setFilterstatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      {/* Components now directly use store */}
      <TodoInput />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default Home;
