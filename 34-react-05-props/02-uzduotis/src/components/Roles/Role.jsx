const Role = (props) => {
  const roleType = () =>
    props.role.kiekis > 20
      ? "Tai paprasta naudotojo rolė"
      : "Ši rolė yra išskirtinė";
  return (
    <div>
      <h3>{props.role.pavadinimas}</h3>
      <p>
        Rolės naudotojų kiekis: {props.role.kiekis} - {roleType()}
      </p>
    </div>
  );
};

export default Role;
