import React from 'react';
import { Panel } from 'rsuite';
import styled, { keyframes } from 'styled-components';

import './property.css';
import { Link } from 'react-router-dom';
import Navbar from '../Nabar';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components for styling
const AnimatedPanel = styled(Panel)`
  margin: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingStar = styled.span`
  color: RGB (255, 215, 0); /* Gold color for stars */
  font-size: 20px;
  margin-right: 5px;
`;

const BookNowButton = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BoatBookings = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <div className='animatedpanel'>
      {/* Existing AnimatedPanel components */}
      {/* Add more AnimatedPanel components as needed */}
      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" />
        <Panel header="SHIKARA BOAT">
          <p>
            <small>
              
            </small>
          </p>
          <RatingContainer>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
          </RatingContainer>
          <Link to="/mba"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
        </Panel>
      </AnimatedPanel>

      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="https://img.freepik.com/free-photo/sailing-yacht-gliding-blue-waves-smoothly-generative-ai_188544-8058.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706572800&semt=sph" height="240" />
        <Panel header="SAILING BOAT">
          <p>
            <small>
            
            </small>
          </p>
          <RatingContainer>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
          </RatingContainer>
          <Link to="/BoatBooking"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
        </Panel>
      </AnimatedPanel>

      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CyoEkbEHRfQGoRlyIezis40yrsqVfV0k2A&usqp=CAU" height="240" />
        <Panel header="KAYAKING BOAT">
          <p>
            <small>
              
            </small>
          </p>
          <RatingContainer>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
          </RatingContainer>
          <Link to="/BoatBooking"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
        </Panel>
      </AnimatedPanel>

      {/* Add more AnimatedPanel components as needed */}
      
      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="data:image/jpeg;base64,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" height="240" />
        <Panel header="FISHING BOAT">
          <p>
            <small>
              
            </small>
          </p>
          <RatingContainer>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
          </RatingContainer>
          <Link to="/BoatBooking"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
        </Panel>
      </AnimatedPanel>

      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="data:image/jpeg;base64,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" height="240" />
        <Panel header="BOAT HOUSE">
          <p>
            <small>
              
            </small>
          </p>
          <RatingContainer>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
          </RatingContainer>
          <Link to="/BoatBooking"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
        </Panel>
      </AnimatedPanel>

      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfTbNm3crWMA-AZ4LSA2kEj_eJeN7bVe8ew&usqp=CAU" height="240" />
        <Panel header="JET SKI">
          <p>
            <small>
              
            </small>
          </p>
          <RatingContainer>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9733;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
            <RatingStar>&#9734;</RatingStar>
          </RatingContainer>
          <Link to="/BoatBooking"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
        </Panel>
      </AnimatedPanel>
      
      {/* Add more AnimatedPanel components as needed */}
      
     
      
      {/* Add more AnimatedPanel components as needed */}
      
    </div>
  </div>
);

export default BoatBookings;
