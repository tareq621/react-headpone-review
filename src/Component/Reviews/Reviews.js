import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewsPage from '../ReviewsPage/ReviewsPage';

const Reviews = (props) => {

    const [reviews, setReviews] = useReviews()
    return (
        <div className='review-container'>
            {
                reviews.map(review => <ReviewsPage
                    review={review}
                ></ReviewsPage>)
            }
        </div>
    );
};

export default Reviews;