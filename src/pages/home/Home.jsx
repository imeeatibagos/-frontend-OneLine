import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import BestSellers from "../../components/BestSellers";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <BestSellers />
    </div>
  );
};

export default Home;
