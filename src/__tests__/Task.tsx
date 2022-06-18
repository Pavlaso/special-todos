import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Task } from "../components/Task"


describe('Task', () => {
    
    it('Task render with task(s)', () => {
        render(<Task 
            task={{
                id: '1',
                title: 'renderred',
                isDone: false
            }} 
            changeStatusTask={jest.fn()}
        />)
        expect(screen.getByText(/renderred/)).toBeInTheDocument()

    })
    it('changeStatusTask works', () => {
        const changeStatusTask = jest.fn()
        render(<Task 
            task={{
                id: '1',
                title: 'renderred',
                isDone: false
            }} 
            changeStatusTask={changeStatusTask}
        />)
        userEvent.click(screen.getByRole<HTMLInputElement>('checkbox'))
        expect(changeStatusTask).toBeCalledTimes(1)

    })
    
    describe('Edit ClassNames', () => {
        it('active', () => {
            const changeStatusTask = jest.fn()
            render(<Task 
                task={{
                    id: '1',
                    title: 'renderred',
                    isDone: false
                }} 
                changeStatusTask={changeStatusTask}
            />)

            expect(screen.getByTestId('task-text')).not.toHaveClass('done')
            expect(screen.getByRole<HTMLInputElement>('checkbox')).not.toBeChecked()
        }) 
        it('not active', () => {
            const changeStatusTask = jest.fn()
            render(<Task 
                task={{
                    id: '1',
                    title: 'renderred',
                    isDone: true
                }} 
                changeStatusTask={changeStatusTask}
            />)

            expect(screen.getByTestId('task-text')).toHaveClass('done')
            expect(screen.getByRole<HTMLInputElement>('checkbox')).toBeChecked()
        }) 
        it("Task snapshot", () => {
            const task =  render(<Task 
                task={{
                    id: '1',
                    title: 'renderred',
                    isDone: false
                }} 
                changeStatusTask={jest.fn()}
            />)
    
            expect(task).toMatchSnapshot()
        })
    })
})