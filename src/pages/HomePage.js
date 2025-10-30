import React from "react";
import "../styles/homepage.css";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import DogHomePage from '../components/DogHomePage';
import CatHomePage from '../components/CatHomePage';
import FeatureProducts from '../components/FeatureProducts';
import Reviews from '../components/Reviews'; 

const HomePage = () => {
  return (
    <>
    <SearchBar></SearchBar>
    <Banner></Banner>
    <DogHomePage></DogHomePage>
    <CatHomePage></CatHomePage>
    <FeatureProducts></FeatureProducts>
    <Reviews></Reviews>
    <Footer />
    </>
  );
};

export default HomePage;
