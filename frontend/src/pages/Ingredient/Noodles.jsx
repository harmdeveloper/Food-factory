/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Noodles.css';

const Noodles = () => {
    // Initialize ratings state for multiple noodle dishes
    const [ratings, setRatings] = useState({
        butterNoodles: 0,
        vegNoodles: 0,
        somenNoodles: 0,
        cookedNoodles: 0,
    });

    // Load ratings from localStorage on component mount
    useEffect(() => {
        const savedRatings = localStorage.getItem('ratings');
        if (savedRatings) {
            setRatings(JSON.parse(savedRatings));
        }
    }, []);

    // Save ratings to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('ratings', JSON.stringify(ratings));
    }, [ratings]);

    const handleRatingClick = (dish, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [dish]: value, // Set the rating for the specific dish
        }));
    };

    return (
        <div className="recipe-container">
            <video className="rv-1" controls muted autoPlay loop>
                <source src="https://videos.pexels.com/video-files/4224218/4224218-sd_640_360_25fps.mp4" type="video/mp4" />
            </video>
            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Noodles</h1>

            {/* Butter Noodles Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688870168food_29.png" alt="food-1" />
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
                    <h3 className='resp-name'> <b>"Butter Noodles"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.butterNoodles ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('butterNoodles', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.butterNoodles} / 5 ⭐70k+</p>
                </div>
            </div>

            {/* Veg Noodles Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726689002026food_30.png" alt="food-1" />
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
                    <h3 className='resp-name'> <b>"Veg Noodles"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.vegNoodles ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('vegNoodles', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.vegNoodles} / 5  ⭐90k+</p>
                </div>
            </div>

            {/* Somen Noodles Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726689116848food_31.png" alt="food-1" />
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
                    <h3 className='resp-name'> <b>"Somen Noodles"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.somenNoodles ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('somenNoodles', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.somenNoodles} / 5 ⭐400k+</p>
                </div>
            </div>

            {/* Cooked Noodles Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726689307643food_32.png" alt="food-1" />
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
                    <h3 className='resp-name'> <b>"Cooked Noodles"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.cookedNoodles ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('cookedNoodles', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.cookedNoodles} / 5  ⭐85k+</p>
                </div>
            </div>
        </div>
    );
}

export default Noodles;
