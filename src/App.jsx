
import { useEffect, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/header/Header'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import MidNav from './components/MidNav/MidNav';
import Footer from './components/Footer/Footer';

function App() {
  const [addCoins, setAddCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [viewport, setViewPort] = useState('available');

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length < 6) {
      if (addCoins > player.price_usd) {
        setAddCoins(addCoins - player.price_usd);
        setSelectedPlayers([...selectedPlayers, player]);
        alert(`Congratulations! ${player.name} added in your team.`);
      } else {
        alert('You dont have enough money');
      }
    }
    else {
      alert('You already have six players in your team.');
    }
    // console.log('player selected:', player);
  }

  const handleAddCoins = () => {
    setAddCoins(addCoins + 100000);
    alert(`Congratulations! You have received ${addCoins + 100000} coins.`)
  }

  const handleViewPort = (selected) => {
    console.log('selected view port: ', selected);
    setViewPort(selected);
  }

  // console.log(players);

  return (
    <>
      <Header handleAddCoins={handleAddCoins} addCoins={addCoins}></Header>
      <MidNav selectedPlayers={selectedPlayers} viewport={viewport} handleViewPort={handleViewPort}></MidNav>
      <div className='max-w-7xl mx-auto mt-5'>
        {
          viewport === 'available' ? <AvailablePlayers handleSelectPlayer={handleSelectPlayer} players={players} /> : <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
