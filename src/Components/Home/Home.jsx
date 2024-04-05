import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { easeIn, easeOut, motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


function Home() {
  
  
useGSAP(()=>{
  const tl = gsap.timeline()
  tl.from('#loader h1',{
    x:40,
    opacity: 0,
    stagger: .1,
    duration: 1

  })
  tl.to('#loader h1',{
    x:-40,
    opacity: 0,
    stagger: .1,
    duration: 1
  })
  tl.to('#loader',{
    opacity: 0,
  })
  tl.to('#loader',{
    display: 'none',
  })
  tl.from('.words',{
    y: -100,
    opacity: 0,
    delay: .2,
    stagger: .1,
    duration: .7, 
  })
  tl.from('#first_visit_button',{
    opacity: 0,
    duration: 1,
  })
  gsap.from('.first_articl',{
    x:100,
    opacity: 0,
    duration: .6,
    stagger: .1,
    scrollTrigger:{
      trigger: '#page1',
      target: '.first_articl',
      scrub: 4,
      start: 'top bottom',
      end: 'top 60%'

    }
  })
  gsap.from('.second_articl',{
    x:-100,
    opacity: 0,
    duration: .6,
    stagger: .1,
    scrollTrigger:{
      trigger: '#page2',
      target: '.second_articl',
      scrub: 4,
      start: 'top bottom',
      end: 'top 60%'

    }
  })
  gsap.from('.third_articl',{
    x:100,
    opacity: 0,
    duration: .6,
    stagger: .1,
    scrollTrigger:{
      trigger: '#page3',
      target: '.third_articl',
      scrub: 4,
      start: 'top bottom',
      end: 'top 60%'

    }
  })
  gsap.from('.fourth_articl',{
    x:-100,
    opacity: 0,
    duration: .6,
    stagger: .1,
    scrollTrigger:{
      trigger: '#page4',
      target: '.fourth_articl',
      scrub: 4,
      start: 'top bottom',
      end: 'top 60%'

    }
  })
  gsap.from('.collection_article',{
    x:-100,
    opacity: 0,
    duration: .6,
    stagger: .1,
    scrollTrigger:{
      trigger: '#page6',
      target: '.collection_article',
      scrub: 4,
      start: 'top bottom',
      end: 'top 60%'

    }
  })
  
  


},{dependencies:[]})


  return (
    <div className='w-full min-h-screen relative overflow-y-hidden  bg-[#3A0D4F]'>
    <div id='loader' className=' w-full h-screen bg-[#3A0D4F] junge text-[#EABEFF] text-[1.5vw] flex justify-center items-center gap-2 absolute z-[999]'>
        
        <h1>Wellcome</h1>
        <h1>to</h1>
        <h1>Purascent</h1>
        
      </div>
      

      <div className='w-full h-screen'>
        <img className='w-full -scale-x-100 z-0 h-screen object-cover object-top relative' src="https://www.mn-net.com/media/image/72/a2/4d/Perfume-spraying-purple-1280px_1280x1280@2x.jpg" alt="" />
        <div className='absolute  top-[25vh] left-[10vw]  junge' id='container'>

          <div className='overflow-hidden'>
          <h1 className='text-[7vw] overflow-hidden font-light text-[#fff]'>{['P','U','R','A','S','C','E','N','T'].map((item => <span key={item} className='inline-block words' >{item}</span>))}</h1>
          </div>

          <h2 className='words text-[2vw] font-light text-[#fff]'>Feel good, smell grate</h2>
          <h2 className='words text-[2vw] mb-8 text-[#fff]'>it’s your signature</h2>
          <div id='first_visit_button' className=''> 
          <Link to={'collection'}  className=' p-4 py-1.5 hover:scale-[1.05] hover:tracking-wide transition-all junge text-white text-[2vw] border-2 rounded-2xl rounded-bl-none  border-white backdrop-blur-sm bg-[#ffffff24]'>Visit Collection</Link>
          </div>
        </div>
      </div>

      <div id='page1' className='w-full h-[80vh] overflow-y-visible flex'>
        <div data-scroll data-scroll-speed="0.2" className='w-1/2 h-[100%] -mt-[.1vh] overflow-y-visible flex'>
          <img  className='ml-[35%]  z-20 h-[80vh] w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="https://t4.ftcdn.net/jpg/06/58/87/17/360_F_658871707_wFzOOLc7seDjq8ieOi6fgPExuXW16BoE.jpg" alt="" />
        </div>
        <div className='w-1/2 h-[100%] text-[#EABEFF] relative'>
          <h1 className=' first_articl arizonia text-[2.5vw] w-[30vw]  stroke-dash-1 stroke-black mt-12'>Bloom in Elegance <span className='inline-block'>Discover Ethereal Essence</span></h1>
          <h3 className=' first_articl junge w-[30vw] text-lg'>Ethereal Essence perfume captivates with its delicate blend of jasmine, rose, and magnolia. Experience floral bliss in every spritz, a gentle reminder of nature's beauty. Embark on a journey of elegance and grace with Ethereal Essence – your signature scent awaits.</h3>
          <Link to={'collection'} className='junge absolute right-60 top-80 border-[1px] bg-[#EABEFF] hover:text-[1.2vw] transition-all text-black border-[#EABEFF] px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>
      </div>

      <div id='page2' className='w-full h-[80vh] overflow-y-visible flex'>
        
        <div className='w-[50vw] ml-[13vw] h-[100%] text-[#EABEFF] relative'>
          <h1 className='second_articl arizonia  text-[2.5vw] w-[40vw]  stroke-dash-1 stroke-black mt-12'>Petals of Passion <span className='inline-block'>Adorn Yourself in Rose Elegance</span></h1>
          <h3 className='second_articl junge mb-8 w-[30vw] text-lg'>Immerse yourself in the timeless allure of our Rose Elegance perfume. Each drop is a poetic dance of fresh rose petals. This enchanting fragrance is a celebration of romance and femininity, a fragrant ode to the beauty of blooming roses. Unveil the essence of passion with Rose Elegance – an exquisite bouquet for the modern romantic.</h3>
          <Link to={'collection'} className='junge border-[1px] bg-[#EABEFF] text-black border-[#EABEFF] hover:text-[1.2vw] transition-all px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>

        <div data-scroll data-scroll-speed="0.2" className='w-[50vw] h-[100%] overflow-y-visible  flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh]  w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="https://pics.craiyon.com/2024-01-24/F3is5AMKRZ6bMvPKu6MS7g.webp" alt="" />
        </div>

      </div>

      <div  className='w-full h-[30vh] bg-[#714486] text-2xl flex justify-evenly items-center'>
        <div className='justify-center flex flex-col items-center'>
          <div id='lb'  className='w-[100px] h-[100px]'></div>
          <div className='junge text-white'>
            <h3 className='text-center'>Lavender Bloom</h3>
            <h6 className='felx text-[1vw]'>A calming and romantic flower</h6>
          </div>
        </div>
       
        <div className='justify-center flex flex-col items-center'>
          <div id='mr'  className='w-[100px] h-[100px]'></div>
          <div className='junge text-white'>
            <h3 className='text-center'>Marigold Radiance</h3>
            <h6 className='felx text-[1vw]'>A warm and radiant aroma</h6>
          </div>
        </div>
       
        <div className='justify-center flex flex-col items-center'>
          <div id='lb'  className='w-[100px] h-[100px]'></div>
          <div className='junge text-white'>
            <h3 className='text-center'>Lavender Bloom</h3>
            <h6 className='felx text-[1vw]'>A calming and romantic flower</h6>
          </div>
        </div>
       
        <div className='justify-center flex flex-col items-center'>
          <div id='lb'  className='w-[100px] h-[100px]'></div>
          <div className='junge text-white'>
            <h3 className='text-center'>Lavender Bloom</h3>
            <h6 className='felx text-[1vw]'>A calming and romantic flower</h6>
          </div>
        </div>
       
      </div>

        <div className='w-full  text-[#EABEFF] arizonia flex flex-col text-[4.5vw]'>
           <span className='ml-[30vw] '>Sunshine sprit</span>
           <span className='ml-[45vw] -mt-5'>Day perfumes</span>
         </div>


      <div id='page3' className='w-full h-[80vh] overflow-y-visible flex relative'>
        <div data-scroll data-scroll-speed="0.2" className='w-1/2 h-[100%] overflow-y-visible flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh] w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="https://static.vecteezy.com/system/resources/previews/024/056/989/large_2x/a-high-class-bottle-of-glass-perfume-with-light-red-liquid-aromatic-perfume-bottles-on-white-background-beauty-product-cosmetic-perfume-day-fragrance-day-or-perfume-launch-event-by-ai-generated-free-photo.jpg" alt="" />
        </div>
        <div className='w-1/2 h-[100%] text-[#EABEFF] flex flex-col relative'>
          <h1 className='third_articl arizonia text-[2.5vw]   stroke-dash-1 stroke-black mt-12'>Embrace Every Moment with Day Perfumes: <span className='inline-block'> Radiance in a Bottle</span></h1>
          <h3 className='third_articl junge w-[30vw] text-lg'>Experience the essence of sunshine with our exclusive collection of day perfumes. Crafted to complement your daytime adventures, each fragrance captures the vibrancy and freshness of the day. From floral bouquets to citrus bursts, our scents evoke the joy of new beginnings and the beauty of everyday moments. Embrace the warmth of the sun and radiate confidence with our irresistible day perfumes.</h3>
          <Link to={'collection'} className='junge absolute right-60 top-96 border-[1px] bg-[#EABEFF] hover:text-[1.2vw] transition-all text-black border-[#EABEFF] felx-end px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>
      </div>

      <div className='w-full  text-[#EABEFF] arizonia flex flex-col text-[4.5vw]'>
           <span className='ml-[30vw] '>Nighttime Magic </span>
           <span className='ml-[45vw] -mt-5'>Enchanting Perfumes</span>
      </div>

      <div id='page4' className='w-full h-[80vh] overflow-y-visible flex'>
        
        <div className='w-[50vw] ml-[13vw] h-[100%] text-[#EABEFF] relative'>
          <h1 className=' fourth_articl arizonia  text-[2.5vw] w-[40vw]  stroke-dash-1 stroke-black mt-12'>Petals of Passion <span className='inline-block'>Adorn Yourself in Rose Elegance</span></h1>
          <h3 className=' fourth_articl junge mb-8 w-[30vw] text-lg'>Immerse yourself in the timeless allure of our Rose Elegance perfume. Each drop is a poetic dance of fresh rose petals. This enchanting fragrance is a celebration of romance and femininity, a fragrant ode to the beauty of blooming roses. Unveil the essence of passion with Rose Elegance – an exquisite bouquet for the modern romantic.</h3>
          <Link to={'collection'} className='junge border-[1px] bg-[#EABEFF] text-black border-[#EABEFF] hover:text-[1.2vw] transition-all px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>

        <div data-scroll data-scroll-speed="0.2" className='w-[50vw] h-[100%] overflow-y-visible flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh]  w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="../src/images/perfumes/nightperfume.png" alt="" />
        </div>

      </div>

      <div className='w-full h-[10vh] bg-[#714486] arizonia text-3xl text-[#EABEFF] flex justify-evenly items-center '>Our Collection</div>

      <div className='w-full min-h-screen flex gap-10 justify-center flex-wrap p-5 px-40'>
      <ProductCard title='Ocean Breeze' description={"Refreshing notes of sea salt, bergamot, and driftwood capture the invigorating essence of a coastal breeze, perfect for those who love the ocean's embrace."} price={299} image={"https://img.freepik.com/free-photo/top-view-male-self-care-product_23-2150347092.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Golden Sunset' description={"Experience the warmth of a golden sunset with this fragrance, blending notes of amber, mandarin, and sandalwood for a radiant and uplifting olfactory journey."} price={299} image={"https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Midnight Orchid' description={"A mysterious and seductive blend of dark orchids, black currant, and velvety vanilla, designed to allure and captivate under the veil of night."} price={299} image={"https://img.freepik.com/free-vector/vector-3d-realistic-cosmetic-background-with-glass-jar-night-cosmetics_33099-1145.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Whimsical Bloom' description={"A whimsical bouquet of fresh peonies, blooming roses, and dewy freesias, encapsulating the joyful essence of a spring garden."} price={299} image={"https://img.freepik.com/premium-photo/perfumery_160204-1535.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Mystic Ember' description={"An enchanting fragrance with notes of smoky oud wood, spicy cinnamon, and sweet vanilla, reminiscent of a mystical journey by the firelight."} price={299} image={"https://img.freepik.com/free-photo/front-view-expensive-fragnance-with-flowers-dark-background-color-perfume-gift-present-love-marriage-scent-flower_140725-158075.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />
      <ProductCard title='Whispering Jasmine' description={"A delicate blend of jasmine petals and warm musk, evoking a sense of serenity and elegance."} price={299} image={"https://img.freepik.com/free-photo/ecofriendly-beauty-product_23-2150669106.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"} />

      </div>

      <div className='w-full  text-[#EABEFF] arizonia flex justify-center items-center text-[4.5vw]'>
           <span className='border-b-[1px] border-[#EABEFF]'>Explore </span>
           
      </div>

      <div id='page6' className='w-full h-[65vh] flex bg-light-50'>

        <div className='w-[60%] flex justify-center items-center py-10'>
          <h4 className='junge collection_article text-xl text-white w-[60%]'>Embark on an olfactory journey and explore our exquisite perfume collection. Each fragrance is meticulously crafted to evoke emotions, memories, and moments of pure bliss. From captivating florals to intoxicating woody notes and refreshing citrus blends, our collection offers a scent for every mood and occasion. Discover the essence of luxury, sophistication, and individuality within our carefully curated selection. Allow our perfumes to transport you to a world of unparalleled elegance and sensory delight. Begin your exploration today and uncover the perfect fragrance that resonates with your unique style and personality.</h4>
        </div>

        <div className='w-40% bg-light-300 h-[100%]'> 
          <Link to={'collection'} ><div data-scroll data-scroll-speed="0.2" id='collection-photo' className='w-[18vw] h-[22vw] hover:scale-[1.05] transition-all border-[1px] shadow-black shadow-lg border-white mb-10'></div></Link>
          <Link to={'collection'} className='junge  border-[1px] bg-[#EABEFF] hover:text-[1.2vw] transition-all text-black border-[#EABEFF] px-4 py-2 rounded-2xl rounded-bl-none ml-[12vw]'>Explore</Link>
        </div>

      </div>

      
          <div  data-scroll data-scroll-speed="0.06" className='w-full h-[70vh] bg-[#704485] flex justify-center items-center shadow-[0px_-10px_10px_10px_rgba(0,0,0,0.3)]'>
            <div className='w-[32vw] h-[32vw] flex justify-center items-center flex-col arizonia'>
              <div id='Azeem' className='w-[7vw] h-[7vw] rounded-full'></div>
              <h1 className='text-white text-[2vw] border-b-[1px] border-[#EABEFF]'>Mohd Azeem</h1>
              <h1 className='text-white text-[2vw] border-b-[1px] border-[#EABEFF] text-center'>This is a college final year project made by Mohd Azeem.</h1>
              <h1 className='text-white text-[2vw] border-b-[1px] border-[#EABEFF]'>Contact</h1>
              <div className='flex justify-between'>
              <div className='flex flex-col items-center w-[25vw]'>
              <h1 className='text-[#EABEFF] text-[2vw] border-b-[1px] border-[#EABEFF]'>Email</h1>
              <h1 className='text-[#fff] text-[2vw]  '>msajifdf123@gmail.com</h1>
              </div>
    
              <div className='flex flex-col items-center w-[30vw]'>
              <h1 className='text-[#EABEFF] text-[2vw] border-b-[1px] border-[#EABEFF]'>What's App</h1>
              <h1 className='text-[#fff] text-[2vw]  '>9058872916</h1>
              </div>
              </div>
    
            </div>
          </div>
      

      {/* <Footer/> */}


    </div>
  )
}

export default Home
