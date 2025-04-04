/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "./Desert.css";

const Deserts = () => {
    // Initialize ratings state for each dessert
    const [ratings, setRatings] = useState({
        rippleIceCream: 0,
        fruitIceCream: 0,
        jarIceCream: 0,
        vanillaIceCream: 0,
    });

    // Load saved ratings from localStorage
    useEffect(() => {
        const savedRatings = JSON.parse(localStorage.getItem('desertRatings'));
        if (savedRatings) {
            setRatings(savedRatings);
        }
    }, []);

    // Handle rating click for each dessert
    const handleRatingClick = (dessert, value) => {
        const newRatings = { ...ratings, [dessert]: value };
        setRatings(newRatings);
        localStorage.setItem('desertRatings', JSON.stringify(newRatings)); // Save to localStorage
    };

    return (
        <div className="recipe-container">
            <video className="rv-1" controls muted autoPlay loop>
                <source src="https://videos.pexels.com/video-files/5059599/5059599-sd_960_506_30fps.mp4" type="video/mp4" />
            </video>

            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Deserts</h1>

            {/* Ripple Ice Cream */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687403734food_9.png" alt="Ripple Ice Cream" />
                <div>
                    <h3 className='ing-name'>Ingredients:</h3>
                    <ul className="ingredients-list">
                        <li>1 cup whole milk</li>
                        <li>2 cups heavy cream</li>
                        <li>3/4 cup granulated sugar</li>
                        <li>1 tablespoon pure vanilla extract</li>
                        <li>1/4 teaspoon salt</li>
                    </ul>
                </div>
                <div className="instruction">
                    <h3 className='ing-name'>Instructions:</h3>
                    <p>
                    In a large bowl, whisk together the heavy cream, whole milk, sugar, vanilla extract, and salt until the sugar is dissolved.
Chill Mixture: Cover and refrigerate the mixture for at least 2 hours (or overnight for best results).
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Ripple Ice Cream"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.rippleIceCream ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('rippleIceCream', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.rippleIceCream} / 5  ⭐700k+</p>
                </div>
            </div>

            {/* Fruit Ice Cream */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687429882food_10.png" alt="Fruit Ice Cream" />
                <div>
                    <h3 className='ing-name'>Ingredients:</h3>
                    <ul className="ingredients-list">
                        <li>1 cup whole milk</li>
                        <li>2 cups heavy cream</li>
                        <li>3/4 cup granulated sugar</li>
                        <li>1 tablespoon pure vanilla extract</li>
                        <li>1/4 teaspoon salt</li>
                    </ul>
                </div>
                <div className="instruction">
                    <h3 className='ing-name'>Instructions:</h3>
                    <p>
                    In a large bowl, whisk together the heavy cream, whole milk, sugar, vanilla extract, and salt until the sugar is dissolved.
Chill Mixture: Cover and refrigerate the mixture for at least 2 hours (or overnight for best results).
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Fruit Ice Cream"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.fruitIceCream ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('fruitIceCream', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.fruitIceCream} / 5 ⭐980k+</p>
                </div>
            </div>

            {/* Jar Ice Cream */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687459977food_11.png" alt="Jar Ice Cream" />
                <div>
                    <h3 className='ing-name'>Ingredients:</h3>
                    <ul className="ingredients-list">
                        <li>1 cup whole milk</li>
                        <li>2 cups heavy cream</li>
                        <li>3/4 cup granulated sugar</li>
                        <li>1 tablespoon pure vanilla extract</li>
                        <li>1/4 teaspoon salt</li>
                    </ul>
                </div>
                <div className="instruction">
                    <h3 className='ing-name'>Instructions:</h3>
                    <p>
                    In a large bowl, whisk together the heavy cream, whole milk, sugar, vanilla extract, and salt until the sugar is dissolved.
Chill Mixture: Cover and refrigerate the mixture for at least 2 hours (or overnight for best results).
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Jar Ice Cream"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.jarIceCream ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('jarIceCream', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.jarIceCream} / 5 ⭐450k+</p>
                </div>
            </div>

            {/* Vanilla Ice Cream */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687489725food_12.png" alt="Vanilla Ice Cream" />
                <div>
                    <h3 className='ing-name'>Ingredients:</h3>
                    <ul className="ingredients-list">
                        <li>1 cup whole milk</li>
                        <li>2 cups heavy cream</li>
                        <li>3/4 cup granulated sugar</li>
                        <li>1 tablespoon pure vanilla extract</li>
                        <li>1/4 teaspoon salt</li>
                    </ul>
                </div>
                <div className="instruction">
                    <h3 className='ing-name'>Instructions:</h3>
                    <p>
                    In a large bowl, whisk together the heavy cream, whole milk, sugar, vanilla extract, and salt until the sugar is dissolved.
Chill Mixture: Cover and refrigerate the mixture for at least 2 hours (or overnight for best results).
                    </p>
                </div>
                <div className="feedback1">
                    <h3 className='resp-name'><b>"Vanilla Ice Cream"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.vanillaIceCream ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('vanillaIceCream', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.vanillaIceCream} / 5 ⭐190k+</p>
                </div>
            </div>
        </div>
    );
}

export default Deserts;
