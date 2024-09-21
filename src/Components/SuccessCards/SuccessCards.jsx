import React from "react";
import "./SuccessCardsStyle.css";
import { Link } from "react-router-dom";

// import success1 from "../../assets/success/1.png";
// import success2 from "../../assets/success/2.png";
// import success3 from "../../assets/success/3.png";
// import success4 from "../../assets/success/4.png";
// import success5 from "../../assets/success/5.png";
// import success6 from "../../assets/success/6.png";

import sWall1 from "../../assets/success/wall-1.png";
import sWall2 from "../../assets/success/wall-2.png";
import sWall3 from "../../assets/success/wall-3.png";
import sWall4 from "../../assets/success/wall-4.png";
import sWall5 from "../../assets/success/wall-5.png";
import sWall6 from "../../assets/success/wall-6.png";
import sWall7 from "../../assets/success/wall-7.png";

function Card(props) {
  const { src, title } = props;
  return (
    <>
      <div className="successCard">
        <img src={src} alt={src} className="image stiff-block" />
        <div className="bottom-box">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

export default function IssueCards() {
  return (
    <>
      <div className="success">
        <Card src={sWall1} />
        <Card src={sWall2} />
        <Card src={sWall3} />
        <Card src={sWall4} />
        <Card src={sWall5} />
        <Card src={sWall6} />
        <Card src={sWall7} />
        {/* <Card src={success1} />
        <Card src={success2} />
        <Card src={success3} />
        <Card src={success4} />
        <Card src={success5} />
        <Card src={success6} /> */}
      </div>
    </>
  );
}
