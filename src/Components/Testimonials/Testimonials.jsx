import React, { useRef } from 'react'
import { Link } from "react-router-dom"

import './TestimonialsStyle.css'
import PlayIcon from "../../assets/imgAssets/play-icon-red.png"
import clientImage1 from "../../assets/imgAssets/client-review1.png"
import clientImage2 from "../../assets/imgAssets/client-review2.png"
// import clientImage3 from "../../assets/imgAssets/client-review3.png"
import review1 from "../../assets/imgAssets/reviewSS1.jpg"
import review2 from "../../assets/imgAssets/reviewSS2.jpg"
import CardTest from '../../Components/CardTest/CardTest'

export default function Testimonials() {
    return (
        <>
            <div className='testimonials'>
                <div className="section1">
                    <CardTest
                        firstAlphabet={"A"}
                        name={"Adi Sinha"}
                        username={"@aditsinhashow"}
                        image={clientImage1}
                        to={"https://www.facebook.com/reel/790279912242501"}
                        test={"I would like to thank sensationz for handling my accounts and I refer you to use their services..."}
                    />
                    <CardTest
                        firstAlphabet={"S"}
                        name={"Sshetal Maynak"}
                        username={"@sshetalmaynak"}
                        image={clientImage2}
                        to={"https://www.youtube.com/watch?v=h_c5ZlBcNaw"}
                        test={"I have taken yearly membership for my workshop promotions and earned profits within 1st month..."}

                    />
                    <CardTest
                        firstAlphabet={"A"}
                        name={"Adi Sinha"}
                        username={"@aditsinhashow"}
                        image={clientImage1}
                        to={"https://www.facebook.com/reel/790279912242501"}
                        test={"I would like to thank sensationz for handling my accounts and I refer you to use their services..."}
                    />
                </div>
                {/* <div className="section2">
                    <div className='ele'>
                        <img src={review1} alt="" className='img' />
                    </div>
                    <div className='ele'>
                        <img src={review2} alt="" className='img' />
                    </div>
                </div> */}
            </div>
        </>
    )
}
