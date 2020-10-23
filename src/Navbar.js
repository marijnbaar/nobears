import React from 'react';
import Image from "react-bootstrap/Image"
import logo from "../src/assets/logo.svg"

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
            <input className="search-bar" type="text" placeholder="Zoeken" />
        </div>
    );
}

export default Navbarhome;


