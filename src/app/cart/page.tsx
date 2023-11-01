'use client'
import React from 'react'
import { StateProps, StoreProduct } from '../../../type'
import { useSelector } from 'react-redux'
import CartProduct from '@/components/CartProduct'

const CartPage = () => {
  const {productData} = useSelector((state:StateProps)=>state.next)
  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid gird-cols-5 gap-10 py-4">
      {
        productData.length>0 ?(
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon-blue">
                Subtitle
              </p>
            </div>
            <div>
              {
                productData.map((item:StoreProduct)=>(
                  <div key={item._id} className="pt-2 flex flex-col gap-2"><CartProduct item={item}/>
                  </div>
                ))
                
              }
            </div>
          </div>
        ) :(
          <div className="flex min-h-[80vh] justify-center items-center flex-col">
            <h1 className="text-4xl font-bold">Your Cart is Empty</h1>
            <button>go to shopping</button>
          </div>
        )
      }
    </div>
  )
}

export default CartPage