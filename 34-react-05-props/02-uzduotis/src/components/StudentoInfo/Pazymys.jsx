const Pazymys = ({ pazymys }) => {
  return (
    <div>
      <p>
        {pazymys} - {pazymys >= 5 ? "Teigiamas" : "Neigiamas"}
      </p>
    </div>
  );
};

export default Pazymys;
