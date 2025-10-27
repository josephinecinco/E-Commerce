import React, { useState } from "react";
import "../styles/reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      quote: "A terrific piece of praise",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A fantastic bit of feedback",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A genuinely glowing review",
      name: "Name",
      description: "Description",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    quote: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ quote: "", name: "", description: ""});
    setShowForm(false);
  };

  return (
    <div className="reviews-section">
      <h2>Furr Parents Reviews</h2>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="quote">“{review.quote}”</p>
            <div className="reviewer">
              <div>
                <p className="name">{review.name}</p>
                <p className="desc">{review.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="review-btn" onClick={() => setShowForm(true)}>
        Write a Review
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="quote"
                placeholder="Your review"
                value={newReview.quote}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={newReview.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Short description"
                value={newReview.description}
                onChange={handleChange}
              />
             
              <button type="submit">Submit</button>
              <button
                type="button"
                className="cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
