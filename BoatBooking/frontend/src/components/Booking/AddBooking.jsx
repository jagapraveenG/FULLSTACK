import React from 'react';
import { Panel } from 'rsuite';
import styled, { keyframes } from 'styled-components';

import './Property.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Nabar';


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
      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e6/45/bd/caption.jpg?w=500&h=400&s=1" height="240" alt="Shikara Boat" />
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
        <img src="https://img.freepik.com/free-photo/sailing-yacht-gliding-blue-waves-smoothly-generative-ai_188544-8058.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706572800&semt=sph" height="240" alt="Sailing Boat" />
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CyoEkbEHRfQGoRlyIezis40yrsqVfV0k2A&usqp=CAU" height="240"  />
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

    
      {/* Add four more AnimatedPanel components with images */}
      <AnimatedPanel shaded bordered bodyFill className='anipan'>
        <img src="https://www.yachtworld.com/research/files/2021/11/2021-Beneteau-GRAN-TURISMO-41-scaled.jpeg" height="240" alt="Shikara Boat" />
        <img src="" height="240" />
        <Panel header="Cabin cruiser">
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
        <img src="https://www.worldwideluxuryyacht.com/blog/wp-content/uploads/2023/10/Wonderful-Gunboat72V-for-charter.jpg" height="240" alt="Shikara Boat" />
        <img src="" height="240" />
        <Panel header="Catamaran">
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
        <img src="https://www.nauticalventures.com/static/sitefiles/blog/What-is-a-Deck-Boat-03-NauticalVentures-Florida-Dealership.jpg" height="240" alt="Shikara Boat" />
        <img src="" height="240" />
        <Panel header="Deck boat">
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
        <img src="https://i0.wp.com/corsairwatersports.com/wp-content/uploads/2023/09/IMG_2626.jpg?resize=1024%2C752&ssl=1" height="240" alt="Shikara Boat" />
      
        <Panel header="Jet skiing">
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
    </div>
  </div>
);

export default BoatBookings;
