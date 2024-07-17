import Preke from "./Preke"

const Parduotuve = () => {
  return (
    <div>
      <h2>Parduotuvė</h2>
      <Preke pavadinimas='Obuoliai' kaina="6" kiekis="100"/>
      <Preke pavadinimas='Slyvos' kaina="4" kiekis="75"/>
      <Preke pavadinimas='Agurkai' kaina="2" kiekis="98"/>
    </div>
  )
}

export default Parduotuve
