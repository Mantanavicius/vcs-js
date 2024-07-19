import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

const Header = (props) => {
  const searchTermHandler = (searchTerm) => {
    props.searchTerm(searchTerm);
  };
  const searchForSingleChar = () => {
    props.searchForSingleChar();
  };

  return (
    <header>
      <a href="/">
        <div className="title">
          <h2>TMDb</h2>
        </div>
      </a>
      <SearchBar
        searchTerm={searchTermHandler}
        searchForSingleChar={searchForSingleChar}
      />
    </header>
  );
};

Header.propTypes = {
  searchTerm: PropTypes.func,
  searchForSingleChar: PropTypes.func,
};

export default Header;
