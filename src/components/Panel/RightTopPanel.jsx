import React,{useState} from 'react'
// import '../../App.css'
import { Link } from 'react-router-dom'


function RightTopPanel() {

    // const [color,setColor] = useState('#0f0f0f')
  const [btnColor,setBtnColor] = useState('#0a0a0a')

  return (
    <>
      <div className="leftBtns flex gap-1">
          <button className='p-2 px-4 rounded-full text-xl hover:text-slate-400' style={{backgroundColor:btnColor}}><i class="fa-solid fa-angle-left"></i></button>
          <button className='p-2 px-4 rounded-full text-xl hover:text-slate-400' style={{backgroundColor:btnColor}}><i class="fa-solid fa-angle-right"></i></button>
      </div>
      <div className="rightBtns flex gap-2 mr-4">
          <Link to="/signup">
            <button className='p-2 px-8 rounded-full text-slate-300 hover:scale-105 hover:text-white'>
            Sign up 
            </button>
          </Link>
          <Link to="/login">
            <button className='p-2 px-8 bg-slate-100 text-black rounded-full hover:scale-105'>
              Log in 
            </button>
          </Link>
      </div>
    </>
  )
}

export default RightTopPanel
