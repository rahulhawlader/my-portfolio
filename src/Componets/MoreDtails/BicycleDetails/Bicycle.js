import React from 'react';
import "./Bicycle.css"
import img1 from '../../../images-details/bicycle1.png'
import img2 from '../../../images-details/bicycle2.png'
import img3 from '../../../images-details/bicycle3.png'


const Bicycle = () => {
    return (
        <div className='card-body deatails-body'>
            <div className='img-sector'>

                <img src={img1} alt=''></img>
                <img className='mx-2' src={img2} alt=''></img>
                <img src={img3} alt=''></img>

            </div>

            <div>
                <h3>Bicycle Parts Store</h3>
                <p>Details:- <span>It it's a Bicycle Parts  Store parts manufacturer seller Website, Where a lot of Parts are Available fore wholesale sales.</span> </p>
                <p>Used daisy UI as a component's library of Tailwind CSS.</p>
                <p>Firebase hook for Authentication. Also used React-Router, React Query, Nested Routes, Axios for make website more used friendly.</p>
                <p>Stripe payment Method jwt to verify security and two different roles admin client are implemented .Data are stored on MongoDB.</p>

            </div>
            <a href='https://assignment-twelve-11736.web.app/' className='btn  mx-4 bg-primary' alt="">Live Demo</a>
            <a className='btn mx-1' href='https://github.com/rahulhawlader/assinment-twelve' alt="">Client</a>
            <a href='https://github.com/rahulhawlader/assignment-twelve-server' className='btn' alt="">server</a>
        </div>
    );
};

export default Bicycle;