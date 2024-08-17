import { React, useState, useEffect } from 'react'
import logow from "../../assets/imgAssets/Logow.png"
import "./LogoNavStyle.css"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import MenuIcon from "../../assets/imgAssets/menu-icon.png"

export default function Nav() {

    return (
        <>
            <div className={`nav container`}>
                <div className='NavLogoCover'>
                    <Link to="/"><img src={logow} className="img" alt="" /></Link>
                </div>
            </div >
        </>
    )
}
