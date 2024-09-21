import React, { useState, useEffect } from "react";
import "./HomeStyle.css";

import Navbar from "../../Components/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Magazine from "../../Components/Magazine/Magazine";

import BeatLoader from "react-spinners/BeatLoader";

export default function Home() {
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
          <Navbar />
          <Hero />

          <div className="container">
            <Title title={"about Us"} subtitle={"know more about us"} />
            <About setPlayState={setPlayState} />
          </div>

          <div className="container">
            <Title title={"Gallery"} subtitle={"Magazine Release"} />
            <Magazine />
          </div>

          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </>
      )}
    </>
  );
}
