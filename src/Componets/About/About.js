import React, { useEffect } from 'react';
import aboutImg from '../../images/842087dfe91f8c10e5f008734445dc52.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (

        <div className='w-100 about'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-12 col-md-6 col-lg-6 aboutImgPart ' data-aos="fade-left">
                        <img src={aboutImg} alt="" />

                    </div>
                    <div className='col-12 col-md-6 col-lg-6 aboutTextPart text-white' data-aos="fade-right">
                        <div>
                            <h3>
                                Hello I am Rahul
                            </h3>
                            <p>
                                I Am passinate and extremely motivated new front-end developer.
                                i believe i stand out due to my passion for continuous innovation and pushing boundaries to bring forward new ideas. With my skills, identify real-world challenges and develop applications that bring offency and improvment to the live of users also showcase which technicle improvments can make a meaningful impact on the user and the business.

                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='pe-5'>Name</td>
                                        <td>: Md Sajib Hossain Rahul</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Age</td>
                                        <td>: 27</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Address</td>
                                        <td>: Munshigonj, Dhaka Bangladesh</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Phone</td>
                                        <td>: 01726132222</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Email</td>
                                        <td>: hawladerrahul8@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="https://drive.google.com/file/d/1LOtDWQhpK_Y3E4ua5vxxT32o6oXeGlp1/view?usp=sharing" className='btn my-4 resume' alt="">Download resume</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;