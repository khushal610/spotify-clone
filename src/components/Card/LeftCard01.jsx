import React,{useState} from 'react'

function LeftCard01() {
  const [color,setColor] = useState('#0f0f0f')
  return (
    <div className='bg-black rounded-md h-1/3 flex flex-col float-start p-5' style={{backgroundColor:color}}>
        <p className='p-3 text-2xl'><i class="fa-brands fa-spotify"></i> Spotify</p>
        <p className='p-3 text-xl'><i class="fa-solid fa-house"></i> Home</p>
        <p className='p-3 text-xl'><i class="fa-solid fa-search"></i> Search</p>
    </div>
  )
}

export default LeftCard01
