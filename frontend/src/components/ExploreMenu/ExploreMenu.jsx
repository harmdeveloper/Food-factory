/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets' 

const ExploreMenu = ({category,setcategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <div data-aos="fade-right">
      <h1>Explore our Menu</h1>
      </div>
      <div data-aos="fade-left">
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes .Our mission is to satisfy your cravings and elevate your dining experience, one delicioUs meal at a time.</p>
      </div>
      <div data-aos="zoom-in-up">
<div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
           <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
           <p>{item.menu_name}</p>
            </div>
        )
    })}
</div>
</div>
<hr />
    </div>
  )
}

export default ExploreMenu
