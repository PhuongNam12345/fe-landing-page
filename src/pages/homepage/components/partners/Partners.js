import React from "react";
import "./Partners.css";
import Heading from "../../../../components/heading/Heading";
const Partners = () => {
  const BrandName = (props) => {
    return (
      <div className="brand_name">
        <div className="logo_brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
          >
            <circle cx="20" cy="20.75" r="20" fill="#001A22" />
          </svg>
          <span>LOGO</span>
        </div>
        <p>Brand name 3</p>
      </div>
    );
  };
  return (
    <div className="partners">
      <div className="main_partners">
        <div className="head_partners">
          <Heading name="Our Partners" />
        </div>
        <div className="brand_content">
          <div className="list_brand">
            <BrandName />

            <BrandName />
            <BrandName />
            <BrandName />
          </div>
          <div className="list_brand">
            <BrandName />
            <BrandName />
            <BrandName />
            <BrandName />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
