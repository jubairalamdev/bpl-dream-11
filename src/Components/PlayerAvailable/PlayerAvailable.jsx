import React from 'react';
import { CircleUser } from 'lucide-react';
import { Flag } from 'lucide-react';

const Player = ({player, addPlayer}) => {


/**
 * {
    "id": 1,
    "name": "Virat Kohli",
    "nationality": "India",
    "role": "Batter",
    "batting_style": "Right-hand",
    "bowling_style": "Right-arm Medium",
    "rating": 92,
    "price_usd": 1500000,
    "image_prompt": "Virat Kohli in blue Indian jersey, focused expression, holding a cricket bat",
    "image_link": "https://i.imgur.com/your_virat_kohli_image.png"
  }
 */




    return (
        <div className='bg-base-100 border-2 border-base-300 p-6 rounded-2xl space-y-4'>
            <div className='w-full flex justify-center'>
                <img src={player.image_link} alt="" className='w-fit h-60 rounded-xl' />
            </div>
            <div className='flex gap-2 text-xl'>
                <CircleUser />
                <h3 className='font-semibold'>{player.name}</h3>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 text-base-content/60'>
                    <Flag></Flag>
                    <p className=''>{player.nationality}</p>
                </div>
                <div className="badge bg-base-300/90 py-4 badge-soft">{player.role}</div>
            </div>
            <hr className='border-base-content/10' />
            <h4 className='text-base-content font-semibold'>Rating</h4>
            <div className='flex justify-between items-center'>
                <h4 className='text-base-content font-semibold'>Batting style</h4>
                <h4 className='text-base-content/50 font-semibold'>{player.batting_style}</h4>
            </div>
            <div className='flex justify-between items-center'>
                <h4 className='text-base-content font-semibold'>Price: <span>{player.price_usd}</span></h4>
                <button className='btn font-medium active-btn' id={`selectPlayerBtn-${player.id}`} onClick={()=>{addPlayer(player)}}>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;