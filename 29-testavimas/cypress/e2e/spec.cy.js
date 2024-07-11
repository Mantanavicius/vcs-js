/// <reference types="cypress"/>

describe("testuojam index.html", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/29-testavimas/index.html");
  });

  it("has h1", () => {
    cy.get("h1").should("exist");
    cy.get("h1").should("be.visible");
    cy.get("h1").should("have.text", "Labas rytas!");
    cy.get("h1").should("have.attr", "class", "main");
    cy.get("input").should("exist");
    cy.get("input").should("have.attr", "placeholder", "iveskite savo varda");

    cy.get(".kvadratas").should("have.length", 1);
    cy.get(".kvadratas").should(
      "have.css",
      "background-color",
      "rgb(128, 0, 128)"
    );
    cy.get(".kvadratas").should("have.css", "height", "100px");
  });

  it("testuojame duomenu ivedima", () => {
    cy.get("#vardas").type("Kazys");
    cy.get("#pavarde").type("Binkis");
    cy.get("button").click();
    cy.contains("Jus esate Kazys Binkis");
  });
});

// UZDUOTIS
// /// <reference types="cypress"/>

// describe("testuojam uzduotis.html", () => {
//   beforeEach(() => {
//     cy.visit("http://127.0.0.1:5500/29-testavimas/uzduotis.html");
//   });

//   it("kokiame puslapyje esu", () => {
//     cy.url().should("eq", "http://127.0.0.1:5500/29-testavimas/uzduotis.html");
//     cy.get("h1").should("have.attr", "class", "title");
//     cy.get("h1").should("have.text", "Aš esu straipsnio pavadinimas");
//     cy.get("div").should("have.css", "height", "100px");
//     cy.get("div").should("have.css", "width", "100px");
//     cy.get("div").should("have.css", "border-radius", "50%");
//     cy.get("div").should("have.css", "background-color", "rgb(128, 128, 0)");
//     cy.get("span").should("not.exist");
//   });
// });
