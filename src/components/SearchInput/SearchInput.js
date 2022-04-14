import "./SearchInput.css";

const SearchInput = () => {
  return  <div className="search-input-wrapper flex flexAlignItemsCenter">
  <i className="fa-solid fa-magnifying-glass"></i>
  <input
    className="search-input"
    type="text"
    placeholder="Search"
  />
  <i className="fa-solid fa-bars"></i>
</div>;
};

export { SearchInput };
