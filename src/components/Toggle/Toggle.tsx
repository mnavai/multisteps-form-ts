import { useState, useContext, useEffect } from "react"
import { CardContext } from "../../context/CardContext";
import "./Toggle.css";
import React from "react";

export type ToggleState = boolean 
export interface ToggleProps {
    monthly: string,
    yearly: string
}
const Toggle = ({monthly,yearly}: ToggleProps) => {
    const [toggleState,setToggleState] = useState<ToggleState>(() => {
        const storedData = localStorage ? localStorage.getItem("toggleState") : null;
        return storedData ? JSON.parse(storedData) : false;
    }); //the getter should go into useState to avoid reinitialization on re-rendering page
    const {setToggleSelection} = useContext(CardContext);
  
      const handleToggle = () => {
        setToggleState(!toggleState);
        let toggleStatus:string = monthly;
        if (toggleState === false){
            toggleStatus = yearly;
        }
        else {
            toggleStatus = monthly;
        }
        setToggleSelection(toggleStatus);
    }
    
    useEffect(() => {
        localStorage && localStorage.setItem("toggleState", JSON.stringify(toggleState));
    }, [toggleState]);

    return(
        <div className="grey-bar">
            <h5 className="grey-bar-month">{monthly}</h5>
            <label className="switch" >
                <input type="checkbox" onChange={handleToggle} checked={toggleState} data-testid="toggle"/>
                <span className="slider round"></span>
            </label>
            <p className="grey-bar-year">{yearly}</p>
        </div>
    );
}
export default Toggle;