import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import "./styles/banner.css";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout"; 


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/checkout" element={<Checkout />} />
              
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
