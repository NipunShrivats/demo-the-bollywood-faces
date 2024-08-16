import React from 'react';
import "./HeroStyle.css";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>welcome</h1>
                    <h3>to</h3>
                    <h1 className='last-line'>the bollywood faces</h1>
                    <p>At Senationz Digital, we specialize in boosting your website traffic and empowering your brand to grow exponentially</p>
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
