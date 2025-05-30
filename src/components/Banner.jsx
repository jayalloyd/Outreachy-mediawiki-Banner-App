
import React from "react";

const Banner = ({ formData }) => {
  return (
    <div
      className="text-white text-center d-flex flex-column align-items-center justify-content-center" id="banner"
      style={{
        width: "90vw", 
        height: "30vh", 
        backgroundColor: formData.bgColor,
        backgroundImage: `url(${formData.bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0", 
        padding: "0",
        
      }}
    >
      <h1
        style={{
          fontFamily: formData.bannerTextFont,
          fontSize: formData.bannerTextSize,
          fontWeight: "bold",
          color:formData.bannerTextColor,
          backgroundColor: formData.bgColor,
        }}
      >
        {formData.bannerText}
      </h1>
      <p
        style={{
          fontFamily: formData.bannerCaptionFont,
          fontSize: formData.bannerCaptionSize,
         color:formData.bannerCaptionColor,
          backgroundColor: formData.bgColor,
        }}
      >
        {formData.bannerCaption}
      </p>
    </div>
  );
};

export default Banner;