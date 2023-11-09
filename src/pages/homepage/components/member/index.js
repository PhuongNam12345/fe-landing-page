import React from "react";
import Heading from "../../../../components/heading/Heading";
import Imgps from "../assets/position.png";
import "./Member.css";
const Position = () => {
  return (
    <div className="card_position">
      <div className="img_card">
        <img src={Imgps} alt="alt"></img>
      </div>
      <div className="details">
        <span className="name_ps">Name</span>
        <span className="position_ps">position</span>
      </div>
      <div className="icon_ps">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM17.6676 16.7028V25.4077H14.066V16.7031H12.2666V13.7034H14.066V11.9024C14.066 9.4552 15.082 8 17.9687 8H20.372V11.0001H18.8698C17.7461 11.0001 17.6717 11.4193 17.6717 12.2017L17.6676 13.7031H20.389L20.0706 16.7028H17.6676Z"
            fill="#16EDB1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM17.6676 16.7028V25.4077H14.066V16.7031H12.2666V13.7034H14.066V11.9024C14.066 9.4552 15.082 8 17.9687 8H20.372V11.0001H18.8698C17.7461 11.0001 17.6717 11.4193 17.6717 12.2017L17.6676 13.7031H20.389L20.0706 16.7028H17.6676Z"
            fill="#16EDB1"
          />
        </svg>
      </div>
    </div>
  );
};
const TeamMember = () => {
  return (
    <div className="teammember">
      <div className="main_member">
        <Heading name="Team Member" />
        <div className="content_position">
          <div className="list_position">
            <Position />
            <Position />
            <Position />
            <Position />
          </div>
          <div className="list_position">
            <Position />
            <Position />
            <Position />
            <Position />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamMember;
