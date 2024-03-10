import React from 'react'
import './sale.css'

const Sale = ({sale}) => {
  return (
    <div ref={sale} className='flex  bg-[#EDF1F3] mt-24' >
    <div className='pl-56 flex flex-col justify-center' >
      <p>10% off</p>
      <p className='text-[80px] font-light'>NEW YEAR SALE</p> 
      <button className='shop-sale'>SHOP SALE</button>
    </div>
    <div className='w-[900px] mb-3'>
      <img src="https://themewagon.github.io/MiniStore/images/single-image1.png"   alt="banner" />
    </div>
  </div>
  )
}

export default Sale
