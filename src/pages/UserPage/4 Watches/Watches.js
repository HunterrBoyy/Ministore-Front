import React from 'react'
import { watchProduct } from '../../../dummy/DummyData';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './watches.css'

const Watches = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className='mx-24 mt-24'>
    <div className='flex flex-row justify-between items-center'>
        <p className='font-medium text-[30px]'>SMART WATCHES</p>
        <p className='underline underline-offset-2' >GO TO SHOP</p>
    </div>
    <div className='mt-5'>
      <Slider {...settings}>
      {watchProduct.map((data) =>{
        return <div className=''>
          <div className='card'>
            <img  src={data['img-url']} />
            <button className='cart-button '>ADD TO CART<i class="fa-solid fa-cart-shopping mr-4 py-[6px] ml-5" ></i></button>
          </div>
          <div className='flex flex-row justify-between mt-3 text-2xl'>
            <p>{data.name}</p>
            <p className='text-sky-500'>{data.price}</p>
          </div>
        </div>
      })}
      </Slider>
    </div>
  </div>
  )
}

export default Watches
