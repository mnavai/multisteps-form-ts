import React from 'react';
import { ReactNode } from 'react';
import './MainWrapper.css';

export interface MainwrapperProps { children: ReactNode } 
const MainWrapper = ({children}: MainwrapperProps) => {
    return(
        <main className="main-section" data-testid="main-section">
            {children}
        </main>
    );
}
export default MainWrapper;