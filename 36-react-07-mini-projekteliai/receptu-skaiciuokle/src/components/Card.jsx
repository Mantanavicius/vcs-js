import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ img, title, description, selected, onClick }) => {
  return (
    <div
      className="recipe-card"
      onClick={onClick}>
      {selected && <div className="selected"></div>}
      <img
        src={img}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
