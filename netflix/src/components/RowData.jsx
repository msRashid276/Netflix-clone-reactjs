import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";

const RowData = (props) => {
  const { title, fetchURL, rowId } = props;

  const [movies, setMovies] = useState([]);

  const slideLeft = () =>{
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft-500;
  }

  const slideRight = () =>{
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft+500;
  }


  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white md:text-xl font-bold p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={35}/>
        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
           <Movie item={item} key={id}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={35}/>
      </div>
    </>
  );
};

export default RowData;
