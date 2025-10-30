import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/featureProducts.css";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Shebah",
      description: "premium meals with rich, savory flavors.",
      price: "₱10.99",
      image: require("../assets/Oinkies.png"),
    },
    {
      name: "Kit Cat",
      description: "balanced nutrition for playful, growing cats.",
      price: "₱10.99",
      image: require("../assets/KitCat.png"),
    },
    {
      name: "Royal Canin",
      description: "specialized diets tailored for cats’ health needs.",
      price: "₱10.99",
      image: require("../assets/RoyalCanin.png"),
    },
  ];

  const handleViewMore = () => {
    navigate("/products"); // redirects to your ProductList page
  };

  return (
    <section className="featured-products">
      <div className="horizontal-scroll">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h4>{product.name}</h4>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button className="view-more-btn" onClick={handleViewMore}>
          View More Products
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
