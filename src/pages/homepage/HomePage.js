import React from "react";
import Header from "../../components/header/Header";
// import "./HomePage.css";
import Package from "./components/package/Package";
import Banner from "./components/banner/Banner";
import HightlightNumber from "./components/highlightnumber/Highlightnumber";
import Token from "./components/token/Token";
import Features from "./components/features/Features";
import Community from "./components/joinourcommunity/Community";
import "./HomePage.css";
import Footers from "../../components/footer/Footer";
import Partners from "./components/partners/Partners";
import TeamMember from "./components/member/Member";

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
      <section className="section_4">
        <Features />
      </section>
      <section className="section_6">
        <TeamMember />
      </section>
      <section className="section_7">
        <Partners />
      </section>
      <section className="section_8">
        <Community />
      </section>
      <section className="section_9">
        <Footers />
      </section>
    </div>
  );
};
export default HomePage;
