import React, { useEffect } from 'react';
import './Project.css'
import project from '../../images/bicycle website.png';
import project2 from '../../images/fasion house.png';
import project3 from '../../images/gym traner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='project p-5'>
            <div className='myProjectText pt-5'>
                <h3> MY <span >PROJECTS</span></h3>
                <hr />
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                        <div className='card text-dark'>
                            <img src={project} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Bicycle parts store </h4>
                                <p className=''>It it’s a Bicycle Parts  Store parts manufacturer seller Website, Where a lot of Parts are Available fore wholesale sales  </p>

                                <a href='https://assignment-twelve-11736.web.app/' className='btn mx-4' alt="">Live Demo</a>

                                <span>
                                    <a className='btn mx-1' href='https://github.com/rahulhawlader/assinment-twelve' alt="">Client</a>

                                    <a href='https://github.com/rahulhawlader/assignment-twelve-server' className='btn' alt="">server</a>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='card text-dark'>
                            <img src={project2} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Fasion House </h4>
                                <p className=''>It’s a Fasion Ware House -based website. Where a lot of clothes are stored  </p>

                                <a href='https://assignment-elevenn.web.app/' alt="" className='btn mx-4'>Live Demo</a>

                                <span>
                                    <a href='https://github.com/rahulhawlader/assignment-eleven-client' alt="" className='btn mx-1'>Client</a>

                                    <a href='https://github.com/rahulhawlader/assignment-ten-server' alt="" className='btn'>Server</a>
                                </span>

                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='card text-dark'>
                            <img src={project3} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Personal Gym trainer </h4>
                                <p className=''>This is a Personal Trainer Center website and details of what services he provides  </p>

                                <a href='https://assignment-ten-bf51b.web.app/' className='btn mx-4'>Live Demo</a>
                                <span>
                                    <a href='https://github.com/rahulhawlader/assignment-ten' className='btn'>Client</a>


                                </span>

                            </div>
                        </div>

                    </div>



                </div>


            </div>


        </div>
    );
};



export default Project;