import React from 'react';
import images from '../../headphone.png'
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className="product-container">
                    <h1>STYLISH WIRELESS <br />ON-EAR HEADPHONES</h1>
                    <p>With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. <br /> With Fast Fuel, a 5-minute charge gives you 3 hours of playback. <br /> Enjoy award-winning Beats sound with Class 1 Bluetooth wireless listening freedom. <br /> The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfort.
                    </p>
                </div>
                <div>
                    <img src={images} alt="" />
                </div>
            </div>
            <div className='reviews-container'>
                <h1>Customer Reviews(3)</h1>
                <ReviewsPage></ReviewsPage>
            </div>
        </div>
    );
};

export default Home;