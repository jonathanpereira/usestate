import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) => {
  const handleInStockChange = (e) => onInStockChange(e.target.checked);

  const handleFilterTextChange = (e) => onFilterTextChange(e.target.value);

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleInStockChange}
          />
          Only show products in stock
        </label>
      </p>
    </form>
  );
};

export default SearchBar;
