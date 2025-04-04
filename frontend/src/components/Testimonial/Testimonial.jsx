/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import '../Testimonial/Testimonial.css';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { assets } from '../../assets/assets';

// const testimonials = [
//   {
//     id: 1,
//     name: "Charlotte",
//     title: "CEO, Company AB",
//     content: "Amazing taste and quality of food, organic and diet friendly.",
//     image: "https://avatars.mds.yandex.net/i?id=7e1454e28ea1b1ebc888bb6e1d6cc5bece154405-7068603-images-thumbs&n=13",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     title: "CTO, Tech Innovations",
//     content: "The customer service is fantastic. Highly recommend!",
//     image: "https://avatars.mds.yandex.net/i?id=2b6a677a57018177f618116dc3e4074bbf167046ca5d7da4-12416107-images-thumbs&n=13",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     title: "Marketing Head, Marketify",
//     content: "A great food for anyone looking for improving their company lunches.",
//     image: "https://avatars.mds.yandex.net/i?id=5ac2c146a9e2e7e8e845583843d35d4ab9fb8de3-5476635-images-thumbs&n=13",
//   },
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically move to the next testimonial after 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval); // Clear the interval when component unmounts
//   }, []);

//   return (
//     <>
//     <div className="feedback" id='feedback'>
//     <hr />

//     <h1 className="head animate__animated animate__zoomIn  animate__infinite animate__slower">Customer feedback</h1>
  

//     <img className="chef-lady" src={assets.chef} alt="" />
    

//     <div className="testimonial-slider">
//       <div className="testimonial head animate__animated  animate__slideInLeft animate__infinite animate__slower"style={{ animationDuration: '5s', animationDelay: '5s' }}>
//         <img
//           src={testimonials[currentIndex].image}
//           alt={testimonials[currentIndex].name}
//           className="testimonial-image" />
//         <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
//         <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
//         <span className="testimonial-title">{testimonials[currentIndex].title}</span>
//       </div>
//     </div>
//     </div>

    
//     </>
//   );
// };

// export default TestimonialSlider;



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
        const response = await axios.get('http://localhost:4000/api/contacts'); // API call to fetch data
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
