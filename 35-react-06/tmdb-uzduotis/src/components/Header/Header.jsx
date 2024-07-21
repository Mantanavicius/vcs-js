import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

const Header = ({ searchTerm }) => {
  return (
    <header>
      <a href="/">
        <div className="title">
          <h2>TMDb</h2>
        </div>
      </a>
      <SearchBar searchTerm={searchTerm} />
    </header>
  );
};

Header.propTypes = {
  searchTerm: PropTypes.func.isRequired,
};

export default Header;
