import React from 'react'
import styles from "./styles/ListItem.module.css";
import Icon from './Icon';
const ListItem = ({ title, undoColor }) => {
  console.log(undoColor);
  return (
    <a href='#f' className={`${styles["nav-item"]}`}>
      <Icon title={title} />
      <p className={`${styles[undoColor]}`}>{title}</p>
    </a>
  )
}
export default ListItem;