
import React from 'react';
import Banner from '../Assets/Images/home-banner1-desktop.jpg';
import BannerMobile from '../Assets/Images/home-banner1-mobile.jpg';
import './Content1.css'; // Import CSS file for styling

const Content1 = () => {
  return (
    <div className="banner-container">
      {/* Display the mobile banner up to 1023px width */}
      <img src={BannerMobile} alt="Banner" className="mobile-banner" />
      {/* Display the desktop banner from 1024px width onwards */}
      <img src={Banner} alt="Banner" className="desktop-banner" />
    </div>
  );
};

export default Content1;
