import React from 'react'
import "./styles/ListItem.css";
import Icon from './Icon';
const ListItem = (props) => {
    return (
      <a href='#f' className='nav-item'>
        <Icon title= {props.title} />
        <p> {props.title}</p></a>
    )
}
export default ListItem;