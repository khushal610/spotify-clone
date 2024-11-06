import React,{ useState,useCallback } from 'react'
import Btn1 from '../Buttons/Btn1'

function LeftCard02() {

    const [btn,setBtn] = useState('Btn')
    const [color,setColor] = useState('#0f0f0f');
    

  return (
    <div className='rounded-md flex flex-col p-2' style={{backgroundColor:color}}>
        <div className='flex justify-between w-full p-5'>
            <div className='text-2xl text-slate-300 hover:text-white'><i class="fa-solid fa-headphones"></i> Your Library</div>
            <div className='text-2xl text-slate-400 hover:cursor-pointer hover:text-white'>+</div>
        </div>
        <div className='w-full h-36 overflow-y-scroll mt-2'>
            <div className='w-full h-full gap-4 p-1 rounded-md'>
                <div className="playListsCard1 h-26 rounded-md p-3" style={{backgroundColor:"rgba(117, 117, 117, 0.2)"}}>
                    <h4>Create your first playlist</h4>
                    <h5>It's easy, we will help you</h5>
                    <Btn1 btn='Create playlist'/>
                </div>
                <div className="playListsCard1 mt-2 mb-3 rounded-md p-3" style={{backgroundColor:"rgba(117, 117, 117, 0.2)"}}>
                    <h4>Create your first playlist</h4>
                    <h5>It's easy, we will help you</h5>
                    <Btn1 btn='Browse Podcasts'/>
                </div>
            </div>
        </div>
        <div className='text-wrap w-full'>
            <a className='text-xs px-1' href='#'>Legal</a>
            <a className='text-xs px-1' href='#'>Safety & PrivacyCenter</a>
            <a className='text-xs px-1' href='#'>Privacy Center</a>
            <a className='text-xs px-1' href='#'>Cookies</a>
            <a className='text-xs px-1' href='#'>About Ads</a>
            <a className='text-xs px-1' href='#'>Accessibility</a>
            <a className='text-xs px-1' href='#'>Cookies</a>
        </div>
        <div className='mt-4'>
            <button className='py-2 border-white border rounded-full px-4'><i class="fa-solid fa-globe"></i> English</button>
        </div>
    </div>
  )
}

export default LeftCard02
