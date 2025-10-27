import React from "react";
import "../styles/about.css";
import pawImage from "../assets/house-for-pets-dog-and-cat-in-a-kennel-vector.jpg";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const AboutUs = () => {
  return (
    <>
    <SearchBar></SearchBar>
      <div className="about-us">
        <img src={pawImage} alt="PawShoppe" />
        <div>
          <h1>About Us – PawShoppe</h1>
          <p>
            Welcome to <strong>PawShoppe</strong>, where pets are family! We’re passionate about providing
            high-quality products that keep your furry friends happy, healthy, and loved. From nutritious
            food and cozy beds to fun toys and grooming essentials, we have everything to make your pet’s tail wag.
          </p>
          <p>
            At PawShoppe, we believe shopping for your pets should be easy, fun, and trustworthy. Our team carefully
            selects products with care and love, ensuring that every item meets our standards for quality and safety.
          </p>
          <p>
            Whether you have a playful cat, a loyal dog, or any other beloved companion, PawShoppe is here to make
            your pet’s life better—because happy pets mean happy homes!
          </p>
        </div>
      </div>

      <div className="about-table-container">
        <table className="about-table">
          <tbody>
            <tr>
              <td>
                <h2>Our Mission & Vision</h2>
                <p>Our mission is to provide the best products and care for pets, ensuring every pet is happy <br/>
                    and healthy. Our vision is to become the most trusted pet shop that brings joy and comfort <br/>
                    to pets and their owners alike.</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Terms and Conditions</h2>
                <p>By using PawShoppe, you agree to our policies regarding product use, online orders,<br/>
                     and interactions with our store. We are committed to providing quality service and products.</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Refund and Exchange</h2>
                <p>We offer refunds or exchanges for eligible products within 14 days of purchase. Items <br/>
                    must be in their original packaging and condition. Please contact us for assistance with returns.</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Contact Us</h2>
                <p>Have questions or need help? Reach out to us at:</p>
                <p>Email: support@pawshoppe.com</p>
                <p>Phone: +63 912 345 6789</p>
                <p>Address: 123 Pet Street, Pet City, Philippines</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
