import Navbar from "../Components/Navbar.jsx";
import "../App.css";
import "../PagesStyle/HomePage.css";
import { Layout } from "antd";
import herobg from "../assets/images/hero-bg.png";
import HeroContent from "../Components/HeroContent.jsx";
import { useEffect, useState } from "react";
import $ from "jquery";
import Plans from "../Components/Plans.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import CarShow from "../Components/CarShow.jsx";
import Team from "../Components/Team.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";
const HomePage = () => {
  const { Header, Content } = Layout;
  const [showNavbg, setShowedNav] = useState($(window).scrollTop() > 50);
  const [ismobile, setIsmobile] = useState(localStorage.getItem("isMobile"));

  useEffect(() => {
    $(window)
      .on("scroll", () => {
        setShowedNav($(window).scrollTop());
      })
      .on("resize", () => {
        setIsmobile(localStorage.getItem("isMobile"));
      })
      .on("hashchange", function () {
        const url = window.location.href;
        window.history.pushState(
          null,
          null,
          url.substring(0, url.indexOf("#"))
        );
      });;
  }, []);
  return (
    <Layout>
      <Content
        className=""
        style={{ minHeight: "140vh", backgroundColor: "white" }}
      >
        <Header
          style={{
            backgroundColor:
              ismobile === "true" && showNavbg ? "white" : "transparent",
          }}
          className={`header w-100 ${
            ismobile === "true" && showNavbg ? "shadow" : ""
          }`}
        >
          <Navbar />
        </Header>
        <div
          className="container-header"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <HeroContent />
        </div>
       
        <Plans />
        <CarShow />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </Content>
    </Layout>
  );
};

export default HomePage;
