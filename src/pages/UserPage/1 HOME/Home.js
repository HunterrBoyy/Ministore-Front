import React from 'react'
import './home.css'
import { Carousel } from "@material-tailwind/react";

const Home = () => {

  return (

  <>
  
<Carousel className="rounded-xl">
      
    <div className='flex px-9 bg-[#EDF1F3] ' >
      <div className='child-1 px-20' >
        <p className='text-[80px] font-light'>TECHNOLOGY HACK YOU WON'T GET.</p> 
        <button className='shop-product'>SHOP PRODUCT</button>
      </div>
      <div>
        <img src="https://themewagon.github.io/MiniStore/images/banner-image.png"   alt="banner" />
      </div>
    </div>
    <div className='flex px-9 bg-[#EDF1F3]'>
      <div className='child-1 px-20' >
         <p className='text-[80px] font-light'>YOUR PRODUCTS ARE GREAT.</p>
        <button className='shop-product'>SHOP PRODUCT</button>
      </div>
      <div>
         <img src="https://themewagon.github.io/MiniStore/images/banner-image.png"   alt="banner" />
      </div>
    </div>
    </Carousel >
  </>
  )
}

export default Home
 


 
