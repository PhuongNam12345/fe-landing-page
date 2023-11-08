import React from "react";
import "./Partners.css";
import Heading from "../../../../components/heading/Heading";
const Partners = () => {
  const BrandName = () => {
    return (
      <div className="brand_name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
        >
          <circle cx="20" cy="20.75" r="20" fill="#16EDB1" />
        </svg>

        <p>Brand name 1</p>
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
            <div className="brand_select">
              <BrandName />
            </div>
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
