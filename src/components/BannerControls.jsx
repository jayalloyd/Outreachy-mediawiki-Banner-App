
import React from "react";

const fontFamilies = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman", "Roboto", "Monospace"];
const fontSizes = ["16px", "18px", "20px", "24px", "28px", "32px", "36px"];

const BannerControls = ({ formData, handleChange, handleImageUpload, handleResetAll, handleResetDefault }) => {
  return (
    <div className="container p-4 border rounded bg-light">
   
      <h3 className="text-center mb-4 fw-bold">Customize the Banner</h3>

      <form>
      
        <div className="mb-3">
          <label className="form-label" htmlFor="bgColor">Background Color</label>
          <input
            type="color"
            className="form-control form-control-color"
            id="bgColor"
            name="bgColor"
            value={formData.bgColor}
            onChange={handleChange}
          />
        </div>

   
        <div className="mb-3">
          <label className="form-label" htmlFor="bannerText">Banner Title</label>
          <input
            type="text"
            className="form-control fw-bold"
            id="bannerText"
            name="bannerText"
            // color={formData.bannerTextColor}
            value={formData.bannerText}
            onChange={handleChange}
          /></div>
        <div className="mb-3">
           <label className="form-label" htmlFor="bannerTextColor"></label>
          <input
            type="color"
            className="form-control form-control-color"
            id="bannerTextColor"
            name="bannerTextColor"
            value={formData.bannerTextColor}
            onChange={handleChange}
          /></div>
        
        
        <div className="mb-3 d-flex gap-3">
          <div>
            <label className="form-label" htmlFor="bannerTextFont">Font Family</label>
            <select className="form-select" id="bannerTextFont" name="bannerTextFont" value={formData.bannerTextFont} onChange={handleChange}>
              {fontFamilies.map(font => <option key={font} value={font}>{font}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="bannerTextSize">Font Size</label>
            <select className="form-select" id="bannerTextSize" name="bannerTextSize" value={formData.bannerTextSize} onChange={handleChange}>
              {fontSizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </div>
        </div>

    
        <div className="mb-3">
          <label className="form-label" htmlFor="bannerCaption">Banner Caption</label>
          <input
            type="text"
            className="form-control"
            id="bannerCaption"
            name="bannerCaption"
            value={formData.bannerCaption}
            onChange={handleChange}
            placeholder="Enter banner caption"
          />
        </div>
        <div className="mb-3">
           <label className="form-label" htmlFor="bannerCaptionColor"></label>
          <input
            type="color"
            className="form-control form-control-color"
            id="bannerCaptionColor"
            name="bannerCaptionColor"
            value={formData.bannerCaptionColor}
            onChange={handleChange}
          /></div>

        <div className="mb-3 d-flex gap-3">
          <div>
            <label className="form-label" htmlFor="bannerCaptionFont">Font Family</label>
            <select className="form-select" id="bannerCaptionFont" name="bannerCaptionFont" value={formData.bannerCaptionFont} onChange={handleChange}>
              {fontFamilies.map(font => <option key={font} value={font}>{font}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="bannerCaptionSize">Font Size</label>
            <select className="form-select" id="bannerCaptionSize" name="bannerCaptionSize" value={formData.bannerCaptionSize} onChange={handleChange}>
              {fontSizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </div>
        </div>

      
        <div className="mb-3">
          <label className="form-label" htmlFor="bannerImage">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="bannerImage"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

    
        <div className="d-flex justify-content-between">
          <button type="button" onClick={handleResetAll} className="btn btn-danger">
            Reset All
          </button>
          <button type="button" onClick={handleResetDefault} className="btn btn-secondary">
            Reset to Default
          </button>
        </div>
      </form>
    </div>
  );
};

export default BannerControls;