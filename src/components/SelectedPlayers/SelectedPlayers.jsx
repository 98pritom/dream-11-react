import Selected from "../Selected/Selected";


const SelectedPlayers = ({ selectedPlayers }) => {
    return (
        <div>
            {/* <h2 className='text-2xl font-bold mb-5'>Selected Players</h2> */}
            <div>
                {
                    selectedPlayers.map(selectedPlayer => <Selected key={selectedPlayer.id} player={selectedPlayer}></Selected>)
                }
                {/* <Selected key={selectedPlayer.id} player={selectedPlayer}></Selected> */}
            </div>
        </div >
    );
};

export default SelectedPlayers;