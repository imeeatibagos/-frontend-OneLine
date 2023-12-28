import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import NavCategory from "../../components/NavCategory";

const categoryItems = [
  {
    id: 1,
    title: "All",

    image: "/static/img/veges.png",
    route: "/allproducts",
  },
  {
    id: 2,
    title: "Vegetables",

    image: "/static/img/vege 1.png",
    route: "/vegetables",
  },
  {
    id: 3,
    title: "Fruits",

    image: "/static/img/fruit.png",
    route: "/fruits",
  },
  {
    id: 4,
    title: "Meat and Seafoods",

    image: "/static/img/meat.png",
    route: "/meat",
  },
  {
    id: 5,
    title: "Drinks",
    image: "/static/img/drinks.png",
    route: "/drinks",
  },
];

const itemsPerPage = 3; // Adjust as needed

const Categories = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handleItemClick = (route) => {
    navigate(route);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-gradient-to-r h-screen from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <NavCategory className="shadow-lg" />
      <div className="mt-10">
        <div className="header">
          <div className="section-container ">
            <div className="text-start mt-1">
              <p className="subtitle">Shop by</p>
              <h2 className="title">Categories</h2>
            </div>

            {/* Display current items based on pagination */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
              {currentItems.map((item) => (
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

            {/* Pagination */}
            <div className="flex justify-center my-8">
              {Array.from({
                length: Math.ceil(categoryItems.length / itemsPerPage),
              }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-1 rounded-full ${
                    currentPage === index + 1
                      ? "bg-green text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
