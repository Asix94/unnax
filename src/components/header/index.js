import React from 'react';
import './index.css'
import Logo from '.././../Spotify_Logo_RGB_Green.png';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo spotify" width="20%"/>
        </header>
    );
}

export default Header;
