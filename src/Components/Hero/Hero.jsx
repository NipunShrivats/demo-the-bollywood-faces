import React from 'react';
import "./HeroStyle.css";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>welcome</h1>
                    <h3>to</h3>
                    <h1 className='last-line'>the bollywood faces</h1>
                    <p>"The Bollywood Faces" provides an opportunity for networking with industry stalwart and socialite. </p>
                    <a href="https://wa.me/918800348485?text=Hello, I want to know more about your services" target='blank_'>
                        <button className='btn btn-wp'>
                            <span><FaWhatsapp /></span>
                            Chat on whatsapp
                        </button>
                    </a>
                </div>
            </div >
        </>
    )
}
