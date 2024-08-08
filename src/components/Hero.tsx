"use client"
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div>
        <section className="text-white body-font bg-fixed bg-cover bg center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        alt="hero"
        className="object-cover object-center rounded-xl"
        src="assets/bilal12.jpg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Develepor', 'AI Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
        
  
      </h1>
      <div className='w-[250px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact 
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero