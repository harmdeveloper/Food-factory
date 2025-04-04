/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import TestimonialSlider from '../../components/Testimonial/Testimonial'

const Home = () => {
  // name ,setter function = user state initalize with string All
  const [category,setcategory]= useState("All");

  return (
    <div>
     <Header/>
     <ExploreMenu category={category} setcategory={setcategory}/>
     <FoodDisplay category={category}/>
      <TestimonialSlider />
     <AppDownload/>
    </div>
  )
}

export default Home
