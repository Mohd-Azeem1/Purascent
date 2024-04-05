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

    // checkAuth? Dispatch(add({id, title, description, price, image})) : navigate('/login')
  }




  return (
    <div id='product-card' className='w-[20vw] h-[50vh] relative hover:scale-[1.03] hover:shadow-[10px_10px_10px_10px_rgba(0,0,0,0.4)] h transition-all'>
        <img className='w-full h-full object-cover object-center' src={image} alt="" />

      <div id='product-card-info' className='w-full h-1/2 bg-gradient-to-t from-black backdrop-blur-sm absolute bottom-0 p-4 py-1 junge flex flex-col transition-all'>
        <div>
        <h1 className=' text-[1.4vw] text-white'>{title}</h1>
        <h1 className=' text-[.7vw] text-white'>{description ? description :'Lorem ipsum dolor sit amet consectetur '}</h1>
        </div>

        <div className='flex justify-between items-center text-white '>
            <h1>Price:  <span className='text-[#EABEFF]'>${price}</span></h1>
            
            <Link to={'collection'}><Button children="Buy"/></Link>
        </div>
        
        <button onClick={addToCart} className='junge w-full mt-5 mx-auto rounded-md  text-black mb-5 bg-[#EABEFF]'>Add to cart</button>


        
      </div>
      
    </div>
  )
}

export default ProductCard
