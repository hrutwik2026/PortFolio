import React,{useState} from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';
import sak from "../assets/KAKASHI2.jpg"

function Cards({image,title,...props}) {
  const [inProp, setInProp] = useState(true);

    
  return (
    <div className='flex flex-col items-center  '>
    <div className={`hover:scale-110 duration-300 p-4 flex flex-col justify-center items-center gap-6 rounded-lg shadow-2xl  w-full h-full `}>
      <img className=' h-48' src={image} alt="" />
      <p className='font-bold font-serif text-red-950 hover:text-gray-100'>{title}</p>
    </div>
    <ReactSVG src= {sak}/>
    </div>


  ) 
}

export default Cards
