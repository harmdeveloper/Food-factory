/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const { getTotalCartAmount,token,food_list,cartItems,url } = useContext(StoreContext)

  //state variable to store user delivery information
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "Lahore", 
    state: "Punjab", 
    zipcode: "",
    country: "Pakistan", 
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    if (validate()) {
      // structure all order data
      let orderItems = [];
      food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 2,
      }
      // send data to API
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      }
      else {
        alert("Error");
      }
    } else {
      alert("Please correct the errors in the form.");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate('/')
      alert("(Either Your cart is empty or you are not logged in)");
      alert("Please add items and make sure you log in to place your order");

    }
    //empty cart
    else if(getTotalCartAmount()===0)
      {
      navigate('/')
      alert("Cart is empty");

    }
  },[token])


  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // First name validation (alphabets only)
    if (!/^[A-Za-z]+$/.test(data.firstName)) {
      tempErrors.firstName = "First name must contain only alphabets.";
      isValid = false;
    }

    // Last name validation (alphabets only)
     if (!/^[A-Za-z]+$/.test(data.lastName)) {
      tempErrors.lastName = "Last name must contain only alphabets.";
      isValid = false;
    }

    // Email validation (must start with alphabet and follow email format)
     if (!/^[A-Za-z][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
      tempErrors.email = "Email must be valid and start with an alphabet.";
      isValid = false;
    }

    // Phone validation (must be at least 11 digits)
     if (!/^\d{11,}$/.test(data.phone)) {
      tempErrors.phone = "Phone number must be at least 11 digits.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  return (
    <form onSubmit={placeOrder} className='place-order'>

      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fileds">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' required />
          {errors.firstName && <p className="error">First name must contain only alphabets</p>}
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' required />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='E-mail adress' required />
        {errors.email && <p className="error">{errors.email}</p>}
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' required />
        <div className="multi-fileds">
          {/* <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required /> */}
          <select className='m1' name='city'  onChange={onChangeHandler} value={data.city} required  >
          <option value="Lahore">Lahore</option>
  <option value="Karachi">Karachi</option>
  <option value="Islamabad">Islamabad</option>
  <option value="Rawalpindi">Rawalpindi</option>
  <option value="Multan">Multan</option>
  <option value="Gujrawanla">Gujrawanla</option>
                </select>
          {/* <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required /> */}
          <select className='m1'name='state' onChange={onChangeHandler} value={data.state} required  >
          <option value="Punjab">Punjab</option>
  <option value="Sindh">Sindh</option>
  <option value="Balochistan">Balochistan</option>
  <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                </select>
        </div>
        <div className="multi-fileds">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
          {/* <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required /> */}
          <select className='m1' name='country' onChange={onChangeHandler} value={data.country}  required  >
          <option value="Pakistan">Pakistan</option>
                </select>
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' required />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="place-order-right">

        <div className="cart-total">

          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>

        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
