import { React, useState, useEffect } from 'react';
import "./SeoStyle.css";
import bannerImg from "../../../assets/imgAssets/banner1.png";

import Nav from '../../LogoNav/LogoNav'
import Banner from '../../../Components/ServicePageComponents/Banner/Banner'
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact"
import Title from '../../../Components/Title/Title'

import img1 from "../../../assets/services-img/seo.jpg";
import img2 from "../../../assets/services-img/seo2.jpg";

import BeatLoader from "react-spinners/BeatLoader";

export default function Seo() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return (
        <>
            {
                loading ?
                    <div className='loader-cover'>
                        <BeatLoader
                            color={"#ff0000"}
                            loading={loading}
                            size={20}
                            aria-label="Loading bouncer"
                            data-testid="loader"
                            className='loader'
                        />
                    </div>
                    :
                    <>
                        <Nav />
                        <Banner bannerImg={bannerImg} />
                        <Block1
                            leftImg={img1}
                            title={"Top Search Engine Optimization Company"}
                            para1={"In the field of digital marketing, SEO would be the one tactic we could concentrate on exclusively. While email and PPC marketing are excellent, SEO offers a consistent flow of free leads and income. Though it may require a significant amount of work initially, SEO will benefit your company for the whole of its existence. Hiring a skilled SEO agency is a wise decision, whether you choose to work with us or someone else."}
                            para2={"Seen for the first time in digital marketing terms, SEO is short for search engine optimization. It’s not as difficult as it sounds. The process of optimizing websites and web content for search engines to get the highest possible ranking in search results is known as search engine optimization, or SEO. Being one of Austin’s most highly regarded online"}
                        />
                        <Block2 quote={`"WE HAVE A MISSION TO IMPROVE THE TRAFFIC ON YOUR WEBSITE"`} />
                        <Block3
                            block3Title={"Search Engine Optimization Generate 100% Traffic"}
                            block3para={"Unlock the untapped potential of Search Engine Optimization (SEO) and revolutionize your digital presence. Harnessing innovative strategies and cutting-edge techniques, our approach guarantees not just traffic, but an unstoppable surge of engaged visitors. Experience the thrill of dominating search rankings and unleashing the full force of 100% organic traffic, propelling your brand to unprecedented heights of online success."}
                            li1={"Innovate Strategically"}
                            li2={"Keyword Analysis"}
                            li3={"Empower Efficiently"}
                            rightImg={img2}
                        />

                        <Block4 />

                        <div className='container'>
                            <Title title={"contact us"} subtitle={"get in touch"} />
                            <Contact />
                        </div>
                    </>
            }
        </>

    )
}
