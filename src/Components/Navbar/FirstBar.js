import React from 'react';
import SearchBar from './SearchBar';
import "./styles/firstBar.css";
import Icon from  './Icon'
const FirstBar = () => {
    return (
        <div className='flex'>
            <Icon title="Icon-Menu" />
            <SearchBar />
            <Icon title="Primary" />
        </div>
    )
}
export default FirstBar;