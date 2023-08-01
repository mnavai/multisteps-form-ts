import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from '../Toggle';
import React from 'react';

describe ("Toggle componet", () => {
    it("should render correctly", () => {
        render(<Toggle monthly={''} yearly={''}></Toggle>)
        const toggle = screen.getByTestId("toggle")
        expect(toggle).toBeInTheDocument()
    })
    it("checks if props are passed correctly", () => {
        
        render(<Toggle monthly={''} yearly={''}></Toggle>)
        const input = screen.getByTestId("toggle") as HTMLInputElement;
        fireEvent.click(input)
        expect(input.checked).toBe(true)
        fireEvent.click(input)
        expect(input.checked).toBe(false)
       
    })
})