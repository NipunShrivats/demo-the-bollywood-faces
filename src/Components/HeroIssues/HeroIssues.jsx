import React from 'react';
import "./HeroIssuesStyle.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function HeroIssues() {
    return (
        <>
            <div className='heroIssues container'>
                <div className='hero-text hero-block'>
                    <h1>see our <span className='span'>magazine</span> issues</h1>
                    <Link to={"issue"}
                        smooth={true}
                        offset={-230}
                        durastion={500} >
                        <button className='btn'>
                            Explore Issues
                            <span><IoIosArrowDown /></span>
                        </button>
                    </Link>
                </div>
            </div >
        </>
    )
}
