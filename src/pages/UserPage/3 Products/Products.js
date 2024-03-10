import React, { Profiler } from 'react'
import { mobileProducts } from '../../../dummy/DummyData';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './products.css'


const Products = ({products}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div ref={products} className='mx-24 mt-24'>
      <div className='flex flex-row justify-between items-center'>
          <p className='font-medium text-[30px]'>MOBILE PRODUCTS</p>
          <p className='underline underline-offset-2' >GO TO SHOP</p>
      </div>
      <div className='mt-5'>
        <Slider {...settings}>
        {mobileProducts.map((data) =>{
          return <div >
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

export default Products
