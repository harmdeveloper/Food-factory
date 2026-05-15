import React, { useState, useEffect } from 'react';
import '../Testimonial/Testimonial.css';
import axios from 'axios'; // Import axios to fetch data
import { assets } from '../../assets/assets';

// Static images array
const images = [
  "https://avatars.mds.yandex.net/i?id=7e1454e28ea1b1ebc888bb6e1d6cc5bece154405-7068603-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=2b6a677a57018177f618116dc3e4074bbf167046ca5d7da4-12416107-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=5ac2c146a9e2e7e8e845583843d35d4ab9fb8de3-5476635-images-thumbs&n=13"
];

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch contact data from the backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://food-factory-green.vercel.app/api/contacts'); // API call to fetch data
        if (response.data && response.data.contacts) {
          const contacts = response.data.contacts.map((contact, index) => ({
            id: contact._id,
            name: contact.firstName,  // Fetch name
            content: contact.message,  // Fetch message
            image: images[index % images.length]  // Assign static images cyclically
          }));
          setTestimonials(contacts);
        } else {
          console.error('No contacts found in the response');
        }
      } catch (error) {
        console.log('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Automatically move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [testimonials]);

  return (
    <div className="feedback" id="feedback">
      <hr />
      <h1 className="head animate__animated animate__zoomIn animate__infinite animate__slower">
        Customer feedback
      </h1>
      <img className="chef-lady" src={assets.chef} alt="" />

      {testimonials.length > 0 && (
        <div className="testimonial-slider">
          <div
            className="testimonial head animate__animated animate__slideInLeft animate__infinite animate__slower"
            style={{ animationDuration: '5s', animationDelay: '5s' }}
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="testimonial-image"
            />
            <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
            <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
            <span className="testimonial-title">Customer</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
