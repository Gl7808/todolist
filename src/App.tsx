import React, {useState} from 'react';
import {v1} from 'uuid';
import {Todolist} from "./components/Todolist";
import styles from './App.module.css'

export type FiltereValueType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])
    let [filter, setFilter] = useState<FiltereValueType>('all')
    let tasksForTodoList = tasks;

    if (filter === 'active') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone === true)
    }
    let changeFilter = (value: FiltereValueType) => {
        setFilter(value)
    }
    let ChangeTaskStatus = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
    }
    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks)
    }
    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(tasks => tasks.id != id)
        setTasks(filteredTasks)
        console.log(tasks)
    }
    return (
        <div className={styles.App}>
            <Todolist
                tasks={tasksForTodoList}
                titile="TodoList"
                removeTask={removeTask}
                changerFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus = {ChangeTaskStatus}
            />
        </div>
    );
}

export default App;
