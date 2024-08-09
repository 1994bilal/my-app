import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='Project'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*Project 1*/}
      <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            alt=""
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={require("../../public/assets/rr.png")}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Food Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              RESTAURA
            </h1>
            <p className="leading-relaxed mb-3">
              This is the project whice I've created for those who owns a catering business. 
            </p>
            <Link href={"https://restaurant-puce-kappa.vercel.app/"}>
            <p className='leading-relaxed text-blue-500 hover:underline'>View Project</p>
            </Link>
            
                
            </div>
          </div>
        </div>

        {/*Project 2*/}
      <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            alt=""
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={require("../../public/assets/res.png")}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Food Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              SMOKEHOUSE
            </h1>
            <p className="leading-relaxed mb-3">
              This is the project whice I've created for those who owns a catering business. 
            </p>
            <Link href={"https://restaurant-landing-page-rho-ten.vercel.app/"}>
            <p className='leading-relaxed text-blue-500 hover:underline'>View Project</p>
            </Link>
            
                
            </div>
          </div>
        </div>

      {/*Project 3*/}
      <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            alt=""
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={require("../../public/assets/web.png")}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Fashion Jewellery
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              EMPRESS FINE JEWELERS
            </h1>
            <p className="leading-relaxed mb-3">
              This is the project whice I've created for those who owns a Jewellery business. 
            </p>
            <Link href={"https://empressfinejewelers.com/"}>
            <p className='leading-relaxed text-blue-500 hover:underline'>View Project</p>
            </Link>
            
                
            </div>
          </div>
        </div>  
        </div>
        </div>
      
</section>
        
    </div>
  )
}

export default Project