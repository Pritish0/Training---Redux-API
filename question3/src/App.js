import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, taskCompleted } from './Store/todoSlice';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState("all");
  const active = useSelector((state) => state.todo.active);
  const completed = useSelector((state) => state.todo.completed);
  const dispatch = useDispatch();

  console.log(inputValue);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setInputValue(e.target.value)}></input> &nbsp;
      <button onClick={() => dispatch(addTask(inputValue))}>Add Task</button>
      <br/>
      <br/>
      <button onClick={() => setShow("all")}>All</button> &nbsp;
      <button onClick={() => setShow("active")}>Active</button> &nbsp;
      <button  onClick={() => setShow("completed")}>Completed</button> &nbsp;
      <br/>
      {show==="all" && (
        <div>
          {active.map((item,index) => {
            return(
              <div key={index} onClick={() => dispatch(taskCompleted(item))}>{item}</div>
            );
          })}
          {completed.map((item,index) => {
            return(
              <div key={index} style={{textDecoration: 'line-through'}}>{item}</div>
            );
          })}
        </div>
        )}
      {show==="active" && (active.map((item,index) => {
        return(
          <div key={index} onClick={() => dispatch(taskCompleted(item))}>{item}</div>
        );
      }))}
      {show==="completed" && (completed.map((item,index) => {
        return(
          <div key={index} style={{textDecoration: 'line-through'}}>{item}</div>
        );
      }))}

    </div>
  );
}

export default App;
