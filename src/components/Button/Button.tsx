import { ReactNode } from 'react';
import React from 'react'
import './Button.css';

export type ButtonType = "button" | "submit" | "reset" 
export interface ButtonProps {
    type: ButtonType,
    className: string,
    children?: ReactNode
}
export const Button = ({type,className,children}: ButtonProps) => {
    return(
        <button type={type} className={className} data-testid='button'>
            {children}
        </button>
    );
}

