import PropTypes from "prop-types";
import "./Output.css";
const Output = ({ data, quantity }) => {
  return (
    <section>
      <h2>Jums reikės šių ingredientų, tokiais kiekiais:</h2>
      <ul className="ingredients">
        {data.map((ingredientas, i) => (
          <li key={i}>
            {ingredientas.name}:{" "}
            <strong>
              {ingredientas.qty * quantity} {ingredientas.unit}
            </strong>
          </li>
        ))}
      </ul>
    </section>
  );
};

Output.propTypes = {
  data: PropTypes.array.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Output;
