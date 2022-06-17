import { FC } from "react"

export const Buttons: FC<ButtonsType> = ({ deleteTaskHandler, changeFilter,  filter, number }) => {
  
    const buttons = ['all', 'active', 'completed']

    const toUpperCaseFirsrLetter = (item: string) => item[0].toUpperCase() + item.slice(1)

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
    changeFilter: (item: string) => void
    filter: string
    number: number
}