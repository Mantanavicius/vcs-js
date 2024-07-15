/*
	Sukurkite komponentą galėsite pakeisti esamo produkto siuntos statusą ir apmokėjimo statusą

	1. Susikurkite būseną(state) su užsakymo informacija(galit naudot pavyzdį orderInformation apačioje)
	2. Atvaizduokite užsakymo informaciją
	3. Susikurkite mygtuką su aprašymu Patvirtinti užsakymą
	4. Mygtukui pridėti funkcija kuri pakeičia būsėnos(state) status į 'Completed'
	5. Susikurkite mygtuką su aprašymu Išsiusti siuntą
	6. Mygtukui pridėti funkcija kuri pakeičia būsėnos(state) parcelStatus į 'Sent'
	7. Sugalvokite savo funkcionalumą trečiam mygtukui
*/

import { useState } from "react";

const OrderCard = () => {
  const [orderInformation, setOrderInformation] = useState({
    status: "Pending", // gali buti ir 'Completed'
    parcelStatus: "Waiting Confirmation", // gali buti 'Sent'
    product: "Brand new car",
    price: 12000,
    currency: "eu",
  });
  return (
    <div>
      <h2>Order Card</h2>
      <p>
        <strong>Status:</strong> {orderInformation.status}
      </p>
      <p>
        <strong>Parcel Status:</strong> {orderInformation.parcelStatus}
      </p>
      <p>
        <strong>Product:</strong> {orderInformation.product}
      </p>
      <p>
        <strong>Price: </strong> {orderInformation.price}
      </p>
      <p>
        <strong>Currency: </strong> {orderInformation.currency}
      </p>
      <button
        onClick={() =>
          setOrderInformation({ ...orderInformation, status: "Completed" })
        }>
        Patvirtinti užsakymą
      </button>
      <button
        onClick={() =>
          setOrderInformation({ ...orderInformation, parcelStatus: "Sent" })
        }>
        Išsiųsti siuntą
      </button>
      <button
        onClick={() =>
          setOrderInformation({
            ...orderInformation,
            price: 13089.48,
            currency: "usd",
          })
        }>
        Konvertuoti į USD
      </button>
    </div>
  );
};

export default OrderCard;
