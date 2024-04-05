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
      <div  className='w-full  flex flex-wrap justify-center gap-10 p-10'>
      <ProductCard title='Ocean Breeze' description={"Refreshing notes of sea salt, bergamot, and driftwood capture the invigorating essence of a coastal breeze, perfect for those who love the ocean's embrace."} price={299} image={"https://img.freepik.com/free-photo/top-view-male-self-care-product_23-2150347092.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Golden Sunset' description={"Experience the warmth of a golden sunset with this fragrance, blending notes of amber, mandarin, and sandalwood for a radiant and uplifting olfactory journey."} price={599} image={"https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Midnight Orchid' description={"A mysterious and seductive blend of dark orchids, black currant, and velvety vanilla, designed to allure and captivate under the veil of night."} price={349} image={"https://img.freepik.com/free-vector/vector-3d-realistic-cosmetic-background-with-glass-jar-night-cosmetics_33099-1145.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Whimsical Bloom' description={"A whimsical bouquet of fresh peonies, blooming roses, and dewy freesias, encapsulating the joyful essence of a spring garden."} price={714} image={"https://img.freepik.com/premium-photo/perfumery_160204-1535.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Mystic Ember' description={"An enchanting fragrance with notes of smoky oud wood, spicy cinnamon, and sweet vanilla, reminiscent of a mystical journey by the firelight."} price={459} image={"https://img.freepik.com/free-photo/front-view-expensive-fragnance-with-flowers-dark-background-color-perfume-gift-present-love-marriage-scent-flower_140725-158075.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Whispering Jasmine' description={"A delicate blend of jasmine petals and warm musk, evoking a sense of serenity and elegance."} price={410} image={"https://img.freepik.com/free-photo/ecofriendly-beauty-product_23-2150669106.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Velvet Noir' description={"A luxurious and intoxicating blend of black rose, velvety vanilla, and spicy patchouli, exuding an aura of dark glamour and sophistication."} price={105} image={"https://img.freepik.com/premium-psd/luxury-perfume-logo-mockup-black-background-brand-presentation-3d-render_360590-379.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Enchanted Forest' description={" Lose yourself in the depths of an enchanted forest with this fragrance, where notes of moss, cedarwood, and wild berries create a mystical and earthy aroma."} price={207} image={"https://t3.ftcdn.net/jpg/06/02/12/24/240_F_602122476_jNgXjRe3em5Ea85MOzCBoQ7vWNhJRlGY.jpg"} />

      </div>
    </div>
  )
}

export default Collection
