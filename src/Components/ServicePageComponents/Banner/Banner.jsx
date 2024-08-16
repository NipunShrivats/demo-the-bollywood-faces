import React from 'react';
import "./BannerStyle.css";

export default function Banner({ bannerImg }) {
    return (
        <>
            <div className='banner-cover'>
                <img src={bannerImg} alt="" className='banner-img' />
            </div>
        </>
    )
}
