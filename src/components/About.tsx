import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='About'>
        <section className='text-gray-600 body-font bg-gray-100'>
  <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        About me
        <div className='w-[180px] h-[2px] bg-blue-700'></div>
        <br className='hidden lg:inline-block' />
        
      </h1>
      <p className='mb-8 leading-relaxed'>
      I am Bilal Fiaz and i am passionate and dedicated web developer with expertise in HTML5, CSS3, JavaScript, TypeScript, WordPress,
      Bootstrap, ReactJs, NextJS Currently, I am expanding my skill set to become a Cloud Generative AI Engineer specializing in
        Web 3.0. With a strong foundation in front-end development, I create intuitive and visually appealing websites 
        that enhance user experience. My journey in tech is driven by a love for continuous learning and the desire 
         push the boundaries of innovation. Let's connect and collaborate on creating the digital future!
      </p>

      
      <div className='flex justify-center'>
        <Link target='_blank' href={'assets/RESUME.pdf'}>
        <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          View CV
        </button>
        </Link>
      </div>
    </div>
    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
      <Image
        alt='hero'
        className='object-cover object-center rounded'
        src={require('../../public/assets/about.jpg')}
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default About