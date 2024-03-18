import React, { useEffect } from 'react'
// import './LandingPage.css'
import Aos from 'aos'

export default function ImageCard({src, onClick}) {

  useEffect(()=>{
    Aos.init({})
  },[])
  return (
    <div className="sec-3-img-card" onClick={onClick} data-aos="fade-up">
        <img src={src} alt=""  />
    </div>
  )
}
