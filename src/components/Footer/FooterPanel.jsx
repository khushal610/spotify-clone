import React from 'react'
import Btn1 from '../Buttons/Btn1'
import '../../App.css'
import { Link } from 'react-router-dom'

function FooterPanel() {
  return (
    <div className='footer-panel-body w-full text-white'>
        <div className="footer-panel-container flex justify-between mr-2 p-3">
            <div className='text-sm'>
                <p className='font-bold'>Preview of Spotify</p>
                <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div className='font-medium'>
                <Link to={"/signup"}>
                  <Btn1 btn='Sign up free' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterPanel
