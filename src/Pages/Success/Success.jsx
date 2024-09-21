import { React, useState, useEffect } from "react";
import "./SuccessStyle.css";
import Nav from "../../Components/Navbar/Navbar";
import HeroSuccess from "../../Components/HeroSuccess/HeroSuccess";
import SuccessCards from "../../Components/SuccessCards/SuccessCards";
import Title from "../../Components/Title/Title";

import BeatLoader from "react-spinners/BeatLoader";
export default function Success() {
  const [playState, setPlayState] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-cover">
          <BeatLoader
            color={"rgb(232, 151, 0)"}
            loading={loading}
            size={20}
            aria-label="Loading bouncer"
            data-testid="loader"
            className="loader"
          />
        </div>
      ) : (
        <>
          <Nav />
          <HeroSuccess />

          <div className="container">
            <Title title={"stories"} subtitle={"view our success stories"} />
            <SuccessCards />
          </div>
        </>
      )}
    </>
  );
}
