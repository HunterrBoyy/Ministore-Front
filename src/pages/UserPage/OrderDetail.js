import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../features/constant';
import { useGetOrderByIdQuery } from '../../features/productApi';

const OrderDetail = () => {

  const {id} = useParams();

  const {user} = useSelector((store) => store.user);
  const {isLoading, data} = useGetOrderByIdQuery({
    id,
    token: user.token
  })

  if(isLoading) {
    return <div className='h-[300px] mt-14'>
    <dotlottie-player src="https://lottie.host/e2c291ba-f300-42fc-b290-9481a62df732/6BMnwtbHmZ.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
  </div>
  }


  return (
    <div className="p-5">

    {data && data.orderItems.map((order) => {
      return <div key={order._id} className="grid grid-cols-2 space-y-4">

        <div className="grid grid-cols-2 gap-4 space-x-3 ">
          <div>
            <img src={`${baseUrl}${order.image}`} alt="" />
          </div>

          <div className="flex flex-col justify-between">
            <h1>{order.name}</h1>
            <p>$ {order.price}</p>
            <p>{order.qty}</p>
          </div>


        </div>


      </div>
    })}



    <div className="bg-black text-white flex justify-between py-2 px-5 mt-10">
      <h1 className="text-xl">Total:-</h1>
      <h1>$ {data.totalAmount}</h1>

    </div>

  </div>
  )
}

export default OrderDetail
