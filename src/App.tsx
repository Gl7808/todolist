import React, {useState} from 'react';
import {Todolist} from "./components/Todolist";


function App() {
  let [tasks, setTasks] = useState([
      {id: 1, title: "HTML", isDone: true},
      {id: 2, title: "CSS", isDone: true},
      {id: 3, title: "JS", isDone: true},
      {id: 4, title: "REACT", isDone: false},
  ])
    const removeTask = (id: number) => {
      tasks = tasks.filter(tasks => tasks.id != id)
        console.log(tasks)
    }
  return (
    <div className="App">
      <Todolist tasks={tasks} titile="List" removeTask={removeTask}/>
    </div>
  );
}

export default App;
