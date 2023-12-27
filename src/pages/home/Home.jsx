import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import BestSellers from "../../components/BestSellers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BestSellers />
    </div>
  );
};

export default Home;
