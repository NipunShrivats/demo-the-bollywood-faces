import React, { useState, useEffect } from 'react'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'

import Seo from './Pages/AllServices/Seo/Seo'
import WebDesigning from './Pages/AllServices/WebDesigning/WebDesigning'
import GraphicDesigning from './Pages/AllServices/GraphicDesigning/GraphicDesigning'
import VideoEditing from './Pages/AllServices/VideoEditing/VideoEditing'
import SocialMediaManagement from './Pages/AllServices/SocialMediaManagement/SocialMediaManagement'
import BrandPromotion from './Pages/AllServices/BrandPromotion/BrandPromotion'
// import AllClients from "./Pages/AllClients/AllClients";
import ClientData from "./Pages/ClientData/ClientData";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/PrivacyPolicy' exact={true} element={<PrivacyPolicy />} />
          <Route path='/servies/seo' exact={true} element={<Seo />} />
          <Route path='/services/webdesigning' exact={true} element={<WebDesigning />} />
          <Route path='/services/graphicdesigning' exact={true} element={<GraphicDesigning />} />
          <Route path='/services/videoediting' exact={true} element={<VideoEditing />} />
          <Route path='/services/socialmediamanagement' exact={true} element={<SocialMediaManagement />} />
          <Route path='/services/brandpromotion' exact={true} element={<BrandPromotion />} />
          <Route path='/ClientData' exact={true} element={<ClientData />} />
        </Routes>
        <div className='container'>
          <Footer />
        </div>
      </BrowserRouter>

    </>

  )
}
