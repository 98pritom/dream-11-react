import React from 'react';
import { FaRegFlag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";



const Player = ({ player, handleSelectPlayer }) => {
    const { name, player_image, country, role, price_usd, batting_style, bowling_style } = player;
    return (
        <div className="border border-gray-200 rounded-lg p-4 space-y-2">
            <img src={player_image} alt={name} className="w-full object-cover rounded-xl" />
            <h3 className="font-bold flex items-center gap-2"><IoPersonSharp />
                {name}</h3>
            <div className='flex justify-between items-center border-b border-gray-200 pb-2 mb-2'>
                <p className='flex items-center gap-2 text-gray-500'><FaRegFlag />
                    {country}</p>
                <p className='text-gray-600 bg-gray-100 px-2 rounded-lg'>{role}</p>
            </div>

            <p className='flex justify-between items-center'>Batting: <span className='text-gray-500'>{batting_style}</span></p>
            <p className='flex justify-between items-center'>Bowling: <span className='text-gray-500'>{bowling_style}</span></p>
            <div className='flex justify-between items-center'>
                <p className="font-bold text-green-600">Price: ${price_usd}</p>
                <button onClick={() => handleSelectPlayer(player)} className='border border-gray-200 px-3 py-1 rounded-lg hover:cursor-pointer'>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;