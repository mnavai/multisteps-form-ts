import React, { ReactNode } from 'react';
import './Button.css';

export type ButtonType = "button" | "submit" | "reset" 
export interface ButtonProps {
    type: ButtonType,
    className: string,
    children: ReactNode
}
const Button = ({type,className,children}: ButtonProps) => {
    return(
        <button type={type} className={className} data-testid='button'>
            {children}
        </button>
    );
}
export default Button;