import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faCheckCircle } from "@fortawesome/fontawesome-free-solid";

const TaskMapper = ({ list,del,update,checked}) => {
    const [isEdit, setEdit] = useState("");
    const [value, setValue] = useState("");

    let handleEdit = (e) => {
        let oldValue = list.filter((item) => item.id == e.target.id)[0].content;
        setValue(oldValue)
        
        if (e.target.innerText === "Edit") {
        setEdit(`${e.target.id}`)
     }
        else {
            setEdit('')
            update(e.target.id,value)
     }
}

    let handleChecked = (e) => {
      checked(e.target.id, e.target.checked);
    
  }
  
  let handleDelete = (e) => {
    setEdit("");
  }
  
  return (
    <div className="list-container">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} className="single-list">
              <div className="icon-block">
                {/* <FontAwesomeIcon icon={faCheckCircle} onClick={handleCheck}/> */}
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={handleChecked}
                  checked={item.isCompleted}
                />
                {isEdit === `${item.id}` ? (
                  <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                  />
                ) : (
                  <h3>{item.content}</h3>
                )}
              </div>

              <div className='btn-block'>
                <button onClick={handleEdit} id={item.id}>
                  {isEdit === `${item.id}` ? "Update" : "Edit"}
                </button>
                <button onClick={isEdit === `${item.id}`?handleDelete:()=>del(item.id)}>
                  {isEdit === `${item.id}` ? "Cancel" :
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> }
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskMapper