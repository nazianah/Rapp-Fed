import React from "react";
import PictureDesktop from "../Assets/Images/how-it-works-desktop.jpg";
import PictureMobile from "../Assets/Images/how-it-works-mobile.jpg";

const Content2 = () => {
  return (
    <div className="content2">
      <div className="picture-container">
        {/* eslint-disable-next-line */}
        <img
          src={window.innerWidth < 768 ? PictureMobile : PictureDesktop}
          alt="picture"
          className="picture"
        />
      </div>
    </div>
  );
};

export default Content2;
