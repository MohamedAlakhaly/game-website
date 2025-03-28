/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Navbar from './component/Navbar';
import Home_1 from './component/Home_1';
import Home_2 from './component/Home_2';
import Home_3 from './component/Home_3';
import Browse_1 from './component/Browse_1';
import Browse_2 from './component/Browse_2';
import Browse_3 from './component/Browse_3';
import Details_1 from './component/Details_1';
import Details_2 from './component/Details_2';
import Details_3 from './component/Details_3';
import Contact_1 from './component/Contact_1';
import Contact_2 from './component/Contact_2';
import Profile_1 from './component/Profile_1';
import Footer from './component/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js.map";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./style/style.css";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
     <>
      <Navbar/>
      <Home_1/>
      <Home_2/>
      <Home_3/>
      <Footer/>
    </>,
  },

  {
    path: "/Home",
    element: 
    <>
      <Navbar/>
      <Home_1/>
      <Home_2/>
      <Home_3/>
      <Footer/>
    </>,
  },

  {
    path: "/Browse",
    element: 
    <>
      <Navbar/>
      <Browse_1/>
      <Browse_2/>
      <Browse_3/>
      <Footer/>
    </>,
  },

  {
    path: "/Details",
    element: 
    <>
      <Navbar/>
      <Details_1/>
      <Details_2/>
      <Details_3/>
      <Footer/>
    </>,
  },
    {
    path: "/Contact",
    element: 
    <>
      <Navbar/>
      <Contact_1/>
      <Contact_2/>
      <Footer/>
    </>,
  },

  {
    path: "/Profile",
    element: 
    <>
      <Navbar/>
      <Profile_1/>
      <Footer/>
    </>,
  },
]);


export default function App() {
  return (
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
    
  );
}


