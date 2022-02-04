import React from "react";
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer';

const PublicLayout = ({children}) =>{
 return (
    <div className= 'flex flex-col h-screen justify-between bg-gradient-to-r from-white to-indigo-100 '>
    <Navbar />
   <div className='h-full '> 
       {children}
   </div>
    
    </div>  
 )

}
 
export default PublicLayout