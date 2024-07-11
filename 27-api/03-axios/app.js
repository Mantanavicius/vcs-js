const getAbilities = async (num) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/ability/" + num
    );
    const name = res.data.name
    document.body.innerHTML = `
    <h3>Move: ${name}</h3>
    <h4>Available pokemon for this move: ${res.data.pokemon[0].pokemon.name}</h4>
    `;
  } catch (e) {
    console.log(e);
  }
};

getAbilities(Math.floor(Math.random() * 10 + 1));


