import React from "react";
import "../styles/doghomepage.css"; 
import DogHome from "../assets/DogHome.png"; 

const DogHomePage = () => {
  return (
    <div className="DogSection">
      <div className="Dog-content">
        <h1>For Dogs</h1>
        <p>
          Because dogs deserve the best kind of happy.<br/>
          Discover Pawshoppe’s premium dog collection <br/>
          nutritious meals, durable toys, stylish collars,<br/> 
          and cozy accessories. Whether they’re couch cuddlers <br/>
          or adventure chasers, we’ve got what keeps tails wagging.<br/>
        </p>
      </div>
      <img src={DogHome} alt="DogPhoto" className="DogHomePage-DogPhoto" />
    </div>
  );
};

export default DogHomePage;
