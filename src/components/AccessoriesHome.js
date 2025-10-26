import React from "react";
import "../styles/accessoriesHome.css"; 
import AccessoriesImg from "../assets/AccessoriesHome.png"; 

const AccessoriesHome = () => {
  return (
    <div className="AccessoriesSection">
      <div className="Accessories-content">
        <h1>Accessories</h1>
        <p>
          Add a touch of charm and comfort to your pet’s <br/>
          daily life with Pawshoppe accessories. From chic <br/>
          collars and playful bandanas to cozy harnesses and <br/>
          feeding essentials, every piece is designed for style, <br/>
          safety, and wag-worthy confidence.
        </p>
      </div>
      <img src={AccessoriesImg} alt="Accessories" className="AccessoriesHomePage-AccessoriesPhoto" />
    </div>
  );
};

export default AccessoriesHome;
