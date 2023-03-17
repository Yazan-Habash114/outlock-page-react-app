import React from 'react'
import './style.css'
import Details from './details/Details'
import Icons from './icons/Icons'

function message() {
  return (
    <div className='message-style'>

        <div className='col1'>
            <p className='icon-style'>A</p>
        </div>

        <div className='col2'>
            <div className='row1-style'>
                <Details />
                <Icons />
            </div>

            <div className='row2-image-style'>
                <p>Hi.</p>
            </div>

            <div className='row2-msg-style'>
                <p className='style styles-p1'>Jeremy,</p>
                <p className='style styles-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
        </div>

    </div>
  )
}

export default message