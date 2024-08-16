import React from 'react';
import "./Block2Style.css";
import { Link } from "react-router-dom"

export default function Block2({ quote }) {
    return (
        <>
            <div className="container ">
                <div className='box'>
                    <h3>{quote}</h3>
                    <Link to="/">
                        <button className='btn '>
                            back to home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
