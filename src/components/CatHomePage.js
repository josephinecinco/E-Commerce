import React from "react";
import "../styles/cathomepage.css"; 
import CatHome from "../assets/CatHome.png"; 

const CatHomePage = () => {
  return (
    <div className="CatSection">
       <img src={CatHome} alt="Catphoto" className="CatHomePage-CatPhoto" />
      <div className="Cat-content">
        <h1>For Cats</h1>
        <p>
          Spoil your feline royalty with Pawshoppe’s collection <br/>
          of cat essentials. From irresistibly soft beds and <br/>
          tasty treats to scratchers that save your furniture <br/>
          and toys that keep them curious, every product is made <br/>
          to match their nine lives of comfort and play.<br/>
        </p>
      </div>
     
    </div>
  );
};

export default CatHomePage;
