/* eslint-disable no-unused-vars */
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download' >
      
          <img className='uncle' src={assets.uncle} alt="" />
        

          <div className='app-download1' id='app-download1' >
        <p className='animate__animated animate__zoomInDown animate__infinite animate__slower'>For better experience Download <br /> Foodfactory </p>

      <div className="app-download-platforms">
       <a href="http://play.google.com/store/apps?hl=en_US&pli=1"> <img className='animate__animated animate__zoomInDown animate__infinite animate__slower' src={assets.play_store} alt="" /></a>
       <a href="http://www.apple.com/app-store/"> <img className='animate__animated animate__zoomInDown animate__infinite animate__slower' src={assets.app_store} alt="" /></a>
        </div>
        </div>
    </div>
  )
}

export default AppDownload
