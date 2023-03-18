import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faReplyAll } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css'

function Icons() {
  return (
      <div className={`${styles["nav-first-div"]}`}>
          <span><FontAwesomeIcon icon={faReply} color='#0178D4' /></span>
          <span><FontAwesomeIcon icon={faReplyAll} color='#0178D4' /></span> 
          <span><FontAwesomeIcon icon={faArrowRight} color='#0178D4' /></span>
          <span><FontAwesomeIcon icon={faEllipsis} color='#0178D4' /></span>
      </div>
  )
}

export default Icons