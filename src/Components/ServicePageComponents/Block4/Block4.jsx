import React from 'react';
import "./Block4Style.css";

import { MdOutlineElderlyWoman } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoAccessibilitySharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";


function Element1({ icon, heading, data }) {
    return (
        <div className='element element1 '>
            <span className='icon'>{icon}</span>
            <h4 className='heading'>{heading}</h4>
            <p className='data'>{data}</p>
        </div>
    )
}
function Element2({ icon, heading, data }) {
    return (
        <div className='element element2'>
            <span className='icon'>{icon}</span>
            <h4 className='heading'>{heading}</h4>
            <p className='data'>{data}</p>
        </div>
    )
}

export default function Block4() {
    return (
        <>
            <div className='container main-box'>
                <div className='main-box-title'>
                    <h4 className='choose'>Why Choose Us</h4>
                    <h1>why are we your solution?</h1>
                </div>

                <div className='main-box-inside1'>
                    <Element1
                        icon={<MdOutlineElderlyWoman />}
                        heading={"Experience"}
                        data={"Your Gateway to Digital Mastery. Unlock unparalleled expertise and propel your online presence to new heights"} />
                    <Element1
                        icon={<VscWorkspaceTrusted />}
                        heading={"Trusted Company"}
                        data={"Where Reliability Meets Excellence. Count on us for steadfast support and unwavering commitment to your digital success"} />
                    <Element1
                        icon={<FaPeopleGroup />}
                        heading={"Good Teamwork"}
                        data={"Good Teamwork: Collaboration Fuels Innovation. Together, we achieve greatness, surpassing expectations with synergy and cohesion"} />
                </div>
                <div className='main-box-inside2'>
                    <Element2
                        icon={<IoAccessibilitySharp />}
                        heading={"Creative"}
                        data={"Where Imagination Meets Strategy. Embrace innovation and unleash the power of creativity with us."} />
                    <Element2
                        icon={<BiSupport />}
                        heading={"Support 24/7"}
                        data={"Your Digital Lifeline Anytime, Anywhere. Rest easy knowing our dedicated team is always here to assist you"} />
                </div>
            </div>
        </>
    )
}
