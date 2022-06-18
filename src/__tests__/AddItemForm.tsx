import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddItemForm } from "../components/AddItemForm";


describe('AddItemForm', () => {
    let componentObj: any;

    beforeEach(() => {
        const addTask = jest.fn()
        componentObj = render(<AddItemForm addTask={addTask} />)
    })
    it('AddItemForm render', () => {
        expect(screen.getByRole<HTMLInputElement>('textbox')).toBeInTheDocument()
        expect(screen.getByRole<HTMLButtonElement>('button')).toBeInTheDocument()
    })
    it('changed works', () => {
        expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('')

        userEvent.type(screen.getByRole<HTMLInputElement>('textbox'), 'eat')

        expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('eat')

    })
    it('onClickAddHandler works', () => {
        userEvent.type(screen.getByRole<HTMLInputElement>('textbox'), 'eat')
        expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('eat')

        userEvent.click(screen.getByRole<HTMLButtonElement>('button'))

        expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('')
    })
     it('AddItemForm snapshot', () => {
         expect(componentObj).toMatchSnapshot()
     })
})