import React from 'react'
import ProductCard from './ProductCard'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Collection() {
  return (
    <div  className='w-full min-h-screen bg-[#3A0D4F] pt-14'>
      <div id='collection-banner-photo' className='w-full h-[20vw] flex flex-wrap justify-between'>

      </div>
      <div className='w-full h-[10vh] bg-[#714486] junge  px-10 text-white items-center'>
        <h1 className='text-[1.5vw] '>Products</h1>

        <div className='flex justify-between w-[70vw] '>

        <div className='flex justify-between w-[10%]'>
          <FontAwesomeIcon icon={faFilter} />
          <h4>Filter</h4>
        </div>


        <div className='flex items-center justify-between w-[40vw]'>
          
              <h3>All</h3>
              <h3>Best Seller</h3>
              <h3>New Arrivel</h3>
              <h3>Most Loved</h3>
          
        </div>

        </div>

      </div>
      <div  className='w-full min-h-[100vw] flex flex-wrap justify-center gap-10 p-10'>

        <ProductCard id={Date.now()} title={'Rose Reverie'} description={'Captivating blend echoing timel .....'} price={'599'}/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Collection
