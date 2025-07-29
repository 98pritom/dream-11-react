import React from 'react';

const MidNav = ({ handleViewPort, viewport, selectedPlayers }) => {
    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center mt-15'>
            <h2 className='text-lg md:text-2xl font-bold'>{viewport === 'available' ? 'Available Players' : `Selected (${selectedPlayers.length}/6)`}</h2>
            <div className='flex gap-4 border border-gray-300 md:px-4 md:py-2 px-2 py-1 rounded '>
                <button onClick={() => handleViewPort('available')} className={`hover:cursor-pointer border-r border-gray-300 pr-4 ${viewport === 'available' && 'text-green-500'}`}>Available</button>
                <button onClick={() => handleViewPort('selected')} className={`hover:cursor-pointer ${viewport === 'selected' && 'text-green-500'}`}>Selected ({selectedPlayers.length})</button>
            </div>
        </div>
    );
};

export default MidNav;