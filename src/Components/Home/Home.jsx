import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { easeIn, easeOut, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("#loader h1", {
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      });
      tl.to("#loader h1", {
        x: -40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      });
      tl.to("#loader", {
        opacity: 0,
      });
      tl.to("#loader", {
        display: "none",
      });
      tl.from(".words", {
        y: -100,
        opacity: 0,
        delay: 0.2,
        stagger: 0.1,
        duration: 0.7,
      });
      tl.from("#first_visit_button", {
        opacity: 0,
        duration: 1,
      });
      gsap.from(".first_articl", {
        x: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#page1",
          target: ".first_articl",
          scrub: 4,
          start: "top bottom",
          end: "top 60%",
        },
      });
      gsap.from(".second_articl", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#page2",
          target: ".second_articl",
          scrub: 4,
          start: "top bottom",
          end: "top 60%",
        },
      });
      gsap.from(".third_articl", {
        x: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#page3",
          target: ".third_articl",
          scrub: 4,
          start: "top bottom",
          end: "top 60%",
        },
      });
      gsap.from(".fourth_articl", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#page4",
          target: ".fourth_articl",
          scrub: 4,
          start: "top bottom",
          end: "top 60%",
        },
      });
      gsap.from(".collection_article", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#page6",
          target: ".collection_article",
          scrub: 4,
          start: "top bottom",
          end: "top 60%",
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="w-full min-h-screen relative overflow-y-hidden  bg-[#3A0D4F]">
      <div
        id="loader"
        className=" w-full h-screen bg-[#3A0D4F] junge text-[#EABEFF] text-[2.5vh] flex justify-center items-center gap-2 absolute z-[999]"
      >
        <h1>Welcome</h1>
        <h1>to</h1>
        <h1>Purascent</h1>
      </div>

      <div className="w-full md:pt-0 pt-16">
        <img
          className="w-full -scale-x-100 z-0 max-md:h-[30vh] h-screen object-cover object-top relative"
          src="https://www.mn-net.com/media/image/72/a2/4d/Perfume-spraying-purple-1280px_1280x1280@2x.jpg"
          alt=""
        />
        <div
          className="absolute max-md:h-[30vh] top-[25vh] max-md:top-[12vh] left-[10vw]  junge"
          id="container"
        >
          <div className="overflow-hidden">
            <h1 className="text-[7vw] overflow-hidden font-light text-[#fff]">
              {["P", "U", "R", "A", "S", "C", "E", "N", "T"].map((item) => (
                <span key={item} className="inline-block words">
                  {item}
                </span>
              ))}
            </h1>
          </div>

          <h2 className="words md:text-[2vw] text-[2.5vw] font-light text-[#fff]">
            Feel good, smell grate
          </h2>
          <h2 className="words md:text-[2vw] text-[2.5vw] mb-8 text-[#fff]">
            it’s your signature
          </h2>
          <div id="first_visit_button" className="">
            <Link
              to={"collection"}
              className=" p-4 py-1.5 hover:scale-[1.05] hover:tracking-wide transition-all junge text-white md:text-[2vw] text-[2.5vw] border-2 rounded-2xl rounded-bl-none  border-white backdrop-blur-sm bg-[#ffffff24]"
            >
              Visit Collection
            </Link>
          </div>
        </div>
      </div>

      <div
        id="page1"
        className="w-full md:min-h-[35vw]   overflow-y-visible flex"
      >
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-1/2 h-[100%] -mt-[.1vh] overflow-y-visible flex"
        >
          <img
            className="md:ml-[35%] ml-[20%]  z-20 md:h-[40vw] h-[36vh] md:w-3/6 w-[70%] object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white"
            src="https://t4.ftcdn.net/jpg/06/58/87/17/360_F_658871707_wFzOOLc7seDjq8ieOi6fgPExuXW16BoE.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 h-[100%] text-[#EABEFF] flex flex-col gap-[3vw]">
          <div>
            <h1 className=" first_articl arizonia md:text-[2.5vw] text-[4vw] w-[30vw] leading-none stroke-dash-1 stroke-black mt-12">
              Bloom in Elegance{" "}
              <span className="inline-block">Discover Ethereal Essence</span>
            </h1>
            <h3 className=" first_articl junge md:w-[30vw] w-[42vw] md:ml-3 ml-2 mt-2 md:text-[1.7vw] text-[3vw] max-md:leading-tight">
              Ethereal Essence perfume captivates with its delicate blend of
              jasmine, rose, and magnolia. Experience floral bliss in every
              spritz, a gentle reminder of nature's beauty. Embark on a journey
              of elegance and grace with Ethereal Essence – your signature scent
              awaits.
            </h3>
          </div>

          <Link
            to={"collection"}
            className="junge w-fit border-[1px] bg-[#EABEFF] hover:scale-[1.2] md:text-[1.3vw] text-[3vw] transition-all text-black border-[#EABEFF] px-[1.3vw] py-[0.5vw] rounded-2xl rounded-bl-none"
          >
            VISIT
          </Link>
        </div>
      </div>

      <div
        id="page2"
        className="w-full md:h-[45vw] mb-7 overflow-y-visible flex"
      >
        <div className="w-[50vw] ml-[10vw] h-[100%] text-[#EABEFF] relative">
          <h1 className="second_articl arizonia  md:text-[2.5vw] text-[4vw] w-[30vw] max-md:leading-none stroke-dash-1 stroke-black mt-12">
            Petals of Passion{" "}
            <span className="inline-block">
              Adorn Yourself in Rose Elegance
            </span>
          </h1>
          <h3 className="second_articl junge md:ml-3 ml-2 mt-2 mb-[1vw] md:w-[30vw] w-[42vw] md:text-[1.7vw] text-[3vw] max-md:leading-tight">
            Immerse yourself in the timeless allure of our Rose Elegance
            perfume. Each drop is a poetic dance of fresh rose petals. This
            enchanting fragrance is a celebration of romance and femininity, a
            fragrant ode to the beauty of blooming roses. Unveil the essence of
            passion with Rose Elegance – an exquisite bouquet for the modern
            romantic.
          </h3>
          <Link
            to={"collection"}
            className="junge border-[1px] bg-[#EABEFF]  text-black border-[#EABEFF] hover:scale-[1.2] md:text-[1.3vw] text-[3vw] transition-all px-[1.3vw] py-[0.5vw] rounded-2xl rounded-bl-none"
          >
            VISIT
          </Link>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-[60%] h-[100%] overflow-y-visible"
        >
          <img
            className=" ml-[5.5vw] md:-mt-10 mt-20 z-20 md:h-[40vw] h-[36vh] md:w-3/6 w-[70%] object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white"
            src="https://pics.craiyon.com/2024-01-24/F3is5AMKRZ6bMvPKu6MS7g.webp"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[20vw] bg-[#714486] text-2xl flex justify-evenly items-center">
        <div className="justify-center h-full w-10% flex flex-col items-center">
          <div id="lb" className="w-[60%] h-[45%]"></div>
          <div className="junge text-white">
            <h3 className="text-center text-[1.5vw] h-[1.5vw] w-full">
              Lavender Bloom
            </h3>
            <h6 className="felx text-[1vw] h-fit w-full">
              A calming and romantic flower
            </h6>
          </div>
        </div>

        <div className="justify-center h-full w-10% flex flex-col items-center">
          <div id="mr" className="w-[60%] h-[45%]"></div>
          <div className="junge text-white">
            <h3 className="text-center text-[1.5vw] h-[1.5vw] w-full">
              Marigold Radiance
            </h3>
            <h6 className="felx text-[1vw]">A warm and radiant aroma</h6>
          </div>
        </div>

        <div className="justify-center h-full w-10% flex flex-col items-center">
          <div id="lb" className="w-[60%] h-[45%]"></div>
          <div className="junge text-white">
            <h3 className="text-center text-[1.5vw] h-[1.5vw] w-full">
              Lavender Bloom
            </h3>
            <h6 className="felx text-[1vw] h-fit w-full">
              A calming and romantic flower
            </h6>
          </div>
        </div>

        <div className="justify-center h-full w-10% flex flex-col items-center">
          <div id="lb" className="w-[60%] h-[45%]"></div>
          <div className="junge text-white">
            <h3 className="text-center text-[1.5vw] h-[1.5vw] w-full">
              Lavender Bloom
            </h3>
            <h6 className="felx text-[1vw] h-fit w-full">
              A calming and romantic flower
            </h6>
          </div>
        </div>
      </div>

      <div className="w-full  text-[#EABEFF] arizonia flex flex-col md:text-[4.5vw] text-[7vw]">
        <span className="ml-[30vw] ">Sunshine sprit</span>
        <span className="ml-[45vw] md:-mt-5">Day perfumes</span>
      </div>

      <div id="page3" className="w-full   overflow-y-visible flex ">
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-1/2 h-[100%] overflow-y-visible flex"
        >
          <img
            className="md:ml-[35%] ml-[20%] md:-mt-10 z-20 md:h-[40vw] h-[36vh] md:w-3/6 w-[70%] object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white"
            src="https://static.vecteezy.com/system/resources/previews/024/056/989/large_2x/a-high-class-bottle-of-glass-perfume-with-light-red-liquid-aromatic-perfume-bottles-on-white-background-beauty-product-cosmetic-perfume-day-fragrance-day-or-perfume-launch-event-by-ai-generated-free-photo.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 h-[100%] text-[#EABEFF] flex flex-col gap-[3vw]">
          <div>
            <h1 className="third_articl arizonia  md:text-[2.5vw] text-[4vw] w-[40vw] max-md:leading-none stroke-dash-1 stroke-black mt-12">
              Embrace Every Moment with Day Perfumes:{" "}
              <span className="inline-block"> Radiance in a Bottle</span>
            </h1>
            <h3 className="third_articl junge md:ml-3 ml-2 mt-2 md:w-[30vw] w-[42vw] md:text-[1.7vw] text-[3vw] max-md:leading-tight">
              Experience the essence of sunshine with our exclusive collection
              of day perfumes. Crafted to complement your daytime adventures,
              each fragrance captures the vibrancy and freshness of the day.
              From floral bouquets to citrus bursts, our scents evoke the joy of
              new beginnings and the beauty of everyday moments. Embrace the
              warmth of the sun and radiate confidence with our irresistible day
              perfumes.
            </h3>
          </div>
          <Link
            to={"collection"}
            className="junge w-fit border-[1px] bg-[#EABEFF] hover:scale-[1.2] md:text-[1.3vw] text-[3vw]  transition-all text-black border-[#EABEFF] px-[1.3vw] py-[0.5vw] rounded-2xl rounded-bl-none"
          >
            VISIT
          </Link>
        </div>
      </div>

      <div className="w-full  text-[#EABEFF] arizonia mt-3 flex flex-col md:text-[4.5vw] text-[6vw]">
        <span className="ml-[30vw] ">Nighttime Magic </span>
        <span className="ml-[45vw] md:-mt-5">Enchanting Perfumes</span>
      </div>

      <div id="page4" className="w-full  overflow-y-visible flex">
        <div className="w-[50vw] ml-[13vw] h-[100%] text-[#EABEFF] flex flex-col gap-[3vw]">
          <div>
            <h1 className=" fourth_articl arizonia  md:text-[2.5vw] text-[4vw] w-[30vw] max-md:leading-none\ stroke-dash-1 stroke-black mt-12">
              Petals of Passion
              <span className="inline-block">
                Adorn Yourself in Rose Elegance
              </span>
            </h1>
            <h3 className=" fourth_articl junge md:w-[30vw] w-[42vw] md:text-[1.7vw] text-[3vw] max-md:leading-tight">
              Immerse yourself in the timeless allure of our Rose Elegance
              perfume. Each drop is a poetic dance of fresh rose petals. This
              enchanting fragrance is a celebration of romance and femininity, a
              fragrant ode to the beauty of blooming roses. Unveil the essence
              of passion with Rose Elegance – an exquisite bouquet for the
              modern romantic.
            </h3>
          </div>
          <Link
            to={"collection"}
            className="junge w-fit border-[1px] bg-[#EABEFF] hover:scale-[1.2] md:text-[1.3vw] text-[3vw]  transition-all text-black border-[#EABEFF] px-[1.3vw] py-[0.5vw] rounded-2xl rounded-bl-none"
          >
            VISIT
          </Link>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-[50vw] h-[100%] overflow-y-visible flex"
        >
          <img
            className=" md:-mt-10 z-20 md:h-[40vw] h-[36vh] md:w-3/6 w-[70%] object-cover hover:scale-[1.05] transition-all object-center border-[1px] shadow-black shadow-lg border-white"
            src="../src/images/perfumes/nightperfume.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[10vh] bg-[#714486] mt-5 arizonia text-3xl text-[#EABEFF] flex justify-evenly items-center ">
        Our Collection
      </div>

      <div className="w-full md:min-h-screen flex md:gap-14 gap-5 justify-center flex-wrap p-10 px-[10vw]">
        <ProductCard
          title="Ocean Breeze"
          description={
            "Refreshing notes of sea salt, bergamot, and driftwood capture the invigorating essence of a coastal breeze, perfect for those who love the ocean's embrace."
          }
          price={299}
          image={
            "https://img.freepik.com/free-photo/top-view-male-self-care-product_23-2150347092.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
          }
        />
        <ProductCard
          title="Golden Sunset"
          description={
            "Experience the warmth of a golden sunset with this fragrance, mandarin, and sandalwood for a radiant and uplifting olfactory journey."
          }
          price={299}
          image={
            "https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
          }
        />
        <ProductCard
          title="Midnight Orchid"
          description={
            "A mysterious and seductive blend of dark orchids, black currant, and velvety vanilla, designed to allure and captivate under the veil of night."
          }
          price={299}
          image={
            "https://img.freepik.com/free-vector/vector-3d-realistic-cosmetic-background-with-glass-jar-night-cosmetics_33099-1145.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
          }
        />
        <ProductCard
          title="Whimsical Bloom"
          description={
            "A whimsical bouquet of fresh peonies, blooming roses, and dewy freesias, encapsulating the joyful essence of a spring garden."
          }
          price={299}
          image={
            "https://img.freepik.com/premium-photo/perfumery_160204-1535.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
          }
        />
        <ProductCard
          title="Mystic Ember"
          description={
            "An enchanting fragrance with notes of smoky oud wood, spicy cinnamon, and sweet vanilla, reminiscent of a mystical journey by the firelight."
          }
          price={299}
          image={
            "https://img.freepik.com/free-photo/front-view-expensive-fragnance-with-flowers-dark-background-color-perfume-gift-present-love-marriage-scent-flower_140725-158075.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
          }
        />
        <ProductCard
          title="Whispering Jasmine"
          description={
            "A delicate blend of jasmine petals and warm musk, evoking a sense of serenity and elegance."
          }
          price={299}
          image={
            "https://img.freepik.com/free-photo/ecofriendly-beauty-product_23-2150669106.jpg?size=626&ext=jpg&ga=GA1.1.1687116295.1709187295&semt=ais"
          }
        />
      </div>

      <div className="w-full  text-[#EABEFF] arizonia flex justify-center items-center text-[4.5vw]">
        <span className="border-b-[1px] border-[#EABEFF]">Explore </span>
      </div>

      <div id="page6" className="w-full flex h-[60vw] bg-light-50">
        <div className="w-[70%] flex justify-center items-center py-10 px-5">
          <h4 className="junge collection_article md:text-[1.5vw] text-[2.5vw] text-[#EABEFF] md:w-[70%] w-[100%]">
            Embark on an olfactory journey and explore our exquisite perfume
            collection. Each fragrance is meticulously crafted to evoke
            emotions, memories, and moments of pure bliss. From captivating
            florals to intoxicating woody notes and refreshing citrus blends,
            our collection offers a scent for every mood and occasion. Discover
            the essence of luxury, sophistication, and individuality within our
            carefully curated selection. Allow our perfumes to transport you to
            a world of unparalleled elegance and sensory delight. Begin your
            exploration today and uncover the perfect fragrance that resonates
            with your unique style and personality.
          </h4>
        </div>

        <div className="w-[30%] bg-light-300 h-[60vw] flex flex-col justify-evenly items-center">
          <div
            id="collection-photo"
            className="w-[22vw] h-[26vw] hover:scale-[1.05] transition-all border-[1px] shadow-black shadow-lg border-white mb-10"
          ></div>
          <Link
            to={"collection"}
            className="junge  border-[1px] bg-[#EABEFF] text-[1.3vw] hover:text-[1.4vw] transition-all text-black border-[#EABEFF] px-4 py-2 rounded-2xl rounded-bl-none ml-[12vw]"
          >
            Explore
          </Link>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="0.06"
        className="w-full p-10 bg-[#704485] flex justify-center items-center shadow-[0px_-10px_10px_10px_rgba(0,0,0,0.3)]"
      >
        <div className=" flex justify-center items-center flex-col arizonia">
          <div
            id="Azeem"
            className="md:w-[7vw] w-[13vw] md:h-[7vw] h-[13vw] rounded-full"
          ></div>
          <h1 className="text-white md:text-[2vw] text-[4.5vw] border-b-[1px] border-[#EABEFF]">
            Mohd Azeem
          </h1>
          <h1 className="text-white md:text-[2vw] text-[4.5vw] md:w-[32vw] w-[80vw] border-b-[1px] border-[#EABEFF] text-center">
            This is a college final year project made by Mohd Azeem.
          </h1>
          <h1 className="text-white md:text-[2vw] text-[4.5vw] border-b-[1px] border-[#EABEFF]">
            Contact
          </h1>

          <div className="flex gap-5 justify-between">
            <div className="flex flex-col items-center w-[25vw]">
              <h1 className="text-[#EABEFF] md:text-[2vw] text-[4.5vw] border-b-[1px] border-[#EABEFF]">
                Email
              </h1>
              <h1 className="text-[#fff] md:text-[2vw] text-[4vw]">
                msajifdf123@gmail.com
              </h1>
            </div>

            <div className="flex flex-col items-center w-[30vw]">
              <h1 className="text-[#EABEFF] md:text-[2vw] text-[4.5vw] border-b-[1px] border-[#EABEFF]">
                What's App
              </h1>
              <h1 className="text-[#fff] md:text-[2vw] text-[4vw]  ">
                9058872916
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
