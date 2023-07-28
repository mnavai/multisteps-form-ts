import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from '../Toggle';

describe ("Toggle componet", () => {
    it("should render correctly", () => {
        render(<Toggle></Toggle>)
        const toggle = screen.getByTestId("toggle")
        expect(toggle).toBeInTheDocument()
    })
    it("checks if props are passed correctly", () => {
        
        render(<Toggle></Toggle>)
        const input = screen.getByTestId("toggle")
        fireEvent.click(input)
        expect(input.checked).toBe(true)
        fireEvent.click(input)
        expect(input.checked).toBe(false)
        screen.debug()

    })
})