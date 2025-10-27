import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/checkout.css";
import SearchBar from "../components/SearchBar";

const Checkout = () => {
   <SearchBar></SearchBar>
  const { cart, removeFromCart } = useCart();

  const SHIPPING_FEE = 40;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + SHIPPING_FEE;

  // Form states
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    city: "",
    address: "",
    zip: "",
  });

  const [deliveryMethod, setDeliveryMethod] = useState("Standard Shipping (2-3 days)");

  const [submitted, setSubmitted] = useState(false);

  // Notification state
  const [showNotification, setShowNotification] = useState(false);

  // Form handlers
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleSubmitInfo = () => {
    setSubmitted(true);
    alert("Personal, Shipping & Delivery info submitted!");
  };

  const handleCheckout = () => {
    setShowNotification(true);
    // Hide after 3 seconds
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        {/* Left Side */}
        <div className="checkout-left">
          {/* Personal Info */}
          <section>
            <h2>Personal Information</h2>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handlePersonalChange}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handlePersonalChange}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={personalInfo.email}
              onChange={handlePersonalChange}
            />
            <input
              type="text"
              placeholder="Contact Number"
              name="contact"
              value={personalInfo.contact}
              onChange={handlePersonalChange}
            />
          </section>

          {/* Shipping Info */}
          <section>
            <h2>Shipping Information</h2>
            <input
              type="text"
              placeholder="*Country / Region"
              name="country"
              value={shippingInfo.country}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              placeholder="*City"
              name="city"
              value={shippingInfo.city}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              placeholder="*Address"
              name="address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              placeholder="*Zip / Postal Code"
              name="zip"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
            />
          </section>

          {/* Delivery & Payment */}
          <div className="checkout-section">
            <section>
              <h2>Delivery</h2>
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="Standard Shipping (2-3 days)"
                  checked={deliveryMethod === "Standard Shipping (2-3 days)"}
                  onChange={handleDeliveryChange}
                />
                Standard Shipping (2-3 days)
              </label>
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="Express Shipping (2-3 days)"
                  checked={deliveryMethod === "Express Shipping (2-3 days)"}
                  onChange={handleDeliveryChange}
                />
                Express Shipping (2-3 days)
              </label>
            </section>

            <section>
              <h2>Payment Method</h2>
              <label>
                <input type="radio" name="payment" defaultChecked />
                Cash On Delivery
              </label>
              <label>
                <input type="radio" name="payment" />
                Bank Transfer
              </label>
              <label>
                <input type="radio" name="payment" />
                Card
              </label>
            </section>
          </div>

          {/* Submit Button for Info */}
          <div className="submit-info-btn">
            <button onClick={handleSubmitInfo}>Submit Info</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="checkout-right">
          <h2>Your Purchases</h2>
          {cart.map((item) => {
            let imgSrc;
            try {
              imgSrc = require(`../assets/${item.img}`);
            } catch {
              imgSrc = "https://via.placeholder.com/50";
            }
            return (
              <div key={item.id} className="checkout-item">
                <img src={imgSrc} alt={item.name} />
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-quantity">Qty: {item.quantity}</p>
                  <p className="item-price">₱{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-item">
                  ✖
                </button>
              </div>
            );
          })}

          {/* Order Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>
              <span>Merchandise Subtotal:</span>
              <span>₱{subtotal.toFixed(2)}</span>
            </p>
            <p>
              <span>Shipping Fee:</span>
              <span>₱{SHIPPING_FEE.toFixed(2)}</span>
            </p>
            <p className="total">
              <span>Total Payment:</span>
              <span>₱{total.toFixed(2)}</span>
            </p>
          </div>

          {/* Personal & Shipping Summary */}
          {submitted && (
            <div className="summary-details">
              <h3>Customer & Shipping Details</h3>
              <p>
                <strong>Name:</strong> {personalInfo.firstName} {personalInfo.lastName}
              </p>
              <p>
                <strong>Email:</strong> {personalInfo.email}
              </p>
              <p>
                <strong>Contact:</strong> {personalInfo.contact}
              </p>
              <p>
                <strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city},{" "}
                {shippingInfo.country}, {shippingInfo.zip}
              </p>
              <p>
                <strong>Delivery Method:</strong> {deliveryMethod}
              </p>
            </div>
          )}

          {/* Checkout Button */}
          <div className="checkout-button-container">
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {showNotification && (
        <div className="notification-popup">
          Please wait for your order. Thank you so much for your order! 🐾
        </div>
      )}
    </div>
  );
};

export default Checkout;
