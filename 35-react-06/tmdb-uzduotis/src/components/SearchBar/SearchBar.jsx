import "./SearchBar.css";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { LuSearch } from "react-icons/lu";
import { MdClear } from "react-icons/md";

const SearchBar = ({ searchTerm }) => {
  const searchRef = useRef();
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = () => {
    const newValue = searchRef.current.value;
    setSearchInput(newValue);
    if (newValue.length >= 2 || newValue.length === 0) {
      searchTerm(newValue);
    }
  };

  const clearHandler = () => {
    searchRef.current.value = "";
    setSearchInput("");
    searchTerm("");
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <LuSearch className="icon" />
        <input
          type="text"
          placeholder="Search"
          ref={searchRef}
          onChange={searchHandler}
          value={searchInput}
        />
        {searchInput.length > 0 && (
          <MdClear
            id="clear"
            className="icon"
            onClick={clearHandler}
          />
        )}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
