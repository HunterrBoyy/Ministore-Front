import React, { useRef, useState } from 'react'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUserSession } from '../features/userSlice'

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
    <div className='flex flex-row justify-between px-10 py-5 bg-[#F8F9FA] sticky top-0 z-10'>
      <img src="https://themewagon.github.io/MiniStore/images/main-logo.png" alt="" />
  <nav className='flex flex-row gap-8'>
    <p onClick={() => scrollToSection(home)}>HOME</p>
    <p onClick={() => scrollToSection(services)}>SERVICES</p>
    <p onClick={() => scrollToSection(products)}>PRODUCTS</p>
    <p onClick={() => scrollToSection(watches)}>WATCHES</p>
    <p onClick={() => scrollToSection(sale)}>SALE</p>
    <p onClick={() => scrollToSection(blog)}>BLOGS</p>
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
    </ul>
   </div>)
   }
  </nav>
  <div className='flex gap-5'>
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
      <li onClick={() => setOpen(false)} className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100 '>My Profile</li>
      <li 
      onClick={() => {
        setOpen(false);
        dispatch(removeUserSession()); 
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
  )
}

export default Header

