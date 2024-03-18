import React from 'react'

const Footer = () => {
  return (
    <div  className='mx-24 mt-24 '>
      <div className='md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 grid gap-7'>
      <div>
        <h1 className='text-[30px]'>MiniStore.</h1>
        <p className='text-[#CBB6AE]'>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
        <div className='grid grid-cols-5 gap-2 mx-2 mt-4'>
        <i class="fa-brands fa-facebook-f text-[#D7DDDF] hover:text-blue-500"></i>
        <i class="fa-brands fa-instagram text-[#D7DDDF] hover:text-blue-500"></i>
        <i class="fa-brands fa-twitter text-[#D7DDDF] hover:text-blue-500"></i>
        <i class="fa-brands fa-linkedin-in text-[#D7DDDF] hover:text-blue-500"></i>
        <i class="fa-brands fa-youtube text-[#D7DDDF] hover:text-blue-500"></i>
        </div>
      </div>
      <div>
        <h1 className='text-[20px]'>QUICK LINKS</h1>
        <p><a href="" className='hover:text-blue-400'>
          HOME
          </a>
          </p>
    <p><a href=""  className='hover:text-blue-400'>
      ABOUT
      </a>
      </p>
    <p><a href=""  className='hover:text-blue-400'>
      SHOP
      </a>
      </p>
    <p><a href=""  className='hover:text-blue-400'>
      BLOGS
      </a>
      </p>
    <p><a href=""  className='hover:text-blue-400'>
      CONTACT
      </a>
      </p>
      </div>
      <div>
        <h1 className='text-[20px]'>HELP & INFO HELP</h1>
        <p>
          <a href=""  className='hover:text-blue-400'>TRACK YOUR ORDER</a>
          </p>
        <p>
          <a href=""  className='hover:text-blue-400'>RETURNS POLICIES</a>
          </p>
        <p>
          <a href=""  className='hover:text-blue-400'>SHIPPING + DELIVERY</a>
          </p>
        <p>
          <a href=""  className='hover:text-blue-400'>CONTACT US</a>
          </p>
        <p>
          <a href=""  className='hover:text-blue-400'>FAQS</a>
          </p>
      </div>
      <div>
        <h1 className='text-[20px]'>CONTACT US</h1>
        <p>Do you have any queries or suggestions?</p>
        <span  className='hover:text-blue-400'>yourinfo@gmail.com</span>
        <p>If you need support? Just give us a call.</p>
        <span  className='hover:text-blue-400'>+55 111 222 333 44</span>
      </div>
      </div>
   <div className='md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid gap-3 mt-16'>
      <div className='flex gap-1'>
            We ship with: 
          <div><img src="https://themewagon.github.io/MiniStore/images/dhl.png" alt="" /> </div>
          <div><img src="https://themewagon.github.io/MiniStore/images/shippingcard.png" alt="" /></div>
      </div>
      <div className='flex gap-1'>
            Payment options:
            <div><img src="https://themewagon.github.io/MiniStore/images/visa.jpg" alt="" /> </div>
            <div><img src="https://themewagon.github.io/MiniStore/images/mastercard.jpg" alt="" /> </div>
            <div><img src="https://themewagon.github.io/MiniStore/images/paypal.jpg" alt="" /></div>
        </div>
      <div> © Copyright 2023 MiniStore. Design by <span className='hover:text-blue-400'>TemplatesJungle</span> Distribution by <span className='hover:text-blue-400'>ThemeWagon</span></div>
   </div>
    </div>
  )
}

export default Footer
