/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Pasta.css';

const Pasta = () => {
    const [ratings, setRatings] = useState({
        cheesePasta: 0,
        tomatoPasta: 0,
        creamyPasta: 0,
        chickenPasta: 0,
    }); // State for storing ratings for each dish

    useEffect(() => {
        // Load saved ratings from localStorage when the component mounts
        const savedRatings = JSON.parse(localStorage.getItem('ratings'));
        if (savedRatings) {
            setRatings(savedRatings);
        }
    }, []);

    useEffect(() => {
        // Save ratings to localStorage whenever they change
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
                <source src="https://videos.pexels.com/video-files/4199499/4199499-sd_640_360_30fps.mp4" type="video/mp4" />
            </video>

            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Pasta</h1>

            {/* Cheese Pasta Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688663763food_25.png" alt="Cheese Pasta" />
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
                    <h3 className='resp-name'> <b>"Cheese Pasta"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.cheesePasta ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('cheesePasta', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.cheesePasta} / 5  ⭐40k+</p>
                </div>
            </div>

            {/* Tomato Pasta Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688689914food_26.png" alt="Tomato Pasta" />
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
                    <h3 className='resp-name'> <b>"Tomato Pasta"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.tomatoPasta ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('tomatoPasta', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.tomatoPasta} / 5  ⭐47k+</p>
                </div>
            </div>

            {/* Creamy Pasta Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688778478food_27.png" alt="Creamy Pasta" />
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
                    <h3 className='resp-name'> <b>"Creamy Pasta"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.creamyPasta ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('creamyPasta', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.creamyPasta} / 5   ⭐4k+</p>
                </div>
            </div>

            {/* Chicken Pasta Section */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688830414food_28.png" alt="Chicken Pasta" />
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
                    <h3 className='resp-name'> <b>"Chicken Pasta"</b> </h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.chickenPasta ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('chickenPasta', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.chickenPasta} / 5   ⭐7k+</p>
                </div>
            </div>
        </div>
    );
};

export default Pasta;
