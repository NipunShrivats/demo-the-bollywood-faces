import React from 'react'
import "./ClientDataStyle.css"

import Card from "../../Components/Card/Card"

import Nav from "../LogoNav/LogoNav";

import client4 from "../../assets/clientHandles/client4.jpg"
import client5 from "../../assets/clientHandles/client5.jpg"
import client6 from "../../assets/clientHandles/client6.jpg"
import client7 from "../../assets/clientHandles/client7.jpg"
import client8 from "../../assets/clientHandles/client8.jpg"
import client9 from "../../assets/clientHandles/client9.jpg"
import client10 from "../../assets/clientHandles/client10.jpg"
import client11 from "../../assets/clientHandles/client11.jpg"
import client12 from "../../assets/clientHandles/client12.jpg"
import client13 from "../../assets/clientHandles/client13.jpg"

export default function ClientData() {
    return (
        <>
            <Nav />
            <div className="clientData">
                <h1 className='container '>More of out clients</h1>
                <div className='clientBox1'>
                    <Card
                        firstAlphabet={"G"}
                        name={"Glance Fire & Safety"}
                        username={"@glanceenterprise"}
                        image={client4}
                        to={"https://www.instagram.com/glanceenterprise/"}
                    />
                    <Card
                        firstAlphabet={"S"}
                        name={"Suchitha joshi"}
                        username={"@p5yoga_wellness"}
                        image={client5}
                        to={"https://www.instagram.com/p5yoga_wellness/"}
                    />
                    <Card
                        firstAlphabet={"A"}
                        name={"Aiman Mehtab"}
                        username={"@thetribeofhealing"}
                        image={client6}
                        to={"https://www.instagram.com/thetribeofhealing/"}
                    />
                    <Card
                        firstAlphabet={"D"}
                        name={"Durvam's Diary"}
                        username={"@durvasumedha"}
                        image={client7}
                        to={"https://www.instagram.com/durvasumedha/"}
                    />
                    <Card
                        firstAlphabet={"D"}
                        name={"Dr. Mukesh Kumar"}
                        username={"@urocaredrmukeshkumarvijay"}
                        image={client8}
                        to={"https://www.instagram.com/urocaredrmukeshkumarvijay/"}
                    />
                    <Card
                        firstAlphabet={"A"}
                        name={"Adit Sinha"}
                        username={"@aditsinhashow"}
                        image={client9}
                        to={"https://www.instagram.com/aditsinhashow/"}
                    />
                    <Card
                        firstAlphabet={"A"}
                        name={"Avi Sinha"}
                        username={"@avisinhashow"}
                        image={client10}
                        to={"https://www.instagram.com/avisinhashow/"}
                    />
                    <Card
                        firstAlphabet={"Y"}
                        name={"Yuva 4 Life"}
                        username={"@yuva4life.in"}
                        image={client11}
                        to={"https://www.instagram.com/yuva4life.in/"}
                    />
                    <Card
                        firstAlphabet={"S"}
                        name={"Shveta sharma"}
                        username={"@shvetazworld"}
                        image={client12}
                        to={"https://www.instagram.com/shvetazworld/"}
                    />
                    <Card
                        firstAlphabet={"N"}
                        name={"NUB'S"}
                        username={"@nubs_nitika_"}
                        image={client13}
                        to={"https://www.instagram.com/nubs_nitika_/"}
                    />
                </div>
            </div>
        </>
    )
}
