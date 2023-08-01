import { Link } from "react-router-dom";
import {Button} from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Checkbox from "../components/Checkbox/Checkbox";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { useState, useContext, useEffect } from "react";
import { CheckBoxContext } from "../context/CheckBoxContext";
import { CardContext } from "../context/CardContext";
import React from 'react';

const AddOns = () => {
    const {addSelectedService}  = useContext(CheckBoxContext);
    const { toggleSelection } = useContext(CardContext);
    const [selectedCheckbox, setSelectedCheckbox] = useState(JSON.parse(localStorage.getItem("selectedCheckbox") || "{}"));

    const handleOnChange = (checkboxData) => {
        const { label, price } = checkboxData;
        const updatedCheckboxState = !selectedCheckbox[label];

        setSelectedCheckbox((prevSelected) => {
            const updatedSelected = { ...prevSelected };
            updatedSelected[label] = updatedCheckboxState;
            return updatedSelected;
        });
        const updatedPrice = toggleSelection === "Yearly" ? price * 12 : price;
        addSelectedService(label, updatedCheckboxState ? updatedPrice : 0, updatedCheckboxState);
    };

    useEffect(() => {
        localStorage.setItem("selectedCheckbox",JSON.stringify(selectedCheckbox))
    },[selectedCheckbox]);

    return (
        <AppLayout>
          <Sidebar currentStep={3} />
          <MainWrapper>
            <HeadingGroup heading="Pick add-ons" ptag="Add-ons help enhance your gaming experience." />
            <div id="form" className="form-class">
                <div className="checkbox-group">
                    <Checkbox
                        id={1} 
                        label="Online Service" 
                        text="Access to multiplayer games" 
                        price={toggleSelection === "Yearly" ? `+$${12}/yr` : `+$${1}/mo`}
                        onChange={() => handleOnChange({label: "Online Service" , price:1 })}
                        selectedCheckbox={selectedCheckbox}
                        isChecked={selectedCheckbox["Online Service"]} />
                    <Checkbox
                        id={2} 
                        label="Larger Storage" 
                        text="Extra 1TB of cloud save" 
                        price={toggleSelection === "Yearly" ? `+$${24}/yr` : `+$${2}/mo`}
                        onChange={() => handleOnChange({label: "Larger Storage" , price:2 })}
                        selectedCheckbox={selectedCheckbox}
                        isChecked={selectedCheckbox["Larger Storage"]} />
                    <Checkbox
                        id={3} 
                        label="Customizable Profile" 
                        text="Custom theme on your profile" 
                        price={toggleSelection === "Yearly" ? `+$${24}/yr` : `+$${2}/mo`}
                        onChange={() => handleOnChange({label: "Customizable Profile" , price:2 })}
                        selectedCheckbox={selectedCheckbox}
                        isChecked={selectedCheckbox["Customizable Profile"]} />
                </div>
                <div className="form-buttons">
                    <Link to="/select-plan"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                    <Link to="/summary"><Button type="submit" className="btn">Next Step</Button></Link>
                </div>
            </div>
          </MainWrapper>
        </AppLayout>
    );
}
export default AddOns;