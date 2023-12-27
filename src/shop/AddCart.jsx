import React, { useState } from "react";
import Cards from "../components/Cards";
// Import the Cards component

const AddCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    // Update the cart state with the selected item
    setCart([...cart, item]);
    // You can also perform additional logic, e.g., show a notification
    console.log(`Added to cart: ${item.name}`);
  };

  // Sample item data (replace with your actual data)
  const yourItemData = {
    _id: 1,
    name: "Sample Item",
    image: "sample-image.jpg",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 20.0,
  };

  return (
    <div>
      {/* Render other components */}
      {/* Example usage of the Cards component */}
      <Cards item={yourItemData} onAddToCart={handleAddToCart} />
      {/* Render other components */}
    </div>
  );
};

export default AddCart;
