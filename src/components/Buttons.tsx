import { FC, useEffect } from "react"
import { toUpperCaseFirsrLetter } from "../helpers/functions"


export const Buttons: FC<ButtonsType> = ({ deleteTaskHandler, setFilter,  filter, number }) => {

    const changeFilter =(filter: string) => setFilter(filter)

    const buttons = ['all', 'active', 'completed']

    return <div className="menu">
    <div className="sum">{number} items left</div>
        <div>
            {
                buttons.map(item => <span key={item} className={ filter === item ? "active" : ''}  onClick={() => changeFilter(item)}>
                    { 
                        toUpperCaseFirsrLetter(item)
                    }
                </span> )
            }
        </div>
    <div>
        <span onClick={deleteTaskHandler}>clear completed</span>
    </div>
</div>
}

type ButtonsType = {
    deleteTaskHandler: () => void 
    setFilter: (item: string) => void
    filter: string
    number: number
}