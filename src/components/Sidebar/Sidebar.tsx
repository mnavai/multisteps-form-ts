import React from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import "./Sidebar.css";

export interface CurrentStep { currentStep : number }
const Sidebar = ({ currentStep }: CurrentStep) => {
    return(
        <header className="nav-header" data-testid="sidebar-test">
            <nav className="side-nav">
                <ul>
                    <SidebarLink  step={1} text="YOUR INFO" currentStep={currentStep} />
                    <SidebarLink  step={2} text="SELECT PLAN" currentStep={currentStep} />
                    <SidebarLink  step={3} text="ADD-ONS" currentStep={currentStep} />
                    <SidebarLink  step={4} text="SUMMARY" currentStep={currentStep} />
                </ul>
            </nav>
        </header>
    );
}
export default Sidebar;