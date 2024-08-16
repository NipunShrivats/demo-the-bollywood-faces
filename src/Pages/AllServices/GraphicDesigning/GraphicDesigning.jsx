import { React, useState, useEffect } from 'react';
import "./GraphicDesigningStyle.css";
import bannerImg from "../../../assets/imgAssets/banner3.png";

import Nav from '../../LogoNav/LogoNav'
import Banner from '../../../Components/ServicePageComponents/Banner/Banner'
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact"
import Title from '../../../Components/Title/Title'

import img1 from "../../../assets/services-img/graphic-design.jpg";
import img2 from "../../../assets/services-img/graphic-design2.jpg";

import BeatLoader from "react-spinners/BeatLoader";

export default function GraphicDesigning() {
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
                            title={"We deliver designs that stick in your memory."}
                            para1={"We have been providing eye-catching, visually appealing, and powerful design. Excel Variety Media offers numerous industry verticals a wide range of design services. Because of our years of experience, we can help you whether your business is new or well-established. We assist you in organizing and achieving your goals with visually appealing and functional designs that make a lasting impression on our clients."}
                        />
                        <Block2 quote={`We offer modern software for visual design to create attractive concepts for you."`} />
                        <Block3
                            block3Title={"We offer modern software for visual design to create attractive concepts for you."}
                            block3para={"We are a dynamic team of artistic experts with a plethora of knowledge in developing concepts that are aesthetically exceptional. To create exceptional work, our talented graphic designers blend the highest levels of imagination and expertise with novel, creative, and creative concepts. There used to be several limitations on the high-quality graphic design tools available to designers."}
                            li1={"Adobe Photoshop"}
                            li2={"Adobe Illustrator"}
                            li3={"& many more"}
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
