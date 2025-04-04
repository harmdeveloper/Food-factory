/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Rolls.css';

const Rolls = () => {
    // Initialize ratings for each roll from localStorage
    const getInitialRatings = () => {
        const savedRatings = localStorage.getItem('rollsRatings');
        return savedRatings ? JSON.parse(savedRatings) : {
            lasagna: 0,
            periPeri: 0,
            chicken: 0,
            veg: 0,
        };
    };

    const [ratings, setRatings] = useState(getInitialRatings); // State for storing the ratings

    // Save ratings to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('rollsRatings', JSON.stringify(ratings));
    }, [ratings]);

    const handleRatingClick = (roll, value) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [roll]: value, // Set the rating for the specific roll
        }));
    };

    return (
        <div className="recipe-container">
            <video className="rv-1" controls muted autoPlay loop>
                <source src="https://videos.pexels.com/video-files/8902005/8902005-sd_640_360_25fps.mp4" type="video/mp4" />
            </video>

            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Rolls</h1>

            {/* Lasagna Rolls */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687269898food_5.png" alt="Lasagna Rolls" />
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
                        In a large bowl, combine the diced cucumbers, chopped tomatoes, sliced red onion, and bell pepper (if using).
                        Add the crumbled feta cheese and Kalamata olives.
                        Drizzle with olive oil and lemon juice, then sprinkle with oregano.
                        Toss gently to combine and serve immediately.
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Lasagna Rolls"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.lasagna ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('lasagna', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.lasagna} / 5  ⭐40k+</p>
                </div>
            </div>

            {/* Peri Peri Rolls */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687312259food_6.png" alt="Peri Peri Rolls" />
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
                        In a large bowl, combine all the chopped vegetables and chickpeas.
                        In a separate small bowl, whisk together the olive oil, lemon juice, salt, pepper, and any additional seasonings you prefer.
                        Pour the dressing over the salad and toss gently to combine.
                        Serve immediately, garnished with feta cheese and fresh herbs if desired.
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Peri Peri Rolls"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.periPeri ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('periPeri', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.periPeri} / 5  ⭐40k+</p>
                </div>
            </div>

            {/* Chicken Rolls */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687339357food_7.png" alt="Chicken Rolls" />
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
                        In a large bowl, combine the diced cucumbers, chopped tomatoes, sliced red onion, and bell pepper (if using).
                        Add the crumbled feta cheese and Kalamata olives.
                        Drizzle with olive oil and lemon juice, then sprinkle with oregano.
                        Toss gently to combine and serve immediately.
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Chicken Rolls"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.chicken ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('chicken', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.chicken} / 5  ⭐40k+</p>
                </div>
            </div>

            {/* Veg Rolls */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687368503food_8.png" alt="Veg Rolls" />
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
                        In a large bowl, combine the diced cucumbers, chopped tomatoes, sliced red onion, and bell pepper (if using).
                        Add the crumbled feta cheese and Kalamata olives.
                        Drizzle with olive oil and lemon juice, then sprinkle with oregano.
                        Toss gently to combine and serve immediately.
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Veg Rolls"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.veg ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('veg', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.veg} / 5 ⭐40k+</p>
                </div>
            </div>
        </div>
    );
}

export default Rolls;
