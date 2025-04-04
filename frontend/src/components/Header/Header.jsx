/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header">
      <Carousel
        autoPlay        // Carousel starts automatically
        infiniteLoop    // Continuously loops through images
        interval={15000} // Time between transitions (in milliseconds 5000)
        showThumbs={false} // Hides thumbnail previews
        showStatus={false} // Hides the current slide status indicator
        showArrows={false} // Hides navigation arrows for a clean look
        stopOnHover={false} // Keeps auto-playing even when hovering over the carousel
      >
        <div className="header-slide">
         
          <div className="header-contents">
        <h2 className='animate__animated animate__fadeInDown animate__infinite animate__slower '>Order your Favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <a href="#explore-menu"><button className='animate__animated  animate__heartBeat animate__infinite animate__slower'>View Menu</button></a>
        <img className='lady' src={assets.lady} alt="Delicious Food 1" />
        <img className='fire animate__animated animate__heartBeat animate__infinite ' src={assets.fire} alt="fire" />
        <img className='msg1 animate__animated animate__fadeInUp animate__infinite  animate__slower' src={assets.msg1} alt="msg1" />
        <img className='msg2 animate__animated animate__fadeInDown animate__infinite  animate__slower' src={assets.msg2} alt="msg2" />
        <img className='plate1 animate__animated animate__rotateInDown Left animate__infinite  animate__slower' src={assets.plate1} alt="plate1" />
        <img className='plate2' src={assets.plate2} alt="plate2" />
        <img className='plate3' src={assets.plate3} alt="plate3" />
        <img className='plate4' src={assets.plate4} alt="plate4" />
      </div>
          
        </div>
        <div className="header-slide">
        <div className="header-contents">
        <h2 className='animate__animated animate__fadeInDown animate__infinite animate__slower '>Order your Favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <a href="#explore-menu"><button className='animate__animated  animate__heartBeat animate__infinite animate__slower'>View Menu</button></a>
        <img className='man' src={assets.man} alt="Delicious Food 2" />
      </div>
         
        </div>
      </Carousel>

      {/* <div className="header-contents">
      <img src="/header_img.png" alt="Delicious Food 1" />
      <img src="https://cdn.publish0x.com/prod/fs/images/fb0049e642f06d78f6d23084a14b01e799c74bdc761ffaea47f56c9a03e8547b.jpg" alt="Delicious Food 2" />
      <div className="header-slide">
          <img src="https://i.pinimg.com/originals/da/c5/fd/dac5fdeefe64437781c32499352573bb.jpg" alt="Delicious Food 2" />
        </div>

        <h2 className='animate__animated animate__fadeInDown animate__infinite animate__slower '>Order your Favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <a href="#explore-menu"><button className='animate__animated  animate__heartBeat animate__infinite animate__slower'>View Menu</button></a>
        <img className='lady' src={assets.lady} alt="Delicious Food 1" />
        <img className='man' src={assets.man} alt="Delicious Food 2" />
      </div> */}

      
    </div>
  )
}

export default Header;
