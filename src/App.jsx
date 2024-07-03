import Showcase from './Showcase';
import './App.css';
import BaseStats from './components/BaseStats';

function App() {
  const baseStatsPOJO = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };

  const handleClick = ()=> {
    alert(
      `Special Stats\n\tSpecial Attack: ${baseStatsPOJO.spAttack}\n\tSpecial Defense: ${baseStatsPOJO.spDef}`
    );
  }

  console.log(BaseStats);
  return (
    <div className='main-wrapper background'>
      <Showcase />
      <BaseStats baseStats={baseStatsPOJO} clicker={handleClick}/>
    </div>
  );
}

export default App;
