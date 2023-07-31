import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup  from "../components/HeadingGroup/HeadingGroup";
import Form from "../components/Form/Form";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

const YourInfo = () => {
    return(
        <AppLayout>
            <Sidebar currentStep={1} />
            <MainWrapper>
                <HeadingGroup heading="Personal Info" ptag="Please provide your name, email address, and phone number." />
                <div id="form" className="form-class">
                    <Form />
                </div>
                <ToastContainer />
            </MainWrapper>
        </AppLayout>    
    );
}
export default YourInfo;