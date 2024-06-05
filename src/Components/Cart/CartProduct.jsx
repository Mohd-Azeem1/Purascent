import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { remove } from '../../Store/bucketslice'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function CartProduct({id, title='perfume', description, price, image}) {


    const Dispatch = useDispatch()
    

    const removeFromCart = (id)=>{
      useGSAP(()=>{
        gsap.to("#cartProduct-container",{
          x:100,
          opacity:0,
          duration:1,
        })
      })

        Dispatch(remove(id))
      }


      

     return (
        

    <div id='cartProduct-container' className='w-full md:h-[35vh] h-[20vh] bg-[#ffffff13] backdrop-blur-xl m-3 rounded-md flex'>
      <div id='img-container' className='h-full w-[30%]'>
        <img id='Product-img' className='w-full h-full object-cover object-center rounded-l-md' src={image} alt="" />
      </div>
      <div id='product-info-container' className='h-full  w-[70%] junge md:p-4 p-2  flex flex-col justify-between'>

        <div id='title&discription'>
          <h1 id='product-name' className=' text-white md:text-[1.8vw] text-[5vw] md:mb-3  '>{title}</h1>
          <h3 id='product-description' className='text-white md:text-[1vw] text-[2.5vw] line-clamp-2'>{description}</h3>
        </div>

        <h1 id='product-price' className='junge md:text-[1.8vw] text-[3vw] text-white'>Price: <span className='text-[#F8CBFF]'>$ {price}</span></h1>

        <div id='button-container' className='flex gap-5'>
          <Button children="Buy Now"/>
          <button onClick={()=>{removeFromCart(id)}} className='px-4 py-1 text-[3vw] md:text-[1.8vw] rounded-lg w-fit rounded-bl-none hover:scale-[1.08] transition-all text-black bg-[#EABEFF]'>Remove from Cart</button>
        </div>

      </div>
    </div>
        
  )
}

export default CartProduct
