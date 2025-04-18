import React from "react";
import { useState } from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <button onClick={handleClick}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
      <span className="category">{category}</span>
    </li>
  );
}

export default Item;
