import { useState } from "react";
import { Filter } from "../Filter/Filter";
import "./SearchInput.css";

const SearchInput = () => {
  const [showFilterBox, setShowFilterBox] = useState(false);

  return (
    <div className="search-input-wrapper flex flexAlignItemsCenter">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className="search-input" type="text" placeholder="Search" />
      <i
        className="fa-solid fa-filter"
        onClick={() => setShowFilterBox(true)}
      ></i>
      {showFilterBox && <Filter setShowFilterBox={setShowFilterBox} />}
    </div>
  );
};

export { SearchInput };
