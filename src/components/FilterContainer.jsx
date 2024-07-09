import React from "react";
import "../css/FilterContainer.css";
import { useState } from "react";
const FilterContainer = () => {
  const [active, SetActive] = useState(1);

  const handleClick = (tab) => {
    SetActive(tab);
  };
  return (
    <div className="filter-container">
      <ul>
        <li className={ active === 1 ? 'active': ''} onClick={()=> handleClick(1)}>All</li>
        <li className={ active === 2 ? 'active': ''} onClick={()=> handleClick(2)}>Rings</li>
        <li className={ active === 3 ? 'active': ''} onClick={()=> handleClick(3)}>Earrings</li>
        <li className={ active === 4 ? 'active': ''} onClick={()=> handleClick(4)}>Charms</li>
        <li className={ active === 5 ? 'active': ''} onClick={()=> handleClick(5)}>Necklace</li>
        <li className={ active === 6 ? 'active': ''} onClick={()=> handleClick(6)}>Bracelets</li>
        <li></li>
      </ul>
    </div>
  );
};

export default FilterContainer;
