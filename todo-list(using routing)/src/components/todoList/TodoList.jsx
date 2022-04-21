import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlusSquare, faTrash, } from "@fortawesome/fontawesome-free-solid"
import "./todo.css"
import TaskMapper from './TaskMapper';

const TodoList = ({ submit,list,del,update,checked,empty}) => {
  const [task, setTask] = useState({ content: "", id: "", isCompleted: false })
  

  let handleChange = (e) => {
    let newTask=e.target.value
      setTask({...task,content:newTask,id:Date.now()})
  }
  let handleSubmit = e => {
    e.preventDefault(); 
    console.log("submiting");
    if (task.content === '') return;
    submit(task);
    setTask({...task,content:''})
  }
  
  return (
    <section className="todo-wrapper">
      <article className="todo-container">
        <div className='form'>
        <form action="" onSubmit={handleSubmit}>
          <h1>What's the plan for today</h1>
          <div className="inner-container">
            <div className="submit-block">
              <input
                type="text"
                placeholder="Enter Your Task"
                value={task.content}
                onChange={handleChange}
              />
              <button type="submit">
                {/* <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> */}
                <div className="vertical"></div>
                <div className="hori"></div>
              </button>
            </div>
            {empty && <h1 style={{textAlign:"center"}}>Empty<hr></hr></h1>}
          </div>
        </form>
            <TaskMapper
              list={list}
              del={del}
              update={update}
              checked={checked}
            />
        </div>
      </article>
    </section>
  );
}

export default TodoList