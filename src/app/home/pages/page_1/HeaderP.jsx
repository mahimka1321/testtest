import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

import './aboutTheProject.scss';
import '../../../animatic/animation.scss';
import '../../../color.scss';

import '../../header.scss';

function HeaderP() {

  return (
    <div className="header_p">
        <Link className="btn_n-p" to="/about">Назад</Link>
    </div>
  );
}

export default HeaderP;
