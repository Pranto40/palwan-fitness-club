import React from 'react';

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-7">
                        <div className="home-content text-center align-itmes-center">
                            <span>Gym/Yoga/Fitness</span>
                            <h1>Get fitness Now!</h1>
                            <p>Our instructors and personal trainers will help you. uibusdam vite aliquid ad dolor verniam valuptatem repodiandae quam dignissimos inventore nesciunt facere atque!</p>
                            <button className='btn btn-main'>Join Us Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;