/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Salad.css';

const Salad = () => {
  // Initialize ratings from localStorage or default to zero for each salad
  const initialRatings = JSON.parse(localStorage.getItem('saladRatings')) || { greek: 0, veg: 0, clover: 0, chicken: 0 };
  const [ratings, setRatings] = useState(initialRatings);

  // Save ratings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('saladRatings', JSON.stringify(ratings));
  }, [ratings]);

  // Handle rating click for a specific salad
  const handleRatingClick = (saladName, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [saladName]: value }));
  };

  return (
    <div className="recipe-container">
      <video className="rv-1" controls muted autoPlay loop>
        <source src="https://videos.pexels.com/video-files/3196094/3196094-sd_640_360_25fps.mp4" type="video/mp4" />
      </video>

      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Our Salads</h1>

      {/* Greek Salad */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726681404437food_1.png" alt="Greek Salad" />
        <div>
          <h3 className="ing-name">Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className="ing-name">Instructions:</h3>
          <p>
            Combine diced cucumbers, tomatoes, red onion, and bell pepper. Add feta cheese and olives.
            Drizzle with olive oil, lemon juice, and oregano. Toss and serve immediately.
          </p>
        </div>
        <div className="feedback1">
          <h3 className="resp-name">
            <b>"Greek salad"</b>
          </h3>
          <h3 className="ing-name">Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.greek ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('greek', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.greek} / 5  ⭐40k+</p>
        </div>
      </div>

      {/* Veg Salad */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726681443965food_2.png" alt="Veg Salad" />
        <div>
          <h3 className="ing-name">Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className="ing-name">Instructions:</h3>
          <p>
            Combine all vegetables and chickpeas. Whisk together olive oil, lemon juice, salt, and pepper.
            Pour dressing, toss, and serve with feta cheese and herbs.
          </p>
        </div>
        <div className="feedback">
          <h3 className="resp-name">
            <b>"Veg salad"</b>
          </h3>
          <h3 className="ing-name">Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.veg ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('veg', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.veg} / 5  ⭐80k+</p>
        </div>
      </div>

      {/* Clover Salad */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726687132272food_3.png" alt="Clover Salad" />
        <div>
          <h3 className="ing-name">Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className="ing-name">Instructions:</h3>
          <p>
            Combine diced cucumbers, tomatoes, red onion, and bell pepper. Add feta cheese and olives.
            Drizzle with olive oil, lemon juice, and oregano. Toss and serve immediately.
          </p>
        </div>
        <div className="feedback">
          <h3 className="resp-name">
            <b>"Clover Salad"</b>
          </h3>
          <h3 className="ing-name">Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.clover ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('clover', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.clover} / 5  ⭐1k+</p>
        </div>
      </div>

      {/* Chicken Salad */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726687217146food_4.png" alt="Chicken Salad" />
        <div>
          <h3 className="ing-name">Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className="ing-name">Instructions:</h3>
          <p>
            Combine diced cucumbers, tomatoes, red onion, and bell pepper. Add feta cheese and olives.
            Drizzle with olive oil, lemon juice, and oregano. Toss and serve immediately.
          </p>
        </div>
        <div className="feedback">
          <h3 className="resp-name">
            <b>"Chicken Salad"</b>
          </h3>
          <h3 className="ing-name">Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.chicken ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('chicken', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.chicken} / 5 ⭐4k+</p>
        </div>
      </div>
    </div>
  );
};

export default Salad;
