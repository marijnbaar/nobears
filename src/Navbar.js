import React from 'react';
import Image from "react-bootstrap/Image"
import logo from "../src/assets/logo.svg"
import message from "../src/assets/message.svg"
import notification from "../src/assets/notification.svg"
import profile from "../src/assets/profile.png"
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
                <img class="search-pic" src={searchbar} />
            </div>
            <Image
                src={message}
                width="32"
                height="29"
                className="message"
                alt="message"
            />
            <Image
                src={notification}
                width="23"
                height="29"
                className="notification"
                alt="notification"
            />
            <Image
                src={profile}
                width="50"
                height="39"
                className="profile"
                alt="profile"
            />
        </div>
    );
}

export default Navbarhome;


