import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch && location.pathname === "/products") {
      onSearch(value); // live search only on ProductList
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && location.pathname === "/products") {
      onSearch(query); // direct search on ProductList
    } else {
      // redirect to ProductList with query param
      navigate(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
