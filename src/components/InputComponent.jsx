import React from "react";

const InputComponent = ({ type, placeholder, id, className, value, name }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={className}
        value={value}
        name={name}
      />
    </>
  );
};

export default InputComponent;
