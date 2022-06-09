import React, { useEffect } from 'react';
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='service p-5'>
            <div className='myServiceText pt-5'>
                <h3> MY <span >SERVICES</span></h3>
                <hr />
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                        <div className='border service p-4'>
                            <p className='service-icon'><span className='border p-2'><i class="fa-solid fa-code"></i></span></p>
                            <h5 className="mt-5">WEB DEVELOMENT</h5>
                            <p>Description Description Description Description Description Description Description Description Description Description Description</p>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='border service p-4'>
                            <p className='service-icon'><span className='border p-2'><i class="fa-solid fa-pen"></i></span></p>
                            <h5 className='mt-5'>WEB DISIGNER</h5>
                            <p>Description Description Description Description Description Description Description Description Description Description Description</p>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border service p-4'>
                            <p className='service-icon'><span className='border p-2'><i class="fa-solid fa-sliders"></i></span></p>
                            <h5 className='mt-5'>PHOTOGRAPHY</h5>
                            <p>Description Description Description Description Description Description Description Description Description Description Description</p>
                        </div>

                    </div>


                </div>


            </div>


        </div>
    );
};

export default Service;