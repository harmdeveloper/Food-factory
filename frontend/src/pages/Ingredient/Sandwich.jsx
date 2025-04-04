/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "./Sandwich.css";

const Sandwich = () => {
  // Load saved ratings from localStorage or set default ratings
  const getInitialRatings = () => {
    const savedRatings = localStorage.getItem('sandwichRatings');
    return savedRatings ? JSON.parse(savedRatings) : {
      chicken: 0,
      vegan: 0,
      grilled: 0,
      bread: 0,
    };
  };

  // State for storing the rating for each sandwich
  const [ratings, setRatings] = useState(getInitialRatings);

  // Save ratings to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('sandwichRatings', JSON.stringify(ratings));
  }, [ratings]);

  // Handle rating click for each sandwich
  const handleRatingClick = (sandwich, value) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [sandwich]: value // Update the rating for the specific sandwich
    }));
  };

  return (
    <div className="recipe-container">
      <video className="rv-1" controls muted autoPlay loop>
        <source src="https://videos.pexels.com/video-files/3044155/3044155-sd_640_360_25fps.mp4" type="video/mp4" />
      </video>

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Sandwiches</h1>

      {/* Chicken Sandwich */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726687737989food_13.png" alt="Chicken Sandwich" />
        <div>
          <h3 className='ing-name'>Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className='ing-name'>Instructions:</h3>
          <p>
            Combine the cucumbers, tomatoes, red onion, and bell pepper.
            Add feta cheese, Kalamata olives, olive oil, lemon juice, and oregano.
            Toss gently and serve.
          </p>
        </div>
        <div className="feedback1">
          <h3 className='resp-name'><b>"Chicken Sandwich"</b></h3>
          <h3 className='ing-name'>Feedback:</h3>
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
          <p>Your Rating: {ratings.chicken} / 5 ⭐30k+</p>
        </div>
      </div>

      {/* Vegan Sandwich */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726687771716food_14.png" alt="Vegan Sandwich" />
        <div>
          <h3 className='ing-name'>Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className='ing-name'>Instructions:</h3>
          <p>
            Combine the chopped vegetables and chickpeas.
            Whisk olive oil, lemon juice, salt, pepper, and pour over the salad.
            Toss and serve with feta cheese and herbs.
          </p>
        </div>
        <div className="feedback1">
          <h3 className='resp-name'><b>"Vegan Sandwich"</b></h3>
          <h3 className='ing-name'>Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.vegan ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('vegan', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.vegan} / 5 ⭐50k+</p>
        </div>
      </div>

      {/* Grilled Sandwich */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726687805129food_15.png" alt="Grilled Sandwich" />
        <div>
          <h3 className='ing-name'>Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className='ing-name'>Instructions:</h3>
          <p>
            Combine all ingredients, drizzle with olive oil, lemon juice, and oregano.
            Toss gently and serve immediately.
          </p>
        </div>
        <div className="feedback1">
          <h3 className='resp-name'><b>"Grilled Sandwich"</b></h3>
          <h3 className='ing-name'>Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.grilled ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('grilled', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.grilled} / 5 ⭐40k+</p>
        </div>
      </div>

      {/* Bread Sandwich */}
      <div className="r-1">
        <img src="http://localhost:4000/images/1726687838397food_16.png" alt="Bread Sandwich" />
        <div>
          <h3 className='ing-name'>Ingredients:</h3>
          <ul className="ingredients-list">
            <li>Cucumbers (1 large, diced)</li>
            <li>Tomatoes (2 large, chopped)</li>
            <li>Red Onion (1 small, thinly sliced)</li>
            <li>Feta Cheese (200g, crumbled)</li>
            <li>Kalamata Olives (1/2 cup)</li>
          </ul>
        </div>
        <div className="instruction">
          <h3 className='ing-name'>Instructions:</h3>
          <p>
            Combine cucumbers, tomatoes, and onion, and toss with olive oil and oregano.
            Serve immediately with feta cheese.
          </p>
        </div>
        <div className="feedback1">
          <h3 className='resp-name'><b>"Bread Sandwich"</b></h3>
          <h3 className='ing-name'>Feedback:</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <span
                  key={i}
                  className={`star ${starValue <= ratings.bread ? 'filled' : ''}`}
                  onClick={() => handleRatingClick('bread', starValue)}
                  role="button"
                  aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                >
                  ☆
                </span>
              );
            })}
          </div>
          <p>Your Rating: {ratings.bread} / 5  ⭐450k+</p>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;
