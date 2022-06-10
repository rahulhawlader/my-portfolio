import React from 'react';
import img1 from '../../../images-details/fasion1.png';
import img2 from '../../../images-details/fasion2.png';
import img3 from '../../../images-details/fasion3.png';

const Fasion = () => {
    return (
        <div className='card-body deatails-body'>
            <div className='img-sector'>

                <img src={img1} alt=''></img>
                <img className='mx-2' src={img2} alt=''></img>
                <img src={img3} alt=''></img>

            </div>

            <div>
                <h3>Fasion ware House</h3>
                <p>Details:- <span>It's a Fasion Ware House -based website. Where a lot of clothes are stored.</span> </p>
                <p>Frontend design with Tailwind CSS and Flowbite as component's library.</p>
                <p>Used React-Router to turn the application into Single Page Application.</p>
                <p>MongoDB for stored data and Express.js as Node.js framework. Backend data are hosting on Heroku.</p>

            </div>
            <a href='https://assignment-elevenn.web.app/' alt="" className='btn mx-4'>Live Demo</a>
            <a href='https://github.com/rahulhawlader/assignment-eleven-client' alt="" className='btn mx-1'>Client</a>
            <a href='https://github.com/rahulhawlader/assignment-ten-server' alt="" className='btn'>Server</a>
        </div>
    );
};

export default Fasion;