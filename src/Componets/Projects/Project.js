import React, { useEffect } from 'react';
import './Project.css'
import project from '../../images/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg';
import project2 from '../../images/download.jpg';
import project3 from '../../images/photo-1454165804606-c3d57bc86b40.jpg';
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
                                <p className=''>some quick example text to build on the card title and.....  </p>
                                <a href='https://assignment-twelve-11736.web.app/' className='btn' alt="">More details</a>

                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='card text-dark'>
                            <img src={project2} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Fasion House </h4>
                                <p className=''>some quick example text to build on the card title and.....  </p>
                                <a href='https://assignment-elevenn.web.app/' alt="" className='btn'>More details</a>

                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='card text-dark'>
                            <img src={project3} className="card-img-top" alt='' />


                            <div className='card-body'>
                                <h4 className='card-title'>Personal Gym trainer </h4>
                                <p className=''>some quick example text to build on the card title and.....  </p>
                                <a href='https://assignment-ten-bf51b.web.app/' className='btn'>More detail</a>

                            </div>
                        </div>

                    </div>



                </div>


            </div>


        </div>
    );
};



export default Project;