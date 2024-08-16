import React from 'react';
import { Link } from "react-router-dom";
import './ServicesStyle.css';
// import program1 from '../../assets/imgAssets/program-1.png'
// import program2 from '../../assets/imgAssets/program-2.png'
// import program3 from '../../assets/imgAssets/program-3.png'

import programIcon1 from '../../assets/imgAssets/program-icon-1.png'
import programIcon2 from '../../assets/imgAssets/program-icon-2.png'
import programIcon3 from '../../assets/imgAssets/program-icon-3.png'

import seo from '../../assets/services-img/seo.jpg'
import webDesign from '../../assets/services-img/web-design.jpg'
import graphicDesign from '../../assets/services-img/graphic-design.jpg'
import videoEditing from '../../assets/services-img/video-editing.jpg'
import socialMedia from '../../assets/services-img/social-media-management.jpg'
import brandPromo from '../../assets/services-img/brand-promo.jpg'

function Service(props) {
    const { img, to, capImg, caption } = props;
    return (
        <>
            <div className='service'>
                <img src={img} alt="" />
                <Link to={to}>
                    <div className='caption'>
                        <img src={capImg} alt="" />
                        <p>{caption}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default function Services() {

    return (
        <>
            <div className='services'>
                <Service
                    img={seo}
                    to={"/servies/seo"}
                    capImg={programIcon1}
                    caption={"S.E.O"}
                />
                <Service
                    img={webDesign}
                    to={"/services/webdesigning"}
                    capImg={programIcon2}
                    caption={"Web Designing"}
                />
                <Service
                    img={graphicDesign}
                    to={"/services/graphicdesigning"}
                    capImg={programIcon3}
                    caption={"Graphic Designing"}
                />

            </div >

            <div className='services'>

                <Service
                    img={videoEditing}
                    to={"/services/videoediting"}
                    capImg={programIcon1}
                    caption={"Video Editing"}
                />
                <Service
                    img={socialMedia}
                    to={"/services/socialmediamanagement"}
                    capImg={programIcon2}
                    caption={"Social Media Management"}
                />
                <Service
                    img={brandPromo}
                    to={"/services/brandpromotion"}
                    capImg={programIcon3}
                    caption={"Brand Promotion"}
                />
            </div>
        </>
    )
}
