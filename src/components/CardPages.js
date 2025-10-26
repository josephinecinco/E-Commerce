import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/CardPage.css';
import { useNavigate } from "react-router-dom";

function CardPage({ products }) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      {products.map((eachCard) => {
        let cardImage;
        try {
          cardImage = require(`../assets/${eachCard.img}`);
        } catch (err) {
          console.warn(`Image not found: ${eachCard.img}`);
          cardImage = "";
        }

        return (
          <Card key={eachCard.id} className="card-item">
            <Card.Img
              variant="top"
              src={cardImage}
              alt={eachCard.name}
              className="card-image"
            />
            <Card.Body>
              <Card.Title>{eachCard.name}</Card.Title>
              <Card.Text>
                Category: {eachCard.category} <br />
                Price: ₱{eachCard.price} <br />
                Stock: {eachCard.stock}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/products/${eachCard.id}`)}
              >
                Info
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CardPage;
