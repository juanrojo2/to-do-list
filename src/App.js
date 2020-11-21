import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [toDos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }

  const saveLocalToDos = () => {
      localStorage.setItem('toDos', JSON.stringify(toDos));
  }

  const getLocalToDos = () => {
    if(localStorage.getItem('toDos') === null){
      localStorage.setItem('toDos', JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('toDos'));
      setToDos(local);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Your ToDo List</h1>
      </header>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList setToDos={setToDos} toDos={toDos} filteredToDos={filteredToDos}/>
    </div>
  );
}

export default App;
