import {ChangeEvent, FC, useState} from "react";

export const AddItemForm: FC<AddItemFormProps> = ({addTask}) => {

    let [value, setValue] = useState('')

    const changeTaskTitle =(event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const onClickAddHandler =()=>{
        addTask(value)
        setValue('')
    }

    return(
        <div className="input_task">
            <input placeholder="What needs to be done?" value={value} onChange={changeTaskTitle}/>
            <button  onClick={onClickAddHandler} >Add</button>
        </div>
    )
}

type AddItemFormProps = {
    addTask:(title: string) => void
}
