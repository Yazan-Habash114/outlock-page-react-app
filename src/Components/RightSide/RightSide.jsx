import React from 'react'
import Title from './title/Title'
import Message from './message/Message'
import styles from './style.module.css'


const RightSide = () => {
    return (
        <div className=  {`${styles["right-side-style"]}`}>
            <Title />
            <Message />
        </div>
    )
}

export default RightSide