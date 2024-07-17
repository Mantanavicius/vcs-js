import Darbuotojas from "./Darbuotojas"

const Imone = () => {
    const darbuotojai = [
        {vardas: 'Tadas', pavarde: 'Tadauskas', bonusas: 200}, 
        {vardas: 'Tomas', pavarde: 'Tomauskas', bonusas: 0}, 
        {vardas: 'Aleksandras', pavarde: 'Aleksys', bonusas: 50}, 
    ]
  return (
    <div>
      <h2>Bonusai</h2>
        <div>
            {darbuotojai.map((d,i)=><Darbuotojas key={i} darbuotojas={d}/>)}
        </div>
    </div>
  )
}

export default Imone
