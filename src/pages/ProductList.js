import React, { useState } from "react";
import CardPage from "../components/CardPages";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import productsData from "../data/ItemList.json"; // your JSON file

const ProductList = () => {
  const [products, setProducts] = useState(productsData);

  const handleSearch = (query) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className="product-list-page">
      <SearchBar onSearch={handleSearch} />
      <CardPage products={products} />
      <Footer />
    </div>
  );
};

export default ProductList;
