import { React, useState, useEffect } from 'react'
import logob from "../../assets/imgAssets/Logob.png"
import logow from "../../assets/imgAssets/Logow.png"
import "./LogoNavStyle.css"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import MenuIcon from "../../assets/imgAssets/menu-icon.png"

export default function Nav() {

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <>
            <div className={`nav container`}>
                <div className='NavLogoCover'>
                    <Link to="/"><img src={logow} className="img" alt="" /></Link>
                </div>
                {/* <span><RxHamburgerMenu className='menu-icon' onClick={toggleMenu} /></span> */}
                <img src={MenuIcon} alt="" className='menu-icon' onClick={toggleMenu} />
                <div className='top-links'>
                    <ul className={`top-links-ul ${mobileMenu ? "" : "hide-mobile-menu"}`}>
                        <Link to={"/"}><li>Home</li ></Link>
                        <Link to={"/servies/seo"}><li>S.E.O</li></Link>
                        <Link to={"/services/webdesigning"}><li>Web Designing</li></Link>
                        <Link to={"/services/graphicdesigning"}><li>Graphic Designing</li></Link>
                        <Link to={"/services/videoediting"}><li>Video Editing</li></Link>
                        <Link to={"/services/socialmediamanagement"}><li>Social Media Management</li></Link>
                        <Link to={"/services/brandpromotion"}><li>Brand Promotion</li></Link>
                    </ul>
                </div>
            </div >
        </>
    )
}
