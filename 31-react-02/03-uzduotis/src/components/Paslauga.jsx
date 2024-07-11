/* eslint-disable react/prop-types */
import './Paslauga.css'
const Paslauga = ({ name, description }) => {
  return (
    <div className="paslauga-wrapper">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Paslauga;
