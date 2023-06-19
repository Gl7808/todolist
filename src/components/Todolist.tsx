import {FiltereValueType} from "../App";
import {ChangeEvent, useState, KeyboardEvent} from "react";
import styles from './stylelist.module.css'

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
    changeTaskStatus : (id: string, isDone: boolean) => void
}
export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState('')
    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        }
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
        <div className={styles.list}>
            <h3>{props.titile}</h3>
            <div className={styles.inputContainer}>
                <input className={styles.addItemListInput} value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button className={styles.addTask_btn} onClick={addTask}>+</button>
            </div>
            <ul>
            {props.tasks.map((tasks)=>{
                const onCheckboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
                    let newIsDoneValue = event.currentTarget.checked
                    props.changeTaskStatus(tasks.id, newIsDoneValue)
                }
                return(

                        <li key={tasks.id}>
                            <input type={"checkbox"} checked={tasks.isDone} onChange={onCheckboxChangeHandler}/>
                            <span>{tasks.title}</span>
                            <button className={styles.removeTask_btn} onClick={() => {props.removeTask(tasks.id)}}>-</button>
                        </li>
                );

            })}
            </ul>
            <div className={styles.filteredBlock}>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>

            </div>
        </div>
    );
}