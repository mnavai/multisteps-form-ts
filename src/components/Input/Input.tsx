import React from "react";
import "./Input.css";

export type InputType =  "text" | "tel" | "email"
export interface InputProps {
  id: string,
  labelName: string,
  type: InputType,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  error: string
}
const Input = ({ id, labelName, type, placeholder, onChange, value, error }: InputProps) => {
  const hasError = value === "" && error !== "";

  return (
    <div className="field-group">
      <div className="labels-container">
        <label className="form-label" htmlFor={id} data-testid="label">
          {labelName}
        </label>
        {hasError && <label className="error-text" data-testid="error">{error}</label>}
      </div>
      <input
        name={id}
        type={type}
        id={id}
        className={hasError ? "form-input-error" : "form-input"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        data-testid="input"
      />
    </div>
  );
};

export default Input;
