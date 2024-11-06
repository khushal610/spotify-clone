import React from 'react'

function FormBtn({btnIcon,btnText}) {
  return (
    <button type='button' className='text-white border border-slate-300 py-3 px-2 rounded-full w-full text-center'>{btnIcon}{btnText}</button>
  )
}

export default FormBtn
