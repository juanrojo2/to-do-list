import React from "react";

const ToDo = ({text, todo, toDos, setToDos}) => {

  const deleteHandler = () => {
    setToDos(toDos.filter(element => element.id !== todo.id))
  }
  const completedHandler = () => {
    setToDos(toDos.map(item => {
      if(item.id === todo.id){
        return{
          ...item, completed: !item.completed
        };
      }
      return item;
    }))
  }
  return (
    <div className="ToDo">
      <li className={`ToDo-Item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completedHandler} className="complete-button">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-button">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
