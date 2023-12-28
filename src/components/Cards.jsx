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
        id: _id, // Assuming _id is defined somewhere in your code
        name, // Assuming name is defined somewhere in your code
        quantity: 1,
        image, // Assuming image is defined somewhere in your code
        price, // Assuming price is defined somewhere in your code
        userEmail: user.email,
      };

      fetch("/menu.json", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          // Check if data.insertId is present or not
          if (data.insertId) {
            // Handle success if needed
          } else {
            // Display an error message using Swal.fire() if data.insertId is not present
            Swal.fire({
              title: "Error!",
              text: "Failed to fetch data from the database.",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          // Handle fetch error and display an error message
          console.error("Error fetching data:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch data from the database.",
            icon: "error",
          });
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
