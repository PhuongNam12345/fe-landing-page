import React from "react";
import Header from "../../components/header/Header";
import videoBG from "../../assets/bg.mp4";
// import "./HomePage.css";
import Banner from "./components/banner/Banner";
const HomePage = ({ text }) => {
  return (
    <div className="home_page">
      <Header />
      <Banner />
    </div>
  );
};
export default HomePage;
