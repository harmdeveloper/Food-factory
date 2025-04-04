/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Recipe.css';

const Recipe = () => {
  // Static list of food items
  const foods = [
    {
        link:'/salad',
      image: "https://img.freepik.com/premium-photo/food-photography-greek-salad-concrete-board_1110958-40083.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Salad",
      description: "A salad is a fresh, light dish typically made from a mix of vegetables, fruits, or proteins, often dressed with vinaigrettes or other sauces."
    },
    {
        link:'/rolls',
      image: "https://img.freepik.com/premium-photo/table-with-food-tray-with-variety-food-items-it_1034058-102325.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Rolls",
      description: "Delicious hand-rolled wraps filled with fresh ingredients, perfect for a quick and flavorful meal."
    },
    {
        link:'/desert',
      image: "https://img.freepik.com/free-photo/delicious-christmas-finger-food-arrangement_23-2151101917.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Deserts",
      description: "Deliciously sweet treats crafted to satisfy your cravings, from cakes to pastries and everything in between."
    },
    {
        link:'/sandwich',
      image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Sandwich",
      description: "A sandwich is a popular dish consisting of various fillings such as meats, cheeses, and vegetables, placed between slices of bread."
    },
    {
        link:'/cake',
      image: "https://img.freepik.com/free-photo/close-up-delicious-birthday-cake_23-2150734928.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Cake",
      description: "A rich and moist dessert, often layered and frosted, made with ingredients like flour, sugar, eggs, and butter, perfect for celebrations or indulgence."
    },
    {
        link:'/pure',
      image: "https://img.freepik.com/premium-photo/frying-pan-with-various-healthy-vegetables-dark-backgroundmacroai-generative_875746-17637.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Pure Veg",
      description: "Pure Veg offers a wide variety of wholesome, plant-based dishes made exclusively from vegetarian ingredients."
    },
    {
        link:'/pasta',
      image: "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690749.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Pasta",
      description: "Pasta is a versatile Italian dish made from wheat dough, often served with a variety of sauces, meats, and vegetables."
    },
    {
        link:'/noodles',
      image: "https://img.freepik.com/premium-photo/wok-noodles-black-background_962671-7223.jpg?ga=GA1.1.1236858103.1720793599&semt=ais_hybrid",
      name: "Noodles",
      description: "Noodles are a versatile, thin, and long staple food made from unleavened dough, often served in soups, stir-fries, or with sauces."
    }
  ];

  // State for food ratings
  const [ratings, setRatings] = useState(Array(foods.length).fill(0)); // Initialize all ratings as 0

  // Load ratings from local storage when the component mounts
  useEffect(() => {
    const savedRatings = localStorage.getItem('foodRatings');
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Handle the rating click
  const handleRatingClick = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
    
    // Save the updated ratings to local storage
    localStorage.setItem('foodRatings', JSON.stringify(newRatings));
  };

  return (
    <div className="ingredients-page">
      <h2 className='res'>Explore Our Offerings</h2>
      <div className="fo-items-list">
        {foods.map((food, index) => (
          <div key={index} className="fo-item">
             <a href={food.link}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            </a>
            <p><b>Description:</b> {food.description}</p>

            {/* Star Rating */}
            <div className="rating">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1; // 1 to 5 for stars
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      value={ratingValue}
                      onClick={() => handleRatingClick(index, ratingValue)}
                      style={{ display: 'none' }} // Hide the radio button
                    />
                    <span
                      className={`star ${ratingValue <= ratings[index] ? 'filled' : ''}`}
                      role="img"
                      aria-label="star"
                    >☆</span>
                  </label>
                );
              })}
              <p>Rating: {ratings[index]} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
