import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
    it('renders button correctly', () => {
        render(<Button></Button>)
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument()
    })
    it('renders button content correctly', () => {
        render(<Button>Test button</Button>)
        const button = screen.getByTestId('button');
        expect(button).toHaveTextContent('Test button');
    })
    it('renders class name correctly', () => {
        render(<Button className='test-btn-class'></Button>)
        const button = screen.getByTestId('button')
        expect(button).toHaveClass('test-btn-class')
    })
})
