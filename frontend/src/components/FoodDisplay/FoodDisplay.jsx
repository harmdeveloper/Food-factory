/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { Link, NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ category }) => {

  const { cart } = useContext(StoreContext)
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <div className='food-display1' id='food-display1'>
        <div data-aos="fade-right">
          <h2>Top dishes near you</h2>
        </div>

        <div data-aos="zoom-in">
          <div className="food-display-list">
            {food_list.map((item, index) => {
              if (category === "All" || category === item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
            })}

          </div>
        </div>

      </div>

    </div>
  )
}

export default FoodDisplay
