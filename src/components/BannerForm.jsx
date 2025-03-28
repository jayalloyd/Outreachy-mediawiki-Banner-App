
import React, { useState } from "react";
import Banner from "./Banner";
import BannerControls from "./BannerControls";

const defaultValues = {
  bgColor: "#007bff",
  bannerText: "I Love to do Code, Create & Innovate.",
  bannerTextColor:"#19191A",
  bannerCaption: "Write code. Change the world.",
  bannerCaptionColor:"#19191A",
  bannerImage: "",
  bannerTextFont: "Arial",
  bannerTextSize: "24px",
  bannerCaptionFont: "Verdana",
  bannerCaptionSize: "18px",
};

const BannerForm = () => {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((formData) => ({
          ...formData,
          bannerImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAll = () => {
    setFormData({
      bgColor: "#ffffff",
      bannerText: "",
      bannerCaption: "",
      bannerImage: "",
      bannerTextFont: "Arial",
      bannerTextColor:"#19191A",
      bannerTextSize: "24px",
      bannerCaptionFont: "Verdana",
      bannerCaptionColor:"19191A",
      bannerCaptionSize: "18px",
    });
  };

  const handleResetDefault = () => {
    setFormData(defaultValues);
  };

  return (
    <div>
      
      <Banner formData={formData} />

     
      <div className="container mt-5">
        <BannerControls
          formData={formData}
          handleChange={handleChange}
          handleImageUpload={handleImageUpload}
          handleResetAll={handleResetAll}
          handleResetDefault={handleResetDefault}
        />
      </div>
    </div>
  );
};

export default BannerForm;