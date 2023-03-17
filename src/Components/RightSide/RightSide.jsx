import React from 'react'
import Title from './title/Title'
import Message from './message/Message'
import "./style.css"


const RightSide = () => {
    return (
        <div className="right-side-style">
            <Title />
            <Message />
        </div>
    )
}

export default RightSide