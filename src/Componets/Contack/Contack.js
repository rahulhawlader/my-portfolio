import React from 'react';
import './Contack.css'

const Contack = () => {
    return (
        <div className='contack text-center text-white my-4' id="contack">
            <br /> <h1>Contack</h1><br />
            <div className='container mx-md-auto text-center'>
                < form >

                    <hr />
                    <div className='from-group mt-2'>
                        <label for="uname">User Name</label>
                        <input type="text" className='form-control' id='uname' placeholder='Enter Your Name' />

                    </div>
                    <div className='from-group mt-2'>
                        <label for="email">User email</label>
                        <input type="email" className='form-control' id='email' placeholder='Enter Your Email' />

                    </div>
                    <div className='from-group mt-2'>
                        <label for="message">message</label>
                        <textarea className='form-control' placeholder='message...' cols="30" rows="10" />

                    </div>
                    <button type='button' className='btn my-2'>Message Me</button>

                </form >
            </div >
        </div >
    );
};

export default Contack;