import React from 'react';
import './SidebarLink.css';

export interface SidebarLinkProps {
    step: number,
    text: string,
    currentStep: number
}
const SidebarLink = ({step, text, currentStep}: SidebarLinkProps) => {
    const isActive = step === currentStep;
    return(
            <li className="list-items" data-testid="sidebarlink">
                <div className={`circle-icon ${isActive ? 'active' : ''}`}>
                    <span>
                        {step}
                    </span>   
                </div>
                <div className="list-item-info">
                    <h5 className="nav-heading">STEP {step}</h5>
                    <p className="nav-p">{text}</p>
                </div>
            </li>
    );
}
export default SidebarLink;