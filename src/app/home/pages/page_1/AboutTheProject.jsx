import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';

import './aboutTheProject.scss';
import '../../../animatic/animation.scss';
import '../../../color.scss';

import '../../header.scss';

function AboutTheProject() {

  return (
    <div className="about_disableZoom" id='disableZoom'>
      <div className="about_app">
        <Header />
        <div className='container_title'>
        <div>
            <h1>
                <span>W</span>eb <span> C</span>omponent
            </h1>
            <p>
            <span>Э</span>то молодой проект который планирует всегда развиваться и обновлять свои функции для более удобной работы с компонентами. Компоненты всегда будут обновлятся и добовлятся их планируется боллее 20+ видов и более 300+ типов компонентов. Так что вы всегда сможете найти и сделать все что вам надо.
            </p>
        </div>
        </div>
        <div className='container__there_is'>
        <div className='box_scroll'>
          <ul className='nav__there_is'>
            <li><Link to='/sliderP'>Слайдеры</Link></li>
            <li><Link to='/headerP'>Шапки</Link></li>
            <li><Link to='/glP'>Галереи</Link></li>
          </ul>
        </div>
        <div className='text__there_is'>
          <p><span>К</span>омпоненты которые уже добавлены</p>
        </div>
        </div>
        <div className='container__not_added'>
      <div className='text__not_added'>
          <p><span>К</span>омпоненты которые будут добавлены в близжайшее время</p>
        </div>
        <div className='box_scroll'>
          <ul className='nav__not_added'>
            <li><Link>Подвалы</Link></li>
            <li><Link>Карточки</Link></li>
            <li><Link>Навигации</Link></li>
            <li><Link>Галереии</Link></li>
            <li><Link>Анимации</Link></li>
          </ul>
        </div>
        </div>
        <div className='contaienr__footer_control'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default AboutTheProject;
