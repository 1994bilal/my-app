import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='body bg-gray-300 z-50 sticky top-0'>
        <header className="text-orange-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={require("../../public/assets/img/logo2.png")} alt={"Bilal Fiaz"} height={100} width={100} />
      <span className="ml-3 text-xl">
        Bilal-Fiaz
      </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link
       href={"/"} className="mr-5 hover:text-gray-900">
        Home
      </Link>
      <Link href={"#About"} className="mr-5 hover:text-gray-900">
        About
      </Link>
      <Link href={"#Skills"} className="mr-5 hover:text-gray-900">
        Skills
      </Link>
      <Link href={"#Project"} className="mr-5 hover:text-gray-900">
        Projects
      </Link>
      <Link href={"#Contact"} className="mr-5 hover:text-gray-900">
        Contact
      </Link>
    </nav>
    
    <Link target='_blank' href={"assets/RESUME.pdf"}>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Download CV
      <FaDownload className='ml-2'/>
      </button>
    </Link>
  </div>
</header>
      
    </div>
  )
}

export default Navbar
