import React from 'react';
import img1 from '../../../images-details/gym1.png'
import img2 from '../../../images-details/gym2.png'
import img3 from '../../../images-details/gym3.png'

const Gym = () => {
    return (
        <div className='card-body deatails-body'>
            <div className='img-sector'>

                <img src={img1} alt=''></img>
                <img className='mx-2' src={img2} alt=''></img>
                <img src={img3} alt=''></img>

            </div>

            <div>
                <h3>Personal Gym Trainer</h3>
                <p>Details:- <span>This is a Personal Trainer Center website and details of what services he provides</span> </p>
                <p>Used React-Router to turn the application into Single Page Application.</p>
                <p>Used Bootstrap as a CSS framework and Rechart for a graph view of services.</p>
                <p>Used React Firebase hook for implement Email, Google, GitHub Login.</p>

            </div>
            <a href='https://assignment-ten-bf51b.web.app/' className='btn mx-4'>Live Demo</a>
            <a href='https://github.com/rahulhawlader/assignment-ten' className='btn'>Client</a>

        </div>
    );
};

export default Gym;