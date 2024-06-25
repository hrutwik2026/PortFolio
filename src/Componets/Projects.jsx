import { useState } from "react";
import React from 'react'

function Projects({image,title}) {
    const [isFlipped,setIsFlipped]=useState(false)
    const flipCard = () => {
        setIsFlipped(!isFlipped);
      };
  return (
    <div className="flex justify-center  rounded-xl">
    <div className="w-80 h-96 perspective-1000  p-2 flex flex-col border-b border-slate-100 items-center hover:scale-125 duration-300  justify-center rounded-lg ">
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out ${
          isFlipped ? "rotate-y-180 shadow-flip" : "shadow-normal"
        }`}
        onClick={flipCard}
      >
        {/* Front Side */}
        <div
          className={`rounded-lg absolute inset-0 backface-hidden ${
            isFlipped ? "hidden" : ""
          }`}
        >
          <img
            src={image}
            alt="Shaktiman"
            className="w-full h-3/4 mt-8 object-contain border-none"
          />
          <h1 className=" flex text-xl text-slate-400    justify-center font-serif font-bold">{title}</h1>
        </div>
        {/* Back Side */}
        <div
          className={` border border-black rounded-lg absolute inset-0 backface-hidden bg-white p-4 ${
            isFlipped ? "" : "hidden"
          } transform rotate-y-180 flex flex-col items-center justify-center border-none`}
        >
          {/* <h2 className="text-xl font-bold">Shaktiman</h2> */}
          <p className="text-center mt-2">
            Some quick
            <span className="text-red-900 font-bold italic"> example text </span>
            to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
