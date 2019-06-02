import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button className="btn btn-primary custom-button" onClick={onClick} type="submit">
      {label}
    </button>
  );
};

export default Button;
