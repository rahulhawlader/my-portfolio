import React from 'react';
import Typewriter from 'typewriter-effect'
import './Home.css'
import myPic from '../../images/286274176_2132366923600941_2065401978888479863_n.png';





const Home = () => {
    return (
        <div className='w-100 home id="home" '>
            <div className='container '>

                <div className='row'>

                    <div className='col-12 col-md-6 col-lg-6 homeTextPart'>
                        <div>
                            <h3> WELCOME TO MY WORLD !</h3>
                            <h1 className='typewriter'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        strings: ['I AM RAHUL ', 'I AM WEB-DEVELOPER']


                                    }}
                                />
                            </h1>
                            <p>
                                I am Front-end Web developer. My Expertise is to create front-end design for a website
                            </p>
                            <div className='icon'>
                                <a href='https://github.com/rahulhawlader'><i class="fa-brands fa-github"></i></a>
                                <a href='https://www.facebook.com/mdrahul.hawlader.5'><i class="fa-brands fa-facebook"></i></a>
                                <a href='https://www.linkedin.com/in/md-sajib-hossain-rahul-583442241/'><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img className='w-50 homeImgPart mt-4' src={myPic} alt="myPic" />
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Home;