import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import {BrowserRouter } from 'react-router-dom'

// ROUTER ROUTER ROUTER ROUTER //
////////////////////////////////
import Home from './app/home/page-home/Home';


import AboutTheProject from './app/home/page-one/AboutTheProject'; 
import SliderP from './app/home/page-one/SliderP'; 
import HeaderP from './app/home/page-one/HeaderP'; 
import GlP from './app/home/page-one/GlP';  
import CanvasHeader from './app/workspace/canvas/CanvasHeader';

import HowItWorks from './app/home/page-twoo/HowItWorks'; 

// import Detailed from './app/home/pages/page_3/moreDetailed/Detailed'; 
import RedactorMenu from './app/workspace/RedactorMenu';
import Title from './app/workspace/Title';   
import Reg from './Reg'; 

import Wrapper from './app/workspace/canvas/canvas-wrapper/Wrapper'; 

import MainLayout from './MainLayout';

import Testik from './Testik'; 

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<AboutTheProject/>}/>

                <Route path="/sliderP" element={<SliderP/>}/>
                <Route path="/headerP" element={<HeaderP/>}/>
                <Route path="/glP" element={<GlP/>}/>

                <Route path="/works" element={<HowItWorks/>}/>
                <Route path="/reg" element={<Reg/>}/>

                <Route path="/workspace" element={<RedactorMenu/>}/>
                <Route path="/proto" element={<Title/>}/>

                <Route path="/testik" element={<Testik/>}/>
                <Route path="/wrapper" element={<Wrapper/>}/>

                <Route path="/canvasHeader" element={<CanvasHeader/>}/>
            </Routes>
        </>
    );
}

export default App;




//  import {BrowserRouter as Router, Switch, Route, Routes, } from 'react-router-dom'
//  // ROUTER ROUTER ROUTER ROUTER //
//  ////////////////////////////////
//  import Home from './app/home/Home';
//  import AboutTheProject from './app/home/pages/page_1/AboutTheProject'; 
//  import SliderP from './app/home/pages/page_1/SliderP'; 
//  import HeaderP from './app/home/pages/page_1/HeaderP'; 
//  import GlP from './app/home/pages/page_1/GlP'; 
//  import HowItWorks from './app/home/pages/page_3/HowItWorks'; 
//  import Detailed from './app/home/pages/page_3/moreDetailed/Detailed'; 
//  import RedactorMenu from './app/workspace/RedactorMenu';
//  import Title from './app/workspace/Title';   
//  import Reg from './Reg';

// <Routes>
// <Route path="/" element={<Home />} />
// 
// <Route path="/about" element={<AboutTheProject />} />
// 
// <Route path="/sliderP" element={<SliderP />} />
// <Route path="/headerP" element={<HeaderP />} />
// <Route path="/glP" element={<GlP />} />
// 
// 
// <Route path="/works" element={<HowItWorks />} /> 
// 
// <Route path="/reg" element={<Reg />} />
// 
// <Route path="/detailed" element={<Detailed />} />
// 
// <Route path="/workspace" element={<RedactorMenu />} />
// <Route path="/Title" element={<Title />} />
// </Routes>
// <Router>