import React, { useEffect, useState } from "react";
import TodoList from "./components/todoList/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/todoList/Nav";
import Completed from "./components/todoList/Completed";
import Uncomplete from "./components/todoList/Uncomplete";

const AppTodo = () => {
  const [list, setList] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("task_list")) {
      let record = localStorage.getItem("task_list");
      setList(JSON.parse(record));
    }
    if (list.length == 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task_list", JSON.stringify(list));
    if (list.length == 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [list]);

  let handleSubmit = newtask => {
    setList([...list, newtask]);
  };
  let handleDelete = id => {
    let updatedList = list.filter(item => id !== item.id);
    setList(updatedList);
  };
  let handleUpdate = (id, newContent) => {
    let updatedList = list.map(item => {
      if (item.id == id) {
        return { ...item, content: newContent };
      } else {
        return item;
      }
    });
    setList(updatedList);
  };
  let handleChecked = (id, ischecked) => {
    let updatedList = list.map(item => {
      if (id == item.id) {
        return { ...item, isCompleted: ischecked };
      } else {
        return item;
      }
    });
    setList(updatedList);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              submit={handleSubmit}
              list={list}
              del={handleDelete}
              update={handleUpdate}
              checked={handleChecked}
              empty={isEmpty}
            />
          }
        />
        <Route path="/completed" element={<Completed list={list} />} />
        <Route path="/uncomplete" element={<Uncomplete list={list} />} />
      </Routes>

      <button onClick={() => console.log(list)}>click</button>
    </Router>
  );
};

export default AppTodo;
