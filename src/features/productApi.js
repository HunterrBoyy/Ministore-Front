import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';




export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
  tagTypes:['product','order'],
  endpoints: (builder) => ({

    getProductById : builder.query({
      query:(query) => ({
        url:`/api/product/${query}`,
      }),
      providesTags:['product','order']
    }),

    addProduct: builder.mutation(({
      query:(query)=>({
        url:'/api/add-product',
        body:query.body,
        headers: {
          Authorization: query.token
        },
        method:'POST'
      }),
      invalidatesTags:['product']
    })),

    updateProduct: builder.mutation({
      query: (query) => {
        return {
          url: `/api/product/${query.id}`,
          method: 'PATCH',
          body: query.body,
          headers: {
            Authorization: query.token
          }
        }
      },
      invalidatesTags: ['product']
    }),

    getAllOrders: builder.query({
      query:(query) => ({
        url: '/api/orders',
        headers:{
          Authorization:query
        }
      }),
      providesTags:['order']
    }),

    getOrderById: builder.query({
      query:(query)=>({
        url:`/api/order/${query.id}`,
        headers:{
          Authorization: query.token
        }
      }),
      providesTags:['order']
    }),

    addOrder: builder.mutation({
      query:(query) => ({
        url: '/api/create-order',
        body: query.body,
        headers:{
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['order','product']
    })
  })
})

export const {useAddProductMutation, useGetAllOrdersQuery, useGetOrderByIdQuery, useGetProductByIdQuery, useUpdateProductMutation , useAddOrderMutation} = productApi