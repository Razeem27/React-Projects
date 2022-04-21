import React from "react";
import { MdPendingActions } from "react-icons/md";


const Uncomplete = ({list}) => {
  return (
    <section className="todo-wrapper">
      <article className="todo-container">
        <div className="completed-block">
          <h1>UnCompleted Task</h1>
          <div className="line-divider"></div>
          <div className="list-container">  
            <ul>
              {list.map((item, index) => {
                if (!item.isCompleted) {
                  return (
                    <li key={index} className="single-list">
                      <div className="uncomplete">
                        <MdPendingActions/>
                        <h3>{item.content}</h3>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Uncomplete;
