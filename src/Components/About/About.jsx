import React from 'react';
import "./AboutStyle.css";
import aboutImg from "../../assets/imgAssets/aboutPic.jpg"
import playIcon from "../../assets/imgAssets/play-icon-red.png"


export default function About({ setPlayState }) {
    return (
        <>
            <div className='about'>
                <div className='about-left'>
                    <img src={aboutImg} className='about-img' alt="" />
                    <img src={playIcon} className='play-icon' alt="" onClick={() => { setPlayState(true) }} />
                </div>
                <div className='about-right'>
                    <h3>About Sensationz Digital</h3>
                    <h2>Sensationz Digital: Igniting Your Digital Journey with Innovation</h2>
                    <p>Welcome to Sensationz Digital! We’re your partners in digital success, blending creativity and tech expertise to tailor strategies for your brand. With transparency and collaboration, we offer services from web design to branding, all focused on elevating your online presence. Join us in creating digital excellence that resonates with your audience and drives tangible results.</p><br />
                    <p>As the top supplier of digital marketing services, “Sensationz Digital” has helped over a thousand customers achieve steady growth for their businesses.</p>
                </div>
            </div>
        </>
    )
}
