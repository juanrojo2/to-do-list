import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDos, setToDos, filteredToDos}) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map(todo => (
          <ToDo text={todo.text} key={todo.id} toDos={toDos} todo={todo} setToDos={setToDos}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
