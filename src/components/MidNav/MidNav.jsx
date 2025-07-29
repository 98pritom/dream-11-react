import React from 'react';

const MidNav = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center mt-15'>
            <h2 className='text-2xl font-bold'>Available Players</h2>
            <div className='flex gap-4 border border-gray-300 px-4 py-2 rounded '>
                <button className='hover:cursor-pointer border-r border-gray-300 pr-4'>Available</button>
                <button className='hover:cursor-pointer'>Selected</button>
            </div>
        </div>
    );
};

export default MidNav;