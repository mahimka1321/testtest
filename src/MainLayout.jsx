import React from 'react';
import { Outlet } from 'react-router-dom';

import  Header  from './app/home/header/Header';
import  Footer  from './app/home/footer/Footer';

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