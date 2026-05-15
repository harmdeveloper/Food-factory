import React, { useState, useEffect } from 'react';
import '../Testimonial/Testimonial.css';
import axios from 'axios';
import { assets } from '../../assets/assets';

const images = [
  "https://avatars.mds.yandex.net/i?id=7e1454e28ea1b1ebc888bb6e1d6cc5bece154405-7068603-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=2b6a677a57018177f618116dc3e4074bbf167046ca5d7da4-12416107-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=5ac2c146a9e2e7e8e845583843d35d4ab9fb8de3-5476635-images-thumbs&n=13"
];

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
         'https://food-factory-green.vercel.app/api/contacts'
        );

        // ✅ SAFE HANDLING (IMPORTANT)
        const data = res.data;

        const contacts = (data?.contacts || data || []).map((contact, index) => ({
          id: contact._id,
          name: contact.firstName || "Anonymous",
          content: contact.message || "",
          image: images[index % images.length]
        }));

        setTestimonials(contacts);

      } catch (error) {
        console.log("Error fetching testimonials:", error);
        setTestimonials([]); // prevent crash
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return (
      <div className="feedback">
        <h2>Loading testimonials...</h2>
      </div>
    );
  }

  return (
    <div className="feedback" id="feedback">
      <hr />
      <h1 className="head">Customer feedback</h1>

      <img className="chef-lady" src={assets.chef} alt="" />

      <div className="testimonial-slider">
        <div className="testimonial">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />

          <p>"{testimonials[currentIndex].content}"</p>

          <h4>{testimonials[currentIndex].name}</h4>

          <span>Customer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
