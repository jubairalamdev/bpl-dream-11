import React from 'react';
import { Trash2 } from 'lucide-react';

const PlayerSelected = ({player}) => {
    return (
        <div className='flex justify-between p-6 border-[0.5px] border-base-content/30 items-center rounded-2xl'>
            <div className='flex items-center gap-6'>
                <img src={player.image_link} alt=""  className='w-fit h-20 rounded-lg'/>
                <div>
                    <h4 className='font-semibold text-2xl text-base-content'>{player.name}</h4>
                    <p className='text-base-content/50'>{player.batting_style}</p>
                </div>
            </div>
            <span className='text-error'>
                <Trash2 />
            </span>
        </div>
    );
};

export default PlayerSelected;