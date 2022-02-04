import { logDOM } from "@testing-library/react";
import React from "react";
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

const footer = () =>{

    return (
        <div className=" bg-gradient-to-r from-indigo-600 to-indigo-200  items-center bottom-0 footer md:fixed lg:fixed ">
    
        <footer className="flex justify-center">
        <a href='https://instagram.com/andreaortiz06'>
          <img className='m-2 mx-4 h-6' alt='instagram' src={instagram} />
        </a>
        <a href='https://www.linkedin.com/in/andrea-ortiz-giraldo-9b1884225/'>
          <img className='m-2 mx-4 h-6' alt='Linkedin' src={linkedin} />
        </a>
        <a href='https://github.com/AndreaOrtizG'>
          <img className='m-2 mx-4 h-6' alt='github' src={github} />
        </a>
        
        </footer>

        </div>
    )

}

export default footer;