import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Slider.css";

const Slider = ({ quantity, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);


  }, [initialValue]);

  const sliderHandler = (e) => {
    const newValue = e.target.valueAsNumber;
    setValue(newValue);
    quantity(newValue);
  };

  useEffect(() => {
        document.getElementById("range-output").style.left =
      (value - 1) * 25 - value * 1.75 + "px";
  }, [value]);
  

  return (
    <section>
      <h2>Kiek porcijų gaminsite?</h2>
      <div id="range-output">{value}</div>
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={sliderHandler}
        id="slider"
      />
    </section>
  );
};

Slider.propTypes = {
  quantity: PropTypes.func.isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default Slider;
