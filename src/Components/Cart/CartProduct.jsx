import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { remove } from '../../Store/bucketslice'


function CartProduct({id, title='perfume', description, price, image}) {


    const Dispatch = useDispatch()
    

    const removeFromCart = (id)=>{
        Dispatch(remove(id))
      }


      

     return (
        

    <div className='w-full h-[35vh] bg-[#ffffff13] backdrop-blur-xl m-3 rounded-md flex'>
      <div className='h-full w-[30%]'>
        <img className='w-full h-full object-cover object-center rounded-l-md' src={image} alt="" />
      </div>
      <div className='h-full w-[70%] junge p-4 flex flex-col justify-between'>

        <div>
          <h1 className=' text-white text-[1.8vw] mb-3 '>{title}</h1>
          <h3 className='text-white text-[1vw]'>{description}</h3>
        </div>

        <h1 className='junge text-white'>Price: <span className='text-[#F8CBFF]'>$ {price}</span></h1>

        <div className='flex gap-5'>
          <Button children="Buy Now"/>
          <button onClick={()=>{removeFromCart(id)}} className='px-4 py-1 rounded-lg w-fit rounded-bl-none hover:scale-[1.08] transition-all text-black bg-[#EABEFF]'>Remove from Cart</button>
        </div>

      </div>
    </div>
        
  )
}

export default CartProduct
