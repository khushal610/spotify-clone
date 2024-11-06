import React, { useState } from 'react'

function Footer() {
    const [footerIconColor,setFooterIconColor] = useState('#292929')
  return (
        <div className="container mb-14 flex flex-col p-4">
            <div className="footer-links flex gap-2 w-full text-white pb-10">
                <div className="link1 w-1/6">
                    <h5 className='font-bold py-2'>Company</h5>
                    <ul>
                        <li><a className='text-slate-300' href='#'>About</a></li>
                        <li><a className='text-slate-300' href='#'>Jobs</a></li>
                        <li><a className='text-slate-300' href='#'>For the record</a></li>
                    </ul>
                </div>
                <div className="link1 w-1/6">
                    <h5 className='font-bold py-2'>Communities</h5>
                    <ul>
                        <li><a className='text-slate-300' href='#'>For Artists</a></li>
                        <li><a className='text-slate-300' href='#'>Developers</a></li>
                        <li><a className='text-slate-300' href='#'>Advertising</a></li>
                        <li><a className='text-slate-300' href='#'>Investors</a></li>
                        <li><a className='text-slate-300' href='#'>Vendors</a></li>
                    </ul>
                </div>
                <div className="link1 w-1/6">
                    <h5 className='font-bold py-2'>Useful Links</h5>
                    <ul>
                        <li><a className='text-slate-300' href='#'>Support</a></li>
                        <li><a className='text-slate-300' href='#'>Free Mobile App</a></li>
                    </ul>
                </div>
                <div className="link1 w-2/6">
                    <h5 className='font-bold py-2'>Spotify Plans</h5>
                    <ul>
                        <li><a className='text-slate-300' href='#'>Premium Individual</a></li>
                        <li><a className='text-slate-300' href='#'>Premium Duo</a></li>
                        <li><a className='text-slate-300' href='#'>Premium Family</a></li>
                        <li><a className='text-slate-300' href='#'>Premium Student</a></li>
                        <li><a className='text-slate-300' href='#'>Spotify Free</a></li>
                    </ul>
                </div>
                <div className='footer-icons-container flex gap-3'>
                    <div className="footer-icons" >
                        <a href=""><i class="p-3 fa-brands fa-instagram text-white rounded-full" style={{backgroundColor:footerIconColor}}></i></a>
                    </div>
                    <div className="footer-icons">
                        <a href=""><i class="p-3 fa-brands fa-x-twitter text-white rounded-full" style={{backgroundColor:footerIconColor}}></i></a>
                    </div>
                    <div className="footer-icons">
                        <a href=""><i class="p-3 fa-brands fa-facebook text-white rounded-full" style={{backgroundColor:footerIconColor}}></i></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom-sec py-7">
                <p className='font-bold text-slate-300'>© 2024 Spotify AB</p>
            </div>
        </div>

  )
}

export default Footer
