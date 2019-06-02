import React from "react";

const Input = ({ name, value, onChange, placeholder }) => {
  return (
    <input
      className="default-input"
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
