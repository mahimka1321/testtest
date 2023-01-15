import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

function Footer() {
    return (
        <footer>
            <div className='nav_f'>
                <ul>
                    <li><Link to="/">Web Component</Link></li>
                    <li><Link to="/about">о проекте</Link></li>
                    <li><Link>кто мы?</Link></li>
                    <li><Link to="/works">как это работает?</Link></li>
                </ul>
            </div>
            <div className='feedback_f'>
                <ul>
                    <li><Link>ooo ”webcomponent”</Link></li>
                    <li><Link onClick={() => window.location = 'mailto:webcomponent33@gmail.com'}>webcomponent@gmail.com</Link></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;