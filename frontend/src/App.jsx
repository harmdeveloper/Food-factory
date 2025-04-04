/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Contact from './pages/Contact/Contact'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import Recipe from './pages/Recipe/Recipe'
import Salad from './pages/Ingredient/Salad'
import Rolls from './pages/Ingredient/Rolls'
import Deserts from './pages/Ingredient/Deserts'
import Sandwich from './pages/Ingredient/Sandwich'
import Cake from './pages/Ingredient/Cake'
import Pure from './pages/Ingredient/Pure'
import Pasta from './pages/Ingredient/Pasta'
import Noodles from './pages/Ingredient/Noodles'


const App = () => {

const [showlogin,setShowlogin]= useState(false)

  return (
    <>
    {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route  path='/recipe' element={<Recipe/>}/>
        <Route path='/salad' element={<Salad/>}/>
        <Route path='/rolls' element={<Rolls/>}/>
        <Route path='/desert' element={<Deserts/>}/>
        <Route path='/sandwich' element={<Sandwich/>}/>
        <Route path='/cake' element={<Cake/>}/>
        <Route path='/pure' element={<Pure/>}/>
        <Route path='/pasta' element={<Pasta/>}/>
        <Route path='/noodles' element={<Noodles/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
