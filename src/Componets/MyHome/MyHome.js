import React from 'react';
import About from '../About/About';
import Contack from '../Contack/Contack';
import Home from '../Home/Home';
import Project from '../Projects/Project';
import Service from '../Services/Service';

const MyHome = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Service></Service>
            <Project></Project>
            <Contack></Contack>
        </div>
    );
};

export default MyHome;