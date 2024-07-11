// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
  let temperaturos = [15, 20, 25, 30, 35, 40];

  return (
    // TODO: atvaizduokite visas temperatūras
    // naudodami map funkciją, įdėdami viską
    // į lentelę (table),
    // kurioje būtų du stulpeliai:
    // 1. eilutės numeris (1, 2, 3, ...)
    // 2. temperatūra iš masyvo

    <div>
      Temperaturos:
      <table border='1'>
        <thead>
          <tr>
            <th>Eiles nr.</th>
            <th>temperatura</th>
          </tr>
        </thead>
        <tbody>
          {temperaturos.map((temp, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{temp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Komp6;
