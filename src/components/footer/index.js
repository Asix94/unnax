import React from 'react';
import './index.css'
import Logo from '.././../Spotify_Icon_RGB_Green.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="logo-footer" src={Logo} alt="logo spotify"/>
            <p className="text">by Carlos Ramos Torres</p>
        </footer>
    );
}

export default Footer;