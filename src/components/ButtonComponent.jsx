import React from "react";

const ButtonComponent = ({ className, onClick, innertext }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {innertext}
      </button>
    </>
  );
};

export default ButtonComponent;
