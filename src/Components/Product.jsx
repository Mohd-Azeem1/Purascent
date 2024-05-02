import React from 'react'
import { useParams } from 'react-router-dom'

function Product({id=Date.now(), title='Perfume', description, price=499, image}) {
  const {productId} = useParams()
  const firts_image = image?image:"https://img.freepik.com/free-photo/top-view-male-self-care-product_23-2150347092.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
  const second_image = "https://img.freepik.com/free-photo/ecofriendly-beauty-product_23-2150669106.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
  const third_image = "https://img.freepik.com/free-vector/vector-3d-realistic-cosmetic-background-with-glass-jar-night-cosmetics_33099-1145.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
  const fourth_image = "https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"



  return (
    <div className="overflow-x-hidden">
      <div
        id="cart"
        className="w-full min-h-screen md:pt-[12vh] pt-[12vh] md:p-[2vw] p-[3vw] md:pb-[10vh] pb-[15vh] shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)] flex justify-center "
      >
        <div className='w-[100vw] md:h-[75vh]  backdrop-blur-xl border-[1px] border-white flex md:flex-row flex-col justify-center overflow-hidden rounded-xl'>
          <div id='product-image' className='md:w-[35%] w-full md:h-full h-[35vh] sticky border-[0.6px] border-white'>
            <img src={image? image :"https://img.freepik.com/free-photo/top-view-male-self-care-product_23-2150347092.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} alt="" className='w-full h-full object-cover  object-center'/>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 h-[20%] w-[80%]  z-10 flex justify-between items-center'>
              <div id='p-image-1' className='h-[86%] w-[22%]  border-[0.5px] border-white'>
                <img src={firts_image} alt=""  className='w-full h-full object-cover object-center'/>
              </div>
              <div id='p-image-2' className='h-[86%] w-[22%] border-[0.5px] border-white'>
                <img src={second_image} alt="" className='w-full h-full object-cover object-center' />
              </div>
              <div id='p-image-3' className='h-[86%] w-[22%] border-[0.5px] border-white'>
                <img src={third_image} alt=""  className='w-full h-full object-cover object-center'/>
              </div>
              <div id='p-image-4' className='h-[86%] w-[22%] border-[0.5px] border-white'>
                <img src={fourth_image} alt=""  className='w-full h-full object-cover object-center'/>
              </div>
            </div>
          </div>
          <div id='product-details' className='md:w-[65%] w-full md:min-h-full min-h-[50vh] p-3'>
            <h1 className='junge text-white md:text-[3vw] text-[7vw] w-full'>{title? title : "Purascent"}</h1>
            <h1 className='junge text-white md:text-[1.5vw] text-[3vw] w-full'>{description? description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vel doloribus, deleniti, quia quo consectetur animi eius quasi velit neque nisi autem perferendis? Incidunt quidem non voluptas inventore repellendus debitis!"}</h1>
            <h1 className='junge text-white md:text-[2vw] text-[5vw] w-full mt-10'>Price: ${price?price:"299"} <span className='line-through text-[#9f9f9f] ml-[5vw]'>$599</span></h1>
            <div className='flex md:w-[50%] w-full justify-evenly items-center mt-10'>
              <button className='md:px-[4vw] md:py-[1vw] md:text-[1.5vw] text-[5vw] px-[6vw] py-[3vw] bg-[#EABEFF] junge rounded-md '>Add to cart</button>
              <button className='md:px-[4vw] md:py-[1vw] md:text-[1.5vw] text-[5vw] px-[15vw] py-[3vw] bg-[#EABEFF] junge rounded-md '>BUY</button>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Product
