import React from 'react';
import RightCard01 from '../Card/RightCard01';

function RightCardPanel({ panelName = [], panelSubName = "Show all", data = [] }) {

  return (
    <>
      <div className="cardBodyTitle flex justify-between">
        <p className='text-white text-2xl ml-3 p-1 hover:underline'>
          <a href='#'>{panelName}</a>
        </p>
        <p className='text-slate-300 text-sm mr-3 p-3 hover:underline'>
          <a href='#'>{panelSubName}</a>
        </p>
      </div>
      <div className='rightCardPanel mt-3 mb-5 flex gap-1 h-56 w-full p-1'>
        {data.map((element, index) => (
          <RightCard01 
            key={index} 
            imagePath={element.path} 
            name={element.name} 
            subName={element.subName} 
          />
        ))}
      </div>
    </>
  );
}

export default RightCardPanel;
