import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item, onAddToCart }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        id: _id,
        name,
        quantity: 1,
        image,
        price,
        image: user.email,
      };
      fetch("", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(users),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    onAddToCart(item);
  };

  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-2xl relative mr-5 md:my-5"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 rounded-bl-[20px]  rounded-tr-[20px] heartStar bg-green ${
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
            className=" w-40 transition-all duration-300 md:h-72"
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
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">&#8369; </span> {item.price}
          </h5>
          <Link to="/cart-page">
            {" "}
            <button
              className="btn bg-green text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
