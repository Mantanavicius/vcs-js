let darbuotojas = {
  vardas: "Eugenijus",
  pavarde: "Eugenys",
  dabartinisAtlyginimas: 1500,
  etatas: 1,
  pakeltasAtlyginimas: function (pakeltasProcentais) {
    return this.dabartinisAtlyginimas * (1 + pakeltasProcentais / 100);
  },
  etatoPokytisAlgoje: function (naujasEtatas) {
    return (
      this.dabartinisAtlyginimas - this.dabartinisAtlyginimas * naujasEtatas
    );
  },
};
console.log(darbuotojas.pakeltasAtlyginimas(20));
console.log(darbuotojas.etatoPokytisAlgoje(0.5));
