import {ChangeEvent, FC} from "react"
import {taskType} from "../App"

export const Task: FC<changedTaskType> = ({task, changeStatusTask}) =>{

    const cssDone = task.isDone ? "text done" : "text"

    const onStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
        changeStatusTask(
            task.id, 
            event.currentTarget.checked
        )  
    }

    return(
        <div className="task" key={task.id} >
            <label className="label">
                <input className="checkbox" onChange={onStatusHandler} checked={task.isDone} type="checkbox" />
                <span className="fake"/>
                <span data-testid="task-text" className={cssDone}>{task.title}</span>
            </label>
        </div>)

}

type changedTaskType = {
    task: taskType
    changeStatusTask: (id: string, isDone:boolean) => void
}
