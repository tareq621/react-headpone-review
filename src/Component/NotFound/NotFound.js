import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFound-container'>
            <h1>Oops!!!</h1>
            <div>
                <h6>We can't seem to fine the page you are looking for.</h6>
                <h3>Error code:404</h3>
            </div>
        </div>
    );
};

export default NotFound;