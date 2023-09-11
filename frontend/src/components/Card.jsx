import React from 'react'
import {useState} from 'react'
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Card = ({data}) => {
  return (
    <div className="flex flex-wrap gap-4 mt-2 px-8 py-2">
        {
            data?.slice(0,5).map((item)=>(
                <div className="flex flex-col rounded-lg shadow-xl w-[13rem] h-[12rem] relative">
                <button
                               
                               className="absolute mb-4 right-2 bottom-0 cursor-pointer z-10 bg-red-500 px-6 py-1 font-bold rounded-lg text-white"
                           >
                              Add
                           </button>
                <div className="w-full h-[7rem] rounded-lg flex items-center justify-center">
                                       <img className="w-full h-full object-contain" src={item.img} alt={item.title}/>
                                   </div>
                                   <div className="flex justify-start font-bold text-xl px-4">
                                       <h2>{item.title.substring(0, 8)}...</h2>
                                      
                                   </div>
                                   <div className="flex text-gray-400 justify-start font-bold text-md px-4">
                                       {/* <h2>{sdjfksdjfksdjfkdlsjfd.substring(0, 17)}...</h2> */}
                                       <h2>${item.price}</h2>
                                   </div>
                                   <div className="flex font-bold justify-start font-bold text-[12px] px-4 uppercase">
                                       {/* <h2>{sdjfksdjfksdjfkdlsjfd.substring(0, 17)}...</h2> */}
                                       <h2>up to {item.discount}% OFF</h2>
                                   </div>
                             
                           </div>
                        
            ))
        }
        
   </div>
  )
}

export default Card