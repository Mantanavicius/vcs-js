import Role from "./Role"
const roles = [
    {pavadinimas: 'Administratorius', kiekis: 12},
    {pavadinimas: 'Turinio kūrėjas', kiekis: 600},
    {pavadinimas: 'Vartotojas', kiekis: 12000},
]
const VisosRoles = () => {
  return (
    <div>
      <h2>Rolės</h2>
      <Role role={roles[0]}/>
      <Role role={roles[1]}/>
      <Role role={roles[2]}/>
    </div>
  )
}

export default VisosRoles
