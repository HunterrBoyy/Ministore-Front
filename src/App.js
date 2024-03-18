import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auths/Login'
import SignUp from './auths/SignUp'
import UserRoute from './components/UserRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import RouteUser from './components/RouteUser'
import ProductDetail from './pages/UserPage/ProductDetail'
import CartPage from './pages/UserPage/CartPage'
import OrderPage from './pages/UserPage/OrderPage'
import UserProfile from './pages/UserPage/UserProfile'
import OrderDetail from './pages/UserPage/OrderDetail'
import AddProduct from './pages/UserPage/AddProduct'


const App = () => {

  return (
    <>
    <Routes>
          <Route path='/' index element={<Header />} />
          

        <Route element={<UserRoute />}>

          <Route path="user/Login" element={<Login />} />
          <Route path="user/SignUp" element={<SignUp />} />
        </Route>

        <Route path="product/detail/:id" element={<ProductDetail />} />

        <Route element={<RouteUser />}>
            <Route path='user/cart' element={<CartPage />} />
            
            <Route path='/user/checkout' element={<OrderPage />} />
            <Route path='/user/profile' element={<UserProfile />} />
            <Route path='/user/order/:id' element={<OrderDetail />} />
            <Route path="product/add" element={<AddProduct />} />
          </Route>

       
      </Routes>
      
     
     
     <ToastContainer autoClose={1000} position='top-right' />
      
    </>
  )
}

export default App
