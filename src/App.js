import React from "react";
import Todo from "./components/Todo";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);


  let task;
  const HandleInput = (e) => {
    task = e.target.value;
    setTodo(task);
  };

  const addTask = () => {
    if(!todo)
    {
      console.log('empty');
      return;
    }
    setTodoList([...todoList, todo]);
    console.log(todoList);
    setTodo("");
  };

  let taskToDel;
  const deleteTask = (e) => {
    taskToDel = e.target.value;

    setTodoList(
      todoList.filter((todo) => {
        // if(task != taskToDel){
        return todo != taskToDel;
        // }
      })
    );

    // setTodoList([...todoList, taskToDel]);
  };

  const clearAll = () => {
    setTodoList([]);
  }

  return (
    <>
      <div className="bigContainer">
        <div className="littleContainer">

          <div className="addTodo">
            <input
              type="text"
              name="todo"
              value={todo}
              onChange={HandleInput}
              placeholder="Add task"
            />
            <button onClick={addTask}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <button className="clearAll" id="clearAll" onClick={clearAll}>Clear All</button>
          <div className="todoList">
            {todoList.map((todo, key) => {
              return <Todo key={key} todo={todo} deleteTask={deleteTask} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
