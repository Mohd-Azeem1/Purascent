import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
function Home() {
  
  return (
    <div className='w-full min-h-screen relative bg-[#3A0D4F]'>

      <div className='w-full h-screen'>
        <img className='w-full -scale-x-100 z-0 h-screen object-cover object-top relative' src="https://www.mn-net.com/media/image/72/a2/4d/Perfume-spraying-purple-1280px_1280x1280@2x.jpg" alt="" />
        <div className='absolute top-[25vh] left-[10vw] junge' id='container'>
          <h1 className='text-[7vw] font-light text-[#fff]'>PURASCENT</h1>
          <h2 className='text-[2vw] font-light text-[#fff]'>Feel good, smell grate</h2>
          <h2 className='text-[2vw] mb-8 text-[#fff]'>it’s your signature</h2>
          <Link to={'collection'} className='p-4 py-1.5 hover:scale-[1.05] hover:tracking-wide transition-all junge text-white text-[2vw] border-2 rounded-2xl rounded-bl-none  border-white backdrop-blur-sm bg-[#ffffff24]'>Visit Collection</Link>
        </div>
      </div>

      <div className='w-full h-[80vh] overflow-y-visible flex'>
        <div className='w-1/2 h-[100%] overflow-y-visible flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh] w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="https://t4.ftcdn.net/jpg/06/58/87/17/360_F_658871707_wFzOOLc7seDjq8ieOi6fgPExuXW16BoE.jpg" alt="" />
        </div>
        <div className='w-1/2 h-[100%] text-[#EABEFF] relative'>
          <h1 className='arizonia text-[2.5vw] w-[30vw]  stroke-dash-1 stroke-black mt-12'>Bloom in Elegance <span className='inline-block'>Discover Ethereal Essence</span></h1>
          <h3 className='junge w-[30vw] text-lg'>Ethereal Essence perfume captivates with its delicate blend of jasmine, rose, and magnolia. Experience floral bliss in every spritz, a gentle reminder of nature's beauty. Embark on a journey of elegance and grace with Ethereal Essence – your signature scent awaits.</h3>
          <Link to={'collection'} className='junge absolute right-60 top-80 border-[1px] bg-[#EABEFF] hover:text-[1.2vw] transition-all text-black border-[#EABEFF] px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>
      </div>

      <div className='w-full h-[80vh] overflow-y-visible flex'>
        
        <div className='w-[50vw] ml-[13vw] h-[100%] text-[#EABEFF] relative'>
          <h1 className='arizonia  text-[2.5vw] w-[40vw]  stroke-dash-1 stroke-black mt-12'>Petals of Passion <span className='inline-block'>Adorn Yourself in Rose Elegance</span></h1>
          <h3 className='junge mb-8 w-[30vw] text-lg'>Immerse yourself in the timeless allure of our Rose Elegance perfume. Each drop is a poetic dance of fresh rose petals. This enchanting fragrance is a celebration of romance and femininity, a fragrant ode to the beauty of blooming roses. Unveil the essence of passion with Rose Elegance – an exquisite bouquet for the modern romantic.</h3>
          <Link to={'collection'} className='junge border-[1px] bg-[#EABEFF] text-black border-[#EABEFF] hover:text-[1.2vw] transition-all px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>

        <div className='w-[50vw] h-[100%] overflow-y-visible flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh]  w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="https://pics.craiyon.com/2024-01-24/F3is5AMKRZ6bMvPKu6MS7g.webp" alt="" />
        </div>

      </div>

      <div className='w-full h-[30vh] bg-[#714486] text-2xl flex justify-evenly items-center'>
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
      <div className='w-full h-[80vh] overflow-y-visible flex relative'>
        <div className='w-1/2 h-[100%] overflow-y-visible flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh] w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="https://static.vecteezy.com/system/resources/previews/024/056/989/large_2x/a-high-class-bottle-of-glass-perfume-with-light-red-liquid-aromatic-perfume-bottles-on-white-background-beauty-product-cosmetic-perfume-day-fragrance-day-or-perfume-launch-event-by-ai-generated-free-photo.jpg" alt="" />
        </div>
        <div className='w-1/2 h-[100%] text-[#EABEFF] flex flex-col relative'>
          <h1 className='arizonia text-[2.5vw]   stroke-dash-1 stroke-black mt-12'>Embrace Every Moment with Day Perfumes: <span className='inline-block'> Radiance in a Bottle</span></h1>
          <h3 className='junge w-[30vw] text-lg'>Experience the essence of sunshine with our exclusive collection of day perfumes. Crafted to complement your daytime adventures, each fragrance captures the vibrancy and freshness of the day. From floral bouquets to citrus bursts, our scents evoke the joy of new beginnings and the beauty of everyday moments. Embrace the warmth of the sun and radiate confidence with our irresistible day perfumes.</h3>
          <Link to={'collection'} className='junge absolute right-60 top-96 border-[1px] bg-[#EABEFF] hover:text-[1.2vw] transition-all text-black border-[#EABEFF] felx-end px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>
      </div>

      <div className='w-full  text-[#EABEFF] arizonia flex flex-col text-[4.5vw]'>
           <span className='ml-[30vw] '>Nighttime Magic </span>
           <span className='ml-[45vw] -mt-5'>Enchanting Perfumes</span>
      </div>

      <div className='w-full h-[80vh] overflow-y-visible flex'>
        
        <div className='w-[50vw] ml-[13vw] h-[100%] text-[#EABEFF] relative'>
          <h1 className='arizonia  text-[2.5vw] w-[40vw]  stroke-dash-1 stroke-black mt-12'>Petals of Passion <span className='inline-block'>Adorn Yourself in Rose Elegance</span></h1>
          <h3 className='junge mb-8 w-[30vw] text-lg'>Immerse yourself in the timeless allure of our Rose Elegance perfume. Each drop is a poetic dance of fresh rose petals. This enchanting fragrance is a celebration of romance and femininity, a fragrant ode to the beauty of blooming roses. Unveil the essence of passion with Rose Elegance – an exquisite bouquet for the modern romantic.</h3>
          <Link to={'collection'} className='junge border-[1px] bg-[#EABEFF] text-black border-[#EABEFF] hover:text-[1.2vw] transition-all px-4 py-2 rounded-2xl rounded-bl-none'>VISIT</Link>
        </div>

        <div className='w-[50vw] h-[100%] overflow-y-visible flex'>
          <img className='ml-[35%] -mt-10 z-20 h-[80vh]  w-3/6 object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white' src="../src/images/perfumes/nightperfume.png" alt="" />
        </div>

      </div>

      <div className='w-full h-[10vh] bg-[#714486] arizonia text-3xl text-[#EABEFF] flex justify-evenly items-center '>Our Collection</div>

      <div className='w-full min-h-screen flex gap-10 justify-center flex-wrap p-5 px-40'>
      <ProductCard id={Date.now()} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      </div>

      <div className='w-full  text-[#EABEFF] arizonia flex justify-center items-center text-[4.5vw]'>
           <span className='border-b-[1px] border-[#EABEFF]'>Explore </span>
           
      </div>

      <div className='w-full h-[65vh] flex bg-light-50'>

        <div className='w-[60%] flex justify-center items-center py-10'>
          <h4 className='junge text-xl text-white w-[60%]'>Embark on an olfactory journey and explore our exquisite perfume collection. Each fragrance is meticulously crafted to evoke emotions, memories, and moments of pure bliss. From captivating florals to intoxicating woody notes and refreshing citrus blends, our collection offers a scent for every mood and occasion. Discover the essence of luxury, sophistication, and individuality within our carefully curated selection. Allow our perfumes to transport you to a world of unparalleled elegance and sensory delight. Begin your exploration today and uncover the perfect fragrance that resonates with your unique style and personality.</h4>
        </div>

        <div className='w-40% bg-light-300 h-[100%]'> 
          <Link to={'collection'} ><div id='collection-photo' className='w-[18vw] h-[22vw] hover:scale-[1.05] transition-all border-[1px] shadow-black shadow-lg border-white mb-10'></div></Link>
          <Link to={'collection'} className='junge  border-[1px] bg-[#EABEFF] hover:text-[1.2vw] transition-all text-black border-[#EABEFF] px-4 py-2 rounded-2xl rounded-bl-none ml-[12vw]'>Explore</Link>
        </div>

      </div>


      <div className='w-full h-[70vh] bg-[#704485] flex justify-center items-center shadow-[0px_-10px_10px_10px_rgba(0,0,0,0.3)]'>
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
