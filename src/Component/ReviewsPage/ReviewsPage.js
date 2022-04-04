import React from 'react';
import './ReviewsPage.css'
const ReviewsPage = (props) => {
    const { name, picture, review, ratings } = props.review;
    return (
        <div className='review-list shadow rounded'>
            <div>
                <h4>{name}</h4>
                <p><strong>Review:</strong>{review}</p>
                <p><strong>Ratings:</strong>{ratings}</p>
            </div>
        </div>
    );
};

export default ReviewsPage;