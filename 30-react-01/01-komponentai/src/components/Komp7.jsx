const Komp7 = () => {
  // susikurkite žodžių masyvą (tiesiog string reikšmės,
  // ne objektai)
  // ir tą masyvą atvaizduokite return dalyje
  const zodziai = ["namas", "kede", "stalas", "durys", "kaminas", "katinas"];
  return <div>{zodziai.join(", ").toUpperCase()}</div>;
};

export default Komp7;
