import React from 'react';
import { MdDeleteOutline } from "react-icons/md";


const Selected = ({ player }) => {
    const { name, price_usd, player_image } = player;
    return (
        <div className='flex justify-between border border-gray-200 p-2 rounded mb-2'>
            <div className='flex gap-5'>
                <img src={player_image} alt={name} className='w-10 object-cover rounded' />
                <div>
                    <h3 className='font-bold'>{name}</h3>
                    <p className='text-gray-500'>${price_usd}</p>
                </div>
            </div>
            <button className='text-red-400 text-2xl'><MdDeleteOutline />
            </button>
        </div>
    );
};

export default Selected;