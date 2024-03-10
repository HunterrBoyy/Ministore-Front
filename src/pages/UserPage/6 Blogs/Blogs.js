import React from 'react'
import { latestPost ,review} from '../../../dummy/DummyData'
import Slider from "react-slick";
import { Rating } from "@material-tailwind/react";
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';


const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 
  };

  const subscribeSchema = Yup.object().shape({
    email : Yup.string().email('Invalid Email').required('Required')
  })
  
  const formik = useFormik({
    initialValues:{
      email:''
    },
    onSubmit: async (val) =>{
    try {
      toast.success('Subscribed')
    } catch (err) {
      console.log(err)

    }
    },
    validationSchema:subscribeSchema
  }) 

  return (
    <div className='mx-24 mt-24'>
    <div className='flex flex-row justify-between items-center'>
        <p className='font-medium text-[30px]'>LATEST POSTS</p>
        <p className='underline underline-offset-2' >READ BLOGS</p>
    </div>
    <div className='mt-5 flex flex-row gap-4'>
    {latestPost.map((data) =>{
      return <div className=''>
        <img src={data['img-url']} alt="" />
        <div className='px-3 mt-3 '>
        <p className='font-light text-[14px]'>{data.dateAndTopic}</p>
        <p className='font-medium text-2xl'>{data.info}</p> 
        </div>
      </div>
    })}  
    </div>
    <div className=' mt-24 w-full flex justify-center'>
    <i class="fa-sharp fa-solid fa-quote-right text-[150px] "></i>
    
    </div>
    <Slider {...settings}>
      
      {review.map((data) =>{
        return <div className='w-1/3 text-3xl font-thin'>
          <span>{data.review}</span>
          <div>
            <Rating value={data.rate} className='w-3' readonly/>
            </div>
          <span>{data.name}</span>
        </div>
      })}

      </Slider>
      <div className='w-100% mt-24 h-[180px] bg-[#212529]  flex flex-row justify-around items-center' >
        <div className='text-white '>
          <h1 className='' >SUBSCRIBE US NOW</h1>
          <p>Get latest news, updates and deals directly mailed to your inbox.</p>
        </div>
        
        <form onSubmit={formik.handleSubmit} className='w-50% flex h-[50px] justify-end'>
          <input 
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          label="Email"
          className='w-[315px]'
          placeholder='Your email address here'
          />
          {formik.errors.email && formik.touched.email && <h1 className='text-red-900'>{formik.errors.email}</h1>}

          <button type='submit' className='bg-[#72AEC8] w-[170px] text-white hover:bg-[#212529] '>SUBSCRIBE</button>
        </form>
      </div>
  </div>
  )
}

export default Blogs




 
