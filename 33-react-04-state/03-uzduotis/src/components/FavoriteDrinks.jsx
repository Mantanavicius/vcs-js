/*
	Sukurkite komponenta kuriame atvaizduosite savo mėgstamiausių
	gerimų sąrašą.

	1. Susikurkite input laukelį
	2. Susikurite jam būseną(state)
	3. Susikurite favoriteDrinks kintamąjį su būseną(state) ir pradinė reikšmę kuri yra tuščias masyvas
	4. Susikurkite mygtuką
	5. Mygtukui sukurkite funkciją kuri pridėtu į favoriteDrinks naują reikšmę iš input laukelio
	6. Išvęskite galutinį favoriteDrinks sąrašą su map funkcijos pagalba
*/

import { useState } from "react";

const FavoriteDrinks = () => {
  const [drink, setDrink] = useState("");
  const [favoriteDrinks, setFavoriteDrinks] = useState([
    "Vynuogių sultys",
    "Vanduo",
    "Fanta",
  ]);
  const addDrink = () => {
    setFavoriteDrinks([...favoriteDrinks, drink]);
    setDrink("");
  };
  return (
    <div>
      <h2>Favorite Drinks</h2>
      <label htmlFor="gerimas">Pridėti gėrimą: </label>
      <input
        type="text"
        id="gerimas"
        value={drink}
        onChange={(e) => setDrink(e.target.value)}
      />
      <button onClick={addDrink}>Pridėti</button>
      <p>
        <strong>Mėgstami gėrimai:</strong>
      </p>
      <ul>
        {favoriteDrinks.map((drink, i) => (
          <li key={i}>{drink}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteDrinks;
