import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';

import './howItWorks.scss';
import '../../../animatic/animation.scss';
import '../../../color.scss';
import '../../header.scss';


import photo_1 from '../../../assets/imegs/photo_page_1/photo_1.1.png';
import photo_2 from '../../../assets/imegs/photo_page_1/photo_1.2.png';


function HowItWorks() {
    return (
        <div className="works_disableZoom" id='disableZoom'>
            <div className="app_works">    
            <Header />
                <div className='container_title'>
                    <div>
                        <h1>
                            У <span>W</span>eb <span>C</span>omponent
                        </h1>
                        <p>
                        <span>Р</span>асположение обьектов на холсте происходит по принципу системе координат.
                        </p>
                    </div>
                </div>
                <img className='photo__num_1' src={photo_1} />
                <div className='container__txet_1'>
                    <div className='txet_1'>
                        <h3><span>К</span>примеру:</h3>
                        <p><span>Н</span>а системе координат есть прямоугольник (рис. - 1). Представим что это див, который мы хотим расположить по центру, абсолютным нулем будет пересечение двух прямых X и Y. 
                        У прямоугольника ширина 80px и бордер 4px, сообветственно ширина теперь = 88px, что бы сделать его по центру X , ширину нужно разделить на 2 и получим 44px.</p>
                    </div>
                </div>
                <div className='container__txet_2'>
                    <div className='txet_2'>
                        <p><span>З</span>начит в окне с координатом X (рис. - 2) надо записать -44, аналогично делаем с Y и получаем блок по центру. Но как вы могли заметить, прямая Y повернута вниз - это говорит о том, что все то что уйдет вниз по прямой Y, это будут цифры со знаком “+”,  а все что уйдет  вверх со знаком “-”.</p>
                    </div>
                </div>
                <img className='photo__num_2' src={photo_2} />
                <div className='contaienr__footer_control'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
