import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemList from "../data/ItemList.json";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetails.css";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const ProductDetails = () => {
   <SearchBar></SearchBar>
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = ItemList.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false); // new state

  if (!product) return <p>Product not found.</p>;

  let productImage;
  try {
    productImage = require(`../assets/${product.img}`);
  } catch {
    productImage = "";
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowNotification(true); // show notification
    setTimeout(() => setShowNotification(false), 2000); // hide after 2s
  };

  const handleBuyNow = () => {
    alert(`Buying ${quantity} of ${product.name}`);
  };

  const relatedProducts = ItemList.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, 4);

  return (
    <div className="page-wrapper">
      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={productImage} alt={product.name} className="product-image" />
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h2 className="product-name">{product.name}</h2>
          <hr />
          <p className="product-description">
            {product.description || "No description available."}
          </p>
          <p className="product-price">₱{product.price.toFixed(2)}</p>

          <div className="quantity-container">
            <span>Quantity:</span>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="add-cart" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>

          <Link to="/products" className="back-link">← Back</Link>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <h3>Related Products</h3>
          <div className="related-products-grid">
            {relatedProducts.map((item) => {
              let imgSrc;
              try {
                imgSrc = require(`../assets/${item.img}`);
              } catch {
                imgSrc = "";
              }

              return (
                <div key={item.id} className="related-card">
                  <img src={imgSrc} alt={item.name} />
                  <p className="related-name">{item.name}</p>
                  <p className="related-price">₱{item.price}</p>
                  <Link to={`/products/${item.id}`} className="info-btn">
                    View Details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {showNotification && (
        <div className="notification-toast">
          {product.name} added to cart!
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
