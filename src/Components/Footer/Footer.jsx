import React from 'react';
import './FooterStyle.css';
import { Link } from "react-router-dom";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='foot1'>
                    <div className='foot1-1'>
                        <Link to="https://www.instagram.com/sensationzdigital/" target="_blank"><li><FaSquareInstagram className='social' /></li></Link>
                        <Link to="https://www.facebook.com/people/Sensationz-Digital/61557248046281/" target="_blank"><li><FaFacebookSquare className='social' /></li></Link>
                    </div>
                    <div className='foot1-2'>
                        <Link to="/PrivacyPolicy"><li className='privacy'>Privacy Policy</li></Link>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="foot2">
                    <p>© 2024 Sensationz Media & Arts pvt. ltd. | All rights reserved </p>
                </div>
            </div>

        </>
    )
}
