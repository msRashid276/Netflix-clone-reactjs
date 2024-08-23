import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";


const Movie = ({item}) => {

    const [like,setLike] = useState(false);


  return (
         <div className="relative p-2 cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute w-full h-full left-0 top-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm text-center flex justify-center items-center h-full">{item?.title}</p>
                <p>{like?<FaHeart className="top-4 left-4 absolute"/>:<FaRegHeart className="top-4 left-4 absolute"/>}</p>
              </div>
            </div>
  )
}

export default Movie