// function greet(firstName, lastName) {
//   return "Labas, " + this.getFullName(firstName, lastName);
// }

// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// 1

function pirmosPirma(valanda) {
  return "Dabar: " + this.pirmosValanda(valanda);
}

function pirmosValanda(valanda) {
  return valanda + " valanda";
}

// 2

function antrosPirma(valanda) {
  return "Dabar: " + this.antrosValanda(valanda);
}

function antrosValanda(valanda) {
  return valanda + " valanda";
}

// 3

function treciosPirma(valanda) {
  return "Dabar: " + this.treciosValanda(valanda);
}

function treciosValanda(valanda) {
  return valanda + " valanda";
}

module.exports = {
//   greet,
//   getFullName,
  pirmosPirma,
  pirmosValanda,
  antrosPirma,
  antrosValanda,
  treciosPirma,
  treciosValanda,
};
