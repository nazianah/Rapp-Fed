import React from 'react';
import Banner from '../Assets/Images/home-banner1-desktop.jpg';
import BannerMobile from '../Assets/Images/home-banner1-mobile.jpg';
import './Content1.css'; // Import CSS file for styling

const Content1 = () => {
  return (
    <div className="banner-container">
      {/* Display the mobile banner up to 1023px width */}
      <div className="mobile-banner-container">
        <img src={BannerMobile} alt="Banner" className="mobile-banner" />
        <div className="mobile-content">
        <div className='text'>
            <h1>Your baby can be a super sleeper</h1>
            <p>Lumi's app-bases sleep coaching and tracking tools will have your baby sleeping better in just 7 days</p>
          </div>

          <div className='below-button'>
          <button>Get Started</button>
          </div>
        </div>
      </div>
      
      {/* Display the desktop banner from 1024px width onwards */}
      <div className="desktop-banner-container">
        <img src={Banner} alt="Banner" className="desktop-banner" />
        <div className="desktop-content">
          <div className='text'>
            <h1>Your baby can be a super sleeper</h1>
            <p>Lumi's app-bases sleep coaching and tracking tools will have your baby sleeping better in just 7 days</p>
          </div>

          <div className='below-button'>
          <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
