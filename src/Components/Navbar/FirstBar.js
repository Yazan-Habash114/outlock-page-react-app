import React from 'react';
import SearchBar from './SearchBar';
import styles from"./styles/firstBar.module.css";
import Icon from './Icon'
const FirstBar = () => {
    return (
        <div className={styles.flex}>
            <Icon title="Icon-Menu" />
            <SearchBar />
            <Icon title="Primary" />
        </div>
    )
}
export default FirstBar;