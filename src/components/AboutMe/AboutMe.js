import React from 'react';

import aboutImg from '../../images/pranto.jpg'

const AboutMe = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-7 my-auto">
                    <h1>About Me</h1>
                    <p>I want to be a good quality fond end web developer. For this I am learning html, css, bootstrap, javascript, react well. My goal is to become a good quality web developer in 2022. For this I spend 7 to 8 hours a day teaching. After learning all these things so that I can get a job in a good company.</p>
                    <button className='btn btn-main'>Read More</button>
                </div>
                <div className="col-md-5">
                    <div className="img-fluid mt-5">
                       <img className='w-100' src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;