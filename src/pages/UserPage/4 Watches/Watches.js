import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './watches.css'
import { useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../../features/productApi';
import { baseUrl } from '../../../features/constant';

const Watches = ({watches}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const {data} = useGetAllProductsQuery();
  console.log("data", data, typeof data)

  const nav = useNavigate();
  return (
    <div ref={watches} className='mx-24 mt-24'>
    <div className='flex flex-row justify-between items-center'>
        <p className='font-medium text-[30px]'>SMART WATCHES</p>
        <p className='underline underline-offset-2' >GO TO SHOP</p>
    </div>
    <div className='mt-5'>
      <Slider {...settings}>
      {data && data.map((data) =>{
        if(data.category === "Watch"){
        return <div className=''>
          <div className='card'>
            <img  src={`${baseUrl}${data.product_image}`} />
            <button className='cart-button ' onClick={() => nav(`/product/detail/${data._id}`)}>ADD TO CART<i class="fa-solid fa-cart-shopping mr-4 py-[6px] ml-5" ></i></button>
          </div>
          <div className='flex flex-row justify-between mt-3 text-2xl'>
            <p>{data.product_name}</p>
            <p className='text-sky-500'>${data.product_price}</p>
          </div>
        </div>
        }
      })}
      </Slider>
    </div>
  </div>
  )
}

export default Watches
