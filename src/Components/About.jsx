import React from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



function About() {
  useGSAP(()=>{
    const tl = gsap.timeline()
    gsap.from('.about',{
      x:-100,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page1',
        target: '.first_articl',
        scrub: 4,
        start: 'top 60%',
        end: 'top 30%'
  
      }
    })
    gsap.from('#about-1st-image',{
      delay: 1,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page1',
        target: '#about-1st-image',
        scrub: 4,
        start: 'top 40%',
        end: 'top 20%'
  
      }
    })
    gsap.from('#about-2nd-image',{
      delay: 1,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page2',
        target: '#about-2nd-image',
        scrub: 4,
        start: 'top 40%',
        end: 'top 20%'
  
      }
    })
    gsap.from('.vision',{
      x:100,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page2',
        target: '.vision',
        scrub: 4,  
        start: 'top 60%',
        end: 'top 30%'
  
      }
    })
    gsap.from('.concept',{
      delay: 1,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page2',
        target: '.concept',
        scrub: 4,
        start: '60% 40%',
        end: '60% 15%'
  
      }
    })
    gsap.from('.project',{
      delay: 1,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page3',
        target: '.project',
        scrub: 4,
        start: 'top 50%',
        end: 'top 25%'
  
      }
    })
    gsap.from('.creator',{
      delay: 1,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page3',
        target: '.creator',
        scrub: 4,
        start: '30% 50%',
        end: '30% 25%'
  
      }
    })
    gsap.from('.contact',{
      delay: 1,
      opacity: 0,
      duration: .6,
      stagger: .1,
      scrollTrigger:{
        trigger: '#page3',
        target: '.creator',
        scrub: 4,
        start: '85% 90%',
        end: '85% 65%'
      }
    })
  },[])


  return (
    <div className="overflow-x-hidden">
      <div
        id="cart"
        className="w-full min-h-screen pt-14 shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)]"
      >
        <div
          id="About-banner-photo"
          className="w-full h-[20vw] flex flex-wrap shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)] justify-between"
        ></div>
        <div className="w-full h-[8vh] bg-[#714486] junge  px-10 text-white flex justify-center items-center">
          <h1 className="md:text-[1.5vw] text-[4vw]">ABOUT US</h1>
        </div>
        <div className="flex flex-col junge justify-center items-center p-[5vw] text-white w-full min-h-screen backdrop-blur-md">
          <div id="page1" className=" w-full md:h-[40vw] flex justify-center items-center">
            <div className=" about h-full w-1/2 p-[4vw] pr-[5vw] ">
              <h1 className="arizonia md:text-[3vw] text-[5vw] text-[#EABEFF]">
                About Purascent
              </h1>
              <h2 className="junge md:text-[1.5vw] text-[2.5vw] leading-tight">
                Welcome to Purascent, a conceptual perfume store created for the
                purpose of showcasing innovative ideas and designs in the world
                of fragrances. Purascent is a fictional brand developed as part
                of a final year project in BCA, aimed at exploring the
                possibilities of digital storefronts and user experiences in
                e-commerce.
              </h2>
            </div>
            <div className="md:h-full md:w-1/2 h-[50vw] w-[40vw] p-[5vw]">
              <div id="about-1st-image" className="w-full h-full"></div>
            </div>
          </div>

          <div id="page2" className="w-full md:h-[40vw] flex justify-center items-center mt-5">
            <div className="h-full w-1/2 p-[5vw]">
              <div id="about-2nd-image" className="md:h-full md:w-1/2 h-[50vw] w-[40vw]"></div>
            </div>
            <div className=" vision h-full w-1/2 p-[4vw] pl-[5vw]">
              <h1 className="arizonia md:text-[3vw] text-[5vw] text-[#EABEFF]">Our Vision</h1>
              <h2 className="junge md:text-[1.5vw] text-[2.5vw] leading-tight">
                Welcome to Purascent, a conceptual perfume store created for the
                purpose of showcasing innovative ideas and designs in the world
                of fragrances. Purascent is a fictional brand developed as part
                of a final year project in BCA, aimed at exploring the
                possibilities of digital storefronts and user experiences in
                e-commerce.
              </h2>
            </div>
          </div>
          <div className="concept w-full  flex flex-col justify-center items-center mt-5  md:px-[18vw]">
            <h1 className="arizonia md:text-[3vw] text-[5vw] text-[#EABEFF]">Our Concept</h1>
            <h3 className="junge md:text-[1vw] text-[2.5vw] text-center">
              At Purascent, we embrace the fusion of artistry and technology to
              create a curated selection of imaginary fragrances that reflect
              diverse emotions, moods, and personalities. Each conceptual
              perfume is meticulously crafted to tell a story, evoke memories,
              and transport you to different realms of imagination.
            </h3>
          </div>

          
        </div>
      </div>
      <div id="cart" className="w-full ">
        <div id="page3" className="flex flex-col junge justify-center items-center p-[4.5vw] text-white w-full  backdrop-blur-md">
          <div className=" project w-full md:h-[40vw] flex flex-col justify-center items-center mt-5 md:px-[18vw]">
            <h1 className="arizonia md:text-[3vw] text-[5vw] text-[#EABEFF]">Our Project</h1>
            <div id="about-our-project" className="md:w-full md:h-full w-[80vw] h-[50vw] my-3"></div>
            <h3 className="junge md:text-[1vw] text-[2.5vw] text-center">
              This website serves as a platform to showcase the culmination of
              our exploration into the realm of digital fragrance experiences.
              Through innovative design, engaging content, and immersive
              storytelling, we invite you to embark on a journey of discovery
              and creativity with Purascent.
            </h3>
          </div>
          <div className=" creator w-full  flex flex-col justify-center items-center mt-5 md:px-[6vw]">
            <h1 className="arizonia md:text-[3vw] text-[5vw] text-[#EABEFF]">Our Creator</h1>
            <div className="flex md:flex-row flex-col items-center">
              <div id="Azeem" className="w-[20vw] h-[20vw] rounded-full"></div>
              <h3 className="junge md:w-[60vw] md:text-[1vw] text-[2.5vw] py-[2vw] px-[3.5vw]">
                This website serves as a platform to showcase the culmination of
                our exploration into the realm of digital fragrance experiences.
                Through innovative design, engaging content, and immersive
                storytelling, we invite you to embark on a journey of discovery
                and creativity with Purascent.
              </h3>
            </div>
          </div>
          <div className="contact w-full  flex flex-col justify-center items-center my-7 md:px-[18vw]">
            <h1 className="arizonia md:text-[3vw] text-[5vw] text-[#EABEFF]">Contact Us</h1>
            
            <h3 className="junge md:text-[1vw] text-[2.5vw] text-center mb-10">
              While Purascent may be a fictional brand, your feedback and
              suggestions are invaluable to us. Feel free to reach out to us
              with any questions, comments, or ideas at 'msajifdf123@gmail.com'.
            </h3>
            <h3 className="junge md:text-[1.5vw] text-[3vw] text-center text-[#EABEFF]">
            Thank you for joining us on this imaginative ad venture with Purascent.
            </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
