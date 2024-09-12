
import React from 'react'
import Card from './Card'
import { useRef } from 'react'


const Forground = () => {
  const ref = useRef(null);
  console.log(ref)
  const data  =  [
    {
      descraption :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt  rem  cum enim harum modi unde omnis. ",
      filesize:'. 9mb',  
      close:true, 
      tag : {isOpen : true, tagTitle : 'Download Now' , tagColor: "green"},
    },
    {
      descraption :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt  rem  cum enim harum modi unde omnis. ",
      filesize:'. 9mb',  
      close:true, 
      tag : {isOpen : true, tagTitle : 'Download Now' , tagColor: "blue"},
    },
    {
      descraption :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt  rem  cum enim harum modi unde omnis. ",
      filesize:'. 9mb',  
      close:true, 
      tag : {isOpen : false, tagTitle : 'Upload' , tagColor: "green"},
    },
   ] ;
  return (
    <>
      <div ref={ref} className=' w-full h-full fixed top-0 left-0 z-[3]  flex flexwrap-wrap gap-10 py-5'>    
      
     {data.map((item, index) =>(

      <Card data = {item} reference={ref}/>

     ))}

      </div>


    </>
  )
}

export default Forground
