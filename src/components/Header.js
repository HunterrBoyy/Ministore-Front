import React, { useRef, useState } from 'react'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearAll } from '../features/userSlice'
import Home from '../pages/UserPage/1 HOME/Home'
import Services from '../pages/UserPage/2 Services/Services'
import Products from '../pages/UserPage/3 Products/Products'
import Watches from '../pages/UserPage/4 Watches/Watches'
import Blogs from '../pages/UserPage/6 Blogs/Blogs'
import Sale from '../pages/UserPage/5 Sale/Sale'
import InstaPage from '../pages/UserPage/7 Shop with Insta/InstaPage'
import Footer from './Footer'

const Header = () => {


  const nav = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [pageOpen, setPageOpen] = useState(false)
  const menuRef = useRef();
  const iconRef = useRef();
  
window.addEventListener('click', (e)=>{
  if (e.target !== menuRef.current && e.target !== iconRef.current){
    setOpen(false);
  }
})

const home = useRef(null);
const services = useRef(null);
const products = useRef(null);
const watches = useRef(null);
const sale = useRef(null);
const blog = useRef(null);

  const scrollToSection = (elementRef) => { window.scrollTo({ top: elementRef.current.offsetTop, behavior: 'smooth', })};
  

  return (
    <>
    
    <div className='flex flex-row justify-between px-10 py-5 bg-[#F8F9FA] sticky top-0 z-10 '>
      <img src="https://themewagon.github.io/MiniStore/images/main-logo.png" alt="" />
  <i class="fa-solid fa-bars  md:hidden "></i>
  <nav className='md:flex md:flex-row md:gap-8 hidden '>
    <p className='cursor-pointer'  onClick={() => scrollToSection(home)}>HOME</p>
    <p className='cursor-pointer' onClick={() => scrollToSection(services)}>SERVICES</p>
    <p className='cursor-pointer' onClick={() => scrollToSection(products)}>PRODUCTS</p>
    <p className='cursor-pointer' onClick={() => scrollToSection(watches)}>WATCHES</p>
    <p className='cursor-pointer' onClick={() => scrollToSection(sale)}>SALE</p>
    <p className='cursor-pointer' onClick={() => scrollToSection(blog)}>BLOGS</p>
    <p onClick={() => setPageOpen(!pageOpen)} className='cursor-pointer'>PAGES</p>
    {
    pageOpen && (
    <div 
    ref={menuRef}
    className='bg-white p-0 w-48 shadow-lg absolute right-64 top-12'>
    <ul>
      <li onClick={() => setPageOpen(false)} className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '>ABOUT</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> BLOG</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> SHOP</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> CART</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> CHECKOUT</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> SINGLE POST</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> SINGLE PRODUCT</li>
      <li 
      onClick={() => {
        setPageOpen(false);
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> CONTACT</li>
       <li 
      onClick={() => {
        setPageOpen(false);
        nav('/product/add');
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '> ADD PRODUCT</li>
    </ul>
   </div>)
   }
  </nav>
  <div className='md:flex md:gap-5  hidden '>
  <i class="fa-solid fa-magnifying-glass"></i>
  <div className='relative flex'>
 
  <i
  onClick={() => setOpen(!open)}
  ref={iconRef}
   class="fa-solid fa-user cursor-pointer"></i>
   {
    open && (
    <div 
    ref={menuRef}
    className='bg-white p-0 w-32 shadow-lg absolute -left-10 top-8'>
    <ul>
      <li onClick={() => {
        setOpen(false);
        nav('/user/profile');
      }
    } 
      className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '>My Profile</li>
      <li 
      onClick={() => {
        setOpen(false);
        dispatch(clearAll()); 
        nav('/user/login', {replace: true});
      }}
       className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '><i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut</li>
    </ul>
   </div>)
   }
   
  </div>
  
  
  
  <i class="fa-solid fa-cart-shopping"></i>
  
  </div>
  
    </div>
    <Home home={home} />
     <Services services={services} />
     <Products products={products} />
     <Watches watches={watches} />
     <Sale sale={sale} />
     <Blogs blog={blog} />
     <InstaPage />
     <Footer />
    </>
  )
}

export default Header

