import React from 'react';
import Image from "react-bootstrap/Image"
import logo from "../src/assets/logo.svg"
import searchbar from "../src/assets/searchbar.svg"
import './Navbar.css'

function Navbarhome() {
    return (
        <div className="nav-bar">
            <Image
                src={logo}
                width="77"
                height="90"
                className="logo"
                alt="NOBEARS logo"
            />
            <div class="search-wrapper">
            <input className="search-input" type="text" placeholder="Zoeken" />
                    <img class="search-pic" src={searchbar}/>
                </div>
        </div>
    );
}

export default Navbarhome;


