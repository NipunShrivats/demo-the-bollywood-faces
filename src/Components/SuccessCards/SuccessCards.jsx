import React from 'react';
import "./SuccessCardsStyle.css";
import { Link } from "react-router-dom"

import success1 from "../../assets/success/1.png";
import success2 from "../../assets/success/2.png";
import success3 from "../../assets/success/3.png";
import success4 from "../../assets/success/4.png";
import success5 from "../../assets/success/5.png";
import success6 from "../../assets/success/6.png";

function Card(props) {
    const { src, title } = props
    return (
        <>
            <div className='successCard'>
                <img src={src} alt={src} className='image stiff-block' />
                <div className='bottom-box'>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default function IssueCards() {
    return (
        <>
            <div className="success">
                <Card src={success1} />
                <Card src={success2} />
                <Card src={success3} />
                <Card src={success4} />
                <Card src={success5} />
                <Card src={success6} />
            </div>
        </>
    )
}
