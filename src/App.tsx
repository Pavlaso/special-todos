import { useState} from 'react';
import {v1} from "uuid";

import { AddItemForm } from "./components/AddItemForm";
import { Buttons } from './components/Buttons';
import { Tasks } from './components/Tasks';

//Тут нет тестирования, так как я не умею писать тесты :), но я готов учится

export const App = () => {

    const [tasks, setTasks] = useState<taskType[]>([])
    const [number, setNumber] = useState(0)
    const [filter, setFilter] = useState('all')


    const deleteTaskHandler= () =>  setTasks([...tasks.filter((t: taskType) => !t.isDone)])

    const changeFilter =(filter: string) => setFilter(filter)

    const addTask=(title: string) => {
        if(title) {
            setTasks([...tasks, { 
                id: v1(), title, isDone: false 
            }])
        }
    }

    const changeStatusTask =(id: string, isDone:boolean) => {
        let arr =[...tasks.map(t => t.id === id ?{...t,isDone: isDone} : t)]
        let activeTasks = [...arr.filter(t => !t.isDone)]
        setTasks(arr)
        setNumber(activeTasks.length)  
    }   

   
    return (
        <div className="App">
            
            <h1 className="logo">todos</h1> 

            <AddItemForm addTask={addTask}/>

            <Tasks tasks={tasks} changeStatusTask={changeStatusTask} filter={filter} />
            
            <Buttons deleteTaskHandler={deleteTaskHandler} changeFilter={changeFilter} filter={filter}  number={number}/>
        </div>
  );
}

export type taskType = {
    id: string
    title: string,
    isDone: boolean
}
