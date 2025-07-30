
import { useEffect, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/header/Header'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import MidNav from './components/MidNav/MidNav';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [addCoins, setAddCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [viewport, setViewPort] = useState('available');

  // const notify = () => toast("Wow so easy!");

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
        toast(`Congratulations! ${player.name} added in your team.`);
      } else {
        toast('You dont have enough money');
      }
    }
    else {
      toast('You already have six players in your team.');
    }
    // console.log('player selected:', player);
  }

  const handleAddCoins = () => {
    setAddCoins(addCoins + 100000);
    toast(`Congratulations! You have received ${addCoins + 100000} coins.`)
  }

  const handleViewPort = (selected) => {
    // console.log('selected view port: ', selected);
    setViewPort(selected);
  }

  const handleRemoveSelectedPlayer = (id) => {
    // console.log('removing player', id);
    const updatedPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.id !== id);
    setSelectedPlayers(updatedPlayer);
    toast(`Player with id ${id} removed from team.`);
  }

  // console.log(players);

  return (
    <>
      {/* <button onClick={notify}>Notify!</button> */}
      <Header handleAddCoins={handleAddCoins} addCoins={addCoins}></Header>
      <MidNav selectedPlayers={selectedPlayers} viewport={viewport} handleViewPort={handleViewPort}></MidNav>
      <div className='max-w-7xl mx-auto mt-5'>
        {
          viewport === 'available' ? <AvailablePlayers handleSelectPlayer={handleSelectPlayer} players={players} /> : <SelectedPlayers selectedPlayers={selectedPlayers} handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}></SelectedPlayers>
        }
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App;
