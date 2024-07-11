import Paslauga from "./Paslauga";
import "./Paslaugos.css";

const Paslaugos = () => {
  const paslaugosData = [
    {
      name: "Puslapių Dainininkai",
      description:
        "Mūsų puslapiai ne tik informuoja, bet ir dainuoja! Įjunkite mūsų puslapį ir mėgaukitės melodingomis baladėmis apie interneto platybes, kurios palydės jus visą dieną.",
    },
    {
      name: "Šokantys Puslapiai",
      description:
        "Pasijuskite tarsi šokių aikštelėje su mūsų šokančiais puslapiais! Kiekvieną kartą, kai perjungsite puslapį, jis atliks nedidelį šokį, kad padidintų jūsų nuotaiką ir pavers naršymą nepakartojama patirtimi.",
    },
    {
      name: "Puslapių Orakulas",
      description:
        "Ar norite sužinoti savo ateitį? Užsukite į mūsų puslapį ir leiskite jam pranašauti jūsų likimą. Mūsų puslapis žino viską apie jus ir jūsų likimą, todėl jis taps jūsų asmeniniu orakulu!",
    },
    {
      name: "Puslapių Aromaterapija",
      description:
        "Mūsų puslapiai ne tik gražiai atrodo, bet ir kvepia! Atidarykite mūsų puslapį ir pasinerkite į nuostabų aromaterapijos pasaulį su įvairiais kvapais, nuo levandų iki šokolado. Naršymas dar niekada nebuvo toks aromatingas!",
    },
  ];
  return (
    <section
      className="paslaugos"
      id="paslaugos">
      <h2>Paslaugos</h2>
      <div className="paslaugos-wrapper">
        {paslaugosData.map((paslauga, i) => {
          return (
            <Paslauga
              key={i}
              name={paslauga.name}
              description={paslauga.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Paslaugos;
