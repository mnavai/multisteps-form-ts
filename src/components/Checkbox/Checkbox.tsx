import React from 'react';
import './Checkbox.css';

export type SelectedCheckbox = { id: number, label: string, price: number }
export interface CheckboxProps {
    label: string,
    text: string,
    price: number,
    onChange: () => void,
    id: number,
    selectedCheckbox: SelectedCheckbox,
    isChecked: boolean
}
const Checkbox = ({label,text,price,onChange,id,selectedCheckbox,isChecked}) => {

    const chosenChekbox = selectedCheckbox && selectedCheckbox.id === id;

    return(
        <div className={`checkbox-container ${chosenChekbox ? "selected" : ""}`} data-checkboxid={id} >
            <div className="checkbox" >
                <input type="checkbox" id={id} className="checkbox-class" onChange={onChange} checked={isChecked} data-testid="checkbox"/>
            </div>
            <div className="text-wrapper">
                <h5 className="checkbox-label" data-testid="label">{label}</h5>
                <p className="checkbox-p" data-testid="text">{text}</p>
            </div>
            <div className="price-wrapper">
                <p className="price-tag-p" data-testid="price">{price}</p>
            </div>
        </div>
    );
}
export default Checkbox; 