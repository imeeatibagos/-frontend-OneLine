import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../Cards";
import Navbar from "../Navbar";

export const Fruits = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();

        // Filter only the "vegetable" category
        const vegetableItems = data.filter(
          (item) => item.category === "fruits"
        );

        setMenu(data);
        setFilteredItems(vegetableItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "fruits"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gradient-to-r h-full from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <Navbar className="shadow-lg" />

      <div className="section-container text-start mt-10">
        <h2 className="title text-2xl">Fruits Category</h2>
      </div>
      <div>
        <div className="flex  flex-col section-container justify-end items-end mt-10">
          <div className="flex flex-col md:flex-row flex-wrap  items-center space-y-3 mb-8">
            <div className="flex justify-end mb-4 rounded-[5px]">
              <div className="bg-secondary p-2 rounded-[5px] ">
                <FaFilter className="text-white h-4 w-4" />
              </div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-slate-300 text-black px-2 py-1 rounded-[5px]"
              >
                <option value="default"> Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {currentItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8">
          {Array.from({
            length: Math.ceil(filteredItems.length / itemsPerPage),
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
  );
};
