import React, { useState } from 'react'
import LeftCard01 from '../Card/LeftCard01'
import LeftCard02 from '../Card/LeftCard02'

function LeftPart() {
  return (
    <div className='w-3/12 flex flex-col text-white gap-2' >
        <LeftCard01 />
        <LeftCard02 />
    </div>
  )
}

export default LeftPart
