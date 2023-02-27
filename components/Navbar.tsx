"use client"

export default function Navbar(){
    return(
        <nav>
       <div className="bg-gray-900  ">
      
         <a className="font-medium text-sm text-gray-300  px-3 py-2 md:text-base hover:animate-spin" href="/">Home</a>
        
         
        <a className="font-medium text-sm text-gray-300  px-3 py-2 md:text-base hover:animate-spin" href='/Aboutme'>About me</a>
      
       
        <a className="font-medium text-sm text-gray-300 px-3 py-2 md:text-base hover:animate-spin"href='/Contactme'>Contact me</a>
       
       </div>
       </nav>
    )
}