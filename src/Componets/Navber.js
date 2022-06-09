import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <div>
            <nav class="navbar bg navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div class="container">
                    <p class="navbar-brand " >Rahul</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/services">Services</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/projects">Projects</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" >Contack</Link >
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>



            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">



                    <Link class="nav-link active" aria-current="page" to="#home">Home</Link >


                    <Link class="nav-link" to="#about">About</Link >


                    <Link class="nav-link" to="#services">Services</Link >


                    <Link class="nav-link" to="#projects">Projects</Link >

                    <Link class="nav-link" to="#contack">Contack</Link >




                </div>
            </div>
        </div>


    );
};

export default Navber;