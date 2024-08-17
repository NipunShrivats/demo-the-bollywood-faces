import React from 'react';
import "./HeroIssuesStyle.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function HeroIssues() {
    return (
        <>
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>welcome</h1>
                    <Link to={""}
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
