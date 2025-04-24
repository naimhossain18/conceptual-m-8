import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
       <>
        <Navbar></Navbar>

       <div className='bg-slate-100 min-h-[calc(100vh-108px)]'>
      <div className='container mx-auto pt-5'>  <Outlet></Outlet></div>
       </div>
        <Footer></Footer>
       
       </>
    );
};

export default MainLayout;