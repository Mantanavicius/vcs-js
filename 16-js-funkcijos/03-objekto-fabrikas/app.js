function darbuotojas_factory(vardas, pavarde, dabartinisAtlyginimas, etatas) {
  return {
    vardas,
    pavarde,
    dabartinisAtlyginimas,
    etatas,
    pakeltasAtlyginimas: function (pakeltasProcentais) {
      return this.dabartinisAtlyginimas * (1 + pakeltasProcentais / 100);
    },
    etatoPokytisAlgoje: function (naujasEtatas) {
      return (
        this.dabartinisAtlyginimas - this.dabartinisAtlyginimas * naujasEtatas
      );
    },
  };
}
let darbuotojai = [
  darbuotojas_factory("Tadas", "Tadauskas", 1200, 1),
  darbuotojas_factory("Ignas", "Ignevičius", 1800, 1.5),
];
for (darbuotojas of darbuotojai) {
  console.log(darbuotojas);
  console.log(
    `Pakeltas atlyginimas 15%: ${darbuotojas.pakeltasAtlyginimas(15)}`
  );
  console.log(
    `Alga po etato pokyčio į 0,5: ${darbuotojas.etatoPokytisAlgoje(0.5)}`
  );
}
