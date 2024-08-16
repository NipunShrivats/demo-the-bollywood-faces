import { React, useState, useEffect } from 'react';
import "./WebDesigningStyle.css";
import bannerImg from "../../../assets/imgAssets/banner2.png";

import Nav from '../../LogoNav/LogoNav'
import Banner from '../../../Components/ServicePageComponents/Banner/Banner'
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact"
import Title from '../../../Components/Title/Title'

import img1 from "../../../assets/services-img/web-design.jpg";
import img2 from "../../../assets/services-img/web-design2.jpg";

import BeatLoader from "react-spinners/BeatLoader";

export default function WebDesigning() {
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
                            title={"Best Web Designing Company Offering Web Design Services"}
                            para1={"Among the most crucial components of your brand’s online presence is your website. We make sure that your website is established and designed correctly to draw in new customers and nurture bottom-of-the-funnel leads to increase conversion rates."}
                            para2={"We take your target audience into consideration when we develop and design your website, making sure it provides an excellent user experience with clear navigation, improved content, and striking visual features. In order to help your website rank higher among the millions of other websites on the internet, we also make sure it has the greatest Search Engine Optimization (SEO) available."}
                        />
                        <Block2 quote={`With the help of our website design and development service, you can easily improve your company's online visibility and draw in more customers."`} />
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
