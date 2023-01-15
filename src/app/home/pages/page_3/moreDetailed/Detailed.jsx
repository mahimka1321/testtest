import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../howItWorks.scss';
import './detailed.scss';
import '../../../../animatic/animation.scss';
import '../../../../color.scss';

function Detailed() {
    return (
        <div className="works_disableZoom" id='disableZoom'>
            {/* главный контейнер */}
            <div className="works_App sds">
              {/* шапка */}
                <header className="works_header-app">
                    <div className="works_logo-container">
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none">
                        <g clipPath="url(#clip0_544_14)">
                            <path d="M52.0126 27.5035C52.0126 27.5035 49.0422 -4.61411 20.4474 17.4536C-8.15232 39.5098 12.9679 46.9027 29.482 45.4813C46.2762 44.0514 52.7061 41.6192 52.0126 27.5035Z" fill="url(#paint0_linear_544_14)"/>
                            <path opacity="0.8" d="M35.3048 7.6522C35.3048 7.6522 1.82046 -4.70553 13.7296 31.4318C25.6388 67.5692 40.7428 51.9656 45.2897 36.4055C49.9197 20.5745 49.7985 13.6287 35.3048 7.6522Z" fill="url(#paint1_linear_544_14)"/>
                            <path d="M45.2326 21.4171C45.2326 21.4171 30.6913 -6.16298 15.9425 23.0354C1.19372 52.2337 21.0484 51.732 33.8401 44.951C46.8606 38.0546 51.1376 33.7427 45.2326 21.4171Z" fill="url(#paint2_linear_544_14)"/>
                            <path d="M25.9077 32.1953L28.1733 22.625L29.439 22.625L29.728 24.2187L27.314 34L25.9546 34L25.9077 32.1953ZM24.7437 22.625L26.6187 32.1953L26.4624 34L24.9468 34L22.4233 22.625L24.7437 22.625ZM31.7202 32.1562L33.5718 22.625L35.8921 22.625L33.3765 34L31.8608 34L31.7202 32.1562ZM30.1499 22.625L32.4312 32.2344L32.3687 34L31.0093 34L28.5796 24.2109L28.8921 22.625L30.1499 22.625Z" fill="#2B2B2B"/>
                            <path d="M38.3712 32.5986C38.6127 32.5986 38.8269 32.5531 39.0138 32.4619C39.2006 32.3662 39.3465 32.234 39.4513 32.0654C39.5606 31.8923 39.6176 31.6895 39.6222 31.457L41.4747 31.457C41.4701 31.9766 41.3312 32.4391 41.0577 32.8447C40.7843 33.2458 40.4174 33.5625 39.9571 33.7949C39.4968 34.0228 38.9819 34.1367 38.4122 34.1367C37.838 34.1367 37.3367 34.041 36.9083 33.8496C36.4845 33.6582 36.1313 33.3939 35.8487 33.0566C35.5662 32.7148 35.3543 32.3184 35.213 31.8672C35.0717 31.4115 35.0011 30.9238 35.0011 30.4043L35.0011 30.2061C35.0011 29.682 35.0717 29.1943 35.213 28.7432C35.3543 28.2874 35.5662 27.891 35.8487 27.5537C36.1313 27.2119 36.4845 26.9453 36.9083 26.7539C37.3321 26.5625 37.8289 26.4668 38.3985 26.4668C39.0047 26.4668 39.5356 26.583 39.9913 26.8154C40.4516 27.0479 40.8116 27.3805 41.0714 27.8135C41.3357 28.2419 41.4701 28.75 41.4747 29.3379L39.6222 29.3379C39.6176 29.0918 39.5652 28.8685 39.4649 28.668C39.3692 28.4674 39.228 28.3079 39.0411 28.1895C38.8588 28.0664 38.6332 28.0049 38.3644 28.0049C38.0772 28.0049 37.8425 28.0664 37.6603 28.1895C37.478 28.3079 37.3367 28.472 37.2364 28.6816C37.1362 28.8867 37.0655 29.1214 37.0245 29.3857C36.9881 29.6455 36.9698 29.9189 36.9698 30.2061L36.9698 30.4043C36.9698 30.6914 36.9881 30.9671 37.0245 31.2314C37.061 31.4958 37.1293 31.7305 37.2296 31.9355C37.3344 32.1406 37.478 32.3024 37.6603 32.4209C37.8425 32.5394 38.0795 32.5986 38.3712 32.5986Z" fill="#2B2B2B"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_544_14" x1="39.3382" y1="9.38683" x2="23.4614" y2="47.8897" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4AFFB3"/>
                                <stop offset="1" stopColor="#4AFF93" stopOpacity="0.5"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_544_14" x1="35.6613" y1="7.79528" x2="18.5828" y2="49.2123" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4AFFBE"/>
                                <stop offset="1" stopColor="#4AFF93" stopOpacity="0.5"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_544_14" x1="41.758" y1="15.6803" x2="15.0229" y2="48.0152" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7AF4DE"/>
                                <stop offset="0.1422" stopColor="#4AFFBE" stopOpacity="0.9"/>
                                <stop offset="0.3348" stopColor="#4AFFBE" stopOpacity="0.8"/>
                                <stop offset="0.5364" stopColor="#4AFF93" stopOpacity="0.7"/>
                                <stop offset="0.7509" stopColor="#4AFF93" stopOpacity="0.6"/>
                                <stop offset="1" stopColor="#4AFF93" stopOpacity="0.5"/>
                            </linearGradient>
                            <clipPath id="clip0_544_14">
                                <rect width="45.1456" height="45.1456" fill="white" transform="translate(0 41.7366) rotate(-67.5909)"/>
                            </clipPath>
                        </defs>
                    </svg>
                        <h1 className="works_logo-name">
                            <Link to="/"><span>Web</span> Component</Link>
                        </h1>
                        <ul className='works_ul-container'>
                          <li className='works_btn-con'>
                            <button className='works_ul_li-btn'>
                                <Link className='works_link-nav' to="/about">
                                    <p className='works_continer_tx-nav animatic_nav-1'><span>о</span> проекте</p>
                                </Link>
                            </button>
                          </li>
                          <li className='works_btn-con'>
                            <button className='works_ul_li-btn'>
                                <Link className='works_link-nav'>
                                    <p className='works_continer_tx-nav animatic_nav-2'><span>к</span>то мы?</p>
                                </Link>
                            </button>
                          </li>
                          <li className='works_btn-con'>
                            <button className='works_ul_li-btn'>
                                <Link className='works_link-nav' to="/works">
                                    <p className='works_continer_tx-nav animatic_nav-3'><span>к</span>ак это работает?</p>
                                </Link>
                            </button>
                          </li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Detailed;
