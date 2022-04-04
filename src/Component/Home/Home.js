import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../headphone.png'
import useReviews from '../../Hooks/useReviews';
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews()

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
            <h1 className='review-title'>Customer Reviews(3)</h1>
            <div className='review-container'>
                {
                    reviews.slice(0, 3).map(review => <ReviewsPage
                        key={review.id}
                        review={review}
                    ></ReviewsPage>)
                }
            </div>
            <div className='button-reviews text-center mt-4 mb-4 fw bold text-white'>
                <Button className='bg-dark text-decoration-none'>
                    <Link to="/reviews" >SEE ALL REVIEWS</Link>
                </Button>
            </div>
        </div >
    );
};

export default Home;