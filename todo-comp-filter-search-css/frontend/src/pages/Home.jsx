


import React, { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import { addTodo, deleteTodos, getTodos, updateTodo } from "../services/api";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);
  const [editText, seteditText] = useState("");

 
  const fetchTodos = async () => {
    const { data } = await getTodos();
    settodos(data);
  };

  const onAdd = async (text) => {
    await addTodo(text);
    fetchTodos();
  };

  const onToggle = async (id, data) => {
    await updateTodo(id, data);
    fetchTodos();
  };

  const initialEdit = (id, text) => {
    seteditId(id);
    seteditText(text);
  };
  const onUpdate = async (id, data) => {
    await updateTodo(id, data);
    seteditId(null);
    seteditText("");
    fetchTodos();
  };

  const onDelete = async (id) => {
    await deleteTodos(id);
    fetchTodos();
  };



  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>
     

      <TodoInput
        onAdd={onAdd}
        editId={editId}
        editText={editText}
        onUpdate={onUpdate}
      />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        onToggle={onToggle}
        initialEdit={initialEdit}
      />
    </div>
  );
};

export default Home;











//   const [searchText, setsearchText] = useState("");
//   const [filterText, setfilterText] = useState("all");

//   const filteredTodos = todos.filter((todo) => {
//     const searchTodos = todo.text
//       .toLowerCase()
//       .includes(searchText.toLowerCase());

//     const matchesFilter =
//       filterText === "all"
//         ? true
//         : filterText === "completed"
//         ? todo.completed
//         : !todo.completed;

//     return searchTodos & matchesFilter;
//   });



//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>Todo App</h2>
//       <div className="header">
//         <div className="search">
//           <input
//             placeholder="Search todo"
//             onChange={(e) => setsearchText(e.target.value)}
//           ></input>
//         </div>
//         <div className="filter">
//           <select onClick={(e) => setfilterText(e.target.value)}>
//             <option value="all">All</option>
//             <option value="completed">Completed</option>
//             <option value="pending">Pending</option>
//           </select>
//         </div>
//       </div>


//       <TodoList
//         todos={filteredTodos}
//         onDelete={onDelete}
//         onToggle={onToggle}
//         initialEdit={initialEdit}
//       />
