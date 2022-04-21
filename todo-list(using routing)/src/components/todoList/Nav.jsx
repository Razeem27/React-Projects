import React from 'react'
import {Link, useLocation} from "react-router-dom"

const Nav = () => {
  let { pathname } = useLocation();
  return (
    <nav className="todo-navbar">
      <ul>
        <h1>TODO LIST</h1>
        <li className={pathname === "/" ? "active-link" : ""}>
          <Link to="/">Add new Task</Link>
          <div></div>
        </li>
        <li className={pathname === "/completed" ? "active-link" : ""}>
          <Link to="/completed">Completed Tasks</Link>
          <div></div>
        </li>
        <li className={pathname === "/uncomplete" ? "active-link" : ""}>
          <Link to="/uncomplete">UnComplete Tasks</Link>
          <div></div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav