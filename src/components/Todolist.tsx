import {FiltereValueType} from "../App";

type tasksType = {
    title : string
    id: number
    isDone: boolean
}
type PropsType = {
    tasks: Array<tasksType>
    titile : string
    removeTask: (taskId: number) => void
    changerFilter: (value: FiltereValueType) => void
}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.titile}</h3>
            <div>
                <input/>
                <button>+</button>
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