import React from 'react'

function Btn1({btn="Btn"}) {

  return (
    <button type='button' className='bg-slate-50 text-black px-5 py-2 rounded-full hover:scale-105 mt-1'>{btn}</button>
  )
}

export default Btn1
