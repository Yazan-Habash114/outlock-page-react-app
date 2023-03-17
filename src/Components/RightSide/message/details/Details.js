import React from 'react'
import './style.css'

function Details() {
  return (
    <div>
        <p className='row1-style-p style-p1'> Lorem Ipsum</p>
        <p className='row1-style-p style-p1'> no_reply@loremipsum.com </p>
        <p className='row1-style-p style-p2'> Thu 6/18/2020 4:49 PM</p>
        <div className='details-style'>
            <p className='row1-style-p style-p2'> To: </p>
            <p className='row1-style-p style-p2'> You: </p>
        </div>
    </div>
  )
}

export default Details