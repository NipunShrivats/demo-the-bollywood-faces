import React, { useRef } from 'react'
import './ClientsStyle.css'
import { Link } from "react-router-dom"

import client1 from "../../assets/clientHandles/client1.jpg"
import client2 from "../../assets/clientHandles/client2.jpg"
import client3 from "../../assets/clientHandles/client3.jpg"
import client4 from "../../assets/clientHandles/client4.jpg"

import Card from '../../Components/Card/Card'

export default function Clients() {
    return (
        <>
            <div className='clients'>
                <div className='clientBox1'>
                    <Card
                        firstAlphabet={"S"}
                        name={"Shveta Sharma"}
                        username={"@ahaana_holistichealing"}
                        image={client1}
                        to={"https://www.instagram.com/ahaana_holistichealing/"}
                    />
                    <Card
                        firstAlphabet={"N"}
                        name={"Naira Sri"}
                        username={"@cutiekuhoo"}
                        image={client2}
                        to={"https://www.instagram.com/cutiekuhoo/"}
                    />
                    <Card
                        firstAlphabet={"V"}
                        name={"Virender Sharma"}
                        username={"@virendersharmababa_ji"}
                        image={client3}
                        to={"https://www.instagram.com/virendersharmababa_ji/?hl=en"}
                    />
                </div>
                <button className='btn dark-btn'><Link to={"/ClientData"}>View More Clients</Link> </button>
            </div>
        </>
    )
}
