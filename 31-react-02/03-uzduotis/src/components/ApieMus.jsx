import './ApieMus.css'

const ApieMus = () => {
  return (
    <section className="apieMus-wrapper" id="apie-mus">
      <h2>Apie Mus ir Puslapius</h2>
      <div className="apie-block">
          <img
            src="https://plus.unsplash.com/premium_photo-1681554601108-a4071b46d3de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="puslapis"
            width='200px'
          />
          <p>
            Mes esame puslapis apie puslapius, kuriame puslapiai susitinka su kitais
            puslapiais, kad kartu sudarytų dar daugiau puslapių. Mūsų puslapiškos
            veiklos centre yra puslapiai, kurie puslapiuose ieško puslapių. Mes
            visada siekiame, kad kiekvienas puslapis būtų toks puslapiškas, kad net
            patys puslapiai stebėtųsi, kaip puslapiškai jie atrodo.
          </p>
      </div>
    </section>
  );
};

export default ApieMus;
