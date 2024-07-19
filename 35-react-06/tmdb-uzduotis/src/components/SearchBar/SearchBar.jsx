import "./SearchBar.css";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { LuSearch } from "react-icons/lu";
import { MdClear } from "react-icons/md";

const SearchBar = (props) => {
  const searchRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  //for clear button display
  const searchHandler = () => {
    setSearchTerm(searchRef.current.value);
    props.searchTerm(searchRef.current.value);
  };
  const searchSingleChar = (e) => {
    e.preventDefault();
    props.searchForSingleChar();
  };
  return (
    <div className="search-bar-wrapper">
      <form
        className="search-bar"
        onSubmit={searchSingleChar}>
        <LuSearch className="icon" />
        <input
          type="text"
          placeholder="Search"
          ref={searchRef}
          onChange={searchHandler}
        />
        {searchTerm.length > 0 && (
          <MdClear
            id="clear"
            className="icon"
            onClick={() => {
              searchRef.current.value = "";
            }}
          />
        )}
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.func,
  searchForSingleChar: PropTypes.func,
};

export default SearchBar;
