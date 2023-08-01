import Input from "../Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "../Button/Button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Button/Button.css";
import "../Form/Form.css";
import React from "react";

const getForm = process.env.REACT_APP_GET_FORM_KEY;
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted,setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateForm = () => {
      return name === "" || email === "" || phone === "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  
    if (validateForm()) {
      toast.error("You need to fill all required fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Form submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setName("");
      setEmail("");
      setPhone("");
      navigate("/select-plan");
    }
  };
  return (
    <form id="form" className="form-group" onSubmit={handleSubmit} action={`https://getform.io/f/${getForm}`} method="POST" data-testid="form">
      <Input
        labelName="Name"
        id="name"
        placeholder="e.g. Stephen King"
        type="text"
        onChange={handleNameChange}
        value={name}
        error={!name && submitted ? "This field is required" : ""}
      />
      <Input
        labelName="Email Address"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        onChange={handleEmailChange}
        value={email}
        error={!email && submitted ? "This field is required" : ""}
      />
      <Input
        labelName="Phone"
        id="phone"
        placeholder="e.g. +1 999-999-9999"
        type="tel"
        onChange={handlePhoneChange}
        value={phone}
        error={!phone && submitted ? "This field is required" : ""}
      />
      <div className="single-btn">
        <Button type="submit" className="btn">
          Next Step
        </Button>
      </div>
    </form>
  );
};
export default Form;