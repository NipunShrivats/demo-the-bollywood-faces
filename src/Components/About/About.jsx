import React from 'react';
import "./AboutStyle.css";
import aboutImg from "../../assets/imgAssets/about.jpg"
import playIcon from "../../assets/imgAssets/play-icon-red.png"


export default function About({ setPlayState }) {
    return (
        <>
            <div className='about'>

                <div className='about-right'>
                    <h3>About The Bollywood Faces</h3>
                    <p>The Bollywood Faces is a unit of Sensationz Media & Art Pvt. Ltd. Covering various personalities related to segments like Photographer, Designer, Makeup Artist, Makeover Artist, Production Houses. In this context we have covered various personality such as Varija Bajaj, Pooja Motwani, Rahul Dutta, Suvo Das, Meenakshi Dutta, Gunjan Gaur, Akash K Agarwal and Lt. Rita gangwani in past issues.</p>

                    <p>“The Bollywood Faces” also help the newcomers to craft their career in the Modelling and Acting. This work as a interface between the industry and budding talent, in this process we have produced many stars who are shining in glamour world be it daily sops like “Yeh Rishta Kya Kahalata Hai”, ” Yeh Vada Raha”, “Sasural Simar Ka” or ad films, feature films are all there in our kitty.</p>

                    <p>The Bollywood Faces’s unveiling ceremony is through an event which provides an opportunity for networking with industry stalwart and socialite. As this event revolve around a social issue, so it gives the platform to fulfill the social responsibility also</p>
                </div>

                <div className='about-left'>
                    <img src={aboutImg} className='about-img' alt="" />
                    <img src={playIcon} className='play-icon' alt="" onClick={() => { setPlayState(true) }} />
                </div>
            </div>
        </>
    )
}
