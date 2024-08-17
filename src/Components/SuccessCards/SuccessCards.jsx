import React from 'react';
import "./SuccessCardsStyle.css";
import { Link } from "react-router-dom"

import success1 from "../../assets/success/1.png";

function Card(props) {
    const { src, title, to } = props
    return (
        <>
            <div className='issueCard'>
                <Link to={to} target='blank_'>
                    <img src={src} alt={src} className='image' />
                </Link>
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
            <div className="issue">
                <Card src={success1} />
                <Card src={success1} />
                <Card src={success1} />
                <Card src={success1} />
                <Card src={success1} />
                <Card src={success1} />
            </div>
        </>
    )
}
