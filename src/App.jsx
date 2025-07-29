
import { useEffect, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/header/Header'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import MidNav from './components/MidNav/MidNav';

function App() {
  const [addCoins, setAddCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  const handleSelectPlayer = (player) => {
    // console.log('player selected:', player);
    setSelectedPlayers([...selectedPlayers, player]);
  }

  const handleAddCoins = () => {
    setAddCoins(addCoins + 20000);
    alert(`Congratulations! You have received ${addCoins + 20000} coins.`)
  }

  console.log(players)

  return (
    <>
      <Header handleAddCoins={handleAddCoins} addCoins={addCoins}></Header>
      <MidNav></MidNav>
      <div className='max-w-7xl mx-auto mt-5'>
        <AvailablePlayers handleSelectPlayer={handleSelectPlayer} players={players} />
        <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
      </div>
    </>
  )
}

export default App;
