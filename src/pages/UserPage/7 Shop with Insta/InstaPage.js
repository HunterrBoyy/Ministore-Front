import React from 'react'
import { mixedProduct } from '../../../dummy/DummyData'
import './instapage.css'

const InstaPage = () => {
  return (
    <div className='mx-24 mt-24 ' >
    
      <p className='font-medium text-[30px] flex justify-center'>SHOP OUR INSTA</p>
    <div className='grid grid-cols-5 gap-2 mt-5'>
    {mixedProduct.map((data) => {
        return <div className='container '>
          <img  src={data['img-url']} className='h-64 w-56'/>
          <button className='icon'><i class="fa-brands fa-instagram  text-[50px]" ></i></button>
        </div>
        
      })}
    </div>
    </div>
  )
}

export default InstaPage
