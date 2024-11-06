import React from 'react';
import '../../App.css';
import { FaPlay } from "react-icons/fa";

function RightCard01({ imagePath, name, subName }) {
  return (
    <div className='card rounded-md w-1/6 h-full flex flex-col hover:cursor-pointer'>
      <div className='imgContainer h-4/6 p-2'>
        <img src={imagePath} className='rounded-md' alt={`${name} image`} />
        <div className='play-btn text-black text-xl pl-1'>
          <FaPlay />
        </div>
      </div>
      <div className='contentContainer h-2/6 p-2'>
        <h4>{name}</h4>
        <p className='text-xs'>{subName}</p>
      </div>
    </div>
  );
}

export default RightCard01;
