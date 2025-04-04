/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Cake.css';

const Cake = () => {
    const [ratings, setRatings] = useState({
        cupcake: 0,
        veganCake: 0,
        butterscotchCake: 0,
        slicedCake: 0,
    }); // State for storing ratings for each dessert

    // Load ratings from localStorage on component mount
    useEffect(() => {
        const savedRatings = JSON.parse(localStorage.getItem('ratings'));
        if (savedRatings) {
            setRatings(savedRatings);
        }
    }, []);

    // Save ratings to localStorage
    useEffect(() => {
        localStorage.setItem('ratings', JSON.stringify(ratings));
    }, [ratings]);

    const handleRatingClick = (dessert, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [dessert]: value, // Update the specific dessert rating
        }));
    };

    return (
        <div className="recipe-container">
            <video className="rv-1" controls muted autoPlay loop>
                <source src="https://videos.pexels.com/video-files/3992584/3992584-sd_960_506_25fps.mp4" type="video/mp4" />
            </video>

            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Our Cakes</h1>

            {/* Cup Cake */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726687986332food_17.png" alt="Cup Cake" />
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
                    <h3 className='resp-name'><b>"Cup Cake"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.cupcake ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('cupcake', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.cupcake} / 5    ⭐40k+</p>
                </div>
            </div>

            {/* Vegan Cake */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688026355food_18.png" alt="Vegan Cake" />
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
                    <h3 className='resp-name'><b>"Vegan Cake"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.veganCake ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('veganCake', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.veganCake} / 5  ⭐700k+</p>
                </div>
            </div>

            {/* Butterscotch Cake */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688060952food_19.png" alt="Butterscotch Cake" />
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
                    <h3 className='resp-name'><b>"Butterscotch Cake"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.butterscotchCake ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('butterscotchCake', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.butterscotchCake} / 5   ⭐500k+</p>
                </div>
            </div>

            {/* Sliced Cake */}
            <div className="r-1">
                <img src="http://localhost:4000/images/1726688094975food_20.png" alt="Sliced Cake" />
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
                    <h3 className='resp-name'><b>"Sliced Cake"</b></h3>
                    <h3 className='ing-name'>Feedback:</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1; // Star value from 1 to 5
                            return (
                                <span
                                    key={i}
                                    className={`star ${starValue <= ratings.slicedCake ? 'filled' : ''}`}
                                    onClick={() => handleRatingClick('slicedCake', starValue)} // Handle star click
                                    role="button"
                                    aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
                                >
                                    ☆
                                </span>
                            );
                        })}
                    </div>
                    <p>Your Rating: {ratings.slicedCake} / 5  ⭐10k+</p>
                </div>
            </div>
        </div>
    );
};

export default Cake;
