import React from 'react';
import "./IssueCardsStyle.css";
import { Link } from "react-router-dom"

import issue1 from "../../assets/issues/1.png";
import issue2 from "../../assets/issues/2.png";
import issue3 from "../../assets/issues/3.png";
import issue4 from "../../assets/issues/4.png";
import issue5 from "../../assets/issues/5.png";
import issue6 from "../../assets/issues/6.png";
import issue7 from "../../assets/issues/7.png";
import issue8 from "../../assets/issues/8.png";
import issue9 from "../../assets/issues/9.png";
import issue10 from "../../assets/issues/10.png";
import issue11 from "../../assets/issues/11.png";
import issue12 from "../../assets/issues/12.png";
import issue13 from "../../assets/issues/13.png";
import issue14 from "../../assets/issues/14.png";
import issue15 from "../../assets/issues/15.png";
import issue16 from "../../assets/issues/16.png";
import issue17 from "../../assets/issues/17.png";

function Card(props) {
    const { src, title, to } = props
    return (
        <>
            <div className='issueCard'>
                <Link to={to} target='blank_'>
                    <img src={src} alt={src} className='image stiff-block' />
                </Link>
                <div className='bottom-box'>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default function IssueCards() {
    return (
        <>
            <div className="issue">
                <Card
                    src={issue1}
                    title={"Magazine Launch | Issue no. 32"}
                    to={"https://www.youtube.com/watch?v=AJfyX4-hJMg"}
                />
                <Card
                    src={issue2}
                    title={"Magazine Launch | Issue no. 33"}
                    to={"https://www.youtube.com/watch?v=pSY-UtHdrvk"}
                />
                <Card
                    src={issue3}
                    title={"Magazine Launch | Issue no. 34"}
                    to={"https://www.youtube.com/watch?v=pPqPYyCoa1g"}
                />
                <Card
                    src={issue4}
                    title={"Magazine Launch | Issue no. 35"}
                    to={"https://www.youtube.com/watch?v=q6ktzyG36pE"}
                />
                <Card
                    src={issue5}
                    title={"Magazine Launch | Issue no. 36"}
                    to={"https://www.youtube.com/watch?v=SVEJ1ZyOWw0"}
                />
                <Card
                    src={issue6}
                    title={"Magazine Launch | Issue no. 37"}
                    to={"https://www.youtube.com/watch?v=I3xtYUBoapM"}
                />
                <Card
                    src={issue7}
                    title={"Magazine Launch | Issue no. 38"}
                    to={"https://www.youtube.com/watch?v=Ql-AlgVn4b8"}
                />
                <Card
                    src={issue8}
                    title={"Magazine Launch | Issue no. 39"}
                    to={"https://www.youtube.com/watch?v=EYTfzltmj_k"}
                />
                <Card
                    src={issue9}
                    title={"Magazine Launch | Issue no. 40"}
                    to={"https://www.youtube.com/watch?v=XLe4XCn1vO4"}
                />
                <Card
                    src={issue10}
                    title={"Magazine Launch | Issue no. 41"}
                    to={"https://www.youtube.com/watch?v=FZVwi9arUIg"}
                />
                <Card
                    src={issue11}
                    title={"Magazine Launch | Issue no. 42"}
                    to={"https://www.youtube.com/watch?v=0kr9vskLd_0"}
                />
                <Card
                    src={issue12}
                    title={"Magazine Launch | Issue no. 43"}
                    to={"https://www.youtube.com/watch?v=854h9uIJtjE"}
                />
                <Card
                    src={issue13}
                    title={"Magazine Launch | Issue no. 44"}
                    to={"https://www.youtube.com/watch?v=g4oPFba-33A"}
                />
                <Card
                    src={issue14}
                    title={"Magazine Launch | Issue no. 45"}
                    to={"https://www.youtube.com/watch?v=NjZtFndntd8"}
                />
                <Card
                    src={issue15}
                    title={"Magazine Launch | Issue no. 48"}
                    to={"https://www.youtube.com/watch?v=LkkYKogi6Sw"}
                />
                <Card
                    src={issue16}
                    title={"Magazine Launch | Issue no. 49"}
                    to={"https://www.youtube.com/watch?v=5ER3LbNxCS4"}
                />
                <Card
                    src={issue17}
                    title={"Magazine Launch | Event In Maldives"}
                    to={"https://www.youtube.com/watch?v=-O8n7GUtLhg"}
                />

            </div>
        </>
    )
}
