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
        <div className='project p-5 mt-4'>
            <div className='myProjectText pt-5'>
                <h3> MY <span >PROJECTS</span></h3>
                <hr />
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                        <div className='card text-dark'>
                            <img style={{ height: "50%" }} src={project} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Bicycle parts store </h4>
                                <p className=''>It it’s a Bicycle Parts  Store parts manufacturer seller Website, Where a lot of Parts are Available fore wholesale sales  </p>


                                <a className='btn bg-primary' href="/bicycle">more Details</a>

                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='card text-dark'>
                            <img style={{ height: "50%" }} src={project2} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Fasion House </h4>
                                <p className=''>It’s a Fasion Ware House -based website. Where a lot of clothes are stored  </p>


                                <a className='btn bg-primary' href="/fasion">more Details</a>

                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='card text-dark'>
                            <img style={{ height: "50%" }} src={project3} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Personal Gym trainer </h4>
                                <p className=''>This is a Personal Trainer Center website and details of what services he provides  </p>


                                <a className='btn bg-primary' href="/gym">more Details</a>

                            </div>
                        </div>

                    </div>



                </div>



            </div>


        </div>
    );
};



export default Project;