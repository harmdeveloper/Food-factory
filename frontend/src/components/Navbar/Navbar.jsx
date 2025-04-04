/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowlogin }) => {


  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount,token,setToken,cartItems, food_list, removeFromCart,url} = useContext(StoreContext);

  const toggleSidebar = () => {
     setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const logout = ()  => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>Menu</a>
        <a href='#feedback' onClick={() => setMenu("feedback")} className={menu == "feedback" ? "active" : ""}>Feedback</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>MobileApp</a>
        <Link to='/recipe' onClick={() => setMenu("Recipe")} className={menu === "Recipe" ? "active" : ""}>Recipe</Link>
      </ul>
      <div className="navbar-right">
        {/* <img className='search' src={assets.search_icon} alt="" /> */}
        <a href='/Contact'><img className='search' src={assets.phone_icon} alt="" /></a>
        <div className="navbar-search-icon">
          {/* <Link to='./cart'><img src={assets.basket_icon} alt="" /></Link> */}


     {/* CART STARTS */}
    <img className='side' onClick={toggleSidebar} src={assets.basket_icon} alt="" />
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <h2 className='head'>Your Cart</h2>
    
      <div className="cart-items">

        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                <div className='cart-items-title cart-items-item'>
                 <img src={url+"/images/"+item.image} alt="" />
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>${item.price*cartItems[item._id]}</p>
                 <p onClick={()=>removeFromCart(item._id)} className='cross' >x</p>
                </div>
                <hr />
                 </div>
            )
            }
          })}
      </div>
     
      <div className="cart-bottom">
      <div className="cart-total">
      <h3>Cart Totals</h3>
      <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
        </div><hr />

        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount()===0?0:2}</p>
        </div>
        <hr />

        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
        </div>


      </div>    
     <Link to={getTotalCartAmount() === 0 ? '#' : '/PlaceOrder'}>
  <button 
    onClick={(e) => {
      if (getTotalCartAmount() === 0) {
        e.preventDefault(); // Prevent the navigation
        alert('Your cart is empty');
      }
    }}
  >
    PROCEED TO CHECKOUT
  </button>
</Link>

        

      </div>
      </div>

      <div className='Cross' >
      <p onClick={toggleSidebar}>X</p>
      </div>
      </div>
          {/* CART ENDS */}


          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={() => setShowlogin(true)}>Sign In</button>:
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>}
                
      </div>
    </div>
  )
}

export default Navbar











// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';

// const Navbar = ({ setShowlogin }) => {

//   const [isOpen, setIsOpen] = useState(false);
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken, cartItems, food_list, removeFromCart, url } = useContext(StoreContext);
  
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   // Function to handle navigation with scroll to section
//   const handleNavigation = (section) => {
//     if (menu !== "home") {
//       navigate("/"); // Navigate to home page if not already there
//       setTimeout(() => {
//         window.location.hash = section; // Scroll to the section after page load
//       }, 100); // Add a small delay to ensure the page loads first
//     } else {
//       window.location.hash = section; // If already on home, just scroll to the section
//     }
//     setMenu(section); // Update menu state
//   };

//   return (
//     <div className='navbar'>
//       <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
//       <ul className="navbar-menu">
//         <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        
//         {/* Change the onClick to call handleNavigation */}
//         <a onClick={() => handleNavigation("explore-menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//         <a onClick={() => handleNavigation("feedback")} className={menu === "feedback" ? "active" : ""}>Feedback</a>
//         <a onClick={() => handleNavigation("app-download")} className={menu === "mobile-app" ? "active" : ""}>MobileApp</a>
//         <a href='/Contact' onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>Contact us</a>
//       </ul>
      
//       <div className="navbar-right">
//         <img className='search' src={assets.search_icon} alt="" />
{/* <a href='/Contact'><img className='search' src={assets.phone_icon} alt="" /></a> */}
//         <div className="navbar-search-icon">
          
//           {/* Cart and Sidebar Code (as in your original implementation) */}
          
//         </div>
        
//         {!token ? 
//           <button onClick={() => setShowlogin(true)}>Sign In</button> : 
//           <div className='navbar-profile'>
//             <img src={assets.profile_icon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li onClick={() => navigate('/myorders')}>
//                 <img src={assets.bag_icon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>}
//       </div>
//     </div>
//   );
// };

// export default Navbar;