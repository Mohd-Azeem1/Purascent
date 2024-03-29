import React from 'react'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'



function Cart() {
  const bucket = useSelector(state => state.bucket.bucket)
  console.log(bucket);



  return (
    <div id='cart' className='w-full min-h-screen pt-14'>
      <div id='collection-banner-photo' className='w-full h-[20vw] flex flex-wrap justify-between'>

      </div>
      <div className='w-full h-[10vh] bg-[#714486] junge  px-10 text-white flex justify-center items-center'>
        <h1 className='text-[1.5vw] '>WELLCOME TO YOUR CART</h1>
      </div>
      { bucket.length===0?
      <div className='flex junge justify-center items-center text-white text-[2vw] w-full min-h-screen backdrop-blur-xl'>
        <h1>Your cart is empty</h1>
      </div>
      :
      <div className={`py-4 px-20 w-full min-h-screen backdrop-blur-md`}>
        {bucket?.map(item=>{ console.log(item.id); return <CartProduct id={item.id} title={item.title} description={item.description} price={item.price} image={item.image} />})}
      </div>
      }
    </div>
  )
}

export default Cart
