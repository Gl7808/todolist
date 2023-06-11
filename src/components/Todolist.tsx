import {FiltereValueType} from "../App";
import {ChangeEvent, useState, KeyboardEvent} from "react";

type tasksType = {
    title : string
    id: string
    isDone: boolean
}
type PropsType = {
    tasks: Array<tasksType>
    titile : string
    removeTask: (taskId: string) => void
    changerFilter: (value: FiltereValueType) => void
    addTask: (title: string) => void
}
export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState('')
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            addTask()
        }
    }
    const onAllClickHandler = () => {
        props.changerFilter('all')
    }
    const onActiveClickHandler = () => {
        props.changerFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changerFilter('completed')
    }
    return (
        <div>
            <h3>{props.titile}</h3>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            {props.tasks.map((tasks)=>{
                return(
                    <ul>
                        <li key={tasks.id}>
                            <input type={"checkbox"} checked={tasks.isDone}/>
                            <span>{tasks.title}</span>
                            <button onClick={() => {props.removeTask(tasks.id)}}>✖️</button>
                        </li>
                    </ul>
                );
            })}
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>

            </div>
        </div>
    );
}