import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/buttons.css";

const Buttons = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products"); 
  };

  return (
    <button className="shop-button" onClick={handleClick}>
      Shop Now
    </button>
  );
};

export default Buttons;
