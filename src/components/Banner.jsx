import React from "react";
import grocery from "../../public/g.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* {Image} */}
        <div className="md:w-1/2">
          <div>
            <img src={grocery} alt="" />
          </div>
        </div>

        {/* {texts} */}
        <div className="md:w-1/2 space-y-4 px-5">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Fresh food, <span className="text-green">fast</span>
          </h2>
          <p className="md:text-3xl text-2xl font-semibold text-[#4A4A4A]">
            From farm to fridge in a flash.
          </p>
          <button className="btn bg-green px-8 py-3 mt-6 font-semibold text-white rounded-full ">
            <Link to="/signin"> Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
