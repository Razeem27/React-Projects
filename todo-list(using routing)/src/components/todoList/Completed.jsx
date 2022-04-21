import { faList } from "@fortawesome/fontawesome-free-solid";
import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Completed = ({ list }) => {

  const [isEmpty, setEmpty] = useState(false);



  return (
    <section className="todo-wrapper">
      <article className="todo-container">
        <div className="completed-block">
          <h1>Completed Task</h1>
          <div className="line-divider"></div>
          <div className="list-container">
            <ul>
              {list.map((item,index) => {
                if (item.isCompleted) {
                  return (
                    <li key={index} className="single-list">
                      <div className="completed">
                        <BsFillPatchCheckFill/>
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

export default Completed;
