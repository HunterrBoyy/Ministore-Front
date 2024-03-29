import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../features/productApi';
import { useFormik } from 'formik';
import { Card, Typography} from "@material-tailwind/react";
import { baseUrl } from '../../features/constant';
import { Image, Shimmer } from 'react-shimmer';
import { addOrUpdateCart } from '../../features/userSlice';

const ProductDetail = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {isLoading, data:product} = useGetProductByIdQuery(id);

  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      qty: 1
    }
  })

  if(isLoading) {
    return <div className='h-[300px] mt-14'>
    <dotlottie-player src="https://lottie.host/e2c291ba-f300-42fc-b290-9481a62df732/6BMnwtbHmZ.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
  </div>
  }


  return (
      <div className="grid grid-cols-3 p-7 gap-5">

      <div>
        <Image
          src={`${baseUrl}${product.product_image}`}
          fallback={<Shimmer width={800} height={600} className="w-full h-full" />}
        />
      </div>


      <div className="text-gray-700 space-y-4">
        <h1 className="font-bold">{product.product_name}</h1>

        <p className="border-y-2 py-1 border-gray-500">Rs.{product.product_price}</p>
        <p>{product.product_detail}</p>
        
      </div>



      <div>



        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">

            <tbody>

              <tr className="text-center">
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Price
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {product.product_price}
                  </Typography>
                </td>



              </tr>
              <tr className="text-center">
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Item in Stock
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {product.countInStock > 0 ? product.countInStock : <h1>Out Of Stock</h1>}
                  </Typography>
                </td>



              </tr>
              {product.countInStock !== 0 && <tr className="text-center">
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Qty
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                  <Typography variant="small" color="blue-gray" className="font-normal">

                    <select onChange={(e) => formik.setFieldValue('qty', e.target.value)} className="p-2" name="" id="">

                      {[...Array(product.countInStock).keys()].map((v, i) => {
                        return <option key={i} value={v + 1}>{v + 1}</option>
                      })}
                    </select>



                  </Typography>
                </td>



              </tr>}




              <tr className="text-center ">
                <td colSpan={2}>
                  <button disabled={product.countInStock === 0 ? true : false} onClick={() => {
                    dispatch(addOrUpdateCart({
                      name: product.product_name,
                      qty: Number(formik.values.qty),
                      image: product.product_image,
                      price: product.product_price,
                      product: product._id,
                      countInStock: product.countInStock
                    }));
                    nav('/user/cart');

                  }} className=' w-[50%] bg-black my-5 text-white mx-auto py-1 rounded-sm'>Add To Cart</button>

                </td>
              </tr>
            </tbody>






          </table>
        </Card>
      </div>


    </div>


  )
}

export default ProductDetail
