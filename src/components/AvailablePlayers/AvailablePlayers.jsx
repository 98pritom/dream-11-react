import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = () => {
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
    console.log(selectedPlayers);

    return (
        <div>
            <h2 className='text-2xl font-bold mb-5'>Available Players</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                {
                    players.map(player => <Player key={player.id} player={player} handleSelectPlayer={handleSelectPlayer}></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;