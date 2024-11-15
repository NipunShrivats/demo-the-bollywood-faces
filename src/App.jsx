import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Policy from "./Pages/Policy/Policy";
import Contact from "./Components/Contact/Contact";
import Title from "./Components/Title/Title";
import Issues from "./Pages/Issues/Issues";
import Success from "./Pages/Success/Success";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/PrivacyPolicy" exact={true} element={<Policy />} />
          <Route path="/Issues" exact={true} element={<Issues />} />
          <Route path="/Successstories" exact={true} element={<Success />} />
        </Routes>
        <div className="container">
          <Title title={"contact us"} subtitle={"get in touch"} />
          <Contact />
        </div>
        <div className="container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
