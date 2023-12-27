import React from "react";

import "../../../src/App.css";
import { Link, useNavigate } from "react-router-dom";

const categoryItems = [
  {
    id: 1,
    title: "All",
    description: "(64 Items)",
    image: "/static/img/veges.png",
    route: "/allproducts",
  },
  {
    id: 2,
    title: "Vegetables",
    description: "(10 Items)",
    image: "/static/img/vege 1.png",
    route: "/vegetables",
  },
  {
    id: 3,
    title: "Fruits",
    description: "(10 Items)",
    image: "/static/img/fruit.png",
    route: "/fruits",
  },
  {
    id: 4,
    title: "Meat and Seafoods",
    description: "(10 Items)",
    image: "/static/img/meat.png",
    route: "/meat",
  },
  {
    id: 5,
    title: "Drinks",
    description: "(10 Items)",
    image: "/static/img/drinks.png",
    route: "/drinks",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleItemClick = (route) => {
    history.push(route);
  };

  return (
    <div className="header">
      <div className="section-container bg-gradient-to-r h-screen from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="text-center">
          <p className="subtitle">Shop by</p>
          <h2 className="title">Categories</h2>
        </div>

        {/* category cards */}
        <div className="header">
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="shadow-lg rounded-md bg-green py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
                onClick={() => handleItemClick(item.route)}
              >
                <Link to={item.route} className="block w-full h-full">
                  <div className="w-full mx-auto flex items-center justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
                    />
                  </div>
                  <div className="mt-5 space-y-1">
                    <h5 className="text-white font-semibold">{item.title}</h5>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
