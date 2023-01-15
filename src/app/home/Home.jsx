import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import imgOne from '../assets/imegs/ph1.png'; 
import imgTwo from '../assets/imegs/ph2.png'; 
import imgThree from '../assets/imegs/ph3.png';
import ph550 from '../assets/imegs/ph550.png';
import ph551 from '../assets/imegs/ph551.png';
import ph552 from '../assets/imegs/ph552.png';
import ph553 from '../assets/imegs/ph553.png';
import ph554 from '../assets/imegs/ph554.png';

// import VideoBox from '../assets/records/video.02.mp4'; 
// import regIso from '../assets/imegs/regIso.png';

import './home.scss';
import '../animatic/animation.scss';
import '../color.scss';

import './header.scss';

// <img src={imgOne} alt="" />
// document.title = "Web Component";

import {BrowserRouter as Router, Switch, Route, Routes, } from 'react-router-dom'
// ROUTER ROUTER ROUTER ROUTER //
////////////////////////////////
// import Home from './Home';
// import AboutTheProject from './pages/page_1/AboutTheProject'; 
// import HowItWorks from './pages/page_3/HowItWorks'; 
// import Reg from '../../Reg';


function Home() {

let [controlI , setControlI]  = useState(0)

let Iset = `${ph550}`

if(controlI  === 0 )
{
    Iset = `${ph550}`
}
if(controlI  === 1 )
{
    Iset = `${ph551}`
}
if(controlI  === 2 )
{
    Iset = `${ph552}`
}
if(controlI  === 3 )
{
    Iset = `${ph553}`
}
if(controlI  === 4 )
{
    Iset = `${ph554}`
}

function btnC1() {
    let btnC1 = document.getElementById('btnC1');
    let btnC2 = document.getElementById('btnC2');
    let btnC3 = document.getElementById('btnC3');
    let btnC4 = document.getElementById('btnC4');
    let btnC5 = document.getElementById('btnC5');

    btnC1.classList.add('active__btn_content')
    btnC1.classList.remove('animatic_btn-con')

    btnC2.classList.remove('active__btn_content')
    btnC2.classList.add('animatic_btn-con')

    btnC3.classList.remove('active__btn_content')
    btnC3.classList.add('animatic_btn-con')

    btnC4.classList.remove('active__btn_content')
    btnC4.classList.add('animatic_btn-con')

    btnC5.classList.remove('active__btn_content')
    btnC5.classList.add('animatic_btn-con')
    setControlI(controlI = 0)
}

function btnC2() {
    let btnC1 = document.getElementById('btnC1');
    let btnC2 = document.getElementById('btnC2');
    let btnC3 = document.getElementById('btnC3');
    let btnC4 = document.getElementById('btnC4');
    let btnC5 = document.getElementById('btnC5');

    btnC2.classList.add('active__btn_content')
    btnC2.classList.remove('animatic_btn-con')

    btnC1.classList.remove('active__btn_content')
    btnC1.classList.add('animatic_btn-con')

    btnC3.classList.remove('active__btn_content')
    btnC3.classList.add('animatic_btn-con')

    btnC4.classList.remove('active__btn_content')
    btnC4.classList.add('animatic_btn-con')

    btnC5.classList.remove('active__btn_content')
    btnC5.classList.add('animatic_btn-con')
    setControlI(controlI = 1)
}

function btnC3() {
    let btnC1 = document.getElementById('btnC1');
    let btnC2 = document.getElementById('btnC2');
    let btnC3 = document.getElementById('btnC3');
    let btnC4 = document.getElementById('btnC4');
    let btnC5 = document.getElementById('btnC5');

    btnC3.classList.add('active__btn_content')
    btnC3.classList.remove('animatic_btn-con')

    btnC1.classList.remove('active__btn_content')
    btnC1.classList.add('animatic_btn-con')

    btnC2.classList.remove('active__btn_content')
    btnC2.classList.add('animatic_btn-con')

    btnC4.classList.remove('active__btn_content')
    btnC4.classList.add('animatic_btn-con')

    btnC5.classList.remove('active__btn_content')
    btnC5.classList.add('animatic_btn-con')
    setControlI(controlI = 2)
}

function btnC4() {
    let btnC1 = document.getElementById('btnC1');
    let btnC2 = document.getElementById('btnC2');
    let btnC3 = document.getElementById('btnC3');
    let btnC4 = document.getElementById('btnC4');
    let btnC5 = document.getElementById('btnC5');

    btnC4.classList.add('active__btn_content')
    btnC4.classList.remove('animatic_btn-con')

    btnC1.classList.remove('active__btn_content')
    btnC1.classList.add('animatic_btn-con')

    btnC2.classList.remove('active__btn_content')
    btnC2.classList.add('animatic_btn-con')

    btnC3.classList.remove('active__btn_content')
    btnC3.classList.add('animatic_btn-con')

    btnC5.classList.remove('active__btn_content')
    btnC5.classList.add('animatic_btn-con')
    setControlI(controlI = 3)
}

function btnC5() {
    let btnC1 = document.getElementById('btnC1');
    let btnC2 = document.getElementById('btnC2');
    let btnC3 = document.getElementById('btnC3');
    let btnC4 = document.getElementById('btnC4');
    let btnC5 = document.getElementById('btnC5');

    btnC5.classList.add('active__btn_content')
    btnC5.classList.remove('animatic_btn-con')

    btnC1.classList.remove('active__btn_content')
    btnC1.classList.add('animatic_btn-con')

    btnC2.classList.remove('active__btn_content')
    btnC2.classList.add('animatic_btn-con')

    btnC3.classList.remove('active__btn_content')
    btnC3.classList.add('animatic_btn-con')

    btnC4.classList.remove('active__btn_content')
    btnC4.classList.add('animatic_btn-con')
    setControlI(controlI = 4)
}

    return (
        <div className="disable_zoom" id='disableZoom'>
            {/* главный контейнер */}
            <div className="app_home">
            <Header />
                <div className='container_title'>
                    <div>
                        <h1>
                            <span>W</span>eb <span>C</span>omponent
                        </h1>
                        <p>
                        <span>Э</span>то сайт помошник в котором есть разные компоненты и их редактирование в реальном времени.
                        </p>
                    </div>
                    <button className='btn_title'><Link to="/workspace">Начать</Link></button>
                </div>
                <div className='container_main-info'>
                    <div className='container_info-1'>
                    <img src={imgOne} alt="" />
                    <div className='container_t'>
                        <h2>У <span>W</span>eb <span>C</span>omponent </h2>
                        <p>
                            <span>П</span>ростой и поятный интерфейс, в котором есть все что вам необходимо.   
                        </p>
                    </div>
                    </div>
                    <div className='container_info-2'>
                    <img src={imgTwo} alt="" />
                    <div className='container_t'>
                        <h2>На <span>W</span>eb <span>C</span>omponent </h2>
                        <p>
                            <span>В</span>ы можете сразу посмотреть готовый код вашего компонента.   
                        </p>
                    </div>
                    </div>
                    <div className='container_info-3'>
                    <div className='container_t'>
                        <h2>У <span>W</span>eb <span>C</span>omponent </h2>
                        <p>
                            <span>Е</span>сть сохранение настроек оно происходит автаматически, их так же можно сбросить.
                        </p>
                    </div>
                    <img src={imgThree} alt="" />
                    </div>
                </div>
                <div className='container_content-component'>
                    <h2>
                        <span>П</span>римеры компонентов на <span>W</span>eb <span>C</span>omponent
                    </h2>
                    <div className='container__swap_contetn'>
                        <button onClick={btnC1} id='btnC1' className='btn_content active__btn_content'>Слайдеры</button>
                        <button onClick={btnC2} id='btnC2' className='btn_content animatic_btn-con'>Галереии</button>
                        <button onClick={btnC3} id='btnC3' className='btn_content animatic_btn-con'>Шапки</button>
                        <button onClick={btnC4} id='btnC4' className='btn_content animatic_btn-con'>Подвалы</button>
                        <button onClick={btnC5} id='btnC5' className='btn_content animatic_btn-con'>Анимации</button>
                    </div>
                    <div className='contaienr_content'>
                        <img src={Iset} alt="" />
                        <img src={Iset} alt="" />

                        <div className='none_i'></div>
                        <div className='none_i'></div>
                        <div className='none_i'></div>
                        <div className='none_i'></div>
                        <div className='none_i'></div>
                        <div className='none_i'></div>
                    </div>
                </div>
                <div className='contaienr__footer_control'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

{/* отключение скрола по ctrlKey */}
window.onload = function () {
    document.getElementById('root').addEventListener('wheel', event => {
        if (event.ctrlKey) {
            event.preventDefault()
        }
    }, true);
}

export default Home;
