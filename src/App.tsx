import React, {useState} from 'react';
import {Todolist} from "./components/Todolist";

export type FiltereValueType = 'all' | 'active' | 'completed'
function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "REACT", isDone: false},
    ])
    let [filter, setFilter] = useState<FiltereValueType>('all')
    let tasksForTodoList = tasks;

    if(filter === 'active'){
        tasksForTodoList = tasks.filter(tasks => tasks.isDone === false)
    }
    if(filter === 'completed'){
        tasksForTodoList = tasks.filter(tasks => tasks.isDone === true)
    }
    let changeFilter = (value: FiltereValueType ) => {
        setFilter(value)
    }

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(tasks => tasks.id != id)
        setTasks(filteredTasks)
        console.log(tasks)
    }
    return (
        <div className="App">
            <Todolist tasks={tasksForTodoList} titile="List" removeTask={removeTask} changerFilter={changeFilter}/>
        </div>
    );
}

export default App;
