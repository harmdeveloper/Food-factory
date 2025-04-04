/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from  'axios'


const LoginPopup = ({ setShowlogin }) => {

  const{url,setToken} = useContext(StoreContext)

  const [currState, setcurrState] = useState("Login")
  //state variable to save user data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  //event to extract name and value
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async  (event) => {
    event.preventDefault()
    //instance of url
    let newUrl = url;
    if (currState==="Login") {
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    //call api
    const response = await axios.post(newUrl,data);
    if (response.data.success) {
      setToken(response.data.token);
      //save token in local storage
      localStorage.setItem("token",response.data.token);
      setShowlogin(false)
    }
    else{
      alert(response.data.message)
    }
  }


  return (

    <div className='login-popup'>
      <img className="cheif" src={assets.cheif} alt="cheif" />
      <img className='a1' src={assets.arrow} alt="" />
      <img className='a2' src={assets.arrow1} alt="" />
      <img className='d1 testimonial head animate__animated  animate__heartBeat animate__infinite animate__slower' src={assets.plate1} alt="" />
      <img className='d2 testimonial head animate__animated  animate__heartBeat animate__infinite animate__slower' src={assets.plate2} alt="" />
      <img className='d3  testimonial head animate__animated animate__heartBeat animate__infinite animate__slower' src={assets.plate3} alt="" />
      <img className='d4  testimonial head animate__animated animate__fadeInDown  animate__infinite animate__slower' src={assets.burger} alt="" />

      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-pop-title">
          <h2 className='testimonial head animate__animated  animate__heartBeat animate__infinite animate__slower'>{currState}</h2>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your E-mail' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' className='bv1 animate__animated  animate__bounceIn  animate__infinite animate__slower'>{currState === "Sign Up" ? "Create account" : "login "}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Create a new Account? <span onClick={() => setcurrState("Sign Up")}>Click Here</span></p>
          : <p>Already have an account?<span onClick={() => setcurrState("Login")}>Login here</span> </p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
