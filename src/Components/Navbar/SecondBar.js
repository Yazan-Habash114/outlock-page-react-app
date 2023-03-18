import React from 'react'
import Navigation from './Navigation';
import Icon from './Icon';
import styles from "./styles/SecondBar.module.css";
const SecondBar = () => {
    return (
        <div className={`${styles['sec-flex']}`}>
            <a href='kk'><Icon title="Icon-Hamburger" /></a>
            <button className={`${styles['new-massage-btn']}`}> New massage </button>
            <Navigation />
        </div>
    )
}
export default SecondBar;