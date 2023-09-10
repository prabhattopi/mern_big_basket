import React from 'react'
import {useState} from 'react'
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-2 px-2 py-2">
         <div className="flex flex-col rounded-lg shadow-xl w-[20rem] h-[18rem] relative">
                        <button
                        
                            className="absolute right-2 bottom-0 cursor-pointer z-10"
                        >
                        </button>
                    </div>
   </div>
  )
}

export default Card