/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './Pure.css';

const Pure = () => {
    // State for storing ratings for each dish
    const [ratings, setRatings] = useState({
        garlicMushroom: 0,
        friedCauliflower: 0,
        mixVegPulao: 0,
        riceZucchini: 0,
    });

    // Load ratings from localStorage on component mount
    useEffect(() => {
        const savedRatings = localStorage.getItem('ratings');
        if (savedRatings) {
            setRatings(JSON.parse(savedRatings));
        }
    }, []);

    // Save ratings to localStorage whenever the ratings state changes
    useEffect(() => {
        localStorage.setItem('ratings', JSON.stringify(ratings));
    }, [ratings]);

    const handleRatingClick = (dish, value) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [dish]: value, // Update the specific dish's rating
        }));
    };

    return (
        <div className="recipe-container">
            <video className="rv-1" controls muted autoPlay loop>
                <source src="https://videos.pexels.com/video-files/3196177/3196177-sd_640_360_25fps.mp4" type="video/mp4" />
            </video>
            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Pure Veges</h1>
            
            {/* Garlic Mushroom */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688379553food_21.png" alt="food-1" />
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
                    <h3 className='resp-name'><b>"Garlic Mushroom"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.garlicMushroom ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('garlicMushroom', starValue)}
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.garlicMushroom} / 5  ⭐70k+</p>
                </div>
            </div>

            {/* Fried Cauliflower */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688452578food_22.png" alt="food-1" />
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
                    <h3 className='resp-name'><b>"Fried Cauliflower"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.friedCauliflower ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('friedCauliflower', starValue)}
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.friedCauliflower} / 5  ⭐90k+</p>
                </div>
            </div>

            {/* Mix Veg Pulao */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688490485food_23.png" alt="food-1" />
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
                    <h3 className='resp-name'><b>"Mix Veg Pulao"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.mixVegPulao ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('mixVegPulao', starValue)}
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.mixVegPulao} / 5  ⭐4k+</p>
                </div>
            </div>

            {/* Rice Zucchini */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688544213food_24.png" alt="food-1" />
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
                    <h3 className='resp-name'><b>"Rice Zucchini"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.riceZucchini ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('riceZucchini', starValue)}
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.riceZucchini} / 5  ⭐1k+</p>
                </div>
            </div>
        </div>
    );
};

export default Pure;
