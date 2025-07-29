
import Player from '../Player/Player';

const AvailablePlayers = ({ players, handleSelectPlayer }) => {

    // console.log(selectedPlayers);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-15'>
                {
                    players.map(player => <Player key={player.id} player={player} handleSelectPlayer={handleSelectPlayer}></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;