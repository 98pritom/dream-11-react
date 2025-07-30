import Selected from "../Selected/Selected";


const SelectedPlayers = ({ selectedPlayers, handleRemoveSelectedPlayer }) => {
    return (
        <div>
            {/* <h2 className='text-2xl font-bold mb-5'>Selected Players</h2> */}
            <div>
                {
                    selectedPlayers.length === 0 && <div className="text-center text-xl p-15"><h2>Form Your team!</h2></div>
                }
                {
                    selectedPlayers.map(selectedPlayer => <Selected key={selectedPlayer.id} player={selectedPlayer} handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}></Selected>)
                }
                {/* <Selected key={selectedPlayer.id} player={selectedPlayer}></Selected> */}
            </div>
        </div >
    );
};

export default SelectedPlayers;