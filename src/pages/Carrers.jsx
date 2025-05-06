import React from 'react'
import carrersVideo from "../assets/Carrers/career 1st .mp4"
import carrer2ndImg from "../assets/Carrers/career-2nd-image.jpg"
import carrer3rdImg from "../assets/Carrers/career-3rd-image.jpg"
import carrer4thImg from "../assets/Carrers/career 4th image.jpg"


const Carrers = () => {
  return (
    <div>
      {/* video section */}
      <div>
        <video
          className="w-full max-h-screen object-cover"
          src={carrersVideo} autoPlay
          loop
          muted
          playsInline ></video>
      </div>
      <div className='mt-20'>
        <img src={carrer2ndImg} alt="Bangladesh Vision" />
        <div className='my-20 w-11/12 mx-auto md:w-9/12 '>
          <h1 className='text-5xl text-center font-extrabold text-[#bebebe] mb-8'>Who We Are</h1>
          <p className='text-lg text-left mb-20 text-[#bebebe]'>At Hygiene Plus, we are more than just a provider of luxurious finishing products — we are curators of lifestyle, elegance, and
trust. Our journey is built on a foundation of quality, innovation, and customer delight, delivering exceptional sanitaryware and
finishing solutions that transform everyday spaces into elevated experiences. <br /> <br />
With a passionate team and a vision rooted in responsibility and care, we are uniting cities, people, and ideas — to create a
cleaner, more beautiful future.</p>
        </div>
      </div>
      <div className='my-20'>
        <img src={carrer3rdImg} alt="Bangladesh Vision" />
        <div className='my-20 w-11/12 mx-auto md:w-9/12 '>
          <h1 className='text-5xl text-center font-extrabold mb-8 text-[#bebebe]'>Built to Inspire <br /> <span className='font-extralight text-6xl text-[#bebebe]'>Designed to Grow.</span></h1>
          <p className='text-lg text-left text-[#bebebe] mb-20'>We believe in the power of people. Our culture blends passion with purpose — empowering every individual to lead, learn, and
elevate the standards of hygiene. When you work with us, you grow beyond roles — you become part of a vision. Together, we
shape the future, driven by innovation and a commitment to excellence. Every contribution matters, and each individual is
encouraged to unleash their potential, collaborate, and thrive in an environment where success is not just a goal but a journey.
Join us, and be a part of something bigger than yourself.</p>
        </div>
      </div>
      <div className=" bg-cover bg-center" 
        style={{ backgroundImage: `url(${carrer4thImg})` }}>
      <div className='py-50 w-11/12 mx-auto items-center md:w-9/12 '>
          <h1 className='text-5xl text-left font-extrabold mb-8 text-white'><span className='font-extralight text-6xl text-white'>Shaping a Bold,</span> <br />Beautiful Future </h1>
          <p className='text-lg text-left text-white '>We believe in the power of people. Our culture blends passion with purpose — empowering every individual to lead, learn, and
elevate the standards of hygiene. When you work with us, you grow beyond roles — you become part of a vision. Together, we
shape the future, driven by innovation and a commitment to excellence. Every contribution matters, and each individual is
encouraged to unleash their potential, collaborate, and thrive in an environment where success is not just a goal but a journey.
Join us, and be a part of something bigger than yourself.</p>
        </div>
      </div>
    </div>
  )
}

export default Carrers