import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Nabar';
import "./BoatDetail.css";
import { Carousel } from 'rsuite';
const BoatDetails = () => {
    return(
        <div>
            <header>
                <Navbar/>
            </header>
        <>
            
            <div className="container">
                <h1 className="title">Boat Details</h1>
            </div>
            <div className="details-container">
                <div className="image-container">
    <Carousel autoplay className="custom-slider">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" alt="Shikara Boat" />
    <img src="" height="250" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" alt="Shikara Boat" />
    <img src="" height="250" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" alt="Shikara Boat" />
    <img src="" height="250" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" alt="Shikara Boat" />
    <img src="" height="250" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" alt="Shikara Boat" />
    <img src="" height="250" />
  </Carousel>
                    <section className="sale">
                        <span className="sale-label">For Sale</span>
                        <span className="price-value">$540,000</span>
                    </section>
                </div>
                <div className="details">
                    <div className="details-content">
                        <h2>Boat Details</h2>
                        <p>This luxurious boat is perfect for leisurely cruises along the coast. With its spacious cabins and modern amenities, it offers a comfortable and enjoyable experience for all passengers.</p>
                        <p>Located at XYZ Boatyard, Bangalore</p>
                    </div>
                    <aside>
                        <h2>About This Boat</h2>
                        <p>This luxurious boat is perfect for leisurely cruises along the coast. With its spacious cabins and modern amenities, it offers a comfortable and enjoyable experience for all passengers.</p>
                        <h2>Safety Requirements</h2>
                        <ul>
                            <li>Life jackets provided for all passengers</li>
                            <li>First aid kit onboard</li>
                            <li>Experienced captain and crew</li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div className="button-container">
                <Link to="/buy-boat" className="button-link">
                    <button className="book-button">
                        <FontAwesomeIcon icon={faShoppingCart} /> Book
                    </button>
                </Link>
            </div>
            <div className="owner-details">
                <h2>Owner Details</h2>
                <p>Owned by John Doe</p>
                <p>Contact: johndoe@example.com</p>
            </div>
            
        </>
        </div>
    )
}

export default BoatDetails;
