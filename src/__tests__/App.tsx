import { render, screen } from '@testing-library/react';
import { App } from '../App';


describe('App', () => {
  it('render logo text', () => {
    render(<App />)
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  })
  it('App snapshot', () => {
    const app = render(<App />)
    expect(app).toMatchSnapshot()
  })
  
})
