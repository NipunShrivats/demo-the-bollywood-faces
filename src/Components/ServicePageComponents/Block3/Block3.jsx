import React from 'react'
import "./Block3Style.css"
import { TiTick } from "react-icons/ti";

export default function Block3({ block3Title, block3para, li1, li2, li3, rightImg }) {
    return (
        <>
            <div className='container box1'>
                <div className='left'>
                    <h1>{block3Title}</h1>
                    <p>{block3para}</p>
                    <ul>
                        <li><span><TiTick /></span>{li1}</li>
                        <li><span><TiTick /></span>{li2}</li>
                        <li><span><TiTick /></span>{li3}</li>
                    </ul>
                </div>
                <div className='right'>
                    <img src={rightImg} alt="" />
                </div>
            </div>
        </>
    )
}
