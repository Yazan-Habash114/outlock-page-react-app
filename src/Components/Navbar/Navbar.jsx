import React from 'react'
import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";
import "./styles/Navbar.css";
const Navbar = () => {
    return (
        <header>
            <FirstBar />
            <SecondBar />
        </header>
    )
}
export default Navbar;