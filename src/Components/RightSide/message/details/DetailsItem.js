import React from 'react'
import styles from './style.module.css'

const DetailsItem = ({ username, email, date, toText, youText }) => {

  return (
    <div>
        <p className={`${styles["row1-style-p"]} ${styles["style-p1"]}`}>{username}</p>
        <p className={`${styles["row1-style-p"]} ${styles["style-p1"]}`}>{email} </p>
        <p className={`${styles["row1-style-p"]} ${styles["style-p2"]}`}>{date}</p>
        <div className={`${styles["details-style"]}`}>
            <p className={`${styles["row1-style-p"]} ${styles["style-p2"]}`}> <strong>{toText}</strong></p>
            <p className={`${styles["row1-style-p"]} ${styles["style-p2"]}`}>{youText}</p>
        </div>
    </div>
  )
}

export default DetailsItem