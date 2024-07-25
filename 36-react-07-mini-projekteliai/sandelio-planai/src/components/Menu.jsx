import Proptypes from "prop-types";

const Menu = ({ tab }) => {
  const tabHandler = (tab) => {
    props.tab(tab);
  };
  return (
    <div className="menu-wrapper">
      <button onClick={() => tabHandler(1)}>1 Sandėlio aukštas</button>
      <button onClick={() => tabHandler(2)}>2 Sandėlio aukštas</button>
      <button onClick={() => tabHandler(3)}>Administracinės patalpos</button>
    </div>
  );
};

Menu.Proptypes = {
  tab: Proptypes.func.isRequired,
};

export default Menu;
