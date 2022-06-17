import { FC } from "react"
import { taskType } from "../App";

import { Task } from "./Task";


export const Tasks: FC<TasksType>  = ({tasks, filter, changeStatusTask}) => {

    const filterTasks = [...tasks]

    let newTask = filterTasks

    if(filter === "active"){
        newTask = filterTasks.filter(t => !t.isDone)
    }
    else if(filter === "completed"){
        newTask = filterTasks.filter(t => t.isDone)
    }


    return <div className="list">
        {  
            newTask.map(task => <Task changeStatusTask={changeStatusTask} task={task} />)
        }
    </div>
}

type TasksType = { 
    tasks: taskType[]
    filter: string
    changeStatusTask: ( id: string, isDone:boolean ) => void
}