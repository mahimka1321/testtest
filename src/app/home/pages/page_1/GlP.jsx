import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

import './aboutTheProject.scss';
import '../../../animatic/animation.scss';
import '../../../color.scss';

import '../../header.scss';

function GlP() {

  return (
    <div className="gl_p">
        <Link className="btn_n-p" to="/about">Назад</Link>
    </div>
  );
}

export default GlP;
