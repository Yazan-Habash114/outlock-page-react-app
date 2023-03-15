import React from 'react'
import Navigation from './Navigation';
import Icon from './Icon';
import "./styles/SecondBar.css";
const SecondBar = () => {
    return (
        <div className='sec-flex'>
            <a href='kk'><Icon title="Icon-Hamburger" /></a>
            <button className='new-massage-btn' > New massage </button>
            <Navigation />
        </div>
    )
}
export default SecondBar;