import {FiltereValueType} from "../App";
import {useState} from "react";

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
    return (
        <div>
            <h3>{props.titile}</h3>
            <div>
                <input value={title} onChange={(event)=>{setTitle(event.currentTarget.value)}}/>
                <button onClick={()=>props.addTask(title)}>+</button>
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
                <button onClick={()=>{props.changerFilter('all')}}>All</button>
                <button onClick={()=>{props.changerFilter('active')}}>Active</button>
                <button onClick={()=>{props.changerFilter('completed')}}>Completed</button>

            </div>
        </div>
    );
}