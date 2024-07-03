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
  console.log(BaseStats);
  return (
    <div className='main-wrapper background'>
      <Showcase />
      <BaseStats baseStats={baseStatsPOJO}/>
    </div>
  );
}

export default App;
