import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardSellers = ({ item }) => {
  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-2xl relative mr-5 md:my-5 gap-2"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 rounded-bl-[20px]  rounded-tr-[20px]  heartStar bg-green ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="hover:scale-105 transition-all duration-300 md:h-72 mt-0"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <div className="description ">
          <Link to={`/menu/${item.id}`}>
            <p className="description-letter">
              <hr className="mb-1" />
              {item.des}
            </p>
          </Link>
        </div>
        <div className="card-actions justify-between items-center mt-0  ">
          <h5 className="font-semibold">
            <span className="text-sm text-red"> </span>
          </h5>
          <Link to="/signup">
            <button className="btn bg-green text-white">
              &#8369; {item.price}{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSellers;
