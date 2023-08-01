import { render, screen } from '@testing-library/react';
import Button from '../Button';
import React from 'react';

describe('Button component', () => {
    it('renders button correctly', () => {
        render(<Button type={'button'} className={''}></Button>)
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument()
    })
    it('renders button content correctly', () => {
        render(<Button type={'button'} className={''}>Test button</Button>)
        const button = screen.getByTestId('button');
        expect(button).toHaveTextContent('Test button');
    })
    it('renders class name correctly', () => {
        render(<Button className='test-btn-class' type={'button'}></Button>)
        const button = screen.getByTestId('button')
        expect(button).toHaveClass('test-btn-class')
    })
})
