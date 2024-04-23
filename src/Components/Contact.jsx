import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div
        id="cart"
        className="w-full min-h-screen pt-14 shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)]"
      >
        <div
          id="contact-banner-photo"
          className="w-full h-[20vw] flex flex-wrap shadow-[0px_10px_10px_10px_rgba(0,0,0,0.3)] justify-between"
        ></div>
        <div className="w-full h-[8vh] bg-[#714486] junge  px-10 text-white flex justify-center items-center">
          <h1 className="md:text-[1.5vw] text-[5vw]">Contact US</h1>
        </div>
        <div className="flex flex-col junge justify-start gap-5 items-start p-[5vw] text-white w-full min-h-screen backdrop-blur-md">
          <div>
            <h1 className="junge md:text-[2vw] text-[3vw]">
              Have a question or feedback? We'd love to hear from you! Reach out
              to us using the contact information below:
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="arizonia md:text-[2.5vw] text-[5vw] text-[#EABEFF]">Email</h1>
            <h2 className="junge md:text-[1.5vw] text-[3vw]">
              Send us an email at msajifdf123@gmail.com and we'll get back to
              you as soon as possible.
            </h2>
            <h1 className="arizonia md:text-[2.5vw] text-[5vw] text-[#EABEFF]">Phone</h1>
            <h2 className="junge max-md:w-[full] text-center md:text-[1.5vw] text-[3vw]">
              Prefer to talk to us directly?{" "}
            </h2>
            <h2 className="junge max-md:w-[full] text-center md:text-[1.5vw] text-[3vw]">
              Give us a call at +91 707-826-1344 during our business hours:
            </h2>
            <div className="text-center">
              <h2 className="junge max-md:w-[full] text-center md:text-[1.2vw] text-[3vw]">
                Monday to Friday: 9:00 AM - 6:00 PM (EST)
              </h2>
              <h2 className="junge max-md:w-[full] text-center md:text-[1.2vw] text-[3vw]">
                Saturday: 10:00 AM - 4:00 PM (EST)
              </h2>
              <h2 className="junge md:text-[1.2vw] text-[3vw]">Sunday: Closed</h2>
            </div>
            <h1 className="arizonia md:text-[2.5vw] text-[5vw] text-[#EABEFF]">Address</h1>
            <h2 className="junge max-md:w-[full] text-center md:text-[1.5vw] text-[3vw]">
              You can also visit us at our physical location:
            </h2>
            <div className="text-center">
              <h2 className="junge max-md:w-[w-full] md:text-[1.2vw] text-[3vw]">Purascent Headquarters</h2>
              <h2 className="junge max-md:w-[w-full] md:text-[1.2vw] text-[3vw]">123 Fragrance Avenue</h2>
              <h2 className="junge max-md:w-[w-full] md:text-[1.2vw] text-[3vw]">Cityville, State, Zip Code</h2>
              <h2 className="junge max-md:w-[w-full] md:text-[1.2vw] text-[3vw]">Country</h2>
            </div>
            <h1 className="arizonia md:text-[2.5vw] text-[5vw] text-[#EABEFF]">
              Social Media
            </h1>
            <h2 className="junge max-md:w-full text-center md:text-[1.5vw] text-[3vw]">
              Stay connected with us on social media:
            </h2>
            <div className="text-center">
              <h2 className="junge md:text-[1.2vw] text-[3vw]">
                <a
                  href="https://www.linkedin.com/in/mohd-azeem-51a37b242"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
              </h2>
              <h2 className="junge md:text-[1.2vw] text-[3vw]">
                <a
                  href="https://www.instagram.com/m0hammadazeem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </h2>
              <h2 className="junge md:text-[1.2vw] text-[3vw]">
                <a
                  href="https://www.facebook.com/profile.php?id=100039167108963"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </h2>
            </div>
            <h1 className="arizonia max-md:w-full text-center md:text-[2.5vw] text-[3vw] text-[#EABEFF] mt-8">
            Thank you for choosing Purascent. We look forward to hearing from you!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
