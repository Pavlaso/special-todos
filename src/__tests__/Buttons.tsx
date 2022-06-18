import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Buttons } from '../components/Buttons';

describe('Buttons', () => {
    it("renders buttons list", () => {
        let filter = 'all'
        let number = 2
        const deleteTaskHandler = jest.fn()
        const setFilter = jest.fn()

        render(<Buttons deleteTaskHandler={deleteTaskHandler} setFilter={setFilter} filter={filter}  number={number}/>)

        expect(screen.getByText(/2 items left/i)).toBeInTheDocument()

        expect(screen.getByText(/all/i)).toBeInTheDocument()
        expect(screen.getByText(/active/i)).toBeInTheDocument()
        expect(screen.getByText(/Completed/)).toBeInTheDocument()

        expect(screen.getByText(/clear completed/i)).toBeInTheDocument()
    })
    it("changeFilter works", () => {
        let filter = 'all'
        const setFilter = jest.fn((filt: string) =>  filter = filt)

        render(<Buttons deleteTaskHandler={ jest.fn() } setFilter={setFilter} filter={filter}  number={2}/>)

        expect(filter).toBe('all')

        userEvent.click(screen.getByText(/active/i))

        expect(filter).toBe('active')
    })
    it('deleteTaskHandler works', () => {
        let number = 2
        const deleteTaskHandler = jest.fn(() => number = 0)
        render(<Buttons deleteTaskHandler={deleteTaskHandler} setFilter={jest.fn()} filter={'all'}  number={number}/>)

        expect(number).toBe(2)

        userEvent.click(screen.getByText(/clear completed/i))

        expect(number).toBe(0)
    })
    describe('ClassNames changes', () => {
        it('clssNames changes to all', () => {

            render(<Buttons deleteTaskHandler={ jest.fn() } setFilter={ jest.fn() } filter={'all'}  number={2}/>)
    
            expect(screen.getByText(/all/i)).toHaveClass('active')
            expect(screen.getByText(/active/i)).not.toHaveClass('active')
            expect(screen.getByText(/Completed/)).not.toHaveClass('active')
    
        })
        it('clssNames changes to active', () => {
    
            render(<Buttons deleteTaskHandler={ jest.fn() } setFilter={ jest.fn() } filter={'active'}  number={2}/>)
    
            expect(screen.getByText(/all/i)).not.toHaveClass('active')
            expect(screen.getByText(/active/i)).toHaveClass('active')
            expect(screen.getByText(/Completed/)).not.toHaveClass('active')
    
        })
        it('clssNames changes to completed', () => {
    
            render(<Buttons deleteTaskHandler={ jest.fn() } setFilter={ jest.fn() } filter={'completed'}  number={2}/>)
    
            expect(screen.getByText(/all/i)).not.toHaveClass('active')
            expect(screen.getByText(/active/i)).not.toHaveClass('active')
            expect(screen.getByText(/Completed/)).toHaveClass('active')
    
        })
    })
    it("Buttons snapshot", () => {
        const buttons = render(<Buttons deleteTaskHandler={jest.fn()} setFilter={jest.fn()} filter={'all'}  number={2}/>)

        expect(buttons).toMatchSnapshot()
    })
})
