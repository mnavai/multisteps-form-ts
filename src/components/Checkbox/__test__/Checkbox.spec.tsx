import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox.js';
import React from 'react';

describe ("Checkbox component",() => {
    
    it("should render Checkbox correctly", () => {
        const selectedCheckbox = {id:1, label: "Online Service" , price:1 }
        const handleOnChange = jest.fn((data) => data)
        render(<Checkbox label={"Online Service"} text={"Access to multiplayer games"} price={1} onChange={() => handleOnChange(selectedCheckbox)} id={1} selectedCheckbox={selectedCheckbox} isChecked={undefined}></Checkbox>)
        const checkbox = screen.getByTestId('checkbox') as HTMLInputElement; // Use type assertion here
        expect(checkbox).toBeInTheDocument()
    })
    it("should render props correctly", () => {
        // {label,text,price,onChange,id,selectedCheckbox,isChecked}
        const selectedCheckbox = {id:1, label: "Online Service" , price:1 }
        const handleOnChange = jest.fn((data) => data)
        
        const {rerender} = render(<Checkbox label={selectedCheckbox.label} text="Access to multiplayer games" price={selectedCheckbox.price} onChange={() => handleOnChange(selectedCheckbox)} id={selectedCheckbox.id} selectedCheckbox={selectedCheckbox} isChecked={true}></Checkbox>)
        const label = screen.getByTestId("label")
        expect(label.innerHTML).toEqual("Online Service")
        const text = screen.getByTestId("text")
        expect(text.innerHTML).toEqual("Access to multiplayer games")
        const price = screen.getByTestId("price")
        expect(price.innerHTML).toEqual("1")
        const checkbox = screen.getByTestId('checkbox') as HTMLInputElement; // Use type assertion here
        fireEvent.click(checkbox)
        expect(checkbox?.checked).toBe(true)
        rerender(<Checkbox label={selectedCheckbox.label} text="Access to multiplayer games" price={selectedCheckbox.price} onChange={() => handleOnChange(selectedCheckbox)} id={selectedCheckbox.id} selectedCheckbox={selectedCheckbox} isChecked={true}></Checkbox>)
        fireEvent.click(checkbox)
        expect(checkbox?.checked).toBe(false)
        const id = selectedCheckbox.id.toString()
        expect(id).toEqual("1")
    })
})