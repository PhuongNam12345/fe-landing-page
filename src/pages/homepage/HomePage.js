import React from "react";
import Header from "../../components/header/Header";
// import "./HomePage.css";
import Package from "./components/package/Package";
import Banner from "./components/banner/Banner";
import HightlightNumber from "./components/highlightnumber/Highlightnumber";
import Token from "./components/token/Token";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home_page">
      <section className="section_1">
        <Header />
        <Banner />
      </section>
      <section className="section_2">
        <HightlightNumber />
        <Token />
      </section>
      <section className="section_3">
        <Package />
      </section>
    </div>
  );
};
export default HomePage;
