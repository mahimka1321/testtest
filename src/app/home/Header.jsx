import React from 'react';
import { Link } from 'react-router-dom';

import regIso from '../assets/imegs/regIso.png';


import {BrowserRouter as Router, Switch, Route, Routes, } from 'react-router-dom'
// ROUTER ROUTER ROUTER ROUTER //
////////////////////////////////
import Home from './Home';
import AboutTheProject from './pages/page_1/AboutTheProject'; 
import HowItWorks from './pages/page_3/HowItWorks'; 
import Reg from '../../Reg';

function Header() {
    return (
        <>
        <div className='container_header'>
        <div className='logo'>
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_737_927)">
                    <path d="M52.0127 27.5035C52.0127 27.5035 49.0423 -4.61411 20.4474 17.4536C-8.15223 39.5098 12.9679 46.9027 29.4821 45.4813C46.2763 44.0514 52.7062 41.6192 52.0127 27.5035Z" fill="url(#paint0_linear_737_927)"/>
                    <path opacity="0.8" d="M35.3049 7.6522C35.3049 7.6522 1.82054 -4.70553 13.7297 31.4318C25.6389 67.5692 40.7429 51.9656 45.2898 36.4055C49.9198 20.5745 49.7986 13.6287 35.3049 7.6522Z" fill="url(#paint1_linear_737_927)"/>
                    <path d="M45.2326 21.4171C45.2326 21.4171 30.6913 -6.16298 15.9425 23.0354C1.19372 52.2337 21.0484 51.732 33.8401 44.951C46.8606 38.0546 51.1376 33.7427 45.2326 21.4171Z" fill="url(#paint2_linear_737_927)"/>
                    <path d="M25.9073 32.1953L28.1729 22.625L29.4386 22.625L29.7276 24.2187L27.3136 34L25.9542 34L25.9073 32.1953ZM24.7432 22.625L26.6182 32.1953L26.462 34L24.9464 34L22.4229 22.625L24.7432 22.625ZM31.7198 32.1562L33.5714 22.625L35.8917 22.625L33.3761 34L31.8604 34L31.7198 32.1562ZM30.1495 22.625L32.4307 32.2344L32.3682 34L31.0089 34L28.5792 24.2109L28.8917 22.625L30.1495 22.625Z" fill="#2B2B2B"/>
                    <path d="M38.3708 32.5986C38.6123 32.5986 38.8265 32.5531 39.0134 32.4619C39.2002 32.3662 39.346 32.234 39.4509 32.0654C39.5602 31.8923 39.6172 31.6895 39.6218 31.457L41.4743 31.457C41.4697 31.9766 41.3307 32.4391 41.0573 32.8447C40.7839 33.2458 40.417 33.5625 39.9567 33.7949C39.4964 34.0228 38.9815 34.1367 38.4118 34.1367C37.8376 34.1367 37.3363 34.041 36.9079 33.8496C36.4841 33.6582 36.1309 33.3939 35.8483 33.0566C35.5658 32.7148 35.3539 32.3184 35.2126 31.8672C35.0713 31.4115 35.0007 30.9238 35.0007 30.4043L35.0007 30.2061C35.0007 29.682 35.0713 29.1943 35.2126 28.7432C35.3539 28.2874 35.5658 27.891 35.8483 27.5537C36.1309 27.2119 36.4841 26.9453 36.9079 26.7539C37.3317 26.5625 37.8285 26.4668 38.3981 26.4668C39.0043 26.4668 39.5352 26.583 39.9909 26.8154C40.4512 27.0479 40.8112 27.3805 41.071 27.8135C41.3353 28.2419 41.4697 28.75 41.4743 29.3379L39.6218 29.3379C39.6172 29.0918 39.5648 28.8685 39.4645 28.668C39.3688 28.4674 39.2276 28.3079 39.0407 28.1895C38.8584 28.0664 38.6328 28.0049 38.364 28.0049C38.0768 28.0049 37.8421 28.0664 37.6598 28.1895C37.4776 28.3079 37.3363 28.472 37.236 28.6816C37.1358 28.8867 37.0651 29.1214 37.0241 29.3857C36.9876 29.6455 36.9694 29.9189 36.9694 30.2061L36.9694 30.4043C36.9694 30.6914 36.9876 30.9671 37.0241 31.2314C37.0606 31.4958 37.1289 31.7305 37.2292 31.9355C37.334 32.1406 37.4776 32.3024 37.6598 32.4209C37.8421 32.5394 38.0791 32.5986 38.3708 32.5986Z" fill="#2B2B2B"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_737_927" x1="39.3383" y1="9.38683" x2="23.4614" y2="47.8897" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4AFFB3"/>
                        <stop offset="1" stopColor="#4AFF93" stopOpacity="0.5"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_737_927" x1="35.6614" y1="7.79528" x2="18.5829" y2="49.2123" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4AFFBE"/>
                        <stop offset="1" stopColor="#4AFF93" stopOpacity="0.5"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_737_927" x1="41.758" y1="15.6803" x2="15.0229" y2="48.0152" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7AF4DE"/>
                        <stop offset="0.1422" stopColor="#4AFFBE" stopOpacity="0.9"/>
                        <stop offset="0.3348" stopColor="#4AFFBE" stopOpacity="0.8"/>
                        <stop offset="0.5364" stopColor="#4AFF93" stopOpacity="0.7"/>
                        <stop offset="0.7509" stopColor="#4AFF93" stopOpacity="0.6"/>
                        <stop offset="1" stopColor="#4AFF93" stopOpacity="0.5"/>
                    </linearGradient>
                    <clipath id="clip0_737_927">
                        <rect width="45.1456" height="45.1456" fill="white" transform="translate(0 41.7366) rotate(-67.5909)"/>
                    </clipath>
                </defs>
            </svg>
            <h2>
                <Link to="/"><span>W</span>eb &zwnj;<span>C</span>omponent</Link>
            </h2>
        </div>
        <div className='container_nav'>
            <ul className='nav'>
                <li className='text_nav'><Link to="/about"><span>о</span> проекте</Link></li>
                <li className='text_nav'><Link><span>к</span>то мы?</Link></li>
                <li className='text_nav'><Link to="/works"><span>к</span>ак это работает?</Link></li>
            </ul>
        </div>
        <div className='iso_reg'>
            <Link to="/reg">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0004 15.8511C10.7639 15.8511 8 16.2641 8 17.9182C8 19.5722 10.7464 20 14.0004 20C17.2369 20 20 19.5863 20 17.9329C20 16.2796 17.2544 15.8511 14.0004 15.8511Z" stroke="#4AFF93" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0004 13.4918C16.1243 13.4918 17.8458 12.0382 17.8458 10.2456C17.8458 8.45294 16.1243 7 14.0004 7C11.8765 7 10.1542 8.45294 10.1542 10.2456C10.147 12.0322 11.8573 13.4858 13.9733 13.4918H14.0004Z" stroke="#4AFF93" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="14" cy="14" r="13.5" stroke="white"/>
                </svg>
            </Link>
        </div>

    </div>
    </>
    );
}

export default Header;
