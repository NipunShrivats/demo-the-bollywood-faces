import React from 'react';
import "./Block1Style.css";

export default function Block1({ leftImg, title, para1, para2 }) {
    return (
        <>
            <div className="container mainBlock">

                <div className='leftBlock'>
                    <img src={leftImg} alt="" />
                </div>
                <div className='rightBlock'>
                    <h1>Sensationz</h1>
                    <h3>{title}</h3><br />
                    <p>{para1}</p><br />
                    <p>{para2}</p>
                </div>
            </div>
        </>
    )
}
