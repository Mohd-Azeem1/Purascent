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
        start: '60% 50%',
        end: '60% 15%'
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
          <h1 className="text-[1.5vw] ">ABOUT US</h1>
        </div>
        <div className="flex flex-col junge justify-center items-center p-20 text-white w-full min-h-screen backdrop-blur-md">
          <div id="page1" className=" w-full h-[70vh] flex justify-center items-center">
            <div className=" about h-full w-1/2 p-18 pr-24 p-10">
              <h1 className="arizonia text-[3vw] text-[#EABEFF]">
                About Purascent
              </h1>
              <h2 className="junge text-[1.5vw]">
                Welcome to Purascent, a conceptual perfume store created for the
                purpose of showcasing innovative ideas and designs in the world
                of fragrances. Purascent is a fictional brand developed as part
                of a final year project in BCA, aimed at exploring the
                possibilities of digital storefronts and user experiences in
                e-commerce.
              </h2>
            </div>
            <div className="h-full w-1/2 p-[5vw]">
              <div id="about-1st-image" className="w-full h-full"></div>
            </div>
          </div>

          <div id="page2" className="w-full h-[70vh] flex justify-center items-center mt-5">
            <div className="h-full w-1/2 p-[5vw]">
              <div id="about-2nd-image" className="w-full h-full"></div>
            </div>
            <div className=" vision h-full w-1/2 p-18 pl-24">
              <h1 className="arizonia text-[3vw] text-[#EABEFF]">Our Vision</h1>
              <h2 className="junge text-[1.5vw]">
                Welcome to Purascent, a conceptual perfume store created for the
                purpose of showcasing innovative ideas and designs in the world
                of fragrances. Purascent is a fictional brand developed as part
                of a final year project in BCA, aimed at exploring the
                possibilities of digital storefronts and user experiences in
                e-commerce.
              </h2>
            </div>
          </div>
          <div className="concept w-full h-[50vh] flex flex-col justify-center items-center mt-5  px-[18vw]">
            <h1 className="arizonia text-[3vw] text-[#EABEFF]">Our Concept</h1>
            <h3 className="junge text-[1vw] text-center">
              At Purascent, we embrace the fusion of artistry and technology to
              create a curated selection of imaginary fragrances that reflect
              diverse emotions, moods, and personalities. Each conceptual
              perfume is meticulously crafted to tell a story, evoke memories,
              and transport you to different realms of imagination.
            </h3>
          </div>

          
        </div>
      </div>
      <div id="cart" className="w-full min-h-screen">
        <div id="page3" className="flex flex-col junge justify-center items-center p-20 text-white w-full min-h-screen backdrop-blur-md">
          <div className=" project w-full h-[60vh] flex flex-col justify-center items-center mt-5 px-[18vw]">
            <h1 className="arizonia text-[3vw] text-[#EABEFF]">Our Project</h1>
            <div id="about-our-project" className="w-full h-full my-3"></div>
            <h3 className="junge text-[1vw] text-center">
              This website serves as a platform to showcase the culmination of
              our exploration into the realm of digital fragrance experiences.
              Through innovative design, engaging content, and immersive
              storytelling, we invite you to embark on a journey of discovery
              and creativity with Purascent.
            </h3>
          </div>
          <div className=" creator w-full h-[60vh] flex flex-col justify-center items-center mt-5 px-[18vw]">
            <h1 className="arizonia text-[3vw] text-[#EABEFF]">Our Creator</h1>
            <div className="flex">
              <div id="Azeem" className="w-[30vw] h-[9vw] rounded-full"></div>
              <h3 className="junge text-[1vw] p-5 pl-10">
                This website serves as a platform to showcase the culmination of
                our exploration into the realm of digital fragrance experiences.
                Through innovative design, engaging content, and immersive
                storytelling, we invite you to embark on a journey of discovery
                and creativity with Purascent.
              </h3>
            </div>
          </div>
          <div className="contact w-full h-[60vh] flex flex-col justify-center items-center mt-5 px-[18vw]">
            <h1 className="arizonia text-[3vw] text-[#EABEFF]">Contact Us</h1>
            
            <h3 className="junge text-[1vw] text-center mb-10">
              While Purascent may be a fictional brand, your feedback and
              suggestions are invaluable to us. Feel free to reach out to us
              with any questions, comments, or ideas at 'msajifdf123@gmail.com'.
            </h3>
            <h3 className="junge text-[1.5vw] text-[#EABEFF]">
            Thank you for joining us on this imaginative adventure with Purascent.
            </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
