/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // First name validation (alphabets only)
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      tempErrors.firstName = "First name must contain only alphabets.";
      isValid = false;
    }

    // Last name validation (alphabets only)
     if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      tempErrors.lastName = "Last name must contain only alphabets.";
      isValid = false;
    }

    // Email validation (must start with alphabet and follow email format)
     if (!/^[A-Za-z][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      tempErrors.email = "Email must be valid (abc@gmail.com) and start with an alphabet.";
      isValid = false;
    }

    // Phone validation (must be at least 11 digits)
     if (!/^\d{11,}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be at least 11 digits.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:4000/api/contact', formData);
        alert('Message sent successfully!');
        // Optionally reset the form here
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          city: '',
          country: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      }
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className='contact'>
      <video className='v-1' controls muted autoPlay loop>
        <source src="https://videos.pexels.com/video-files/18904823/18904823-sd_360_640_24fps.mp4" type="video/mp4" />
      </video>
      <div className="monolog animate__animated animate__zoomIn animate__infinite animate__slower">
        <h1>Feel <h1 style={{ color: "#f2832f" }}>FREE</h1></h1>
        <h1>To Contact Us !</h1>
        <br />
        <h1>"Your <span style={{ color: "green" }}>health</span> is our priority, not your <span style={{ color: "#FF4500" }}>wallet</span>."</h1>
      </div>

      <div className="cont">
        <div className="form-left animate__animated animate__fadeIn animate__infinite animate__slower">
          <h2>"Your <span style={{ color: "green" }}>health</span> is priceless, we adjust the <span style={{ color: "#FF4500" }}>price</span>."</h2>
          <p>
            Tell us about your food journey! Share your experience with our flavors and services, and let us keep delivering satisfaction with every bite.
          </p>
          <p> <b>EMAIL:</b> FoodFactory@gmail.com</p>
          <p> <b>PHONE:</b> +923135484121</p>
        </div>

        <div className="form-right">
          <form onSubmit={handleSubmit}> {/* Add form tag */}
            <div>
              <p><b>FeedBack</b></p>
              <div className="multi">
                <input name='firstName' type="text" placeholder='First name' value={formData.firstName} onChange={handleChange} required />
                {errors.firstName && <p className="error">First name must contain only alphabets</p>}
                <input name='lastName' type="text" placeholder='Last name' value={formData.lastName} onChange={handleChange} required />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
              <input className='single' name='email' type="text" placeholder='E-mail address' value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="error">{errors.email}</p>}
              <div className="multi">
                <input name='country' type="text" placeholder='Country' value={formData.country} onChange={handleChange} required />
                <select name='city' type="text" placeholder='City' value={formData.city} onChange={handleChange} required>
                  <option>Lahore</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Rawalpindi</option>
                  <option>Multan</option>
                  <option>Gujrawanla</option>
                </select>
              </div>
              <input className='single' name='phone' type="text" placeholder='Phone' value={formData.phone} onChange={handleChange} required />
              {errors.phone && <p className="error">{errors.phone}</p>}
              <br />
              <label className='lab'>Subject:</label>
              <br />
              <select className='single' name='subject' type="text" placeholder="Subject" value={formData.subject} onChange={handleChange}>
                <option>Service</option>
                <option>Food Quality</option>
                <option>Price</option>
                <option>Other</option>
              </select>
              <br />
              <label className='lab'>Message(feedback):</label>
              <br />
              <input className='single' name='message' type="text" placeholder="Message" value={formData.message} onChange={handleChange} />
              <br />
              <button className="sum" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
