import { React, useState, useEffect } from 'react';
import "./IssuesStyle.css"
import Nav from "../../Components/Navbar/Navbar"
import HeroIssues from "../../Components/HeroIssues/HeroIssues"
import IssueCards from "../../Components/IssueCards/IssueCards"
import Title from "../../Components/Title/Title"

import BeatLoader from "react-spinners/BeatLoader";
export default function Issues() {

    const [playState, setPlayState] = useState(false);

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
                            color={"rgb(232, 151, 0)"}
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
                        <HeroIssues />

                        <div className='container'>
                            <Title title={"magazine"} subtitle={"view our magazine issues"} />
                            <IssueCards />
                        </div>

                    </>
            }
        </>
    )
}
