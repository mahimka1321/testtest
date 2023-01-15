import React from 'react';
import { Outlet } from 'react-router-dom';

import  Header  from './app/home/Header';
import  Footer  from './app/home/Footer';

function MainLayout() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;