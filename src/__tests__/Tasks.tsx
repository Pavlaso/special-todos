import { screen, render } from "@testing-library/react";
import { Tasks } from "../components/Tasks";

describe('Tasks', () => {
    it('rendered tasks', () => {
        render(
        <Tasks 
            tasks={[
                {
                    id: '1',
                    isDone: false,
                    title: 'str'
                }, 
                {
                    id: '2',
                    isDone: false,
                    title: 'str2'
                }, 
                {
                    id: '3',
                    isDone: false,
                    title: 'str3'
                }
            ]}
            filter='all'
            changeStatusTask={jest.fn()}
        />)
        let tasks = screen.getAllByTestId('task-component')
        expect(tasks.length).toBe(3)
    })
    it('rendered empty tasks', () => {
        render(
        <Tasks 
            tasks={[]}
            filter='all'
            changeStatusTask={jest.fn()}
        />)
        let tasks = screen.queryByTestId('task-component')
        expect(tasks).toBeNull()
    })
    it('Tasks snapshot', () => {
        const tasksRendered = render(
        <Tasks 
            tasks={[]}
            filter='all'
            changeStatusTask={jest.fn()}
        />)

        expect(tasksRendered).toMatchSnapshot()
    })
})