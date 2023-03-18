import React from 'react'
import styles from './style.module.css'
import Details from './details/Details'
import Icons from './icons/Icons'

function message() {
    return (
        <div className={`${styles["message-style"]}`}>

            <div className={`${styles["col1"]}`}>
                <p className={`${styles["icon-style"]}`}>A</p>
            </div>

            <div className={`${styles["col2"]}`}>
                <div className={`${styles["row1-style"]}`}>
                    <Details />
                    <Icons />
                </div>

                <div className={`${styles["row2-image-style"]}`}>
                    <p>Hi.</p>
                </div>

                <div className={`${styles["row2-msg-style"]}`}>
                    <p className={`${styles["style"]} ${styles["styles-p1"]}`}>Jeremy,</p>
                    <p className={`${styles["style"]} ${styles["styles-p2"]}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
            </div>

        </div>
    )
}

export default message