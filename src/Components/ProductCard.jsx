import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { add, remove } from '../Store/bucketslice'



function ProductCard({id=Date.now(), title='Perfume', description, price=499, image}) {
  
  
  const checkAuth = useSelector(state=>state.status)
  const bucket = useSelector(state => state.bucket.bucket)
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  

  const addToCart = ()=>{
    Dispatch(add({id, title, description, price, image}))

    // checkAuth ? Dispatch(add({id, title, description, price, image})) : navigate('/login')
  }




  return (
    <div id='product-card' className='md:w-[25vw] w-[90vw] md:h-[35vw] h-[100vw] mx-auto relative hover:scale-[1.03] hover:shadow-[10px_10px_10px_10px_rgba(0,0,0,0.4)] h transition-all'>
        <img className='w-full h-full object-cover object-center' src={image} alt="" />

      <div id='product-card-info' className='w-full h-1/2 md:hidden bg-gradient-to-t from-black backdrop-blur-sm absolute bottom-0 p-4 py-1 junge flex flex-col transition-all'>
        <div>
        <h1 className='md:text-[2.3vw] text-[5vw] text-white'>{title}</h1>
        <h1 className='md:text-[1.2vw] text-[4vw] line-clamp-2 leading-snug text-white'>{description ? description :'Lorem ipsum dolor sit amet consectetur '}</h1>
        </div>

        <div className='flex justify-between md:mt-[3vw] mt-[7vw] items-center h-[3vw] text-white '>
            <h1 className='md:text-[1.3vw] text-[5vw]'>Price:  <span className='text-[#EABEFF]'>${price}</span></h1>
            <div>
            <Link to={'collection'}><Button className='md:text-[1vw] max-md:px-[3vw] text-[7vw] mb-3' children="Buy"/></Link>
            </div>
        </div>
        
        <button onClick={addToCart} className='junge w-full md:mt-[1vw] mt-[5vw] mx-auto rounded-md md:text-[1.5vw] text-[7vw]  text-black mb-5 bg-[#EABEFF]'>Add to cart</button>


        
      </div>
      
    </div>
  )
}

export default ProductCard
